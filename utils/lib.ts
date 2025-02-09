import type { ClassValue } from "clsx";
import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";
import { supabase } from "./supabase";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const uploadImgInsupabase = async (images: File[]) => {
  const uploadedUrls: string[] = [];
  try {
    const uploadPromises = images.map(async (img) => {
      const pathname = `products/${Date.now()}_${img.name}`;
      const { data, error } = await supabase.storage
        .from("image")
        .upload(pathname, img);

      // if (error) {
      //   return;
      // }
      console.log(error);

      const { data: publicUrlData } = supabase.storage
        .from("image")
        .getPublicUrl(pathname);

      return publicUrlData.publicUrl;
    });

    const urls = await Promise.all(uploadPromises);

    uploadedUrls.push(...urls);

    return uploadedUrls;
  } catch (error) {
    console.log("Error uploading images:", error);
    return [];
  }
};
