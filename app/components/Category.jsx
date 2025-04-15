"use client";

import Image from "next/image";
import SearchIcon from "../assets/search-icon.svg";

export default function Category() {
  //   const [categories, setCategories] = useState([]);

  //   const [loading, setLoading] = useState(true);

  //   useEffect(() => {
  //     fetch("/api/category")
  //       .then((res) => res.json())
  //       .then((data) => {
  //         if (data.success) {
  //           console.log("Fetched categories:", data.data);
  //           setCategories(data.data); // Save categories to state
  //         } else {
  //           console.error("Failed to fetch categories");
  //         }
  //         setLoading(false);
  //       })
  //       .catch((err) => {
  //         console.error("Error fetching categories:", err);
  //         setLoading(false);
  //       });
  //   }, []);

  return (
    <div className="mt-[35px] border border-black">
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
      <div></div>
    </div>
  );
}
