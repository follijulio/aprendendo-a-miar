
import Link from "next/link";
import { useState } from "react";

interface LayoutProps {
  children: React.ReactNode;
  navBar?: boolean;
  foto?: boolean;
}

const LayoutPrincipal: React.FC<LayoutProps> = ({ children, foto, navBar }) => {
  return (
    <div className="h-screen w-screen bg-gradient-to-t from-[rgb(20,0,53)] via-[#13024d] to-[#1a0368]">
      <div className="h-full w-full overflow-y-scroll p-6">
        {navBar ? <nav className="border-4 border-sky-700 h-32 rounded-3xl items-center text-blue-400 p-2 ">
          {!foto ? <div className="flex justify-center">
            <div></div>
            <div>
              <div className="transition-transform transform-gpu hover:scale-105">
                <Link href={"/home"}>
                  <span id="font-VT323" className="text-6xl">SITE DO JUJU</span>
                </Link>
              </div>
            </div>
            <div></div>
          </div> : <div className="flex justify-between">
            <div>
              <Link href={"https://github.com/netuno14"}>
                <img src="http://github.com/netuno14.png" className="object-cover h-24 rounded-full hover:border-2 border-sky-400 transition-transform transform-gpu hover:scale-110" alt="" />
              </Link>
            </div>
            <div className="transition-transform transform-gpu hover:scale-105">
              <Link href={"/home"}>
                <span id="font-VT323" className="text-6xl">SITE DO JUJU</span>
              </Link>
            </div>
            <div>
              <Link href={"/netunoPage"}>
                <img src="https://cdn-icons-png.flaticon.com/512/2530/2530911.png" className="object-cover h-24 rounded-full hover:border-2 border-sky-400 transition-transform transform-gpu hover:scale-110" alt="" />
              </Link>
            </div>
          </div>
          }
        </nav> : <div></div>
        }
        {children}
      </div >
    </div >
  );
};
export default LayoutPrincipal;