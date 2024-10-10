import NavBar from "@/components/NavBar";

const ClientLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <section>
      <NavBar />
      {children}
    </section>
  );
};
export default ClientLayout;
