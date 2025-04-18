"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import DuaLogo from "../assets/allah 1 (Traced).svg";
import Bookmark from "../assets/books 1 2.svg";
import Unknown from "../assets/Frame (1).svg";
import Copy from "../assets/Frame.svg";
import Report from "../assets/report 1.svg";
import Share from "../assets/share 1.svg";
export default function DuaSection() {
  const [dua, steDua] = useState([]);

  const [loading, setLoading] = useState(true);
  useEffect(() => {
    fetch("/api/dua")
      .then((res) => res.json())
      .then((data) => {
        if (data.success) {
          steDua(data.data);
        } else {
          console.error("Failed to fetch categories");
        }
        setLoading(false);
      })
      .catch((err) => {
        console.error("Error fetching categories:", err);
        setLoading(false);
      });
  }, []);

  if (loading) return <p>Loading categories...</p>;
  console.log("Dua", dua);
  return (
    <div className="mt-16 w-full ">
      <h2 className="py-[10px] px-[30px] text-[#1FA45B] font-inter font-semibold text-[16px]">
        Section:{" "}
        <span className="text-[#393939] font-medium">
          The servant is dependent on his Lord
        </span>
      </h2>
      <div className=" px-4 py-2">
        <div className="flex flex-col gap-[10px]">
          {dua?.map((item, idx) => (
            <div
              className="flex flex-col px-[30px] py-[15px] border-[0.5px] border-[#E2E2E2] bg-[#FFF] rounded-[10px]"
              key={idx}
            >
              <div className="flex gap-[10px]">
                <Image src={DuaLogo} alt="Dua" width={35} height={35} />
                <h3
                  key={idx}
                  className="text-[#1FA45B] font-inter font-semibold text-[16px] py-1"
                >
                  {item.dua_name_en}
                </h3>
              </div>
              <p className=" mt-7 text-[16px] text-[#393939] font-normal font-inter">
                {item.top_en}
              </p>
              <p className="text-right py-[28px] font-normal text-[16px] text-[#393939]">
                {item.dua_arabic}
              </p>
              {item?.translation_en && item?.transliteration_en && (
                <div className="mt-2 font-inter text-[16px] font-normal text-[#393939]">
                  <p>
                    <span className="font-semibold">Translation: </span>
                    {item.translation_en}
                  </p>
                  <p className="mt-[10px]">
                    <span className="font-semibold">Transliteration: </span>
                    {item.transliteration_en}
                  </p>
                </div>
              )}
              <p className="mt-[28px] font-inter text-[16px] font-medium text-[#393939]">
                {" "}
                <span className="text-[#1FA45B]">Reference</span>{" "}
                {item.refference_en}
              </p>
              <div className="flex justify-between items-center">
                <div className="mt-2">
                  <p className="font-semibold">Audio:</p>
                  <audio src={item.audio}>
                    Your browser does not support the audio element.
                  </audio>
                </div>

                <div className="flex gap-10">
                  <Image
                    src={Copy}
                    width={24}
                    className="cursor-pointer"
                    height={24}
                    alt="copy"
                  />
                  <Image
                    className="cursor-pointer"
                    src={Bookmark}
                    width={24}
                    height={24}
                    alt="copy"
                  />
                  <Image
                    src={Unknown}
                    width={24}
                    className="cursor-pointer"
                    height={24}
                    alt="copy"
                  />
                  <Image
                    src={Share}
                    width={24}
                    height={24}
                    alt="copy"
                    className="cursor-pointer"
                  />
                  <Image
                    src={Report}
                    width={24}
                    className="cursor-pointer"
                    height={24}
                    alt="copy"
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
