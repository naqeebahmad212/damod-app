"use client";
import dynamic from 'next/dynamic'
const Header = dynamic(()=>import("@/app/header/page"),{ssr:false})
import Image from "next/image";
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
import Halfmoon from "@/images/filter-shape/halfmoon.svg";
import Traingle from "@/images/filter-shape/tringle.svg";
import Link from "next/link";
import { useEffect, useState } from "react";
import { ErrorMessage, Field, Form, Formik } from "formik";
import * as Yup from "yup";
import { diamondApi } from "@/api";
import Footer from "@/app/footer/page";

const Stocklist: React.FC = () => {
  let query: any;

  const queryString = typeof window !== 'undefined'?window.location.search:null;
  const urlParams = new URLSearchParams(queryString?queryString:"");
  const initalShape = urlParams.get("shape");
  const [shape, setShape] = useState<any>(initalShape);
  const [diamonds, setDiamonds] = useState<any>([]);
  useEffect(() => {
    const query = {
      shape: shape?.toLowerCase(),
    };
    fetchDiamonds(query);
  }, []);
  const fetchDiamonds = async (query: any) => {
    try {
      const res = await diamondApi.getAllDiamondsForUser(query);
      setDiamonds(res.result[0].filteredResult);
      console.log(res);
    } catch (err) {
      console.log(err);
    }
  };
  const handleFilter = async (values: any) => {
    query = {
      ...query,
      shape: shape?.toLowerCase(),
      weight: {
        from: values.weightFrom,
        to: values.weightTo,
      },
    };
    if (values.priceFrom && values.priceTo) {
      query = {
        ...query,
        totalAmount: { from: values.priceFrom, to: values.priceTo },
      };
    }
    if (query.tableFrom && query.tableTo) {
      query = {
        ...query,
        table: { from: query.tableFrom, to: query.tableTo },
      };
      delete query["tableFrom"];
      delete query["tableTo"];
    }
    if (query.sizeFrom && query.sizeTo) {
      query = {
        ...query,
        size: { from: query.sizeFrom, to: query.sizeTo },
      };
      delete query["sizeFrom"];
      delete query["sizeTo"];
    }
    if (query.mease1From && query.mease1To) {
      query = {
        ...query,
        mease1: { from: query.mease1From, to: query.mease1To },
      };
      delete query["mease1From"];
      delete query["mease1To"];
    }
    if (query.mease2From && query.mease2To) {
      query = {
        ...query,
        mease2: { from: query.mease2From, to: query.mease2To },
      };
      delete query["mease2From"];
      delete query["mease2To"];
    }
    if (query.totalDepthFrom && query.totalDepthTo) {
      query = {
        ...query,
        totalDepth: { from: query.totalDepthFrom, to: query.totalDepthTo },
      };
      delete query["totalDepthFrom"];
      delete query["totalDepthTo"];
    }
    if (query.discountFrom && query.discountTo) {
      query = {
        ...query,
        discount: { from: query.discountFrom, to: query.discountTo },
      };
      delete query["discountFrom"];
      delete query["discountTo"];
    }
    fetchDiamonds(query);
  };
  const handleOptionFilter = async (key: any, value: any) => {
    query = { ...query, [key]: value };
  };
  const validationSchema = Yup.object().shape({
    weightFrom: Yup.number()
      .typeError("Weight must be a number")
      .required("Weight from is required"),
    weightTo: Yup.number()
      .typeError("Weight must be a number")
      .required("Weight to is required"),
  });
  return (
    <div className="">
      <div className="bg-gray-300 mb-10">
        <Header />
      </div>
      <div className="p-5">
        <Formik
          initialValues={{
            weightFrom: "",
            weightTo: "",
            priceFrom: "",
            priceTo: "",
          }}
          validationSchema={validationSchema}
          onSubmit={(values, { setSubmitting }) => {
            // Handle form submission
            handleFilter(values);
            setSubmitting(false);
          }}
        >
          {({ isSubmitting }) => (
            <Form className="w-full flex gap-5 flex-col">
              <div className="flex gap-2 items-center font-Fahkwang">
                <div>
                  {shape == "Round" && (
                    <Image src={smallround} alt="Diamond Shape" />
                  )}
                  {shape == "Pear" && <Image src={Pear} alt="Diamond Shape" />}
                  {shape == "Princess" && (
                    <Image src={Princess} alt="Diamond Shape" />
                  )}
                  {shape == "Marquise" && (
                    <Image src={Marquise} alt="Diamond Shape" />
                  )}
                  {shape == "Emerald" && (
                    <Image src={Emerald} alt="Diamond Shape" />
                  )}
                  {shape == "Square Emerald" && (
                    <Image src={SqaureEmerald} alt="Diamond Shape" />
                  )}
                  {shape == "Cushion" && (
                    <Image src={Cushion} alt="Diamond Shape" />
                  )}
                  {shape == "Oval" && <Image src={Oval} alt="Diamond Shape" />}
                  {shape == "Radiant" && (
                    <Image src={Radiant} alt="Diamond Shape" />
                  )}
                  {shape == "Triangle" && (
                    <Image src={Traingle} alt="Diamond Shape" />
                  )}
                  {shape == "Heart" && (
                    <Image src={Heart} alt="Diamond Shape" />
                  )}
                  {shape == "Square Radiant" && (
                    <Image src={SqaureRadiant} alt="Diamond Shape" />
                  )}
                  {shape == "Half moon" && (
                    <Image src={Halfmoon} alt="Diamond Shape" className="w-7"/>
                  )}
                </div>
                <h3 className="text-black text-3xl font-medium">
                  {shape} Shape
                </h3>
              </div>

              <div className="flex justify-between gap-4 w-full bg-[#f1f1f1] p-5 rounded-md">
                <div className="flex gap-5 flex-col md:flex-row">
                  <div className="flex flex-col w-full md:w-1/2">
                    <label className="text-base text-black font-medium mb-4">
                      Weight
                    </label>
                    <div className="flex gap-5 w-full">
                      <div className="w-1/2">
                        <Field
                          type="text"
                          name="weightFrom"
                          placeholder="From"
                          className="border focus:outline-none w-full pl-2 rounded-md h-10"
                        />
                        <ErrorMessage
                          name="weightFrom"
                          component="div"
                          className="text-red-500"
                        />
                      </div>
                      <div className="w-1/2">
                        <Field
                          type="text"
                          name="weightTo"
                          placeholder="To"
                          className="border focus:outline-none w-full pl-2 rounded-md h-10"
                        />
                        <ErrorMessage
                          name="weightTo"
                          component="div"
                          className="text-red-500"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-col w-full md:w-1/2">
                    <label className="text-base text-black font-medium mb-4">
                      Price (Carat)
                    </label>
                    <div className="flex gap-5 w-full">
                      <div className="w-1/2">
                        <Field
                          type="text"
                          name="priceFrom"
                          placeholder="From"
                          className="border focus:outline-none w-full pl-2 rounded-md h-10"
                        />
                        <ErrorMessage
                          name="priceFrom"
                          component="div"
                          className="text-red-500"
                        />
                      </div>
                      <div className="w-1/2">
                        <Field
                          type="text"
                          name="priceTo"
                          placeholder="To"
                          className="border focus:outline-none w-full  pl-2 rounded-md h-10"
                        />
                        <ErrorMessage
                          name="priceTo"
                          component="div"
                          className="text-red-500"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-12 p-5 border border-[#ccc] rounded-md relative ">
                <h3 className="text-base text-gray-900 font-bold mb-4 bg-white absolute px-5 py-1 -top-5 rounded-full border border-[#ccc]">
                  Select Options
                </h3>
                <div className="flex mt-5 gap-5 flex-col md:flex-row">
                  <div className="flex flex-col w-full md:w-2/5 lg:w-1/5">
                    <label className="text-base text-black font-medium mb-2">
                      Shape
                    </label>
                    <select
                      className="border border-[#ccc] h-10 px-2 rounded-md text-[#999] focus:outline-none"
                      value={shape}
                      disabled
                    >
                      <option value={""}>Select Shape</option>
                      <option value={"Round"}>Round</option>
                      <option value={"Pear"}>Pear</option>
                      <option value={"Princess"}>Princess</option>
                      <option value={"Marquise"}>Marquise</option>
                      <option value={"Emerald"}>Emerald</option>
                      <option value={"Square Emerald"}>Square Emerald</option>
                      <option value={"Cushion"}>Cushion</option>
                      <option value={"Oval"}>Oval</option>
                      <option value={"Radiant"}>Radiant</option>
                      <option value={"Triangle"}>Triangle</option>
                      <option value={"Heart"}>Heart</option>
                      <option value={"Square Radiant"}>Square Radiant</option>
                      <option value="Half moon">Half Moon</option>
                    </select>
                  </div>

                  <div className="flex flex-col w-full md:w-2/5 lg:w-1/5">
                    <label className="text-base text-black font-medium mb-2">
                      Color
                    </label>
                    <select
                      className="border border-[#ccc] h-10 px-2 rounded-md text-[#999] focus:outline-none"
                      onChange={(e) =>
                        handleOptionFilter("color", e.target.value)
                      }
                    >
                      <option value="All">All</option>
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
                      <option value="Fancy">Fancy</option>
                    </select>
                  </div>

                  <div className="flex flex-col w-full md:w-2/5 lg:w-1/5">
                    <label className="text-base text-black font-medium mb-2">
                      Clarity
                    </label>
                    <select
                      className="border border-[#ccc] h-10 px-2 rounded-md text-[#999] focus:outline-none"
                      onChange={(e) =>
                        handleOptionFilter("clarity", e.target.value)
                      }
                    >
                      <option value="All">All</option>
                      <option value="FL">FL</option>
                      <option value="IF">IF</option>
                      <option value="VVS1">VVS1</option>
                      <option value="VVS2">VVS2</option>
                      <option value="VS1">VS1</option>
                      <option value="VS2">VS2</option>
                      <option value="SI1">SI1</option>
                      <option value="SI2">SI2</option>
                      <option value="SI3">SI3</option>
                      <option value="I1">I1</option>
                      <option value="I2">I2</option>
                      <option value="I3">I3</option>
                    </select>
                  </div>

                  <div className="flex flex-col w-full md:w-2/5 lg:w-1/5">
                    <label className="text-base text-black font-medium mb-2">
                      Lab
                    </label>
                    <select
                      className="border border-[#ccc] h-10 px-2 rounded-md text-[#999] focus:outline-none"
                      onChange={(e) =>
                        handleOptionFilter("lab", e.target.value)
                      }
                    >
                      <option value="All">All</option>
                      <option value="FL">GIA</option>
                      <option value="IF">IGI</option>
                      <option value="VVS1">HRD</option>
                      <option value="VVS2">PARCEL</option>
                      <option value="VS1">NONE</option>
                    </select>
                  </div>

                  <div className="flex flex-col w-full md:w-2/5 lg:w-1/5">
                    <label className="text-base text-black font-medium mb-2">
                      Cut
                    </label>
                    <select
                      className="border border-[#ccc] h-10 px-2 rounded-md text-[#999] focus:outline-none"
                      onChange={(e) =>
                        handleOptionFilter("cut", e.target.value)
                      }
                    >
                      <option value="All">All</option>
                      <option value="ID">ID</option>
                      <option value="EX">EX</option>
                      <option value="VG">VG</option>
                      <option value="GD">GD</option>
                      <option value="FR">FR</option>
                      <option value="PO">PO</option>
                    </select>
                  </div>
                </div>

                <div className="flex mt-5 gap-5 flex-col md:flex-row">
                  <div className="flex flex-col w-full md:w-2/5 lg:w-1/5 mb-5">
                    <label className="text-base text-black font-medium mb-2">
                      Polish
                    </label>
                    <select
                      className="border border-[#ccc] h-10 px-2 rounded-md text-[#999] focus:outline-none"
                      onChange={(e) =>
                        handleOptionFilter("polish", e.target.value)
                      }
                    >
                      <option value="All">All</option>
                      <option value="ID">ID</option>
                      <option value="EX">EX</option>
                      <option value="VG">VG</option>
                      <option value="GD">GD</option>
                      <option value="FR">FR</option>
                      <option value="PO">PO</option>
                    </select>
                  </div>

                  <div className="flex flex-col w-full md:w-2/5 lg:w-1/5 mb-5">
                    <label className="text-base text-black font-medium mb-2">
                      Symmetry
                    </label>
                    <select
                      className="border border-[#ccc] h-10 px-2 rounded-md text-[#999] focus:outline-none"
                      onChange={(e) =>
                        handleOptionFilter("symmetry", e.target.value)
                      }
                    >
                      <option value="All">All</option>
                      <option value="ID">ID</option>
                      <option value="EX">EX</option>
                      <option value="VG">VG</option>
                      <option value="GD">GD</option>
                      <option value="FR">FR</option>
                      <option value="PO">PO</option>
                    </select>
                  </div>

                  <div className="flex flex-col w-full md:w-2/5 lg:w-1/5 mb-5">
                    <label className="text-base text-black font-medium mb-2">
                      Fluoresence
                    </label>
                    <select
                      className="border border-[#ccc] h-10 px-2 rounded-md text-[#999] focus:outline-none"
                      onChange={(e) =>
                        handleOptionFilter("fluorescence", e.target.value)
                      }
                    >
                      <option value="All">All</option>
                      <option value="None">None</option>
                      <option value="Faint">Faint</option>
                      <option value="Slight">Slight</option>
                      <option value="Very Slight">Very Slight</option>
                      <option value="Medium">Medium</option>
                      <option value="Strong">Strong</option>
                      <option value="Very Strong">Very Strong</option>
                    </select>
                  </div>
                  <div className="flex flex-col w-full md:w-2/5 lg:w-1/5 mb-5">
                    <label className="text-base text-black font-medium mb-2">
                      Inclusion
                    </label>
                    <select
                      className="border border-[#ccc] h-10 px-2 rounded-md text-[#999] focus:outline-none"
                      onChange={(e) =>
                        handleOptionFilter("inclusion", e.target.value)
                      }
                    >
                      <option value="All">All</option>
                      <option value="CB0">CB0</option>
                      <option value="CB1">CB1</option>
                      <option value="CB2">CB2</option>
                      <option value="SB0">SB0</option>
                      <option value="SB1">SB1</option>
                      <option value="SB2">SB2</option>
                      <option value="SB3">SB3</option>
                    </select>
                  </div>
                  <div className="flex flex-col w-full md:w-2/5 lg:w-1/5 "></div>
                </div>

                <div className="pt-5 mb-5">
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-5">
                    <div className="flex flex-col w-full ">
                      <label className="text-base text-black font-medium mb-4">
                        Table
                      </label>
                      <div className="flex gap-5 w-full">
                        <input
                          type="text"
                          placeholder="From"
                          onChange={(e) =>
                            handleOptionFilter("tableFrom", e.target.value)
                          }
                          className="border focus:outline-none w-1/2 pl-2 rounded-md h-10"
                        />
                        <input
                          type="text"
                          placeholder="To"
                          onChange={(e) =>
                            handleOptionFilter("tableTo", e.target.value)
                          }
                          className="border focus:outline-none w-1/2 pl-2 rounded-md h-10"
                        />
                      </div>
                    </div>

                    {/* <div className="flex flex-col w-full ">
                      <label className="text-base text-black font-medium mb-4">
                        Size
                      </label>
                      <div className="flex gap-5 w-full">
                        <input
                          type="text"
                          placeholder="From"
                          className="border focus:outline-none w-1/2 pl-2 rounded-md h-10"
                          onChange={(e) =>
                            handleOptionFilter("sizeFrom", e.target.value)
                          }
                        />
                        <input
                          type="text"
                          placeholder="To"
                          className="border focus:outline-none w-1/2 pl-2 rounded-md h-10"
                          onChange={(e) =>
                            handleOptionFilter("sizeTo", e.target.value)
                          }
                        />
                      </div>
                    </div> */}

                    <div className="flex flex-col w-full ">
                      <label className="text-lg text-black font-medium mb-4">
                        Meas 1
                      </label>
                      <div className="flex gap-5 w-full">
                        <input
                          type="text"
                          placeholder="From"
                          onChange={(e) =>
                            handleOptionFilter("mease1From", e.target.value)
                          }
                          className="border focus:outline-none w-1/2 pl-2 rounded-md h-10"
                        />
                        <input
                          type="text"
                          placeholder="To"
                          onChange={(e) =>
                            handleOptionFilter("mease1To", e.target.value)
                          }
                          className="border focus:outline-none w-1/2 pl-2 rounded-md h-10"
                        />
                      </div>
                    </div>
                    {/* 
                    <div className="flex flex-col w-full ">
                      <label className="text-lg text-black font-medium mb-4">
                        Meas 2
                      </label>
                      <div className="flex gap-5 w-full">
                        <input
                          type="text"
                          placeholder="From"
                          onChange={(e) =>
                            handleOptionFilter("mease2From", e.target.value)
                          }
                          className="border focus:outline-none w-1/2 pl-2 rounded-md h-10"
                        />
                        <input
                          type="text"
                          placeholder="To"
                          onChange={(e) =>
                            handleOptionFilter("mease2To", e.target.value)
                          }
                          className="border focus:outline-none w-1/2 pl-2 rounded-md h-10"
                        />
                      </div>
                    </div> */}

                    <div className="flex flex-col w-full ">
                      <label className="text-lg text-black font-medium mb-4">
                        Total Depth
                      </label>
                      <div className="flex gap-5 w-full">
                        <input
                          type="text"
                          placeholder="From"
                          onChange={(e) =>
                            handleOptionFilter("totalDepthFrom", e.target.value)
                          }
                          className="border focus:outline-none w-1/2 pl-2 rounded-md h-10"
                        />
                        <input
                          type="text"
                          placeholder="To"
                          onChange={(e) =>
                            handleOptionFilter("totalDepthTo", e.target.value)
                          }
                          className="border focus:outline-none w-1/2 pl-2 rounded-md h-10"
                        />
                      </div>
                    </div>

                    {/* <div className="flex flex-col w-full ">
                      <label className="text-lg text-black font-medium mb-4">
                        Discount
                      </label>
                      <div className="flex gap-5 w-full">
                        <input
                          type="text"
                          placeholder="From"
                          onChange={(e) =>
                            handleOptionFilter("discountFrom", e.target.value)
                          }
                          className="border focus:outline-none w-1/2 pl-2 rounded-md h-10"
                        />
                        <input
                          type="text"
                          placeholder="To"
                          onChange={(e) =>
                            handleOptionFilter("discountTo", e.target.value)
                          }
                          className="border focus:outline-none w-1/2 pl-2 rounded-md h-10"
                        />
                      </div>
                    </div> */}
                  </div>
                </div>
                <input
                  type="submit"
                  name="sbtn"
                  value="Search"
                  className="bg-black rounded-full text-white px-5 py-1"
                />
              </div>
            </Form>
          )}
        </Formik>
      </div>

      <div className="p-5 mt-10 w-full ">
        <div className="overflow-x-auto mx-auto">
          <div className="w-[1900px]">
          <table className="bg-[#f5f5f5] w-full border border-[#d6d6d6] table-auto max-w-[5000px]">
            <thead>
              <tr>
                <th className="py-3 text-base border-r border-[#ccc] px-3">
                  Shape
                </th>
                <th className="py-3 text-base border-r border-[#ccc] px-3">
                  ID
                </th>
                <th className="py-3 text-base border-r border-[#ccc] px-3">
                  Weight
                </th>
                <th className="py-3 text-base border-r border-[#ccc] px-3">
                  Price
                </th>
                <th className="py-3 text-base border-r border-[#ccc] px-3">
                  Certificate
                </th>
                <th className="py-3 text-base border-r border-[#ccc] px-3">
                  Color
                </th>
                <th className="py-3 text-base border-r border-[#ccc] px-3">
                  Lab
                </th>
                <th className="py-3 text-base border-r border-[#ccc] px-3">
                  Clarity
                </th>
                <th className="py-3 text-base border-r border-[#ccc] px-3">
                  Cut
                </th>
                <th className="py-3 text-base border-r border-[#ccc] px-3">
                  Polish
                </th>
                <th className="py-3 text-base border-r border-[#ccc] px-3">
                  Symmetry
                </th>
                <th className="py-3 text-base border-r border-[#ccc] px-3">
                  Fluoresence
                </th>
                <th className="py-3 text-base border-r border-[#ccc] px-3">
                  Availability
                </th>
                {/* <th className="py-3 text-base border-r border-[#ccc] px-3">Size</th> */}
                <th className="py-3 text-base border-r border-[#ccc] px-3">
                  Table
                </th>
                <th className="py-3 text-base border-r border-[#ccc] px-3">
                  Meas 1
                </th>
                <th className="py-3 text-base border-r border-[#ccc] px-3">
                  Total Depth
                </th>
                <th className="py-3 text-base border-r border-[#ccc] px-3">
                  Discount
                </th>
              </tr>
            </thead>
            <tbody>
              {diamonds?.map((diamond: any,index:number) => {
                console.log(diamond);

                return (
                  <tr key={"diamond"+index} className="text-center bg-[#ededed]">
                    <td className="py-2 text-base flex justify-center  border-r border-[#ccc]">
                      {shape == "Round" && (
                        <Image src={smallround} alt="Diamond Shape" />
                      )}
                      {shape == "Pear" && (
                        <Image src={Pear} alt="Diamond Shape" />
                      )}
                      {shape == "Princess" && (
                        <Image src={Princess} alt="Diamond Shape" />
                      )}
                      {shape == "Marquise" && (
                        <Image src={Marquise} alt="Diamond Shape" />
                      )}
                      {shape == "Emerald" && (
                        <Image src={Emerald} alt="Diamond Shape" />
                      )}
                      {shape == "Square Emerald" && (
                        <Image src={SqaureEmerald} alt="Diamond Shape" />
                      )}
                      {shape == "Cushion" && (
                        <Image src={Cushion} alt="Diamond Shape" />
                      )}
                      {shape == "Oval" && (
                        <Image src={Oval} alt="Diamond Shape" />
                      )}
                      {shape == "Radiant" && (
                        <Image src={Radiant} alt="Diamond Shape" />
                      )}
                      {shape == "Triangle" && (
                        <Image src={Traingle} alt="Diamond Shape" />
                      )}
                      {shape == "Heart" && (
                        <Image src={Heart} alt="Diamond Shape" />
                      )}
                      {shape == "Square Radiant" && (
                        <Image src={SqaureRadiant} alt="Diamond Shape" />
                      )}
                    </td>
                    <td className="py-2 text-base  border-r border-[#ccc] ">
                      {diamond.ID}
                    </td>
                    <td className="py-2 text-base  border-r border-[#ccc] ">
                      {diamond.weight}oct
                    </td>
                    <td className="py-2 text-base  border-r border-[#ccc]">
                      ${Math.round(diamond.totalAmount * 100) / 100}
                    </td>
                    <td className="py-2 text-base  border-r border-[#ccc]">
                      {diamond.certificateNo}
                    </td>
                    <td className="py-2 text-base  border-r border-[#ccc]">
                      {diamond.color}
                    </td>
                    <td className="py-2 text-base  border-r border-[#ccc]">
                      {diamond.lab}
                    </td>
                    <td className="py-2 text-base  border-r border-[#ccc]">
                      {diamond.clarity}
                    </td>
                    <td className="py-2 text-base  border-r border-[#ccc]">
                      {diamond?.cut}
                    </td>
                    <td className="py-2 text-base  border-r border-[#ccc]">
                      {diamond.polish}
                    </td>
                    <td className="py-2 text-base  border-r border-[#ccc]">
                      {diamond.symmetry}
                    </td>
                    <td className="py-2 text-base  border-r border-[#ccc]">
                      {diamond.fluorescence}
                    </td>
                    <td className="py-2 text-base  border-r border-[#ccc]">
                      {diamond.availability}
                    </td>
                    {/* <td className="py-2 text-base  border-r border-[#ccc]">
                      {diamond?.size}
                    </td> */}
                    <td className="py-2 text-base  border-r border-[#ccc]">
                      {diamond.table}
                    </td>
                    <td className="py-2 text-base  border-r border-[#ccc]">
                      {diamond?.mease1?.from} -{diamond?.mease1?.to}
                    </td>
                    <td className="py-2 text-base  border-r border-[#ccc]">
                      {diamond.totalDepth}
                    </td>
                    <td className="py-2 text-base  border-r border-[#ccc]">
                      {diamond.discount}
                    </td>
                  </tr>
                );
              })}
            </tbody>
            
          </table>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}


export default Stocklist; 