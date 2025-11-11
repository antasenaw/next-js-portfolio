import Header from "@/components/Header";
import Navbar from "@/components/Navbar";
import Main from "@/components/Main";
import "./Page.css";

export default function Home() {
  return (
    <div className="flex h-screen items-center justify-center">
      <div className="flex gap-6 max-h-screen max-w-screen md:max-h-4/5 md:max-w-5xl max-md:p-4 md:m-4">
        <Navbar />
        <div className="flex flex-col gap-6 page">
          <Header />
          <Main />
        </div>
      </div>
    </div>
  );
}
