"use client";

import { usePathname } from "next/navigation";
import Header from "@/components/Header";
import NavBar from "@/components/NavBar";

const ClientLayout = ({ children }: { children: React.ReactNode }) => {
  const pathname = usePathname();
  const home = "/";
  console.log("pathname = ", pathname);
  return (
    <section className="bg-white">
      <NavBar />
      {pathname !== home && <Header />}
      {children}
    </section>
  );
};
export default ClientLayout;
