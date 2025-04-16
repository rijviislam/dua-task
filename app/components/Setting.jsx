import Image from "next/image";

import Lang from "../assets/Frame (2).svg";
export default function Setting() {
  return (
    <div className="bg-[#FFF] border-[0.5px] border-[#E2E2E2] pt-[35px]">
      <h3>Setting</h3>
      <div className="mt-[25px]">
        <div className="bg-[#F7F8FA] w-[289px] h-[55px]">
          <Image
            src={Lang}
            alt="lang"
            width={24}
            height={24}
            className="bg-[#E8F0F5] py-[7px] px-[6px] rounded-full"
          />
        </div>
      </div>
    </div>
  );
}
