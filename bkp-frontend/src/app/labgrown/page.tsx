"use client";
import Header from "@/app/header/page";
import Image from "next/image";
import Link from "next/link";
import "next-range-slider/dist/main.css";
import round from "@/images/filter-shape/round-diamond.svg";
import pear from "@/images/filter-shape/pear.svg";
import heart from "@/images/filter-shape/heart.svg";
import oval from "@/images/filter-shape/oval.svg";
import emerald from "@/images/filter-shape/emerald.svg";
import princess from "@/images/filter-shape/princess.svg";
import marquise from "@/images/filter-shape/marquise.svg";
import cushion from "@/images/filter-shape/cushion.svg";
import radiant from "@/images/filter-shape/radiant.svg";
import tringle from "@/images/filter-shape/tringle.svg";
import sqaureemerald from "@/images/filter-shape/square-emerald.svg";
import sqaureradiant from "@/images/filter-shape/square-radiant.svg";
import { useEffect, useState } from "react";
import { diamondApi } from "@/api";
import Footer from "@/app/footer/page";

export default function Home() {
  // let query: any;
  const PAGE_SIZE = 5;
  const [diamonds, setDiamonds] = useState<any>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);
  const [query, setQuery] = useState<any>({
    category: "Lab Grown",
    page: currentPage,
    limit: PAGE_SIZE,
  });

  useEffect(() => {
    let params = { ...query, page: currentPage, limit: PAGE_SIZE };
    fetchDiamonds(params);
  }, [currentPage]);
  const fetchDiamonds = async (query: any) => {
    try {
      const res = await diamondApi.getAllDiamondsForUser(query);
      console.log(res.result[0].filteredResult);
      const totalCount = res.result[0].totalCount[0].total;
      setDiamonds(res.result[0].filteredResult);
      setTotalPages(Math.ceil(totalCount / PAGE_SIZE));
    } catch (err) {
      console.log(err);
    }
  };
  const handleNextPage = () => {
    setCurrentPage(currentPage + 1);
  };

  const handlePrevPage = () => {
    setCurrentPage(currentPage - 1);
  };

  const handlePageClick = (pageNumber: any) => {
    setCurrentPage(pageNumber);
  };
  const pageNumbers = Array.from({ length: totalPages }, (_, i) => i + 1);
  const handleFilters = (key: any, value: any) => {
    if (key == "weightFrom") {
      setQuery((prev: any) => ({
        ...prev,
        weight: { from: value, to: query?.weight?.to },
      }));
    } else if (key == "weightTo") {
      setQuery((prev: any) => ({
        ...prev,
        weight: { from: query?.weight?.from, to: value },
      }));
    } else if (key == "depthFrom") {
      setQuery((prev: any) => ({
        ...prev,
        totalDepth: { from: value, to: query?.totalDepth?.to },
      }));
    } else if (key == "depthTo") {
      setQuery((prev: any) => ({
        ...prev,
        totalDepth: { from: query?.totalDepth?.from, to: value },
      }));
    } else if (key == "tableFrom") {
      setQuery((prev: any) => ({
        ...prev,
        table: { from: value, to: query?.table?.to },
      }));
    } else if (key == "tableTo") {
      setQuery((prev: any) => ({
        ...prev,
        table: { from: query?.table?.from, to: value },
      }));
    } else {
      setQuery((prev: any) => ({ ...prev, [key]: value }));
    }
  };
  const handleSearch = async (e: any) => {
    e.preventDefault();
    console.log(query);

    fetchDiamonds(query);
  };
  return (
    <main className="flex min-h-screen flex-col items-center justify-between font-Fahkwang">
      <div className="bg-gray-300 mb-10 w-full">
        <Header />
      </div>
      <div className="z-10 max-w-full w-full items-center  text-sm lg:flex flex-col px-5">
        <div className="border border-[#D6D6D6] rounded-lg bg-[#F6F6F6] w-full lg:w-full p-4 lg:p-5 mx-auto">
          <form>
            <h3 className="text-lg text-black font-bold mb-4 ">Select Shape</h3>
            <div className="gap-1 mb-6 flex-wrap grid grid-cols-3 md:flex md:gap-5">
              <div className="flex flex-col justify-center space-y-2">
                <div className="flex justify-center relative  border border-[#999]  w-28 h-24 group radio-group">
                  <input
                    type="radio"
                    value="round"
                    name="diamond-shape"
                    onChange={(e) => handleFilters("shape", "round")}
                    id="round"
                    className="w-full h-full absolute top-0 -z-10"
                  />
                  <label
                    htmlFor="round"
                    className="w-full h-full p-3 relative z-10 mx-auto"
                  >
                    <Image
                      src={round}
                      alt="Round Shape Diamond"
                      className="mx-auto mt-0 mb-1"
                    />
                    <h4 className="text-sm text-center ">Round</h4>
                  </label>
                </div>
              </div>

              <div className="flex flex-col justify-center space-y-2">
                <div className="flex justify-center relative  border border-[#999]  w-28 h-24 group radio-group ">
                  <input
                    type="radio"
                    value="pear"
                    onChange={(e) => handleFilters("shape", "pear")}
                    name="diamond-shape"
                    id="pear"
                    className="w-full h-full absolute top-0 -z-10 "
                  />
                  <label
                    htmlFor="pear"
                    className="w-full h-full p-3 relative z-10 mx-auto cursor-pointer"
                  >
                    <Image
                      src={pear}
                      alt="Round Shape Diamond"
                      className="mx-auto mt-0 mb-1"
                    />
                    <h4 className="text-sm text-center">Pear</h4>
                  </label>
                </div>
              </div>

              <div className="flex flex-col justify-center space-y-2">
                <div className="flex justify-center relative  border border-[#999]  w-28 h-24 group radio-group">
                  <input
                    type="radio"
                    value="heart"
                    name="diamond-shape"
                    onChange={(e) => handleFilters("shape", "heart")}
                    id="heart"
                    className="w-full h-full absolute top-0 -z-10"
                  />
                  <label
                    htmlFor="heart"
                    className="w-full h-full p-3 relative z-10 mx-auto cursor-pointer"
                  >
                    <Image
                      src={heart}
                      alt="Round Shape Diamond"
                      className="mx-auto mt-0 mb-1"
                    />
                    <h4 className="text-base  text-center ">Heart</h4>
                  </label>
                </div>
              </div>

              <div className="flex flex-col justify-center space-y-2">
                <div className="flex justify-center relative  border border-[#999]  w-28 h-24 group radio-group">
                  <input
                    type="radio"
                    value="oval"
                    name="diamond-shape"
                    onChange={(e) => handleFilters("shape", "oval")}
                    id="oval"
                    className="w-full h-full absolute top-0 -z-10"
                  />
                  <label
                    htmlFor="oval"
                    className="w-full h-full p-3 relative z-10 mx-auto cursor-pointer"
                  >
                    <Image
                      src={oval}
                      alt="Round Shape Diamond"
                      className="mx-auto mt-0 mb-1"
                    />
                    <h4 className="text-sm text-center ">Oval</h4>
                  </label>
                </div>
              </div>

              <div className="flex flex-col justify-center space-y-2">
                <div className="flex justify-center relative  border border-[#999]  w-28 h-24 group radio-group">
                  <input
                    type="radio"
                    value="emerald"
                    onChange={(e) => handleFilters("shape", "emerald")}
                    name="diamond-shape"
                    id="emerald"
                    className="w-full h-full absolute top-0 -z-10"
                  />
                  <label
                    htmlFor="emerald"
                    className="w-full h-full p-3 relative z-10 mx-auto cursor-pointer"
                  >
                    <Image
                      src={emerald}
                      alt="Round Shape Diamond"
                      className="mx-auto mt-0 mb-1"
                    />
                    <h4 className="text-sm text-center ">Emerald</h4>
                  </label>
                </div>
              </div>

              <div className="flex flex-col justify-center space-y-2">
                <div className="flex justify-center relative  border border-[#999]  w-28 h-24 group radio-group">
                  <input
                    type="radio"
                    value="princess"
                    onChange={(e) => handleFilters("shape", "princess")}
                    name="diamond-shape"
                    id="princess"
                    className="w-full h-full absolute top-0 -z-10"
                  />
                  <label
                    htmlFor="princess"
                    className="w-full h-full p-3 relative z-10 mx-auto cursor-pointer"
                  >
                    <Image
                      src={princess}
                      alt="Round Shape Diamond"
                      className="mx-auto mt-0 mb-1"
                    />
                    <h4 className="text-sm text-center ">Princess</h4>
                  </label>
                </div>
              </div>

              <div className="flex flex-col justify-center space-y-2">
                <div className="flex justify-center relative  border border-[#999]  w-28 h-24 group radio-group">
                  <input
                    type="radio"
                    value="marquise"
                    name="diamond-shape"
                    onChange={(e) => handleFilters("shape", "marquise")}
                    id="marquise"
                    className="w-full h-full absolute top-0 -z-10"
                  />
                  <label
                    htmlFor="marquise"
                    className="w-full h-full p-3 relative z-10 mx-auto cursor-pointer"
                  >
                    <Image
                      src={marquise}
                      alt="Round Shape Diamond"
                      className="mx-auto mt-0 mb-1"
                    />
                    <h4 className="text-sm text-center">Marquise</h4>
                  </label>
                </div>
              </div>

              <div className="flex flex-col justify-center space-y-2">
                <div className="flex justify-center relative  border border-[#999]  w-28 h-24 group radio-group">
                  <input
                    type="radio"
                    value="cushion"
                    name="diamond-shape"
                    onChange={(e) => handleFilters("shape", "cushion")}
                    id="cushion"
                    className="w-full h-full absolute top-0 -z-10"
                  />
                  <label
                    htmlFor="cushion"
                    className="w-full h-full p-3 relative z-10 mx-auto cursor-pointer"
                  >
                    <Image
                      src={cushion}
                      alt="Round Shape Diamond"
                      className="mx-auto mt-0 mb-1"
                    />
                    <h4 className="text-sm text-center">Cushion</h4>
                  </label>
                </div>
              </div>

              <div className="flex flex-col justify-center space-y-2">
                <div className="flex justify-center relative  border border-[#999]  w-28 h-24 group radio-group">
                  <input
                    type="radio"
                    value="radiant"
                    name="diamond-shape"
                    onChange={(e) => handleFilters("shape", "radiant")}
                    id="radiant"
                    className="w-full h-full absolute top-0 -z-10"
                  />
                  <label
                    htmlFor="radiant"
                    className="w-full h-full p-3 relative z-10 mx-auto cursor-pointer"
                  >
                    <Image
                      src={radiant}
                      alt="Round Shape Diamond"
                      className="mx-auto mt-0 mb-1"
                    />
                    <h4 className="text-sm text-center">Radiant</h4>
                  </label>
                </div>
              </div>

              <div className="flex flex-col justify-center space-y-2">
                <div className="flex justify-center relative  border border-[#999]  w-28 h-24 group radio-group">
                  <input
                    type="radio"
                    value="tringle"
                    name="diamond-shape"
                    onChange={(e) => handleFilters("shape", "triangle")}
                    id="tringle"
                    className="w-full h-full absolute top-0 -z-10"
                  />
                  <label
                    htmlFor="tringle"
                    className="w-full h-full p-3 relative z-10 mx-auto cursor-pointer"
                  >
                    <Image
                      src={tringle}
                      alt="Round Shape Diamond"
                      className="mx-auto mt-0 mb-1"
                    />
                    <h4 className="text-sm text-center">Tringle</h4>
                  </label>
                </div>
              </div>

              <div className="flex flex-col justify-center space-y-2">
                <div className="flex justify-center relative  border border-[#999]  w-28 h-24 group radio-group">
                  <input
                    type="radio"
                    value="sq.emerald"
                    name="diamond-shape"
                    onChange={(e) => handleFilters("shape", "square emerald")}
                    id="sq.emerald"
                    className="w-full h-full absolute top-0 -z-10"
                  />
                  <label
                    htmlFor="sq.emerald"
                    className="w-full h-full p-3 relative z-10 mx-auto cursor-pointer"
                  >
                    <Image
                      src={sqaureemerald}
                      alt="Round Shape Diamond"
                      className="mx-auto mt-0 mb-1"
                    />
                    <h4 className="text-sm text-center">Sq. Emerald</h4>
                  </label>
                </div>
              </div>

              <div className="flex flex-col justify-center space-y-2">
                <div className="flex justify-center relative  border border-[#999]  w-28 h-24 group radio-group">
                  <input
                    type="radio"
                    value="sq.radiant"
                    name="diamond-shape"
                    onChange={(e) => handleFilters("shape", "square radiant")}
                    id="sq.radiant"
                    className="w-full h-full absolute top-0 -z-10"
                  />
                  <label
                    htmlFor="sq.radiant"
                    className="w-full h-full p-3 relative z-10 mx-auto cursor-pointer"
                  >
                    <Image
                      src={sqaureradiant}
                      alt="Round Shape Diamond"
                      className="mx-auto mt-0 mb-1"
                    />
                    <h4 className="text-sm text-center">Sq. Radiant</h4>
                  </label>
                </div>
              </div>
            </div>

            <div className="flex justify-between gap-4 flex-col md:flex-row">
              <div className="flex flex-col w-full md:w-1/3">
                <label className="text-lg text-black font-bold mb-4">
                  Select Color
                </label>
                <select
                  className="p-2 font-Fahkwang border-1 border-[#999]"
                  onChange={(e) => handleFilters("color", e.target.value)}
                >
                  <option value={""}>Select Color</option>
                  <option value="D">D</option>
                  <option value="E">E</option>
                  <option value="F">F</option>
                  <option value="G">G</option>
                  <option value="H">H</option>
                  <option value="I">I</option>
                  <option value="J">J</option>
                  <option value="K">K</option>
                  <option value="L">L</option>
                  <option value="M">M</option>
                  <option value="N">N</option>
                  <option value="O-P">O-P</option>
                  <option value="Q-R">Q-R</option>
                  <option value="S-T">S-T</option>
                  <option value="U-V">U-V</option>
                  <option value="W-X">W-X</option>
                  <option value="Y-Z">Y-Z</option>
                  <option value="FANCY">FANCY</option>
                </select>
              </div>
              <div className="flex flex-col w-full md:w-1/3">
                <label className="text-lg text-black font-bold mb-4">
                  Polish
                </label>
                <select
                  className="p-2 font-Fahkwang border-1 border-[#999]"
                  onChange={(e) => handleFilters("clarity", e.target.value)}
                >
                  <option value="">Select Polish</option>
                  <option value="ALL">ALL</option>
                  <option value="ID">ID</option>
                  <option value="EX">EX</option>
                  <option value="VG">VG</option>
                  <option value="GD">GD</option>
                  <option value="FR">FR</option>
                  <option value="PO">PO</option>
                </select>
              </div>
              <div className="flex flex-col w-full md:w-1/3">
                <label className="text-lg text-black font-bold mb-4">
                  Clarity
                </label>
                <div className="flex gap-4">
                  <select
                    className="p-2 font-Fahkwang border-1 border-[#999] w-full"
                    onChange={(e) => handleFilters("clarity", e.target.value)}
                  >
                    <option value="IF-VVS">IF-VVS</option>
                    <option value="VS1">VS1</option>
                    <option value="VS2">VS2</option>
                    <option value="SI1">SI1</option>
                    <option value="SI2">SI2</option>
                    <option value="SI3">SI3</option>
                    <option value="I1">I1</option>
                    <option value="I2">I2</option>
                    <option value="I3">I3</option>
                    <option value="PK">PK</option>
                    <option value="HPK">HPK</option>
                  </select>
                </div>
              </div>
            </div>
            <div className="mt-12 p-5 border border-[#ccc] rounded-md relative ">
              <h3 className="text-lg text-gray-900 font-bold mb-4 bg-white absolute px-5 py-1 -top-5 rounded-full border border-[#ccc]">
                Measurement Unit
              </h3>
              <div className="flex justify-between gap-4 mt-5 flex-col md:flex-row ">
                <div className="flex flex-col w-full md:w-1/3">
                  <label className="text-lg text-black font-bold mb-4">
                    Caret
                  </label>
                  <div className="flex gap-4">
                    <input
                      type="text"
                      placeholder="From"
                      onChange={(e) =>
                        handleFilters("weightFrom", e.target.value)
                      }
                      className="border focus:outline-none w-1/2 pl-2 rounded-md h-10"
                    />
                    <input
                      type="text"
                      placeholder="To"
                      onChange={(e) =>
                        handleFilters("weightTo", e.target.value)
                      }
                      className="border focus:outline-none w-1/2 pl-2 rounded-md h-10"
                    />
                  </div>
                </div>
                <div className="flex flex-col w-full md:w-1/3">
                  <label className="text-lg text-black font-bold mb-4">
                    Table
                  </label>
                  <div className="flex gap-4">
                    <input
                      type="text"
                      placeholder="From"
                      onChange={(e) =>
                        handleFilters("tableFrom", e.target.value)
                      }
                      className="border focus:outline-none w-1/2 pl-2 rounded-md h-10"
                    />
                    <input
                      type="text"
                      placeholder="To"
                      onChange={(e) => handleFilters("tableTo", e.target.value)}
                      className="border focus:outline-none w-1/2 pl-2 rounded-md h-10"
                    />
                  </div>
                </div>
                <div className="flex flex-col w-full md:w-1/3">
                  <label className="text-lg text-black font-bold mb-4">
                    Depth
                  </label>
                  <div className="flex gap-4">
                    <input
                      type="text"
                      placeholder="From"
                      onChange={(e) =>
                        handleFilters("depthFrom", e.target.value)
                      }
                      className="border focus:outline-none w-1/2 pl-2 rounded-md h-10"
                    />
                    <input
                      type="text"
                      placeholder="To"
                      onChange={(e) => handleFilters("depthTo", e.target.value)}
                      className="border focus:outline-none w-1/2 pl-2 rounded-md h-10"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="mt-8">
              <button
                type="submit"
                onClick={(e) => handleSearch(e)}
                className="bg-black text-white rounded-full px-5 py-2 font-bold text-lg"
              >
                Search
              </button>
            </div>
          </form>
        </div>

        <div className="box-content w-full mx-auto mt-10">
          <div className="overflow-x-auto mx-auto">
            <table className="bg-[#f5f5f5] w-full border border-[#d6d6d6] table-auto max-w-[1900px]">
              <thead>
                <tr>
                  <th className="py-3 text-lg">Shape</th>
                  <th className="py-3 text-lg">Table</th>
                  <th className="py-3 text-lg">Depth</th>
                  <th className="py-3 text-lg">Ave Weight</th>
                  <th className="py-3 text-lg">Color</th>
                  <th className="py-3 text-lg">Polish</th>
                  <th className="py-3 text-lg">Clarity</th>
                  <th className="py-3 text-lg">Price</th>
                </tr>
              </thead>
              <tbody>
                {diamonds?.map((diamond: any) => {
                  return (
                    <tr className="text-center bg-[#ededed]">
                      <td className="py-2 text-base capitalize font-bold ">
                        <Link href={`/detail?id=${diamond._id}`}>
                          {diamond.shape}
                        </Link>
                      </td>
                      <td className="py-2 text-base">{diamond?.table}</td>
                      <td className="py-2 text-base">{diamond?.totalDepth}</td>
                      <td className="py-2 text-base">{diamond?.weight}</td>
                      <td className="py-2 text-base">{diamond?.color}</td>
                      <td className="py-2 text-base">{diamond?.polish}</td>
                      <td className="py-2 text-base">{diamond?.clarity}</td>
                      <td className="py-2 text-base">
                        ${Math.round((diamond?.totalAmount * 100) / 100)}
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>

        <div className="w-full mx-auto my-5">
          <ul className="flex justify-end">
            <button onClick={handlePrevPage} disabled={currentPage === 1}>
              Previous
            </button>
            {pageNumbers.map((pageNumber) => {
              return (
                <li
                  className="pagination"
                  key={pageNumber}
                  onClick={() => handlePageClick(pageNumber)}
                >
                  <a href="#">{pageNumber}</a>
                </li>
              );
            })}
            <button
              onClick={handleNextPage}
              disabled={currentPage === totalPages}
            >
              Next
            </button>
          </ul>
        </div>
      </div>
      <div className="bg-gray-300 w-full">
        <Footer />
      </div>
    </main>
  );
}
