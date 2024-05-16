"use client";
import logo from "@/images/logo.png";
import Image from "next/image";
import hello from "@/images/admin-bg.png";
import { useEffect, useState } from "react";
import { diamondApi, usersApi } from "@/api";
import round from "@/images/filter-shape/round-diamond.svg";
import Cushion from "@/images/filter-shape/cushion.svg";
import Emerald from "@/images/filter-shape/emerald.svg";
import Heart from "@/images/filter-shape/heart.svg";
import Marquise from "@/images/filter-shape/marquise.svg";
import Princess from "@/images/filter-shape/princess.svg";
import Pear from "@/images/filter-shape/pear.svg";
import Oval from "@/images/filter-shape/oval.svg";
import Radiant from "@/images/filter-shape/radiant.svg";
import SqaureEmerald from "@/images/filter-shape/square-emerald.svg";
import SqaureRadiant from "@/images/filter-shape/square-radiant.svg";
import Traingle from "@/images/filter-shape/tringle.svg";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function Loginadmin() {
  const [totalStock, setTotalStock] = useState<number>(0);
  const [diamonds, setDiamonds] = useState<any>([]);
  const [vistors, setVistors] = useState<number>(0);
  const [mostSearchedShape, setMostSearchedShape] = useState("");
  const router = useRouter();
  useEffect(() => {
    fetchDiamondsbyShape();
    fetchVistors();
    fetchMostSearchedShape();
  }, []);
  const fetchVistors = async () => {
    try {
      const res = await usersApi.userCount();
      setVistors(res.result);
    } catch (error) {
      console.log(error);
    }
  };
  const fetchDiamondsbyShape = async () => {
    try {
      const res = await diamondApi.getAllDiamondsByShape();
      console.log(res);
      let totalCount = 0;
      res.result.map((diamond: any) => {
        totalCount += diamond.count;
      });
      setDiamonds(res.result);
      setTotalStock(totalCount);
    } catch (error) {
      console.log(error);
    }
  };
  const fetchMostSearchedShape = async () => {
    try {
      const res = await diamondApi.mostSearchedShape();
      setMostSearchedShape(res.result[0]._id);

      // setVistors(res.result);
    } catch (error) {
      console.log(error);
    }
  };
  const handleLogout = () => {
    typeof window !== 'undefined' ?window.localStorage.removeItem("adminToken"):null;
    router.push("./login");
  };
  return (
    <div
      // style={{
      //   backgroundImage: `url(${hello.src})`,
      // }}
      className="min-h-screen font-Fahkwang  bg-cover bg-no-repeat bg-center bg-black"
    >
      <div className="flex p-5 gap-14 min-h-screen">
        <div className="p-5 bg-zinc-950 rounded-3xl w-1/4 border border-zinc-950">
          <div className="bg-white p-5 rounded-3xl">
            <Image src={logo} alt="Website Logo" />
          </div>
          <div className="mt-10">
            <ul className="text-white space-y-3 text-xl">
              <li className="px-5 py-2 rounded-lg bg-[#1b1b21]">
                <a href="#">Dashboard</a>
              </li>
              <li className="px-5 py-2 rounded-lg">
                <a href="./addstock">Add Stock</a>
              </li>
              <li className="px-5 py-2 rounded-lg">
                <a href="./stock">List of Stock</a>
              </li>
              <li className="px-5 py-2 rounded-lg ">
                <a href="./visitor">List of Visitor</a>
              </li>
              <li className="px-5 py-2 rounded-lg ">
                <a href="./enquiry">Enquiry</a>
              </li>
              <li className="px-5 py-2 rounded-lg ">
                <a style={{ cursor: "pointer" }} onClick={handleLogout}>
                  Logout
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="w-3/4 flex flex-col">
          <div className="flex gap-5 w-full">
            <div className="flex flex-col space-y-5 bg-zinc-900 p-5 rounded-xl w-1/3">
              <h3 className="text-2xl text-white">Total Visitors</h3>
              <h4 className="text-5xl text-white font-bold">{vistors - 1}</h4>
            </div>
            <div className="flex flex-col space-y-5 bg-zinc-900 p-5 rounded-xl w-1/3">
              <h3 className="text-2xl text-white">Total Stock</h3>
              <h4 className="text-5xl text-white font-bold">{totalStock}</h4>
            </div>
            <div className="flex flex-col space-y-5 bg-zinc-900 p-5 rounded-xl w-1/3">
              <h3 className="text-2xl text-white">Most Search Shape</h3>
              <h4 className="text-5xl text-white font-bold capitalize">
                {mostSearchedShape}
              </h4>
            </div>
          </div>

          <div className="mt-6">
            <ul className="flex w-full bg-zinc-900 mb-1 text-white py-2 text-center">
              <li className="w-1/4 font-bold">Shape</li>
              <li className="w-1/4 font-bold">Name of Shape</li>
              <li className="w-1/4 font-bold">Total No of Stock</li>
              <li className="w-1/4 font-bold">Action</li>
            </ul>
            {diamonds?.map((diamond: any,index: number) => {
              return (
                <ul key={"diamond"+index} className="flex w-full bg-zinc-900 mb-1 text-white py-2 text-center items-center">
                  <li className="w-1/4 flex justify-center">
                    {diamond._id == "round" && (
                      <Image
                        src={round}
                        alt="Diamond Shape"
                        className="fill-white"
                      />
                    )}
                    {diamond._id == "pear" && (
                      <Image src={Pear} alt="Diamond Shape" />
                    )}
                    {diamond._id == "princess" && (
                      <Image src={Princess} alt="Diamond Shape" />
                    )}
                    {diamond._id == "marquise" && (
                      <Image src={Marquise} alt="Diamond Shape" />
                    )}
                    {diamond._id == "emerald" && (
                      <Image src={Emerald} alt="Diamond Shape" />
                    )}
                    {diamond._id == "square emerald" && (
                      <Image src={SqaureEmerald} alt="Diamond Shape" />
                    )}
                    {diamond._id == "cushion" && (
                      <Image src={Cushion} alt="Diamond Shape" />
                    )}
                    {diamond._id == "oval" && (
                      <Image src={Oval} alt="Diamond Shape" />
                    )}
                    {diamond._id == "radiant" && (
                      <Image src={Radiant} alt="Diamond Shape" />
                    )}
                    {diamond._id == "triangle" && (
                      <Image src={Traingle} alt="Diamond Shape" />
                    )}
                    {diamond._id == "heart" && (
                      <Image src={Heart} alt="Diamond Shape" />
                    )}
                    {diamond._id == "square radiant" && (
                      <Image src={SqaureRadiant} alt="Diamond Shape" />
                    )}
                  </li>
                  <li className="w-1/4">
                    {diamond._id.charAt(0).toUpperCase() + diamond._id.slice(1)}
                  </li>
                  <li className="w-1/4">{diamond.count}</li>
                  <li className="w-1/4 flex justify-center">
                    {" "}
                    <Link
                      href={{
                        pathname: "./stock",
                        query: {
                          shape: diamond._id,
                        },
                      }}
                    >
                      <div className="flex item-center bg-[#2d2d37] px-5 py-2 justify-center gap-3 w-52 rounded-lg">
                        <span>See all Stock</span>
                        <span className="flex items-center">
                          <svg
                            width="23"
                            height="16"
                            viewBox="0 0 23 16"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M22.7071 8.70711C23.0976 8.31658 23.0976 7.68342 22.7071 7.29289L16.3431 0.928932C15.9526 0.538408 15.3195 0.538408 14.9289 0.928932C14.5384 1.31946 14.5384 1.95262 14.9289 2.34315L20.5858 8L14.9289 13.6569C14.5384 14.0474 14.5384 14.6805 14.9289 15.0711C15.3195 15.4616 15.9526 15.4616 16.3431 15.0711L22.7071 8.70711ZM0 9H22V7H0V9Z"
                              fill="white"
                            />
                          </svg>
                        </span>
                      </div>
                    </Link>
                  </li>
                </ul>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
