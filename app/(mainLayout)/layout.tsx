import { Navbar } from "@/components/general/Navbar";

interface LayoutProps {
  children: React.ReactNode;
}

const MainLayout = ({ children }: LayoutProps) => {
  return (
    <div className="max-x-7xl mx-auto px-4 md:px-6 lg:px-8">
      <Navbar />
      {children}
    </div>
  );
};

export default MainLayout;
