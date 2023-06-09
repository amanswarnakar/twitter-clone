import React, { useCallback } from "react";
import { useRouter } from "next/router";
import { FaFeather } from "react-icons/fa";
import useLoginModal from "@/hooks/useLoginModal";

const SidebarTweetButton = () => {
  const router = useRouter();
  const loginModal = useLoginModal();

  const onClick = useCallback(() => {
    loginModal.onOpen();
  }, [loginModal]);

  return (
    <div onClick={onClick}>
      <div className="mt-6 lg:hidden rounded-full h-14 w-14 p-4 flex items-center justify-center bg-sky-500 hover:bg-opacity-80 transition cursor-pointer">
        <FaFeather size={24} color="white" />
      </div>
      <div className="mt-6 hidden lg:block rounded-full py-2 px-4 flex bg-sky-500 hover:bg-opacity-80 transition cursor-pointer">
        <p className="hidden lg:block font-semibold text-center text-white text-[20px]">
          Tweet
        </p>
      </div>
    </div>
  );
};

export default SidebarTweetButton;
