import Link from "next/link";

interface LayoutProps {
  children: React.ReactNode;
  texto?: string;
}

const LayoutPrincipal: React.FC<LayoutProps> = ({ children, texto }) => {
  return (
    <div className="h-screen w-screen bg-gradient-to-r from-[#1a0243] via-[#13024d] to-[#1a0368] text-blue-400">
      <div className="pt-10">
        {texto ? (
          <div className="font-bold font-mono text-5xl text-center">
            {texto}
          </div>
        ) : (
          <Link href="/home">
            <div className="font-bold font-mono text-5xl text-center">
              SITE DO JUJU
            </div>
          </Link>
        )}

        <div id="" className="h-full w-full overflow-y-scroll p-6">
          {children}
        </div>
      </div>
    </div>
  );
};

export default LayoutPrincipal;
