import { Navbar } from "@/components/index";





export default function GeneralLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
     <Navbar />

      <main>{children}</main>
    </>
  );
}
