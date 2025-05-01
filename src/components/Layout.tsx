import { ReactNode } from "react";

interface LayoutProps {
  children: ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return <main className="flex-grow pt-10 dark:bg-gray-900">{children}</main>;
};

export default Layout;
