import Category from "./components/Category";
import DuaSection from "./components/DuaSection";
import Sidebar from "./share/Sidebar";

export default function Home() {
  return (
    <div className="border-2 border-black ml-[30px] relative flex">
      <div className="flex gap-[33px] border-2 border-black fixed  ">
        <Sidebar />
        <Category />
      </div>
      <div className="border-2 border-red-500 max-w-[890px] ml-[632px] ">
      <DuaSection />
      </div>
 {/* <div className="fixed top-10 right-10">
 <Setting/>
 </div> */}
    </div>
  );
}
