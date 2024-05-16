"use client";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import logo from "@/images/logo.png";
import Image from "next/image";
import hello from "@/images/admin-bg.png";
import edit from "@/images/edit.png";
import del from "@/images/delete.png";
import { useEffect, useState } from "react";
import { diamondApi } from "@/api";
import { useRouter } from "next/navigation";
import Link from "next/link";
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

export default function Stock({
  searchParams,
}: {
  searchParams: { shape: string };
}) {
  const router = useRouter();
  const [naturalDiamonds, setNaturalDiamonds] = useState<any>([]);
  const [labGrownDiamonds, setLabGrownDiamonds] = useState<any>([]);
  const [shape, setShape] = useState(
    searchParams.shape ? searchParams.shape : "round"
  );
  useEffect(() => {
    fetchDiamond();
  }, []);
  const fetchDiamond = async () => {
    try {
      const res = await diamondApi.getAllDiamonds();
      if (res.status == 200) {
        const natural = res.result[0].filteredResult.filter((diamond: any) => {
          return (
            diamond.category == "Natural" && diamond.shape == searchParams.shape
          );
        });
        setNaturalDiamonds(natural);
        const labGrown = res.result[0].filteredResult.filter((diamond: any) => {
          return (
            diamond.category == "Lab Grown" &&
            diamond.shape == searchParams.shape
          );
        });
        setLabGrownDiamonds(labGrown);
      }
    } catch (err) {}
  };
  const fetchDiamondByShape = async (value: any) => {
    try {
      const res = await diamondApi.getAllDiamonds();
      if (res.status == 200) {
        const natural = res.result[0].filteredResult.filter((diamond: any) => {
          return diamond.category == "Natural" && diamond.shape == value;
        });
        setNaturalDiamonds(natural);
        const labGrown = res.result[0].filteredResult.filter((diamond: any) => {
          return diamond.category == "Lab Grown" && diamond.shape == value;
        });
        setLabGrownDiamonds(labGrown);
      }
    } catch (err) {}
  };
  const handleDelete = async (diamondId: any) => {
    const ans = prompt("Type Delete to remove this Diamond");
    if (ans?.toLowerCase() == "delete") {
      try {
        const res = await diamondApi.remove(diamondId);
        fetchDiamond();
      } catch (error) {
        console.log(error);
      }
    }
  };
  const handleShape = (e: any) => {
    setShape(e.target.value);
    fetchDiamondByShape(e.target.value);
  };
  const handleLogout = () => {
    typeof window !== 'undefined'?window.localStorage.removeItem("adminToken"):null;
    router.push("./login");
  };
  return (
    <div className="min-h-screen font-Fahkwang bg-black">
      <div className="flex p-5 gap-14 min-h-screen">
        <div className="p-5 bg-zinc-950 rounded-3xl w-1/4">
          <div className="bg-white p-5 rounded-3xl">
            <Image src={logo} alt="Website Logo" />
          </div>
          <div className="mt-10">
            <ul className="text-white space-y-3 text-xl">
              <li className="px-5 py-2 rounded-lg ">
                <a href="./dashboard">Dashboard</a>
              </li>
              <li className="px-5 py-2 rounded-lg">
                <a href="./addstock">Add Stock</a>
              </li>
              <li className="px-5 py-2 rounded-lg bg-[#1b1b21]">
                <a href="./stock">List of Stock</a>
              </li>
              <li className="px-5 py-2 rounded-lg">
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
          <div className="flex w-full flex-col"></div>
          <div className="flex gap-2 items-center justify-between font-Fahkwang">
            <div className="flex items-center gap-2 mb-8">
              <div className="">
                {shape == "round" && (
                  <Image
                    src={round}
                    alt="Diamond Shape"
                    className="fill-white"
                  />
                )}
                {shape == "pear" && <Image src={Pear} alt="Diamond Shape" />}
                {shape == "princess" && (
                  <Image src={Princess} alt="Diamond Shape" />
                )}
                {shape == "marquise" && (
                  <Image src={Marquise} alt="Diamond Shape" />
                )}
                {shape == "emerald" && (
                  <Image src={Emerald} alt="Diamond Shape" />
                )}
                {shape == "square emerald" && (
                  <Image src={SqaureEmerald} alt="Diamond Shape" />
                )}
                {shape == "cushion" && (
                  <Image src={Cushion} alt="Diamond Shape" />
                )}
                {shape == "oval" && <Image src={Oval} alt="Diamond Shape" />}
                {shape == "radiant" && (
                  <Image src={Radiant} alt="Diamond Shape" />
                )}
                {shape == "triangle" && (
                  <Image src={Traingle} alt="Diamond Shape" />
                )}
                {shape == "heart" && <Image src={Heart} alt="Diamond Shape" />}
                {shape == "square radiant" && (
                  <Image src={SqaureRadiant} alt="Diamond Shape" />
                )}
                {shape == "Half moon" && (
                  <Image src={SqaureRadiant} alt="Diamond Shape" />
                )}
                
              </div>
              <h3 className="text-white text-3xl font-medium">
                {shape.charAt(0).toUpperCase() + shape.slice(1)} Shape
              </h3>
            </div>
            <div className="flex gap-2 items-center mb-5">
              <label className="text-white">Select Shape</label>
              <select
                className="h-8 w-40 bg-white  rounded-sm"
                value={shape}
                onChange={handleShape}
              >
                <option value={""}>Select Shape</option>
                <option value={"round"}>Round</option>
                <option value={"pear"}>Pear</option>
                <option value={"heart"}>Heart</option>
                <option value={"oval"}>Oval</option>
                <option value={"emerald"}>Emerald</option>
                <option value={"princess"}>Princess</option>
                <option value={"marquise"}>Marquise</option>
                <option value={"cushion"}>Cushion</option>
                <option value={"radiant"}>Radiant</option>
                <option value={"triangle"}>Triangle</option>
                <option value={"sqaure-radiant"}>Square Radiant</option>
                <option value={"half-moon"}>Half Moon</option>
              </select>
            </div>
          </div>

          <div className="">
            <Tabs>
              <TabList className="flex gap-5 mb-5">
                <Tab className="bg-zinc-900 text-white px-5 py-2  rounded-md focus:outline-none focus:bg-none">
                  Natural Diamond Stock
                </Tab>
                <Tab className="bg-zinc-900 text-white px-5 py-2 rounded-md focus:outline-none focus:bg-none">
                  Lab Grown Diamond Stock
                </Tab>
              </TabList>

              <TabPanel>
                <ul className="text-white flex w-full justify-around bg-zinc-900  px-3 py-2 rounded-md mb-1">
                  <li className="font-medium w-1/12 text-center">
                    Cerificate No
                  </li>
                  <li className="font-medium w-1/12 text-center">ID</li>
                  <li className="font-medium w-1/12 text-center">Weight</li>
                  <li className="font-medium w-1/12 text-center">Color</li>
                  <li className="font-medium w-1/12 text-center">Clarity</li>
                  <li className="font-medium w-1/12 text-center">ORap</li>

                  <li className="font-medium w-1/12 text-center">Rate $/CT</li>
                  <li className="font-medium w-1/12 text-center">Amount $</li>
                  <li className="font-medium w-1/12 text-center">Action</li>
                </ul>

                {naturalDiamonds?.map((naturalDiamond: any,index:number) => {
                  return (
                    <ul key={"naturalDiamond"+index} className="text-white flex w-full justify-around bg-zinc-900 px-3 py-2 rounded-md mb-1">
                      <li className="w-1/12 text-center">
                        {naturalDiamond.certificateNo}
                      </li>
                      <li className="w-1/12 text-center">
                        {naturalDiamond?.ID}
                      </li>
                      <li className="w-1/12 text-center">
                        {naturalDiamond.weight}
                      </li>
                      <li className="w-1/12 text-center">
                        {naturalDiamond.color}
                      </li>
                      <li className="w-1/12 text-center">
                        {naturalDiamond.clarity}
                      </li>
                      <li className="w-1/12 text-center">
                        {naturalDiamond.oRap}
                      </li>

                      <li className="w-1/12 text-center">
                        ${Math.round((naturalDiamond?.price * 100) / 100)}
                      </li>
                      <li className="w-1/12 text-center">
                        ${Math.round((naturalDiamond?.totalAmount * 100) / 100)}
                      </li>
                      <li className="flex gap-5 w-1/12 justify-center">
                        <Link
                          href={{
                            pathname: "./editDiamond",
                            query: {
                              diamondId: naturalDiamond._id,
                            },
                          }}
                        >
                          <span>
                            <Image
                              src={edit}
                              alt="Edit Image"
                              width={24}
                              height={24}
                            />
                          </span>
                        </Link>
                        <span onClick={() => handleDelete(naturalDiamond._id)}>
                          <Image
                            src={del}
                            alt="Delete Image"
                            width={24}
                            height={24}
                          />
                        </span>
                      </li>
                    </ul>
                  );
                })}
              </TabPanel>
              <TabPanel>
              <ul className="text-white flex w-full justify-around bg-zinc-900  px-3 py-2 rounded-md mb-1">
                  <li className="font-medium w-1/12 text-center">
                    Cerificate No
                  </li>
                  <li className="font-medium w-1/12 text-center">ID</li>
                  <li className="font-medium w-1/12 text-center">Weight</li>
                  <li className="font-medium w-1/12 text-center">Color</li>
                  <li className="font-medium w-1/12 text-center">Clarity</li>
                  <li className="font-medium w-1/12 text-center">ORap</li>

                  <li className="font-medium w-1/12 text-center">Rate $/CT</li>
                  <li className="font-medium w-1/12 text-center">Amount $</li>
                  <li className="font-medium w-1/12 text-center">Action</li>
                </ul>

                {labGrownDiamonds?.map((labGrownDiamond: any,index:number) => {
                  return (
                    <ul key={"labGrownDiamond"+index} className="text-white flex w-full justify-around bg-zinc-900 px-3 py-2 rounded-md mb-1">
                    <li className="w-1/12 text-center">
                      {labGrownDiamond.certificateNo}
                    </li>
                    <li className="w-1/12 text-center">
                      {labGrownDiamond?.ID}
                    </li>
                    <li className="w-1/12 text-center">
                      {labGrownDiamond.weight}
                    </li>
                    <li className="w-1/12 text-center">
                      {labGrownDiamond.color}
                    </li>
                    <li className="w-1/12 text-center">
                      {labGrownDiamond.clarity}
                    </li>
                    <li className="w-1/12 text-center">
                      {labGrownDiamond.oRap}
                    </li>

                    <li className="w-1/12 text-center">
                      ${Math.round((labGrownDiamond?.price * 100) / 100)}
                    </li>
                    <li className="w-1/12 text-center">
                      ${Math.round((labGrownDiamond?.totalAmount * 100) / 100)}
                    </li>
                    <li className="flex gap-5 w-1/12 justify-center">
                      <Link
                        href={{
                          pathname: "./editDiamond",
                          query: {
                            diamondId: labGrownDiamond._id,
                          },
                        }}
                      >
                        <span>
                          <Image
                            src={edit}
                            alt="Edit Image"
                            width={24}
                            height={24}
                          />
                        </span>
                      </Link>
                      <span onClick={() => handleDelete(labGrownDiamond._id)}>
                        <Image
                          src={del}
                          alt="Delete Image"
                          width={24}
                          height={24}
                        />
                      </span>
                    </li>
                  </ul>
                  );
                })}
              </TabPanel>
            </Tabs>
          </div>
        </div>
      </div>
    </div>
  );
}
