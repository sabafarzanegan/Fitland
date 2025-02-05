"use client";
import clsx from "clsx";
import { X } from "lucide-react";
import { useEffect } from "react";

interface AlertType {
  type: "success" | "error" | "warning" | "info";
  desc: string;
  onClose: () => void;
}
function Alert({ type, desc, onClose }: AlertType) {
  useEffect(() => {
    const timer = setTimeout(() => {
      onClose();
    }, 2000);
    return () => clearTimeout(timer);
  }, [onClose]);
  const typeClasses = {
    success: "bg-fern-500",
    error: "bg-cinnabar-500",
    warning: "bg-selective_yellow-500",
    info: "bg-picton_blue-500",
  };
  return (
    <div
      className={clsx(
        "px-6 py-3 rounded-md transition-all duration-200 fixed bottom-5 right-5 flex items-center justify-between gap-x-3 z-20 ",
        typeClasses[type]
      )}>
      <button onClick={onClose}>
        <X />
      </button>
      <p className="text-neutral-800 text-sm">{desc}</p>
    </div>
  );
}

export default Alert;
