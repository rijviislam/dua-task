import Image from "next/image";
import Dropdown from "../assets/Polygon 2.svg";
import SearchIcon from "../assets/search-icon.svg";
import Profile from "../assets/Vector.svg";

export default function Header() {
  return (
    <div className="flex mt-[54px] w-full justify-between">
      <h1 className="text-2xl font-semibold text-[#393939] ">Dua Page</h1>
      <div className="flex gap-[293px]">
        <div className="text-[#868686] font-normal text-[16px] flex border border-[#E2E2E2] bg-[#FFF] pl-4 pr-1 w-[371px] justify-between">
          <input type="text" placeholder="Search by Dua Name" />
          <Image
            src={SearchIcon}
            alt="search icon"
            className="bg-[#F3F4F6] rounded-[6px] py-[10px] px-[15px]"
            width={24}
            height={24}
          />
        </div>
        <div className="flex items-center">
          <Image src={Profile} alt="profil" width={45} height={45} />
          <Image src={Dropdown} alt="dropdown" width={12} height={9} />
        </div>
      </div>
    </div>
  );
}
