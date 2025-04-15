import Image from "next/image";
import KeepLogo from "../assets/3-keep-minus.svg";
import MenuLogo from "../assets/54-menu-2.svg";
import BookmarkLogo from "../assets/books 1.svg";
import DonateLogo from "../assets/bxs_donate-heart.svg";
import DuaLogo from "../assets/dua-info 1.svg";
import HomeLogo from "../assets/home 1.svg";
import MemoLogo from "../assets/memorize 1.svg";
import RuqyahLogo from "../assets/ruqyah 1.svg";
import Logo from "../assets/unnamed 1.svg";

export default function Sidebar() {
  return (
    <div className="text-black ">
      <div className="bg-[#FFFFFF]  h-[927px] w-[100px] rounded-[24px] ml-10 flex flex-col items-center">
        <a href="#">
          <Image
            src={Logo}
            alt="sidebar"
            width={73}
            height={73}
            className="mt-[31px] "
          />
        </a>
        <ul className="flex flex-col gap-[27px] items-center mt-[145px] mb-[162px]">
          <li className="bg-[#E8F0F5] p-[9px] rounded-full">
            <a href="#">
              <Image src={HomeLogo} width={20} height={20} alt="sidebarlogo" />
            </a>
          </li>
          <li className="bg-[#E8F0F5] p-[9px] rounded-full">
            <a href="#">
              <Image src={MenuLogo} width={20} height={20} alt="sidebarlogo" />
            </a>
          </li>
          <li className="bg-[#E8F0F5] p-[9px] rounded-full">
            <a href="#">
              <Image src={MemoLogo} width={20} height={20} alt="sidebarlogo" />
            </a>
          </li>
          <li className="bg-[#E8F0F5] p-[9px] rounded-full">
            <a href="#">
              <Image src={KeepLogo} width={20} height={20} alt="sidebarlogo" />
            </a>
          </li>
          <li className="bg-[#E8F0F5] p-[9px] rounded-full">
            <a href="#">
              <Image
                src={RuqyahLogo}
                width={20}
                height={20}
                alt="sidebarlogo"
              />
            </a>
          </li>
          <li className="bg-[#E8F0F5] p-[9px] rounded-full">
            <a href="#">
              <Image src={DuaLogo} width={20} height={20} alt="sidebarlogo" />
            </a>
          </li>
          <li className="bg-[#E8F0F5] p-[9px] rounded-full">
            <a href="#">
              <Image
                src={BookmarkLogo}
                width={20}
                height={20}
                alt="sidebarlogo"
              />
            </a>
          </li>
        </ul>
        <a
          href="#"
          className="p-4 bg-[#1FA45B] rounded-[10px] shadow-[0px_4px_20px_0px_rgba(31,164,91,0.22)]"
        >
          <Image src={DonateLogo} alt="sidebarlogo" width={24} height={24} />
        </a>
      </div>
    </div>
  );
}
