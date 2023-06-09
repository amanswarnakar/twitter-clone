import useCurrentUser from "@/hooks/useCurrentUser";
import useLoginModal from "@/hooks/useLoginModal";
import { useRouter } from "next/router";
import React, { useCallback } from "react";
import { IconType } from "react-icons/lib/esm/iconBase";

interface SidebarItemProps {
  label: string;
  icon: IconType;
  href?: string;
  onClick?: () => void;
  auth?: boolean;
}

const SidebarItem: React.FC<SidebarItemProps> = ({
  label,
  icon: Icon,
  href,
  onClick,
  auth,
}) => {
  const { data: currentUser } = useCurrentUser();
  const loginModal = useLoginModal();
  const router = useRouter();
  const handleClick = useCallback(() => {
    if (onClick) return onClick();
    if (auth && !currentUser) loginModal.onOpen();
    else if (href) router.push(href);
  }, [router, onClick, href, currentUser, loginModal, auth]);

  return (
    <div onClick={handleClick} className="flex flex-row items-center">
      <div className="relative rounded-full h-14 w-14 flex items-center justify-center p-4 hover:bg-opacity-10 hover:bg-slate-300 cursor-pointer lg:hidden">
        <Icon size={28} color="white"></Icon>
      </div>

      <div className="relative rounded-full items-center gap-4 p-4 hover:bg-opacity-10 hover:bg-slate-300 cursor-pointer hidden lg:flex ">
        <Icon size={24} color="white"></Icon>
        <p className="hidden lg:block text-white text-xl">{label}</p>
      </div>
    </div>
  );
};

export default SidebarItem;
