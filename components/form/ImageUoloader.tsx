"use client";

import { Loader2 } from "lucide-react";
import { useEffect, useState } from "react";
import { useFormContext, useWatch } from "react-hook-form";
import { toast, Toaster } from "sonner";

function ImageUploader() {
  const [images, setImages] = useState<File[]>([]);
  const [previewUrls, setPreviewUrls] = useState<string[]>([]);
  const [imageUrls, setImageUrls] = useState<{ url: string }[]>([]);
  const [isLoading, setIsloading] = useState(false);

  console.log(images);

  const {
    register,
    setValue,

    formState: { errors },
  } = useFormContext();
  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      const files = Array.from(e.target.files);

      const newPreviews = files.map((file) => URL.createObjectURL(file));

      setImages((prev) => [...prev, ...files]);
      setPreviewUrls((prev) => [...prev, ...newPreviews]);
    }
  };

  const watchImage = useWatch({ name: "images" });

  useEffect(() => {
    if (watchImage) {
      const urls = watchImage.map(
        (img: { id: string; url: string }) => img.url
      );
      setPreviewUrls(urls);
    }
  }, [watchImage]);

  const removeImage = (index: number) => {
    setImages(images.filter((_, i) => i !== index));
    setPreviewUrls(previewUrls.filter((_, i) => i !== index));
  };
  const handleUpload = async () => {
    if (images.length === 0) return;

    const uploadPromises = images.map(async (image) => {
      const formData = new FormData();
      formData.append("file", image);
      formData.append("upload_preset", "unsigned-upload");
      formData.append("cloud_name", "dko1fxu7r");

      try {
        setIsloading(true);
        const res = await fetch(
          "https://api.cloudinary.com/v1_1/dko1fxu7r/image/upload",
          {
            method: "POST",
            body: formData,
          }
        );
        const data = await res.json();
        if (data) {
          toast.success("عکس شما با موفقیت ارسال شد");
          setPreviewUrls([]);
          setImages([]);
        }
        setIsloading(false);
        return data.secure_url;
      } catch (error) {
        setIsloading(false);
        console.error("Error uploading image: ", error);
        return null;
      }
    });

    const urls = await Promise.all(uploadPromises);
    const formattedUrls = urls
      .filter((url) => url !== null)
      .map((url) => ({ url }));

    setImageUrls(formattedUrls);
    setValue("images", formattedUrls);
  };

  return (
    <div className="w-full border p-4  rounded-[14px]">
      <input
        {...register("images")}
        type="file"
        multiple
        accept="image/*"
        onChange={handleFileChange}
        className="hidden"
        id="file-upload"
      />
      <label
        htmlFor="file-upload"
        className="cursor-pointer bg-blue-500 text-white px-4 py-2 rounded-lg">
        انتخاب تصاویر
      </label>
      {errors.images && (
        <p className="text-red-500 text-sm mt-4">
          {errors.images.message as string}
        </p>
      )}
      <div className="flex flex-wrap gap-2 mt-4">
        {previewUrls.map((url, index) => (
          <div key={index} className="relative">
            <img
              src={url}
              alt="preview"
              className="w-20 h-20 object-cover rounded-md"
            />
            <button
              onClick={() => removeImage(index)}
              className="absolute top-0 right-0 bg-red-500 text-white rounded-full px-1">
              ✕
            </button>
          </div>
        ))}
      </div>
      {previewUrls.length > 0 && (
        <button
          disabled={isLoading}
          type="button"
          onClick={handleUpload}
          className="w-[128px] h-[30px] bg-selective_yellow-500 rounded-[8px] text-white">
          {isLoading ? (
            <Loader2 className="animate-spin mx-auto" />
          ) : (
            "ارسال عکس"
          )}
        </button>
      )}

      <Toaster />
    </div>
  );
}

export default ImageUploader;
