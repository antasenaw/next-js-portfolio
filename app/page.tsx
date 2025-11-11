import Header from "@/components/Header";
import Navbar from "@/components/Navbar";
import Main from "@/components/Main";

export default function Home() {
  return (
    <div className="flex min-h-screen items-center justify-center">
      <div className="flex gap-4">
        <Navbar />
        <div className="flex flex-col gap-4">
          <Header />
          <Main />
        </div>
      </div>
    </div>
  );
}
