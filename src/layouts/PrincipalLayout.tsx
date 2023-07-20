
import Link from "next/link";
import { useState } from "react";

interface LayoutProps {
  children: React.ReactNode;
  texto?: string;
  navBar?: boolean;
}

const LayoutPrincipal: React.FC<LayoutProps> = ({ children, texto, navBar }) => {
  return (
    <div className="h-screen w-screen bg-gradient-to-t from-[rgb(20,0,53)] via-[#13024d] to-[#1a0368] text-blue-400">
      <div className="h-full w-full overflow-y-scroll p-6">
        {navBar ? <nav className="border-4 border-sky-700 h-32 rounded-3xl flex justify-between items-center p-2">
          <img
            className="h-20 rounded-full"
            src="http://github.com/netuno14.png"
            alt=""
          />
          <div className="-translate-x-[2.7rem]">

            <Link href={"/home"}>
              <button id="font-VT323" className="text-6xl">
                <span className="">
                  SITE DO JUJU
                </span>
              </button>
            </Link>
          </div>
          <div></div>
        </nav> : <div></div>
        }
        {children}
      </div >
    </div >
  );
};

export default LayoutPrincipal;
