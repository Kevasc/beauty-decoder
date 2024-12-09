import NavBar from "@/components/NavBar";

const ClientLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <section className="bg-white">
      <NavBar />
      {children}
    </section>
  );
};
export default ClientLayout;
