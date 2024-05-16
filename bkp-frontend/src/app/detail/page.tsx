"use client";
import Header from "@/app/header/page";
import Image from "next/image";
import round from "@/images/round-diamond.png";
import certificate from "@/images/certificate.png";
import { useEffect, useState } from "react";
import { diamondApi, usersApi } from "@/api";
import smallround from "@/images/round-small.png";
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

export default function diamonddetail() {
  const [diamond, setDiamond] = useState<any>();

  useEffect(() => {
    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);
    const diamondId = urlParams.get("id");
    fetchDiamond(diamondId);
    createUserSearchRecord(diamondId);
  }, []);

  const fetchDiamond = async (diamondId: any) => {
    try {
      const res = await diamondApi.getDiamond(diamondId);
      setDiamond(res.result);
    } catch (error) {
      console.log(error);
    }
  };

  const createUserSearchRecord = async (diamondId: any) => {
    const userDetails = JSON.parse(localStorage.getItem("userDetails"));
    const payload = {
      user: userDetails.userId,
      diamond: [diamondId],
    };
    try {
      const res = await usersApi.userSearchRecord(payload);
      console.log(res);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
    <div className="bg-gray-100">
    <Header/>
    </div>
    <div className="lg:m-10 m-4 font-Fahkwang">
      <div className="flex gap-4 flex-col md:flex-row">
        <div className="border border-[#ccc]  w-full md:w-1/5 p-10 bg-[#f5f5f5] grid place-content-center ">
          {diamond?.shape == "round" && (
            <Image src={smallround} alt="Diamond Shape" className="w-36"/>
          )}
          {diamond?.shape == "pear" && <Image src={Pear} alt="Diamond Shape" className="w-36 mx-auto" />}
          {diamond?.shape == "princess" && (
            <Image src={Princess} alt="Diamond Shape" className="w-36 mx-auto"/>
          )}
          {diamond?.shape == "marquise" && (
            <Image src={Marquise} alt="Diamond Shape" className="w-36 mx-auto"/>
          )}
          {diamond?.shape == "emerald" && (
            <Image src={Emerald} alt="Diamond Shape" className="w-36 mx-auto"/>
          )}
          {diamond?.shape == "square emerald" && (
            <Image src={SqaureEmerald} alt="Diamond Shape" className="w-36 mx-auto"/>
          )}
          {diamond?.shape == "cushion" && (
            <Image src={Cushion} alt="Diamond Shape" className="w-36 mx-auto"/>
          )}
          {diamond?.shape == "oval" && <Image src={Oval} alt="Diamond Shape" className="w-36 mx-auto"/>}
          {diamond?.shape == "radiant" && (
            <Image src={Radiant} alt="Diamond Shape" className="w-36 mx-auto"/>
          )}
          {diamond?.shape == "triangle" && (
            <Image src={Traingle} alt="Diamond Shape" className="w-36 mx-auto"/>
          )}
          {diamond?.shape == "heart" && (
            <Image src={Heart} alt="Diamond Shape" className="w-36 mx-auto"/>
          )}
          {diamond?.shape == "square radiant" && (
            <Image src={SqaureRadiant} alt="Diamond Shape" className="w-36 mx-auto"/>
          )}
        </div>
        <div className="w-full md:w-4/5">
          <div className="block md:hidden">
            <ul className="grid border">
              <li className="border-b p-2">
                <span className="min-w-36 inline-block"><b>Shape : </b></span>
                <span className="text-[#888]">{diamond?.shape.toUpperCase()}</span>
              </li>
              <li className="border-b p-2">
                <span className="min-w-36 inline-block"><b>Certificate No : </b></span>
                <span className="text-[#888]">{diamond?.certificateNo}</span>
              </li>
              <li className="border-b p-2">
                <span className="min-w-36 inline-block"><b>Weight : </b></span>
                <span className="text-[#888]">{diamond?.weight} ct</span>
              </li>
              <li className="border-b p-2">
                <span className="min-w-36 inline-block"><b>Color : </b></span>
                <span className="text-[#888]">{diamond?.color}</span>
              </li>
              <li className="border-b p-2">
                <span className="min-w-36 inline-block"><b>Clarity : </b></span>
                <span className="text-[#888]">{diamond?.clarity}</span>
              </li>
              <li className="border-b p-2">
                <span className="min-w-36 inline-block"><b>Lab : </b></span>
                <span className="text-[#888]">{diamond?.lab}</span>
              </li>
              <li className="border-b p-2">
                <span className="min-w-36 inline-block"><b>Cut : </b></span>
                <span className="text-[#888]">{diamond?.cut}</span>
              </li>
              <li className="border-b p-2">
                <span className="min-w-36 inline-block"><b>Polish : </b></span>
                <span className="text-[#888]">{diamond?.polish}</span>
              </li>
              <li className="border-b p-2">
                <span className="min-w-36 inline-block"><b>Symmetry : </b></span>
                <span className="text-[#888]">{diamond?.symmetry}</span>
              </li>
              <li className="border-b p-2">
                <span className="min-w-36 inline-block"><b>Fluoresence : </b></span>
                <span className="text-[#888]">{diamond?.fluorescence}</span>
              </li>
              <li className="border-b p-2">
                <span className="min-w-36 inline-block"><b>Inclusion : </b></span>
                <span className="text-[#888]">{diamond?.inclusion}</span>
              </li>
              <li className="border-b p-2">
                <span className="min-w-36 inline-block"><b>Total Depth : </b></span>
                <span className="text-[#888]">{diamond?.totalDepth}</span>
              </li>
              <li className="border-b p-2">
                <span className="min-w-36 inline-block"><b>Table : </b></span>
                <span className="text-[#888]">{diamond?.table}</span>
              </li>
              <li className="border-b p-2">
                <span className="min-w-36 inline-block"><b>Measurement : </b></span>
                <span className="text-[#888]">{diamond?.table}</span>
              </li>
              <li className="border-b p-2">
                <span className="min-w-36 inline-block"><b>ID : </b></span>
                <span className="text-[#888]">{diamond?.ID}</span>
              </li>
              <li className="p-2">
                <span className="min-w-36 inline-block"><b>Country : </b></span>
                <span className="text-[#888]">{diamond?.country}</span>
              </li>
            </ul>
          </div>
          <div className="hidden md:block">
          <table className="w-full border border-[#ccc]">
            <tbody>
              <tr className="p-4">
                <td className="border border-[#ccc] p-3 text-[#666]">
                  <b>Shape :</b> &nbsp;{" "}
                  <span className="text-[#888]">{diamond?.shape.toUpperCase()}</span>
                </td>
                <td className="border border-[#ccc] p-3 text-[#666]">
                  <b>Certificate No :</b> &nbsp;{" "}
                  <span className="text-[#888]">{diamond?.certificateNo}</span>
                </td>
                <td className="border border-[#ccc] p-3 text-[#666]">
                  <b>Weight :</b> &nbsp;{" "}
                  <span className="text-[#888]">{diamond?.weight} ct</span>
                </td>
              </tr>
              <tr className="p-4">
                <td className="border border-[#ccc] p-3 text-[#666]">
                  <b>Color :</b> &nbsp;{" "}
                  <span className="text-[#888]">{diamond?.color}</span>
                </td>
                <td className="border border-[#ccc] p-3 text-[#666]">
                  <b>Clarity :</b> &nbsp;{" "}
                  <span className="text-[#888]">{diamond?.clarity}</span>
                </td>
                <td className="border border-[#ccc] p-3 text-[#666]">
                  <b>Lab :</b> &nbsp;{" "}
                  <span className="text-[#888]">{diamond?.lab}</span>
                </td>
              </tr>
              <tr className="p-4">
                <td className="border border-[#ccc] p-3 text-[#666]">
                  <b>Cut :</b> &nbsp;{" "}
                  <span className="text-[#888]">{diamond?.cut}</span>
                </td>
                <td className="border border-[#ccc] p-3 text-[#666]">
                  <b>Polish :</b> &nbsp;{" "}
                  <span className="text-[#888]">{diamond?.polish}</span>
                </td>
                <td className="border border-[#ccc] p-3 text-[#666]">
                  <b>Symmetry :</b> &nbsp;{" "}
                  <span className="text-[#888]">{diamond?.symmetry}</span>
                </td>
              </tr>
              <tr className="p-4">
                <td className="border border-[#ccc] p-3 text-[#666]">
                  <b>Fluoresence :</b> &nbsp;{" "}
                  <span className="text-[#888]">{diamond?.fluorescence}</span>
                </td>
                <td className="border border-[#ccc] p-3 text-[#666]">
                  <b>Inclusion :</b> &nbsp;{" "}
                  <span className="text-[#888]">{diamond?.inclusion}</span>
                </td>
                <td className="border border-[#ccc] p-3 text-[#666]">
                  <b>Total Depth :</b> &nbsp;{" "}
                  <span className="text-[#888]">
                    {diamond?.totalDepth}
                  </span>
                </td>
              </tr>
              <tr className="p-4">
                <td className="border border-[#ccc] p-3 text-[#666]">
                  <b>Table :</b> &nbsp;{" "}
                  <span className="text-[#888]">
                    {diamond?.table}
                  </span>
                </td>
                <td className="border border-[#ccc] p-3 text-[#666]">
                  <b>Meas1 :</b> &nbsp;{" "}
                  <span className="text-[#888]">
                    {diamond?.mease1?.from} - {diamond?.mease1?.to}
                  </span>
                </td>
                <td className="border border-[#ccc] p-3 text-[#666]">
                  <b>ID :</b> &nbsp;{" "}
                  <span className="text-[#888]">{diamond?.ID}</span>
                </td>

              </tr>
              <tr className="p-4">
                <td className="border border-[#ccc] p-3 text-[#666]">
                  <b>Country</b> &nbsp;{" "}
                  <span className="text-[#888]">{diamond?.country}</span>
                </td>
              </tr>
            </tbody>
          </table>
          </div>
        </div>
      </div>
      <div className="my-10 border border-[#ccc] p-4">
        <Image src={certificate} alt="Certificate Image" className="w-full" />
      </div>
    </div>
    </>
  );
}
