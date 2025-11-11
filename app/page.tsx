import Header from "@/components/Header";
import Navbar from "@/components/Navbar";
import Main from "@/components/Main";

export default function Home() {
  return (
    <div className="flex h-screen items-center justify-center">
      <div className="flex gap-4 max-h-4/5 max-w-1/2">
        <Navbar />
        <div className="flex flex-col gap-4">
          <Header />
          <Main />
        </div>
      </div>
    </div>
  );
}
