import Navbar from "../(components)/Navbar";
import Sidebar from "../(components)/Sidebar";

export default function HomeLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div>
      {/* <Sidebar> */}
      {/* <Navbar logo="PrompAi" /> */}
      {children}
      {/* </Sidebar> */}
    </div>
  );
}