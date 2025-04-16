import Category from "./components/Category";
import DuaSection from "./components/DuaSection";
import Sidebar from "./share/Sidebar";

export default function Home() {
  return (
    <div className=" ml-[30px] relative flex">
      <div className="flex gap-[33px]  fixed  ">
        <Sidebar />
        <Category />
      </div>
      <div className=" max-w-[890px] ml-[632px] ">
        <DuaSection />
      </div>
    </div>
  );
}
