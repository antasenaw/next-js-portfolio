import Navbar from "@/components/Navbar";
import MobileNavbar from "@/components/MobileNavbar";
// import Header from "@/components/Header";
import Main from "@/components/Main";
import { RefProvider } from "@/hooks/NavigationRefContext";
import "./Page.css";

export default function Home() {
  return (
    <div className="flex h-screen items-center justify-center">
      <div className=" flex gap-4 md:gap-6 max-h-screen max-w-screen md:max-h-4/5 md:max-w-5xl md:m-8 m-4 py-4 md:py-0">
        <RefProvider>
          <Navbar />
          <div className="flex flex-col gap-4 md:gap-6 page rounded-2xl">
          <MobileNavbar />
            {/* <Header /> */}
            <Main />
          </div>
        </RefProvider>
      </div>
    </div>
  );
}
