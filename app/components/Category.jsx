import Image from "next/image";
import Cat from "../assets/category.svg";
import SearchIcon from "../assets/search-icon.svg";

export default function Category() {
  return (
    <div className="mt-[35px] bg-[#FFF] border-[0.5px] border-[#E2E2E2]">
      <h2 className="text-[#FFF] bg-[#1FA45B] py-[18px] w-[439px] text-center rounded-t-[10px] font-inter">
        Categories
      </h2>
      <div className="flex gap-[10px] border border-[#E2E2E2] px-[13px] h-[50px] m-[15px] rounded-[7px]">
        <Image src={SearchIcon} alt="search icon" width={24} height={24} />
        <input
          type="text"
          placeholder="Search by Categories"
          className="w-full h-full outline-none"
        />
      </div>
      <div>
        <div className="bg-[#E8F0F5] rounded-[10px] p-[10px] flex justify-between ">
          <div className="flex gap-4">
            <Image src={Cat} alt="intro" width={40} height={40} />
            <div>
              <h4 className="text-[#1FA45B] font-inter text-[16px] font-semibold">
                Introduction to Dua
              </h4>
              <p className="text-[#7E7E7E] font-poppins text-[14px] font-normal">
                Subcategory: 11
              </p>
            </div>
          </div>
          <div className="flex flex-col items-center">
            <p className="font-semibold text-[16px] font-inter text-[#393939]">
              15
            </p>
            <p className="text-[#7E7E7E] font-poppins text-[14px] font-normal">
              Duas
            </p>
          </div>
        </div>

        <div className="flex mt-3">
          <div className=" pl-6 pr-[19px] inline-flex relative">
            <div className=" flex-col inline-flex h-full gap-[35px]  absolute left-[21px] top-5">
              <div className="bg-[#1FA45B] w-2 h-2 rounded-full"></div>
              <div className="bg-[#1FA45B] w-2 h-2 rounded-full"></div>
              <div className="bg-[#1FA45B] w-2 h-2 rounded-full"></div>
              <div className="bg-[#1FA45B] w-2 h-2 rounded-full"></div>
              <div className="bg-[#1FA45B] w-2 h-2 rounded-full"></div>
              <div className="bg-[#1FA45B] w-2 h-2 rounded-full"></div>
              <div className="bg-[#1FA45B] w-2 h-2 rounded-full"></div>
            </div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="2"
              height="361"
              viewBox="0 0 2 361"
              fill="none"
              // className="absolute"
            >
              <path
                d="M1 0V361"
                stroke="#1FA45B"
                strokeWidth="1.5"
                strokeDasharray="2 2"
              />
            </svg>
          </div>
          <ul className="flex flex-col gap-4">
            <li>What is Dua</li>
            <li>Conditions for Dua to be successful</li>
            <li>The Methode Of Dua</li>
            <li>Before Dua</li>
            <li>During Dua</li>
            <li>Prerequisites of writing Dua and drinking it’s water</li>
            <li>The correct way to perform Dua for a small child</li>
          </ul>
        </div>
        <div>
          <div className=" rounded-[5px] p-[10px] flex justify-between border border-[#F9F9F9]">
            <div className="flex gap-4">
              <Image
                src={Cat}
                alt="intro"
                width={40}
                height={40}
                className="bg-[#E8F0F5] rounded-[10px] p-[10px]"
              />
              <div>
                <h4 className="text-[#1FA45B] font-inter text-[16px] font-semibold">
                  Introduction to Dua
                </h4>
                <p className="text-[#7E7E7E] font-poppins text-[14px] font-normal">
                  Subcategory: 11
                </p>
              </div>
            </div>
            <div className="flex flex-col items-center border-l border-[#E2E2E2] pl-4">
              <p className="font-semibold text-[16px] font-inter text-[#393939] ">
                15
              </p>
              <p className="text-[#7E7E7E] font-poppins text-[14px] font-normal">
                Duas
              </p>
            </div>
          </div>
          <div className=" rounded-[5px] p-[10px] flex justify-between border border-[#F9F9F9]">
            <div className="flex gap-4">
              <Image
                src={Cat}
                alt="intro"
                width={40}
                height={40}
                className="bg-[#E8F0F5] rounded-[10px] p-[10px]"
              />
              <div>
                <h4 className="text-[#1FA45B] font-inter text-[16px] font-semibold">
                  Introduction to Dua
                </h4>
                <p className="text-[#7E7E7E] font-poppins text-[14px] font-normal">
                  Subcategory: 11
                </p>
              </div>
            </div>
            <div className="flex flex-col items-center border-l border-[#E2E2E2] pl-4">
              <p className="font-semibold text-[16px] font-inter text-[#393939] ">
                15
              </p>
              <p className="text-[#7E7E7E] font-poppins text-[14px] font-normal">
                Duas
              </p>
            </div>
          </div>
          <div className=" rounded-[5px] p-[10px] flex justify-between border border-[#F9F9F9]">
            <div className="flex gap-4">
              <Image
                src={Cat}
                alt="intro"
                width={40}
                height={40}
                className="bg-[#E8F0F5] rounded-[10px] p-[10px]"
              />
              <div>
                <h4 className="text-[#1FA45B] font-inter text-[16px] font-semibold">
                  Introduction to Dua
                </h4>
                <p className="text-[#7E7E7E] font-poppins text-[14px] font-normal">
                  Subcategory: 11
                </p>
              </div>
            </div>
            <div className="flex flex-col items-center border-l border-[#E2E2E2] pl-4">
              <p className="font-semibold text-[16px] font-inter text-[#393939] ">
                15
              </p>
              <p className="text-[#7E7E7E] font-poppins text-[14px] font-normal">
                Duas
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
