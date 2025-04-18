import Image from "next/image";
import Dropdown from "../assets/Polygon 2.svg";
import SearchIcon from "../assets/search-icon.svg";
import Profile from "../assets/Vector.svg";

export default function Header() {
  return (
    <div className="flex justify-between ml-[170px] mt-10">
      <h1 className="text-2xl font-semibold text-[#393939] font-poppins">
        Dua Page
      </h1>
      <div className="flex gap-[293px]">
        <div className="text-[#868686] font-normal text-[16px] flex border border-[#E2E2E2] bg-[#FFF] pl-4 pr-1 w-[371px] justify-between">
          <input type="text" placeholder="Search by Dua Name" />
          <div className="py-[10px] px-[15px] bg-[#F3F4F6] rounded-[6px]">
            <Image src={SearchIcon} alt="search icon" width={24} height={24} />
          </div>
        </div>
        <div className="flex items-center">
          <Image src={Profile} alt="profil" width={45} height={45} />
          <Image src={Dropdown} alt="dropdown" width={12} height={9} />
        </div>
      </div>
    </div>
  );
}
