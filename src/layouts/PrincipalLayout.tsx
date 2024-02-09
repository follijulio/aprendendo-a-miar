interface LayoutProps {
  children: React.ReactNode;
}
const LayoutPrincipal: React.FC<LayoutProps> = ({ children}) => {
  return (
    <div className="h-screen w-screen" id="layout-principal">
      <div className="h-full w-full no-scrollbar overflow-y-scroll">
        {children}
      </div >
    </div >
  );
};
export default LayoutPrincipal;
