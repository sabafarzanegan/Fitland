"use client";
import { SquareX } from "lucide-react";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { ReactNode, useEffect, useRef } from "react";
interface Modalprops {
  title: string;
  children: ReactNode;
  onclose?: () => void;
  onok?: () => void;
}

function Modal({ title, children, onclose, onok }: Modalprops) {
  const searchParam = useSearchParams();
  const isShowModal = searchParam.get("showmadal");
  const modalRef = useRef<null | HTMLDialogElement>(null);
  const pathname = usePathname();
  const router = useRouter();

  useEffect(() => {
    if (isShowModal === "y") {
      modalRef.current?.showModal();
    } else {
      modalRef.current?.close();
    }
  }, [isShowModal]);

  const closeModal = () => {
    modalRef.current?.close();
    const params = new URLSearchParams(Array.from(searchParam.entries()));
    params.delete("showmadal");
    const newQuery = params.toString();
    const newUrl = `${pathname}${newQuery ? newQuery : ""}`;
    router.push(newUrl);
    if (onclose) onclose();
  };

  const onOkModal = () => {
    if (onok) onok();
    closeModal();
  };

  const modal: JSX.Element | null =
    isShowModal === "y" ? (
      <>
        <dialog
          onClick={(e) => {
            if (e.target === modalRef.current) {
              closeModal();
            }
          }}
          className="fixed top-50 right-50 -translate-x-50 -translate-y-50 z-10 backdrop:bg-slate-700/25 p-6"
          ref={modalRef}>
          <div className=" bg-white text-black rounded-lg">
            <div
              className="
            flex items-center justify-between mb-3">
              <h2 className="text-xl font-semibold">{title}</h2>
              <button onClick={closeModal}>
                <SquareX className="ronded-ms text-secondary-main" />
              </button>
            </div>
            <div>{children}</div>
          </div>
        </dialog>
      </>
    ) : null;

  return <div>{modal}</div>;
}

export default Modal;
