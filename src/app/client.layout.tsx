import NavBar from "@/components/NavBar";

const ClientLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <section className="bg-purple-50">
      <NavBar />
      {children}
    </section>
  );
};
export default ClientLayout;
