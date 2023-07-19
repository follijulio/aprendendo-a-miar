import Link from "next/link";

interface LayoutProps {
  children: React.ReactNode;
  texto?: string;
}

const LayoutPrincipal: React.FC<LayoutProps> = ({ children, texto }) => {
  return (
    <div className="h-screen w-screen bg-gradient-to-t from-[rgb(20,0,53)] via-[#13024d] to-[#1a0368] text-blue-400">
      <div className="pt-10">
        <div className="font-bold text-6xl text-center">
          {texto || <Link href="/home">SITE DO JUJU</Link>}
        </div>
        <div className="h-full w-full overflow-y-scroll p-6">
          {children}
          <div className="bg-black"></div>
        </div>
      </div>
    </div>
  );
};

export default LayoutPrincipal;
