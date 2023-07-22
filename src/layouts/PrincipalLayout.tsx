
import NavBar from "@/components/NavBar";
import Link from "next/link";
import { useState } from "react";

interface LayoutProps {
  children: React.ReactNode;
  navBar: boolean;
  foto: boolean;
}

const LayoutPrincipal: React.FC<LayoutProps> = ({ children, foto, navBar }) => {
  return (
    <div className="h-screen w-screen bg-gradient-to-t from-[rgb(20,0,53)] via-[#13024d] to-[#1a0368]">
      <div className="h-full w-full overflow-y-scroll p-6">
        {navBar ? <NavBar fotos={foto} /> : <div></div>
        }
        {children}
      </div >
    </div >
  );
};
export default LayoutPrincipal;
