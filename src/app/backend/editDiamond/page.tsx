"use client";
import logo from "@/images/logo.png";
import Image from "next/image";
import hello from "@/images/admin-bg.png";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { diamondApi } from "@/api";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export default function EditDiamond({
  searchParams,
}: {
  searchParams: { diamondId: string };
}) {
  const router = useRouter();
  const [diamond, setDiamond] = useState<any>();
  console.log(searchParams.diamondId);

  useEffect(() => {
    fetchDiamond(searchParams.diamondId);
  }, []);

  const fetchDiamond = async (diamondId: string) => {
    try {
      const res = await diamondApi.getDiamondForAdmin(diamondId);
      console.log(res.result.price);
      setDiamond(res.result);
    } catch (error) {
      console.log(error);
    }
  };
  //   const queryString = window.location.search;
  //   const urlParams = new URLSearchParams(queryString);
  //   console.log(queryString);

  //   const diamondId = urlParams.get("id");
  //   console.log(diamondId);

  const handleUpdateDiamond = async (values: any) => {
    console.log(values);

    const payload = { ...values };
    try {
      const res = await diamondApi.updateDiamond(
        searchParams.diamondId,
        payload
      );
      if (res.status == 200) {
        router.push("./stock");
      } else {
        console.log(res);
        console.log("Error Updating Diamond");
      }
    } catch (err) {
      console.log(err);
      console.log("Error Updating Diamond");
    }
  };
  const validationSchema = Yup.object().shape({
    ID: Yup.string().required("Diamond Id is required"),
    availability: Yup.string().required("Availability is required"),
    shape: Yup.string().required("Shape is required"),
    certificateNo: Yup.string().required("Certificate No is required"),
    country: Yup.string().required("Country is required"),
    price: Yup.number()
      .typeError("Price must be a number")
      .required("Price is Required"),
    weight: Yup.string().required("Weight is required"),
    color: Yup.string().required("Color is Required"),
    clarity: Yup.string().required("Clarity is Required"),
    lab: Yup.string().required("Lab is Required"),
    polish: Yup.string().required("Polish is required"),
    symmetry: Yup.string().required("Symmetry is Required"),
    fluorescence: Yup.string().required("Fluorescence is required"),
    cut: Yup.string().required("Cut is Required"),
    oRap: Yup.number()
      .typeError("ORAP value must be a number")
      .required("ORap  is required"),
    // size: Yup.number()
    //   .typeError("Size value must be a number")
    //   .required("Size  is required"),
    table: Yup.number()
      .typeError("Table should be a number")
      .required("Table is Required"),
    totalDepth: Yup.number()
      .typeError("Depth must be a number")
      .required("Depth is Required"),
    discount: Yup.number()
      .typeError("Discount must be a number")
      .required("Discount is Required"),
    mease1: Yup.object().shape({
      from: Yup.number()
        .typeError("From value must be a number")
        .required("From value is required"),
      to: Yup.number()
        .typeError("To value must be a number")
        .required("To value is required"),
    }),
    totalAmount: Yup.number()
      .typeError("Amount must be a number")
      .required("Amount is Required"),
  });
  const handleLogout = () => {3
    typeof window !== 'undefined' ?window.localStorage.removeItem("adminToken"):null;
    router.push("./login");
  };
  if (!diamond) {
    return <div>Loading ...</div>;
  }
  return (
    <div
      style={{
        backgroundImage: `url(${hello.src})`,
      }}
      className="min-h-screen font-Fahkwang  bg-cover bg-no-repeat bg-center"
    >
      <div className="flex p-5 gap-14 min-h-screen">
        <div className="p-5 bg-white bg-opacity-25 rounded-3xl w-1/4">
          <div className="bg-[#00314C] p-5 rounded-3xl">
            <Image src={logo} alt="Website Logo" />
          </div>
          <div className="mt-10">
            <ul className="text-white space-y-3 text-xl">
              <li className="px-5 py-2 rounded-lg">
                <a href="#">Dashboard</a>
              </li>
              <li className="px-5 py-2 rounded-lg bg-[#061539]">
                <a href="./addstock">Add Stock</a>
              </li>
              <li className="px-5 py-2 rounded-lg">
                <a href="./stock">List of Stock</a>
              </li>
              <li className="px-5 py-2 rounded-lg">
                <a href="./visitor">List of Visitor</a>
              </li>
              <li className="px-5 py-2 rounded-lg bg-[#061539]">
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
        <Formik
          initialValues={{
            ID: diamond?.ID,
            availability: diamond?.availability,
            country: diamond?.country,
            keyToSymbol: diamond?.keyToSymbol,
            totalAmount: diamond?.totalAmount,
            ratio: diamond?.ratio,
            oRap: diamond?.oRap,
            shape: diamond?.shape,
            certificateNo: diamond?.certificateNo,
            price: diamond?.price,
            weight: diamond?.weight,
            color: diamond?.color,
            shade: diamond?.shade,
            clarity: diamond?.clarity,
            sieve: diamond?.sieve,
            lab: diamond?.lab,
            polish: diamond?.polish,
            symmetry: diamond?.symmetry,
            fluorescence: diamond?.fluorescence,
            inclusion: diamond?.inclusion,
            cut: diamond?.cut,
            size: diamond?.size,
            table: diamond?.table,
            totalDepth: diamond?.totalDepth,
            discount: diamond?.discount,
            mease1: {
              from: diamond?.mease1?.from,
              to: diamond?.mease1?.to,
            },
          }}
          validationSchema={validationSchema}
          onSubmit={handleUpdateDiamond}
        >
          {({ isSubmitting }) => (
            <Form className="w-full flex flex-col">
              <div className="w-full flex flex-col">
                <div className="flex gap-6 mb-6">
                  <div className="flex flex-col w-1/2">
                    <label htmlFor="shape" className="text-white mb-2">
                      Shape
                    </label>
                    <Field
                      as="select"
                      id="shape"
                      name="shape"
                      className="p-2 bg-white bg-opacity-50 focus:outline-none rounded-lg font-bold"
                    >
                      <option value={""}>Select an Option</option>
                      <option value="round">Round</option>
                      <option value="pear">Pear</option>
                      <option value="heart">Heart</option>
                      <option value="emerald">Emerald</option>
                      <option value="cushion">Cushion</option>
                      <option value="princess">Princess</option>
                      <option value="marquise">Marquise</option>
                      <option value="radiant">Radiant</option>
                      <option value="triangle">Triangle</option>{" "}
                      {/* Corrected typo */}
                      <option value="square-emerald">Square Emerald</option>
                      <option value="square-radiant">Square Radiant</option>
                      <option value="half-moon">Half Moon</option>
                    </Field>
                    <ErrorMessage
                      name="shape"
                      component="div"
                      className="text-red-500"
                    />
                  </div>
                  <div className="flex flex-col w-1/2">
                    <label htmlFor="certificateNo" className="text-white mb-2">
                      Certificate No
                    </label>
                    <Field
                      type="text"
                      id="certificateNo"
                      name="certificateNo"
                      className="h-10 font-bold rounded-lg bg-white bg-opacity-50 focus:outline-none px-4 text-black"
                    />
                    <ErrorMessage
                      name="certificateNo"
                      component="div"
                      className="text-red-500"
                    />
                  </div>
                </div>
                <div className="flex gap-6 mb-6">
                  <div className="flex flex-col w-1/2">
                    <label htmlFor="ID" className="text-white mb-2">
                      ID
                    </label>
                    <Field
                      type="text"
                      id="ID"
                      name="ID"
                      className="p-2 bg-white bg-opacity-50 focus:outline-none rounded-lg font-bold"
                    ></Field>
                    <ErrorMessage
                      name="ID"
                      component="div"
                      className="text-red-500"
                    />
                  </div>
                  <div className="flex flex-col w-1/2">
                    <label htmlFor="availability" className="text-white mb-2">
                      Availability
                    </label>
                    <Field
                      type="text"
                      id="availability"
                      name="availability"
                      className="h-10 font-bold rounded-lg bg-white bg-opacity-50 focus:outline-none px-4 text-black"
                    />
                    <ErrorMessage
                      name="availability"
                      component="div"
                      className="text-red-500"
                    />
                  </div>
                </div>
                <div className="flex gap-6 mb-6">
                  <div className="flex flex-col w-1/2">
                    <label htmlFor="oRap" className="text-white mb-2">
                      ORap
                    </label>
                    <Field
                      type="text"
                      id="oRap"
                      name="oRap"
                      className="h-10 font-bold rounded-lg bg-white bg-opacity-50 focus:outline-none px-4 text-black"
                    />
                    <ErrorMessage
                      name="oRap"
                      component="div"
                      className="text-red-500"
                    />
                  </div>
                  <div className="flex flex-col w-1/2">
                    <label htmlFor="price" className="text-white mb-2">
                      Rate $/CT
                    </label>
                    <Field
                      type="text"
                      id="price"
                      name="price"
                      className="h-10 font-bold rounded-lg bg-white bg-opacity-50 focus:outline-none px-4 text-black"
                    />
                    <ErrorMessage
                      name="price"
                      component="div"
                      className="text-red-500"
                    />
                  </div>
                </div>

                <div className="flex gap-6 mb-6">
                  <div className="flex flex-col w-1/2">
                    <label htmlFor="totalAmount" className="text-white mb-2">
                      Amount $
                    </label>
                    <Field
                      type="text"
                      id="totalAmount"
                      name="totalAmount"
                      className="h-10 font-bold rounded-lg bg-white bg-opacity-50 focus:outline-none px-4 text-black"
                    />
                    <ErrorMessage
                      name="totalAmount"
                      component="div"
                      className="text-red-500"
                    />
                  </div>
                  <div className="flex flex-col w-1/2">
                    <label htmlFor="weight" className="text-white mb-2">
                      Carat
                    </label>
                    <Field
                      type="text"
                      id="weight"
                      name="weight"
                      placeholder="Enter weight"
                      className="h-10 font-bold rounded-lg bg-white bg-opacity-50 focus:outline-none px-4 text-black placeholder-text-slate-900"
                    />
                    <ErrorMessage
                      name="weight"
                      component="div"
                      className="text-red-500"
                    />
                  </div>
                </div>

                <div className="flex gap-6 mb-6">
                  <div className="flex flex-col w-1/2">
                    <label htmlFor="color" className="text-white mb-2">
                      Color
                    </label>
                    <Field
                      as="select"
                      id="color"
                      name="color"
                      className="p-2 bg-white bg-opacity-50 focus:outline-none rounded-lg font-bold"
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
                    </Field>
                    <ErrorMessage
                      name="color"
                      component="div"
                      className="text-red-500"
                    />
                  </div>
                  <div className="flex flex-col w-1/2">
                    <label htmlFor="shade" className="text-white mb-2">
                      Shade
                    </label>
                    <Field
                      as="select"
                      id="shade"
                      name="shade"
                      className="p-2 bg-white bg-opacity-50 focus:outline-none rounded-lg font-bold"
                    >
                      <option value="">Select a shade</option>
                      <option value="White">White</option>
                      <option value="Yellow">Yellow</option>
                      <option value="Brown">Brown</option>
                    </Field>
                    <ErrorMessage
                      name="shade"
                      component="div"
                      className="text-red-500"
                    />
                  </div>
                </div>

                <div className="flex gap-6 mb-6">
                  <div className="flex flex-col w-1/2">
                    <label htmlFor="clarity" className="text-white mb-2">
                      Clarity
                    </label>
                    <Field
                      as="select"
                      id="clarity"
                      name="clarity"
                      className="p-2 bg-white bg-opacity-50 focus:outline-none rounded-lg font-bold"
                    >
                      <option value="">Select Clarity</option>
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
                    </Field>
                    <ErrorMessage
                      name="clarity"
                      component="div"
                      className="text-red-500"
                    />
                  </div>
                  <div className="flex flex-col w-1/2">
                    <label htmlFor="ratio" className="text-white mb-2">
                      Ratio
                    </label>
                    <Field
                      type="select"
                      id="ratio"
                      name="ratio"
                      className="p-2 bg-white bg-opacity-50 focus:outline-none rounded-lg font-bold"
                    ></Field>
                    <ErrorMessage
                      name="ratio"
                      component="div"
                      className="text-red-500"
                    />
                  </div>
                </div>

                <div className="flex gap-6 mb-6">
                  <div className="flex flex-col w-1/2">
                    <label htmlFor="lab" className="text-white mb-2">
                      Lab
                    </label>
                    <Field
                      as="select"
                      id="lab"
                      name="lab"
                      className="p-2 bg-white bg-opacity-50 focus:outline-none rounded-lg font-bold"
                    >
                      <option value="">Select Lab</option>
                      <option value="ALL">ALL</option>
                      <option value="GIA">GIA</option>
                      <option value="IGI">IGI</option>
                      <option value="HRD">HRD</option>
                      <option value="PARCEL">PARCEL</option>
                      <option value="NONE">NONE</option>
                    </Field>
                    <ErrorMessage
                      name="lab"
                      component="div"
                      className="text-red-500"
                    />
                  </div>
                  <div className="flex flex-col w-1/2">
                    <label htmlFor="polish" className="text-white mb-2">
                      Polish
                    </label>
                    <Field
                      as="select"
                      id="polish"
                      name="polish"
                      className="p-2 bg-white bg-opacity-50 focus:outline-none rounded-lg font-bold"
                    >
                      <option value="">Select a polish</option>
                      <option value="ALL">ALL</option>
                      <option value="ID">ID</option>
                      <option value="EX">EX</option>
                      <option value="VG">VG</option>
                      <option value="GD">GD</option>
                      <option value="FR">FR</option>
                      <option value="PO">PO</option>
                    </Field>
                    <ErrorMessage
                      name="polish"
                      component="div"
                      className="text-red-500"
                    />
                  </div>
                </div>

                <div className="flex gap-6 mb-6">
                  <div className="flex flex-col w-1/2">
                    <label htmlFor="symmetry" className="text-white mb-2">
                      Symmetry
                    </label>
                    <Field
                      as="select"
                      id="symmetry"
                      name="symmetry"
                      className="p-2 bg-white bg-opacity-50 focus:outline-none rounded-lg font-bold"
                    >
                      <option value="">Select Symmetry</option>
                      <option value="ALL">ALL</option>
                      <option value="ID">ID</option>
                      <option value="EX">EX</option>
                      <option value="VG">VG</option>
                      <option value="GD">GD</option>
                      <option value="FR">FR</option>
                      <option value="PO">PO</option>
                    </Field>
                    <ErrorMessage
                      name="symmetry"
                      component="div"
                      className="text-red-500"
                    />
                  </div>
                  <div className="flex flex-col w-1/2">
                    <label htmlFor="fluorescence" className="text-white mb-2">
                      Fluorescence
                    </label>
                    <Field
                      as="select"
                      id="fluorescence"
                      name="fluorescence"
                      className="p-2 bg-white bg-opacity-50 focus:outline-none rounded-lg font-bold"
                    >
                      <option value="">Select a fluorescence</option>
                      <option value="ALL">ALL</option>
                      <option value="NONE">NONE</option>
                      <option value="FAINT">FAINT</option>
                      <option value="SLIGHT">SLIGHT</option>
                      <option value="VERY SLIGHT">VERY SLIGHT</option>
                      <option value="MEDIUM">MEDIUM</option>
                      <option value="STRONG">STRONG</option>
                      <option value="VERY STRONG">VERY STRONG</option>
                    </Field>
                    <ErrorMessage
                      name="fluorescence"
                      component="div"
                      className="text-red-500"
                    />
                  </div>
                </div>

                <div className="flex gap-6 mb-6">
                  <div className="flex flex-col w-1/2">
                    <label htmlFor="cut" className="text-white mb-2">
                      Cut
                    </label>
                    <Field
                      as="select"
                      id="cut"
                      name="cut"
                      className="p-2 bg-white bg-opacity-50 focus:outline-none rounded-lg font-bold"
                    >
                      <option value="">Select Cut</option>
                      <option value="ID">ID</option>
                      <option value="EX">EX</option>
                      <option value="VG">VG</option>
                      <option value="GD">GD</option>
                      <option value="FR">FR</option>
                      <option value="PO">PO</option>
                    </Field>
                    <ErrorMessage
                      name="cut"
                      component="div"
                      className="text-red-500"
                    />
                  </div>
                  <div className="flex flex-col w-1/2">
                    <label htmlFor="inclusion" className="text-white mb-2">
                      Inclusion
                    </label>
                    <Field
                      as="select"
                      id="inclusion"
                      name="inclusion"
                      className="p-2 bg-white bg-opacity-50 focus:outline-none rounded-lg font-bold"
                    >
                      <option value="">Select Inclusion</option>
                      <option value="NO BLACK">NO BLACK</option>
                      <option value="CB0">CB0</option>
                      <option value="CB1">CB1</option>
                      <option value="CB2">CB2</option>
                      <option value="CB3">CB3</option>
                      <option value="SB0">SB0</option>
                      <option value="SB1">SB1</option>
                      <option value="SB2">SB2</option>
                      <option value="SB3">SB3</option>
                    </Field>
                    <ErrorMessage
                      name="inclusion"
                      component="div"
                      className="text-red-500"
                    />
                  </div>
                </div>

                <div className="flex gap-6 mb-6">
                  <div className="flex flex-col w-1/2">
                    <label htmlFor="country" className="text-white mb-2">
                      Country
                    </label>
                    <Field
                      type="text"
                      id="country"
                      name="country"
                      placeholder="Country"
                      className="p-2 bg-white bg-opacity-50 focus:outline-none rounded-lg font-bold w-full placeholder-text-slate-900"
                    />

                    <ErrorMessage
                      name="country"
                      component="div"
                      className="text-red-500"
                    />
                  </div>
                  <div className="flex flex-col w-1/2">
                    <label htmlFor="totalDepth" className="text-white mb-2">
                      Total Depth
                    </label>
                    <div className="flex gap-5 items-center">
                      <Field
                        type="text"
                        id="totalDepth"
                        name="totalDepth"
                        placeholder="Depth"
                        className="p-2 bg-white bg-opacity-50 focus:outline-none rounded-lg font-bold w-full placeholder-text-slate-900"
                      />
                    </div>
                    <ErrorMessage
                      name="totalDepth"
                      component="div"
                      className="text-red-500"
                    />
                  </div>
                </div>
                <div className="flex gap-6 mb-6">
                  <div className="flex flex-col w-1/2">
                    <label htmlFor="table" className="text-white mb-2">
                      Table
                    </label>
                    <Field
                      type="text"
                      id="table"
                      name="table"
                      placeholder="Table"
                      className="p-2 bg-white bg-opacity-50 focus:outline-none rounded-lg font-bold w-full placeholder-text-slate-900"
                    />

                    <ErrorMessage
                      name="table"
                      component="div"
                      className="text-red-500"
                    />
                  </div>
                  <div className="flex flex-col w-1/2">
                    <label htmlFor="discount" className="text-white mb-2">
                      Discount
                    </label>
                    <div className="flex gap-5 items-center">
                      <Field
                        type="text"
                        id="discount"
                        name="discount"
                        placeholder="Discount"
                        className="p-2 bg-white bg-opacity-50 focus:outline-none rounded-lg font-bold w-full placeholder-text-slate-900"
                      />
                    </div>
                    <ErrorMessage
                      name="discount"
                      component="div"
                      className="text-red-500"
                    />
                  </div>
                </div>

                {/* <div className="flex gap-6 mb-6">
               <div className="flex flex-col w-1/2">
                 <label htmlFor="table" className="text-white mb-2">
                   Table
                 </label>
                 <div className="flex gap-5 items-center">
                   <Field
                     type="text"
                     id="table.from"
                     name="table.from"
                     placeholder="From"
                     className="p-2 bg-white bg-opacity-50 focus:outline-none rounded-lg font-bold w-1/2 placeholder-text-slate-900"
                   />
                   <Field
                     type="text"
                     id="table.to"
                     name="table.to"
                     placeholder="To"
                     className="p-2 bg-white bg-opacity-50 focus:outline-none rounded-lg font-bold w-1/2 placeholder-text-slate-900"
                   />
                 </div>
                 <ErrorMessage
                   name="table.from"
                   component="div"
                   className="text-red-500"
                 />
                 <ErrorMessage
                   name="table.to"
                   component="div"
                   className="text-red-500"
                 />
               </div>
               <div className="flex flex-col w-1/2">
                 <label htmlFor="discount" className="text-white mb-2">
                   Discount
                 </label>
                 <div className="flex gap-5 items-center">
                   <Field
                     type="text"
                     id="discount.from"
                     name="discount.from"
                     placeholder="From"
                     className="p-2 bg-white bg-opacity-50 focus:outline-none rounded-lg font-bold w-1/2 placeholder-text-slate-900"
                   />
                   <Field
                     type="text"
                     id="discount.to"
                     name="discount.to"
                     placeholder="To"
                     className="p-2 bg-white bg-opacity-50 focus:outline-none rounded-lg font-bold w-1/2 placeholder-text-slate-900"
                   />
                 </div>
                 <ErrorMessage
                   name="discount.from"
                   component="div"
                   className="text-red-500"
                 />
                 <ErrorMessage
                   name="discount.to"
                   component="div"
                   className="text-red-500"
                 />
               </div>
             </div> */}

                <div className="flex gap-6 mb-6">
                  <div className="flex flex-col w-1/2">
                    <label htmlFor="keyToSymbol" className="text-white mb-2">
                      Key To Symbol
                    </label>
                    <Field
                      type="text"
                      id="keyToSymbol"
                      name="keyToSymbol"
                      placeholder="Key To Symbol"
                      className="p-2 bg-white bg-opacity-50 focus:outline-none rounded-lg font-bold w-full placeholder-text-slate-900"
                    />

                    <ErrorMessage
                      name="keyToSymbol"
                      component="div"
                      className="text-red-500"
                    />
                  </div>
                  <div className="flex flex-col w-1/2">
                    <label htmlFor="mease1" className="text-white mb-2">
                      Meas 1
                    </label>
                    <div className="flex gap-5 items-center">
                      <Field
                        type="text"
                        id="mease1.from"
                        name="mease1.from"
                        placeholder="From"
                        className="p-2 bg-white bg-opacity-50 focus:outline-none rounded-lg font-bold w-1/2 placeholder-text-slate-900"
                      />
                      <Field
                        type="text"
                        id="mease1.to"
                        name="mease1.to"
                        placeholder="To"
                        className="p-2 bg-white bg-opacity-50 focus:outline-none rounded-lg font-bold w-1/2 placeholder-text-slate-900"
                      />
                    </div>
                    <ErrorMessage
                      name="mease1.from"
                      component="div"
                      className="text-red-500"
                    />
                    <ErrorMessage
                      name="mease1.to"
                      component="div"
                      className="text-red-500"
                    />
                  </div>
                </div>
              </div>

              <button
                type="submit"
                name="sbtn"
                className="bg-white text-black w-20 h-10 rounded-lg font-bold"
                disabled={isSubmitting}
              >
                {isSubmitting ? "Submitting..." : "Submit"}
              </button>
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
}
