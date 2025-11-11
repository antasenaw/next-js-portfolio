import Header from "@/components/Header";
import Navbar from "@/components/Navbar";
import Main from "@/components/Main";
import "./Page.css";

export default function Home() {
  return (
    <div className="flex h-screen items-center justify-center">
      <div className=" flex gap-4 md:gap-6 max-h-screen max-w-screen md:max-h-4/5 md:max-w-5xl md:m-8 m-4 py-4 md:py-0">
        <Navbar />
        <div className="flex flex-col gap-6 page max-md:overflow-y-auto [scrollbar-width:none] [&::-webkit-scrollbar]:hidden rounded-2xl max-md:pb-2">
          <Header />
          <Main />
        </div>
      </div>
    </div>
  );
}
