"use client";
import Image from "next/image";
import Header from "@/app/header/page";
import Hero from "@/app/hero/page";
import natural from "@/images/natural.png";
import labgrown from "@/images/lab-grown.png";
import call from "@/images/phone.png";
import email from "@/images/email.png";
import location from "@/images/location.png";
import facebook from "@/images/facebook.png";
import instagram from "@/images/instagram.png";
import twitter from "@/images/twitter.png";
import map from "@/images/map.png";
import whatsapp from "@/images/whatsapp.png";
import { ErrorMessage, Field, Form, Formik } from "formik";
import * as Yup from "yup";
import { contactApi } from "@/api";
import { useState } from "react";
import india from "@/images/india-flag.png";
import canada from "@/images/canada-flag.png";
import dubai from "@/images/uae-flag.png";
import hongkong from "@/images/hong-kong.png";
import bangkok from "@/images/bangkok.png";
import usa from "@/images/usa.png";
import Footer from '@/app/footer/page'; 
import logoblack from '@/images/logo-black.png';


export default function Home() {
  const validationSchema = Yup.object().shape({
    name: Yup.string().required("Name is required"),
    email: Yup.string().email("Invalid email").required("Email is required"),
    phoneNumber: Yup.string()
      .matches(/^[0-9]+$/, "Phone number must contain only digits")
      .required("Phone is required"),
    message: Yup.string().required("Message is required"),
  });
  const [successMessage, setSuccessMessage] = useState(false);
  const handleSubmit = async (values: any) => {
    const payload = { ...values };
    try {
      const res = await contactApi.create(payload);
      if (res.status == 201) {
        setSuccessMessage(true);
      }
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <main className="flex min-h-screen flex-col items-center justify-between font-Fahkwang">
      <div className="z-10 max-w-full w-full items-center justify-between font-mono text-sm lg:flex">
        <div className="w-full">
          <Header />
          <Hero />

          <div className="lg:py-16 mb-12 md:mt-24 px-4">
          <h2 className="font-Fahkwang text-center text-black text-4xl lg:text-6xl font-bold mb-10">
              About Us
            </h2>
            <div className="flex gap-10 max-w-screen-xl mx-auto flex-col md:flex-row">
            <div className=" md:w-1/2 w-full order-2 md:order-1">
              <div className="w-full bg-[#f5f5f5] p-4  border border-[#eee] rounded-xl mb-5">
                <h2 className="text-3xl font-Fahkwang font-bold mb-2">Our Mission</h2>
                <p className="font-Fahkwang text-lg">To continuously grow and prosper in a well-aligned culture that is infused with positive energy for the people as well as the output to shine in the world consistently.</p>
              </div>
              <div className="w-full bg-[#f5f5f5] p-4  border border-[#eee] rounded-xl">
                <h2 className="text-3xl font-Fahkwang font-bold mb-2">Our Vision</h2>
                <p className="font-Fahkwang text-lg">Our vision is to be recognised as one of the foremost companies in the diamond industry worldwide, delivering Diamonds Around the World.</p>
              </div>
            </div>
            <div className="md:w-1/2 w-full border border-[#eee] flex justify-center items-center order-1 md:order-2">
              <Image src={logoblack} alt="Logo" width={280} className="h-auto caretino"/>
            </div>
            </div>
          </div>

          <div className="lg:py-16 mt-0 ">
            <h2 className="font-Fahkwang text-center text-black text-4xl lg:text-6xl font-bold mb-10">
              Our Products
            </h2>
            <div className="gap-4 mx-5 max-w-screen-xl xl:mx-auto grid md:grid-rows-4 md:grid-flow-col md:grid-cols-3 lg:grid-cols-4 lg:grid-rows-3">
              <div className="group diamond-box">
                <div>
                  <svg
                    width="130"
                    height="102"
                    viewBox="0 0 130 102"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M21.1318 12.408L23.145 27.1713L32.5399 63.4087"
                      stroke="#000"
                      className="group-hover:stroke-white"
                    />
                    <path
                      d="M107.699 12.408L106.357 27.1713L96.9619 63.4087"
                      stroke="#000"
                      className="group-hover:stroke-white"
                    />
                    <path
                      d="M64.0799 1L45.9612 12.5841M45.9612 12.5841L23.145 27.1715L54.685 60.7246L45.9612 27.1715V12.5841Z"
                      stroke="#000"
                      className="group-hover:stroke-white"
                    />
                    <path
                      d="M64.0801 1L83.5409 12.8589M83.5409 12.8589L107.028 27.1715L74.8171 60.7246L83.5409 27.1715V12.8589Z"
                      stroke="#000"
                      className="group-hover:stroke-white"
                    />
                    <path
                      d="M37.9082 1L45.2899 13.0791L64.7507 27.1715L83.5405 13.0791L91.5932 1"
                      stroke="#000"
                      className="group-hover:stroke-white"
                    />
                    <path
                      d="M1 27.1714H128.502"
                      stroke="#000"
                      className="group-hover:stroke-white"
                    />
                    <path
                      d="M74.8169 60.7249L64.751 100.318L54.6851 60.7249L64.751 27.8428L74.8169 60.7249Z"
                      stroke="#000"
                      className="group-hover:stroke-white"
                    />
                    <path
                      d="M91.5935 1H37.9085L1 27.1715L64.751 100.317L128.502 27.1715L91.5935 1Z"
                      stroke="#000"
                      className="group-hover:stroke-white"
                    />
                  </svg>
                </div>
                <h3 className="text-black group-hover:text-white text-xl font-Fahkwang text-center font-bold mb-10">
                  Round
                </h3>
                <div className="bg-[#EFEFEF] group-hover:bg-[#000] rounded-full border-4 border-white h-14 w-14 flex justify-center items-center absolute -bottom-1 right-0">
                  <a href="/stocklist?shape=Round">
                    <svg
                      width="17"
                      height="16"
                      viewBox="0 0 17 16"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M16.7071 8.70711C17.0976 8.31658 17.0976 7.68342 16.7071 7.29289L10.3431 0.928932C9.95262 0.538408 9.31946 0.538408 8.92893 0.928932C8.53841 1.31946 8.53841 1.95262 8.92893 2.34315L14.5858 8L8.92893 13.6569C8.53841 14.0474 8.53841 14.6805 8.92893 15.0711C9.31946 15.4616 9.95262 15.4616 10.3431 15.0711L16.7071 8.70711ZM0 9H16V7H0V9Z"
                        fill="#8A8A8A"
                        className="group-hover:fill-white"
                      />
                    </svg>
                  </a>
                </div>
              </div>

              <div className="group diamond-box">
                <div>
                  <svg
                    width="68"
                    height="101"
                    viewBox="0 0 68 101"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M8.8186 88.1406L21.1936 76.2812"
                      stroke="black"
                      className="group-hover:stroke-white"
                    />
                    <path
                      d="M20.678 97.4219L34.0842 83.5V100"
                      stroke="black"
                      className="group-hover:stroke-white"
                    />
                    <path
                      d="M34.0842 82.9844L46.4592 97.4219"
                      stroke="black"
                      className="group-hover:stroke-white"
                    />
                    <path
                      d="M46.9749 76.2812L59.3499 88.6562"
                      stroke="black"
                      className="group-hover:stroke-white"
                    />
                    <path
                      d="M51.0999 62.875L67.0842 67"
                      stroke="black"
                      className="group-hover:stroke-white"
                    />
                    <path
                      d="M42.8499 45.3438L56.2561 30.3906"
                      stroke="black"
                      className="group-hover:stroke-white"
                    />
                    <path
                      d="M11.9124 30.3906L24.803 45.3438"
                      stroke="black"
                      className="group-hover:stroke-white"
                    />
                    <path
                      d="M1.08423 66.4844L17.0686 62.875"
                      stroke="black"
                      className="group-hover:stroke-white"
                    />
                    <path
                      d="M34.0842 1V42.7656M34.0842 42.7656L42.8499 45.3438L51.0999 62.875L46.9749 76.2812L34.0842 82.9844L21.1936 76.2812L17.0686 62.875L25.3186 45.3438L34.0842 42.7656Z"
                      stroke="black"
                      className="group-hover:stroke-white"
                    />
                    <path
                      d="M1.08436 66.4844C-0.565635 42.5594 22.3969 12.8594 34.0844 1C63.3719 32.35 68.2875 57.7188 67.0843 66.4844C65.4343 98.6594 39.2406 101.547 26.35 98.9688C18.6156 98.1094 2.73436 90.4094 1.08436 66.4844Z"
                      stroke="black"
                      className="group-hover:stroke-white"
                    />
                  </svg>
                </div>
                <h3 className="text-black text-xl font-Fahkwang text-center font-bold mb-10 group-hover:text-white">
                  Pear
                </h3>
                <div className="bg-[#EFEFEF] group-hover:bg-[#000] rounded-full border-4 border-white h-14 w-14 flex justify-center items-center absolute -bottom-1 right-0">
                  <a href="/stocklist?shape=Pear">
                    <svg
                      width="17"
                      height="16"
                      viewBox="0 0 17 16"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M16.7071 8.70711C17.0976 8.31658 17.0976 7.68342 16.7071 7.29289L10.3431 0.928932C9.95262 0.538408 9.31946 0.538408 8.92893 0.928932C8.53841 1.31946 8.53841 1.95262 8.92893 2.34315L14.5858 8L8.92893 13.6569C8.53841 14.0474 8.53841 14.6805 8.92893 15.0711C9.31946 15.4616 9.95262 15.4616 10.3431 15.0711L16.7071 8.70711ZM0 9H16V7H0V9Z"
                        fill="#8A8A8A"
                        className="group-hover:fill-white"
                      />
                    </svg>
                  </a>
                </div>
              </div>

              <div className="group diamond-box">
                <div>
                  <svg
                    width="109"
                    height="101"
                    viewBox="0 0 109 101"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M15.7856 67.8572L27.3571 57.5715L43.4285 90.3572L54.3571 78.143L65.9285 90.3572L81.9999 57.5715L92.2856 67.8572"
                      stroke="black"
                      className="group-hover:stroke-white"
                    />
                    <path
                      d="M108.357 31.8572L90.3572 38.2857L103.214 52.4286"
                      stroke="black"
                      className="group-hover:stroke-white"
                    />
                    <path
                      d="M1.64282 31.8572L18.3571 38.2857L6.14282 52.4286"
                      stroke="black"
                      className="group-hover:stroke-white"
                    />
                    <path
                      d="M70.4285 19.6428L76.857 2.28564L86.4999 25.4285L100.643 11.9285"
                      stroke="black"
                      className="group-hover:stroke-white"
                    />
                    <path
                      d="M9.35718 11.9285L22.8572 26.7142L31.8572 2.28564L39.5715 19.6428"
                      stroke="black"
                      className="group-hover:stroke-white"
                    />
                    <path
                      d="M46.6428 22.2143L54.3571 10L63.3571 22.2143L54.3571 25.4286L46.6428 22.2143Z"
                      stroke="black"
                      className="group-hover:stroke-white"
                    />
                    <path
                      d="M69.7857 19.6428L54.3571 25.4285L38.9286 19.6428L23.5 26.0714L19 38.2857L27.3571 56.9285L53.7143 78.1428L82 56.9285L89.7143 38.2857L86.5 26.0714L69.7857 19.6428Z"
                      stroke="black"
                      className="group-hover:stroke-white"
                    />
                    <path
                      d="M76.8571 1L54.3571 9.35714L31.8571 1L9.35714 11.9286L1 31.8571L5.5 52.4286L15.7857 67.8571L42.7857 90.3571L54.3571 100L66.5714 90.3571L92.2857 67.8571L103.214 52.4286L108.357 31.8571L101.286 11.9286L76.8571 1Z"
                      stroke="black"
                      className="group-hover:stroke-white"
                    />
                  </svg>
                </div>
                <h3 className="text-black group-hover:text-white text-xl font-Fahkwang text-center font-bold mb-10 transition ease-in-out">
                  Heart
                </h3>
                <div className="bg-[#EFEFEF] group-hover:bg-[#000] rounded-full border-4 border-white h-14 w-14 flex justify-center items-center absolute -bottom-1 right-0">
                  <a href="/stocklist?shape=Heart">
                    <svg
                      width="17"
                      height="16"
                      viewBox="0 0 17 16"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M16.7071 8.70711C17.0976 8.31658 17.0976 7.68342 16.7071 7.29289L10.3431 0.928932C9.95262 0.538408 9.31946 0.538408 8.92893 0.928932C8.53841 1.31946 8.53841 1.95262 8.92893 2.34315L14.5858 8L8.92893 13.6569C8.53841 14.0474 8.53841 14.6805 8.92893 15.0711C9.31946 15.4616 9.95262 15.4616 10.3431 15.0711L16.7071 8.70711ZM0 9H16V7H0V9Z"
                        fill="#8A8A8A"
                        className="group-hover:fill-white"
                      />
                    </svg>
                  </a>
                </div>
              </div>

              <div className="group diamond-box">
                <div>
                  <svg
                    width="76"
                    height="98"
                    viewBox="0 0 76 98"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M21.3031 31.0909L8.63647 19"
                      stroke="black"
                      className="group-hover:stroke-white"
                    />
                    <path
                      d="M18.4242 47.7878H0.575684"
                      stroke="black"
                      className="group-hover:stroke-white"
                    />
                    <path
                      d="M8.06055 77.1515L21.303 65.0605"
                      stroke="black"
                      className="group-hover:stroke-white"
                    />
                    <path
                      d="M37.4243 78.8789V97.3031"
                      stroke="black"
                      className="group-hover:stroke-white"
                    />
                    <path
                      d="M54.1211 64.4849L67.9393 78.303"
                      stroke="black"
                      className="group-hover:stroke-white"
                    />
                    <path
                      d="M57 48.3635H75.4242"
                      stroke="black"
                      className="group-hover:stroke-white"
                    />
                    <path
                      d="M37.4243 0.575684V18.4242"
                      stroke="black"
                      className="group-hover:stroke-white"
                    />
                    <path
                      d="M66.7878 18.4243L54.1211 31.6667"
                      stroke="black"
                      className="group-hover:stroke-white"
                    />
                    <path
                      d="M21.3031 31.6667L37.4243 18.4243L54.1213 31.6667L57.0001 48.3637L54.1213 65.0607L37.4243 78.8789L21.3031 65.0607L18.4243 48.3637L21.3031 31.6667Z"
                      stroke="black"
                      className="group-hover:stroke-white"
                    />
                    <path
                      d="M75.5 48.9394C75.5 75.8168 58.6003 97.3788 38 97.3788C17.3996 97.3788 0.5 75.8168 0.5 48.9394C0.5 22.062 17.3996 0.5 38 0.5C58.6003 0.5 75.5 22.062 75.5 48.9394Z"
                      stroke="black"
                      className="group-hover:stroke-white"
                    />
                  </svg>
                </div>
                <h3 className="text-black group-hover:text-white text-xl font-Fahkwang text-center font-bold mb-10">
                  Oval
                </h3>
                <div className="bg-[#EFEFEF] group-hover:bg-[#000] rounded-full border-4 border-white h-14 w-14 flex justify-center items-center absolute -bottom-1 right-0">
                  <a href="/stocklist?shape=Oval">
                    <svg
                      width="17"
                      height="16"
                      viewBox="0 0 17 16"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M16.7071 8.70711C17.0976 8.31658 17.0976 7.68342 16.7071 7.29289L10.3431 0.928932C9.95262 0.538408 9.31946 0.538408 8.92893 0.928932C8.53841 1.31946 8.53841 1.95262 8.92893 2.34315L14.5858 8L8.92893 13.6569C8.53841 14.0474 8.53841 14.6805 8.92893 15.0711C9.31946 15.4616 9.95262 15.4616 10.3431 15.0711L16.7071 8.70711ZM0 9H16V7H0V9Z"
                        fill="#8A8A8A"
                        className="group-hover:fill-white"
                      />
                    </svg>
                  </a>
                </div>
              </div>

              <div className="group diamond-box">
                <div>
                  <svg
                    width="71"
                    height="98"
                    viewBox="0 0 71 98"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M1.14331 11.4597L16.4747 23.6388"
                      stroke="black"
                      className="group-hover:stroke-white"
                    />
                    <path
                      d="M59.7463 1.14282H10.8866L1.14331 11.4592V87.3995L10.8866 96.9995H59.7463L69.9194 87.3995V11.4592L59.7463 1.14282Z"
                      stroke="black"
                      className="group-hover:stroke-white"
                    />
                    <path
                      d="M56.3158 5.87109H14.3779L6.01489 15.1543V83.4892L14.3779 92.1278H56.3158L65.0477 83.4892V15.1543L56.3158 5.87109Z"
                      stroke="black"
                      className="group-hover:stroke-white"
                    />
                    <path
                      d="M52.3972 11.0295H17.7882L10.8867 19.2333V79.6223L17.7882 87.2564H52.3972L59.6031 79.6223V19.2333L52.3972 11.0295Z"
                      stroke="black"
                      className="group-hover:stroke-white"
                    />
                    <path
                      d="M49.0937 16.761H22.0173L16.6179 23.7311V75.0391L22.0173 81.5252H49.0937L54.7313 75.0391V23.7311L49.0937 16.761Z"
                      stroke="black"
                      className="group-hover:stroke-white"
                    />
                    <path
                      d="M10.7434 1.14331L22.0628 16.7612"
                      stroke="black"
                      className="group-hover:stroke-white"
                    />
                    <path
                      d="M59.8896 1L49 16.7612"
                      stroke="black"
                      className="group-hover:stroke-white"
                    />
                    <path
                      d="M69.7762 11.3164L54.7314 23.6388"
                      stroke="black"
                      className="group-hover:stroke-white"
                    />
                    <path
                      d="M70.0628 87.5438L54.7314 75.0781"
                      stroke="black"
                      className="group-hover:stroke-white"
                    />
                    <path
                      d="M49 81.5254L59.603 97"
                      stroke="black"
                      className="group-hover:stroke-white"
                    />
                    <path
                      d="M21.9196 81.5254L10.8867 97"
                      stroke="black"
                      className="group-hover:stroke-white"
                    />
                    <path
                      d="M16.6179 75.0781L1 87.4005"
                      stroke="black"
                      className="group-hover:stroke-white"
                    />
                  </svg>
                </div>
                <h3 className="text-black group-hover:text-white text-xl font-Fahkwang text-center font-bold mb-10">
                  Emerald
                </h3>
                <div className="bg-[#EFEFEF] group-hover:bg-[#000] rounded-full border-4 border-white h-14 w-14 flex justify-center items-center absolute -bottom-1 right-0">
                  <a href="/stocklist?shape=Emerald">
                    <svg
                      width="17"
                      height="16"
                      viewBox="0 0 17 16"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M16.7071 8.70711C17.0976 8.31658 17.0976 7.68342 16.7071 7.29289L10.3431 0.928932C9.95262 0.538408 9.31946 0.538408 8.92893 0.928932C8.53841 1.31946 8.53841 1.95262 8.92893 2.34315L14.5858 8L8.92893 13.6569C8.53841 14.0474 8.53841 14.6805 8.92893 15.0711C9.31946 15.4616 9.95262 15.4616 10.3431 15.0711L16.7071 8.70711ZM0 9H16V7H0V9Z"
                        fill="#8A8A8A"
                        className="group-hover:fill-white"
                      />
                    </svg>
                  </a>
                </div>
              </div>

              <div className="group diamond-box">
                <div>
                  <svg
                    width="102"
                    height="102"
                    viewBox="0 0 102 102"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M11.1156 16.0289L1 1L15.7399 10.8266L23.8324 23.2543L11.1156 16.0289Z"
                      stroke="black"
                      className="group-hover:stroke-white"
                    />
                    <path
                      d="M85.9709 10.5376L101 1L91.1732 15.1618L77.8784 23.2543L85.9709 10.5376Z"
                      stroke="black"
                      className="group-hover:stroke-white"
                    />
                    <path
                      d="M90.7562 85.9862L101 101L86.0733 91.0909L77.8784 77.8787L90.7562 85.9862Z"
                      stroke="black"
                      className="group-hover:stroke-white"
                    />
                    <path
                      d="M10.8266 84.8155L1 101L15.7399 90.5958L23.8324 77.301L10.8266 84.8155Z"
                      stroke="black"
                      className="group-hover:stroke-white"
                    />
                    <path
                      d="M85.971 10.5378L15.7397 10.8269L51.2889 20.6534L85.971 10.5378Z"
                      stroke="black"
                      className="group-hover:stroke-white"
                    />
                    <path
                      d="M10.8267 84.8149V15.7397L20.9423 50.4218L10.8267 84.8149Z"
                      stroke="black"
                      className="group-hover:stroke-white"
                    />
                    <path
                      d="M80.7686 51.0003L91.1732 15.1621L90.5951 85.6823L80.7686 51.0003Z"
                      stroke="black"
                      className="group-hover:stroke-white"
                    />
                    <path
                      d="M50.1328 80.7688L15.7397 90.5954L85.971 90.8844L50.1328 80.7688Z"
                      stroke="black"
                      className="group-hover:stroke-white"
                    />
                    <path
                      d="M51.2892 20.9421L23.8326 23.2543L21.2314 50.4219L23.8326 77.3005L49.8442 80.4797L77.8788 78.1676L80.48 51.289L77.8788 23.2543L51.2892 20.9421Z"
                      stroke="black"
                      className="group-hover:stroke-white"
                    />
                    <path
                      d="M101 1H1V101H101V1Z"
                      stroke="black"
                      className="group-hover:stroke-white"
                    />
                  </svg>
                </div>
                <h3 className="text-black group-hover:text-white text-xl font-Fahkwang text-center font-bold mb-10">
                  Princess
                </h3>
                <div className="bg-[#EFEFEF] group-hover:bg-[#000] rounded-full border-4 border-white h-14 w-14 flex justify-center items-center absolute -bottom-1 right-0">
                  <a href="/stocklist?shape=Princess">
                    <svg
                      width="17"
                      height="16"
                      viewBox="0 0 17 16"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M16.7071 8.70711C17.0976 8.31658 17.0976 7.68342 16.7071 7.29289L10.3431 0.928932C9.95262 0.538408 9.31946 0.538408 8.92893 0.928932C8.53841 1.31946 8.53841 1.95262 8.92893 2.34315L14.5858 8L8.92893 13.6569C8.53841 14.0474 8.53841 14.6805 8.92893 15.0711C9.31946 15.4616 9.95262 15.4616 10.3431 15.0711L16.7071 8.70711ZM0 9H16V7H0V9Z"
                        fill="#8A8A8A"
                        className="group-hover:fill-white"
                      />
                    </svg>
                  </a>
                </div>
              </div>

              <div className="group diamond-box">
                <div>
                  <svg
                    width="55"
                    height="100"
                    viewBox="0 0 55 100"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M28.067 1.35132C47.6367 17.6594 75.0342 59.9037 28.067 98.4168C7.71456 84.0657 -20.7789 44.5611 28.067 1.35132Z"
                      stroke="black"
                      className="group-hover:stroke-white"
                    />
                    <path
                      d="M21.5112 13.5824L11.4328 19.9426L11.335 37.5553L14.8575 49.7863L21.4133 73.2699L27.9692 80.7063L35.3078 85.5988L34.1336 73.2699L40.8851 49.7863L43.9184 37.2617L44.212 20.1383L34.1336 13.9347L27.6756 18.6705L37.9497 11.1362"
                      stroke="black"
                      className="group-hover:stroke-white"
                    />
                    <path
                      d="M18.1843 11.2336L21.4133 13.6798L27.7734 18.5723M27.7734 18.5723L35.112 26.0087L44.0162 37.5548L53.8011 50.0794L44.0162 62.4083L34.0357 73.2694L27.8713 80.8038L20.2391 85.5983M27.7734 18.5723L20.0434 26.0087L11.3349 37.5548L1.15869 50.0794L11.3349 62.4083L21.4133 73.2694L20.2391 85.5983M20.2391 85.5983L17.4015 89.023"
                      stroke="black"
                      className="group-hover:stroke-white"
                    />
                    <path
                      d="M21.5113 13.5824L28.0672 2.5L34.2316 14.0716L35.3079 26.107L40.7874 49.7863L44.1143 62.7022L45.6798 78.945L35.3079 85.6966L28.0001 98L20.2393 85.6966L9.76953 79.0429L11.3351 62.7022L14.6619 49.7863L20.1414 26.107L21.5113 13.5824Z"
                      stroke="black"
                      className="group-hover:stroke-white"
                    />
                  </svg>
                </div>
                <h3 className="text-black group-hover:text-white text-xl font-Fahkwang text-center font-bold mb-10">
                  Marquise
                </h3>
                <div className="bg-[#EFEFEF] group-hover:bg-[#000] rounded-full border-4 border-white h-14 w-14 flex justify-center items-center absolute -bottom-1 right-0">
                  <a href="/stocklist?shape=marquise">
                    <svg
                      width="17"
                      height="16"
                      viewBox="0 0 17 16"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M16.7071 8.70711C17.0976 8.31658 17.0976 7.68342 16.7071 7.29289L10.3431 0.928932C9.95262 0.538408 9.31946 0.538408 8.92893 0.928932C8.53841 1.31946 8.53841 1.95262 8.92893 2.34315L14.5858 8L8.92893 13.6569C8.53841 14.0474 8.53841 14.6805 8.92893 15.0711C9.31946 15.4616 9.95262 15.4616 10.3431 15.0711L16.7071 8.70711ZM0 9H16V7H0V9Z"
                        fill="#8A8A8A"
                        className="group-hover:fill-white"
                      />
                    </svg>
                  </a>
                </div>
              </div>

              <div className="group diamond-box">
                <div>
                  <svg
                    width="101"
                    height="100"
                    viewBox="0 0 101 100"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M70.1958 2.32342L49.7774 1C48.2649 1.18906 42.2906 1.71843 30.4933 2.32342C18.696 2.92841 10.8311 7.11292 8.37332 9.12956C4.78119 14.6123 2.70154 23.6871 1.9453 30.4933C1.34031 35.9382 1.06302 45.9962 1 50.3445L1.9453 70.1958C2.85278 81.0856 6.60877 88.9757 8.37332 91.5595C13.9695 96.2482 25.4517 98.0505 30.4933 98.3656C30.947 99.1219 43.7905 99.437 50.1555 99.5L70.3848 98.9328C75.8045 98.3026 87.6649 95.9457 91.7486 91.5595C95.8322 87.1733 97.8615 75.4894 98.3656 70.1958L99.6891 50.3445L98.5547 30.4933C97.0422 17.7885 93.5131 10.9571 91.9376 9.12956C85.2827 4.44088 74.6702 2.63852 70.1958 2.32342Z"
                      stroke="black"
                      className="group-hover:stroke-white"
                    />
                    <path
                      d="M28.9807 21.2293L49.9663 1.18896L71.141 21.2293"
                      stroke="black"
                      className="group-hover:stroke-white"
                    />
                    <path
                      d="M79.4597 29.1699L99.5 50.1555L79.4597 71.3302"
                      stroke="black"
                      className="group-hover:stroke-white"
                    />
                    <path
                      d="M20.8512 71.5193L1 50.3446L20.8512 29.5481"
                      stroke="black"
                      className="group-hover:stroke-white"
                    />
                    <path
                      d="M71.5193 79.4598L49.7774 99.311L28.7918 79.4598"
                      stroke="black"
                      className="group-hover:stroke-white"
                    />
                    <path
                      d="M1.94531 70.1957L21.2294 71.7082L31.2495 69.4395L50.7227 72.6535L68.6833 69.4395L79.0816 71.33L98.3657 70.1957"
                      stroke="black"
                      className="group-hover:stroke-white"
                    />
                    <path
                      d="M1.75635 30.8713L21.2295 29.3589L31.4387 31.4385L50.7228 28.4136L68.4943 30.8713L79.2707 29.3589L98.3658 30.4932"
                      stroke="black"
                      className="group-hover:stroke-white"
                    />
                    <path
                      d="M28.7919 21.4185L8.5625 9.12964L21.0404 29.1699L28.7919 49.9665L21.0404 71.3302L8.5625 91.7486L28.7919 79.2707L50.9118 72.6536L70.9521 79.2707L91.7487 91.7486L79.4598 71.3302L72.2756 49.9665L79.4598 29.1699L91.7487 9.12964L70.9521 21.4185L50.9118 28.2246L28.7919 21.4185Z"
                      stroke="black"
                      className="group-hover:stroke-white"
                    />
                    <path
                      d="M30.4933 2.13428L28.7917 21.0402L31.4386 31.4385L28.7917 49.3992L31.4386 69.4395L28.7917 79.6487L30.4933 98.5546"
                      stroke="black"
                      className="group-hover:stroke-white"
                    />
                    <path
                      d="M70.1957 2.32349L71.141 21.2294L68.8723 31.0605L72.2754 49.9665L68.8723 69.4396L71.5191 79.4598L70.1957 98.9329"
                      stroke="black"
                      className="group-hover:stroke-white"
                    />
                  </svg>
                </div>
                <h3 className="text-black group-hover:text-white text-xl font-Fahkwang text-center font-bold mb-10">
                  Cushion
                </h3>
                <div className="bg-[#EFEFEF] group-hover:bg-[#000] rounded-full border-4 border-white h-14 w-14 flex justify-center items-center absolute -bottom-1 right-0">
                  <a href="/stocklist?shape=Cushion">
                    <svg
                      width="17"
                      height="16"
                      viewBox="0 0 17 16"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M16.7071 8.70711C17.0976 8.31658 17.0976 7.68342 16.7071 7.29289L10.3431 0.928932C9.95262 0.538408 9.31946 0.538408 8.92893 0.928932C8.53841 1.31946 8.53841 1.95262 8.92893 2.34315L14.5858 8L8.92893 13.6569C8.53841 14.0474 8.53841 14.6805 8.92893 15.0711C9.31946 15.4616 9.95262 15.4616 10.3431 15.0711L16.7071 8.70711ZM0 9H16V7H0V9Z"
                        fill="#8A8A8A"
                        className="group-hover:fill-white"
                      />
                    </svg>
                  </a>
                </div>
              </div>

              <div className="group diamond-box">
                <div>
                  <svg
                    width="72"
                    height="102"
                    viewBox="0 0 72 102"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M15.7766 92.7525L36.3952 85.8796L56.6701 92.7525"
                      stroke="black"
                      className="group-hover:stroke-white"
                    />
                    <path
                      d="M63.1993 15.4331L55.6392 50.141L63.1993 86.2235"
                      stroke="black"
                      className="group-hover:stroke-white"
                    />
                    <path
                      d="M16.4639 50.1409L19.9003 19.213L36.0515 15.7766L52.5463 19.213L55.6391 50.1409L52.5463 82.0996L36.0515 85.8797L19.5567 82.0996L16.4639 50.1409Z"
                      stroke="black"
                      className="group-hover:stroke-white"
                    />
                    <path
                      d="M8.90381 15.4331L16.4639 50.141L8.90381 85.8798"
                      stroke="black"
                      className="group-hover:stroke-white"
                    />
                    <path
                      d="M15.7766 9.24731L36.0515 15.7765L56.3264 9.24731"
                      stroke="black"
                      className="group-hover:stroke-white"
                    />
                    <path
                      d="M1 89.3162L19.2131 82.4434L13.0275 101"
                      stroke="black"
                      className="group-hover:stroke-white"
                    />
                    <path
                      d="M60.1065 101L52.5464 82.4434L71.4467 89.3162"
                      stroke="black"
                      className="group-hover:stroke-white"
                    />
                    <path
                      d="M59.763 1L52.8901 18.8694L71.4468 12.6838"
                      stroke="black"
                      className="group-hover:stroke-white"
                    />
                    <path
                      d="M12.6838 1L19.5567 19.2131L1 12.6838"
                      stroke="black"
                      className="group-hover:stroke-white"
                    />
                    <path
                      d="M59.4192 1H13.0275L1 12.6838V89.3162L12.6838 101H60.1065L71.4467 89.3162V12.6838L59.4192 1Z"
                      stroke="black"
                      className="group-hover:stroke-white"
                    />
                    <path
                      d="M56.3265 8.90381H15.7767L8.90381 15.7767V85.8797L15.7767 93.0962H56.799L63.1993 86.2234L63.543 15.7767L56.3265 8.90381Z"
                      stroke="black"
                      className="group-hover:stroke-white"
                    />
                  </svg>
                </div>
                <h3 className="text-black group-hover:text-white text-xl font-Fahkwang text-center font-bold mb-10">
                  Radiant
                </h3>
                <div className="bg-[#EFEFEF] group-hover:bg-[#000] rounded-full border-4 border-white h-14 w-14 flex justify-center items-center absolute -bottom-1 right-0">
                  <a href="/stocklist?shape=Radiant">
                    <svg
                      width="17"
                      height="16"
                      viewBox="0 0 17 16"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M16.7071 8.70711C17.0976 8.31658 17.0976 7.68342 16.7071 7.29289L10.3431 0.928932C9.95262 0.538408 9.31946 0.538408 8.92893 0.928932C8.53841 1.31946 8.53841 1.95262 8.92893 2.34315L14.5858 8L8.92893 13.6569C8.53841 14.0474 8.53841 14.6805 8.92893 15.0711C9.31946 15.4616 9.95262 15.4616 10.3431 15.0711L16.7071 8.70711ZM0 9H16V7H0V9Z"
                        fill="#8A8A8A"
                        className="group-hover:fill-white"
                      />
                    </svg>
                  </a>
                </div>
              </div>

              <div className="group diamond-box">
                <div>
                  <svg
                    width="100"
                    height="101"
                    viewBox="0 0 100 101"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M49.7263 28.8269L76.9911 81.0571"
                      stroke="black"
                      className="group-hover:stroke-white"
                    />
                    <path
                      d="M33.0828 100L49.7263 91.1309L65.8224 100"
                      stroke="black"
                      className="group-hover:stroke-white"
                    />
                    <path
                      d="M69.5452 30.7979L71.2971 50.3979L85.0938 61.1286"
                      stroke="black"
                      className="group-hover:stroke-white"
                    />
                    <path
                      d="M49.6167 2.10938V28.9362L22.4614 81.1664"
                      stroke="black"
                      className="group-hover:stroke-white"
                    />
                    <path
                      d="M1.10962 95.0725L22.6806 81.2759H76.7722L97.9052 95.0725"
                      stroke="black"
                      className="group-hover:stroke-white"
                    />
                    <path
                      d="M13.8113 61.2382L28.4839 50.398L30.1264 31.1265"
                      stroke="black"
                      className="group-hover:stroke-white"
                    />
                    <path
                      d="M28.5934 49.9597L1.10962 94.9631L49.7264 91.1307L98.2336 94.9631L71.1878 50.5072L49.7264 28.4983L28.5934 49.9597Z"
                      stroke="black"
                      className="group-hover:stroke-white"
                    />
                    <path
                      d="M28.4839 50.0691L49.6169 2.10938L71.1878 50.0691L76.7722 80.9474L49.7264 91.2401L22.571 80.9474L28.4839 50.0691Z"
                      stroke="black"
                      className="group-hover:stroke-white"
                    />
                    <path
                      d="M29.9073 31.0168L49.6168 2L69.5452 31.0168L85.3129 61.238L98.0145 95.0726L65.9318 100H33.6302L1 95.0726L13.8112 61.238L29.9073 31.0168Z"
                      stroke="black"
                      className="group-hover:stroke-white"
                    />
                  </svg>
                </div>
                <h3 className="text-black group-hover:text-white text-xl font-Fahkwang text-center font-bold mb-10">
                  Triangle
                </h3>
                <div className="bg-[#EFEFEF] group-hover:bg-[#000] rounded-full border-4 border-white h-14 w-14 flex justify-center items-center absolute -bottom-1 right-0">
                  <a href="/stocklist?shape=Triangle">
                    <svg
                      width="17"
                      height="16"
                      viewBox="0 0 17 16"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M16.7071 8.70711C17.0976 8.31658 17.0976 7.68342 16.7071 7.29289L10.3431 0.928932C9.95262 0.538408 9.31946 0.538408 8.92893 0.928932C8.53841 1.31946 8.53841 1.95262 8.92893 2.34315L14.5858 8L8.92893 13.6569C8.53841 14.0474 8.53841 14.6805 8.92893 15.0711C9.31946 15.4616 9.95262 15.4616 10.3431 15.0711L16.7071 8.70711ZM0 9H16V7H0V9Z"
                        fill="#8A8A8A"
                        className="group-hover:fill-white"
                      />
                    </svg>
                  </a>
                </div>
              </div>

              <div className="group diamond-box">
                <div>
                  <svg
                    width="96"
                    height="96"
                    viewBox="0 0 96 96"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M24.5 82.8975L48.235 74.555L71.03 71.1475H83.25"
                      stroke="black"
                      
                      className="group-hover:stroke-white"
                    />
                    <path
                      d="M83.1325 24.5L74.79 48.235L71.03 70.9125L71.735 82.8975"
                      stroke="black"
                      className="group-hover:stroke-white"
                    />
                    <path
                      d="M71.6176 12.8677L70.9126 25.0877L74.5551 47.5302L83.3676 71.3827L95.0001 75.9652"
                      stroke="black"
                      className="group-hover:stroke-white"
                    />
                    <path
                      d="M12.6326 71.4999L24.9701 70.7949L47.6476 74.4374L71.8526 83.1324L76.4351 94.9999"
                      stroke="black"
                      className="group-hover:stroke-white"
                    />
                    <path
                      d="M12.6326 24.5L21.4451 48.1175L24.9701 70.6775L24.3826 83.1325L19.8001 94.8825"
                      stroke="black"
                      className="group-hover:stroke-white"
                    />
                    <path
                      d="M24.3826 12.75L48.2351 21.5625L71.0301 24.97L83.2501 24.3825L95.2351 19.9175"
                      stroke="black"
                      className="group-hover:stroke-white"
                    />
                    <path
                      d="M1.11743 20.0349L12.3974 24.4999L25.3224 25.2049L47.6474 21.5624L71.7349 12.6324L76.3174 1.23486"
                      stroke="black"
                      className="group-hover:stroke-white"
                    />
                    <path
                      d="M71.6174 12.75H24.2649L12.5149 24.735V71.3825L24.2649 82.8975H71.6174L83.6024 71.3825V24.735L71.6174 12.75Z"
                      stroke="black"
                      className="group-hover:stroke-white"
                    />
                    <path
                      d="M76.3175 1H19.9175L1 19.9175V76.0825L19.9175 94.8825H76.3175L95 76.0825V19.9175L76.3175 1Z"
                      stroke="black"
                      className="group-hover:stroke-white"
                    />
                    <path
                      d="M19.6826 1L24.2651 12.8675L24.9701 25.0875L21.4451 47.765L12.7501 71.5L1.23511 76.2"
                      stroke="black"
                      className="group-hover:stroke-white"
                    />
                  </svg>
                </div>
                <h3 className="text-black group-hover:text-white text-xl font-Fahkwang text-center font-bold mb-10">
                  Square Radiant
                </h3>
                <div className="bg-[#EFEFEF] group-hover:bg-[#000] rounded-full border-4 border-white h-14 w-14 flex justify-center items-center absolute -bottom-1 right-0">
                  <a href="/stocklist?shape=Square Radiant">
                    <svg
                      width="17"
                      height="16"
                      viewBox="0 0 17 16"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M16.7071 8.70711C17.0976 8.31658 17.0976 7.68342 16.7071 7.29289L10.3431 0.928932C9.95262 0.538408 9.31946 0.538408 8.92893 0.928932C8.53841 1.31946 8.53841 1.95262 8.92893 2.34315L14.5858 8L8.92893 13.6569C8.53841 14.0474 8.53841 14.6805 8.92893 15.0711C9.31946 15.4616 9.95262 15.4616 10.3431 15.0711L16.7071 8.70711ZM0 9H16V7H0V9Z"
                        fill="#8A8A8A"
                        className="group-hover:fill-white"
                      />
                    </svg>
                  </a>
                </div>
              </div>

              <div className="group diamond-box">
                <div>
                <svg width="96" height="96" viewBox="0 0 110 218" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M69.158 174.283L109 217.27" stroke="black" strokeWidth="2" className="group-hover:stroke-white"/>
<path d="M95.5 183.5L83.8364 160.652" stroke="black" strokeWidth="2" className="group-hover:stroke-white"/>
<path d="M70 40L84 52.5" stroke="black" strokeWidth="2" className="group-hover:stroke-white"/>
<path d="M34.5583 52.6602V84.1144V130.247V162.75" strokeWidth="2" stroke="black" className="group-hover:stroke-white"/>
<path d="M21.9766 174.283L34.5582 162.75L48.1884 197.349L69.1579 174.283" stroke="black" strokeWidth="2" className="group-hover:stroke-white"/>
<path d="M47.5 15L34.5 52L20.5 38.5" stroke="black" strokeWidth="2" className="group-hover:stroke-white"/>
<path d="M78.5943 3.38135L70.2066 40.0779L47.1401 14.9146" stroke="black" strokeWidth="2" className="group-hover:stroke-white"/>
<path d="M70.2063 40.0783L95 34.5L83.8365 52.66V160.653L69.1578 174.283L33.5097 129.199L16.7341 107.181L5.20093 71.5325L33.5097 52.66L70.2063 40.0783Z" stroke="black" strokeWidth="2" className="group-hover:stroke-white"/>
<path d="M109 1.28467L70.2064 40.0782L34.5583 84.1141L16.7342 107.181L5 137L34.5583 162.75L69.1579 174.283L95.5 183.5" stroke="black" strokeWidth="2" className="group-hover:stroke-white"/>
<path d="M109 217.27V1.28447C73.3519 -1.51146 1.846 15.1243 1.00722 104.035C0.168438 192.945 72.6529 216.571 109 217.27Z" stroke="black" strokeWidth="2" className="group-hover:stroke-white"/>
<path d="M109 1.5L95.3696 33.7873V183.719L109 217.27" stroke="black" strokeWidth="2" className="group-hover:stroke-white"/>
</svg>

                </div>
                <h3 className="text-black group-hover:text-white text-xl font-Fahkwang text-center font-bold mb-10">
                  Half Moon
                </h3>
                <div className="bg-[#EFEFEF] group-hover:bg-[#000] rounded-full border-4 border-white h-14 w-14 flex justify-center items-center absolute -bottom-1 right-0">
                  <a href="/stocklist?shape=Half moon">
                    <svg
                      width="17"
                      height="16"
                      viewBox="0 0 17 16"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M16.7071 8.70711C17.0976 8.31658 17.0976 7.68342 16.7071 7.29289L10.3431 0.928932C9.95262 0.538408 9.31946 0.538408 8.92893 0.928932C8.53841 1.31946 8.53841 1.95262 8.92893 2.34315L14.5858 8L8.92893 13.6569C8.53841 14.0474 8.53841 14.6805 8.92893 15.0711C9.31946 15.4616 9.95262 15.4616 10.3431 15.0711L16.7071 8.70711ZM0 9H16V7H0V9Z"
                        fill="#8A8A8A"
                        className="group-hover:fill-white"
                      />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="py-16 font-Fahkwang">
            <div className="flex flex-col lg:flex-row">
              <div className="1/2 bg-black p-5 lg:p-10">
                <h2 className="text-white text-3xl lg:text-5xl text-center mb-8">
                  Natural Diamond
                </h2>
                <div className="flex justify-center mb-8">
                  <Image src={natural} alt="Natural Diamond" />
                </div>
                <p className="text-lg text-white text-center mb-8">
                  By focusing on these areas and staying adaptable to changes in
                  the industry landscape, we can position our{" "}
                  <span className="text-[#FFB904]">Natural Diamond</span>{" "}
                  business for success and contribute to the sustainable growth
                  of the diamond industry.
                </p>
                <div className="flex justify-center pb-6">
                  <a href="/natural" className="flex ">
                    <span className="bg-[#282828] pl-6 pr-14 py-3 text-white rounded-3xl flex items-center">
                      See Our Inventory
                    </span>
                    <span className="bg-[#282828] text-white border-2 border-black rounded-full px-4 py-4 -ml-10">
                      <svg
                        width="17"
                        height="16"
                        viewBox="0 0 17 16"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M16.7071 8.70711C17.0976 8.31658 17.0976 7.68342 16.7071 7.29289L10.3431 0.928932C9.95262 0.538408 9.31946 0.538408 8.92893 0.928932C8.53841 1.31946 8.53841 1.95262 8.92893 2.34315L14.5858 8L8.92893 13.6569C8.53841 14.0474 8.53841 14.6805 8.92893 15.0711C9.31946 15.4616 9.95262 15.4616 10.3431 15.0711L16.7071 8.70711ZM0 9H16V7H0V9Z"
                          fill="white"
                        />
                      </svg>
                    </span>
                  </a>
                </div>
              </div>
              <div className="1/2 bg-[#111] p-5 lg:p-10">
                <h2 className="text-white text-3xl lg:text-5xl text-center mb-8">
                  Lab Grown Diamond
                </h2>
                <div className="flex justify-center mb-8">
                  <Image src={labgrown} alt="Lab Grown Diamond" />
                </div>
                <p className="text-lg text-white text-center mb-8">
                  By focusing on these areas and staying adaptable to changes in
                  the industry landscape, we can position our
                  <span className="text-[#FFB904]">
                    {" "}
                    Lab Grown Diamond
                  </span>{" "}
                  business for success and contribute to the sustainable growth
                  of the diamond industry.
                </p>
                <div className="flex justify-center pb-6">
                  <a href="/labgrown" className="flex ">
                    <span className="bg-[#282828] pl-6 pr-14 py-3 text-white rounded-3xl flex items-center">
                      See Our Inventory
                    </span>
                    <span className="bg-[#282828] text-white border-2 border-[#111] rounded-full px-4 py-4 -ml-10">
                      <svg
                        width="17"
                        height="16"
                        viewBox="0 0 17 16"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M16.7071 8.70711C17.0976 8.31658 17.0976 7.68342 16.7071 7.29289L10.3431 0.928932C9.95262 0.538408 9.31946 0.538408 8.92893 0.928932C8.53841 1.31946 8.53841 1.95262 8.92893 2.34315L14.5858 8L8.92893 13.6569C8.53841 14.0474 8.53841 14.6805 8.92893 15.0711C9.31946 15.4616 9.95262 15.4616 10.3431 15.0711L16.7071 8.70711ZM0 9H16V7H0V9Z"
                          fill="white"
                        />
                      </svg>
                    </span>
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="mx-auto font-Fahkwang my-16 max-w-6xl ">
            <div className="bg-[#F6F6F6] rounded-3xl flex gap-10 items-center space-bewtween py-10 flex-col lg:flex-row mx-5">
              <div className="bg-[#030303] lg:-my-24 px-8 py-14 rounded-3xl w-full ">
                <h2 className="text-center text-white text-3xl font-bold mb-3">
                  Contact Us
                </h2>
                <p className="text-white text-center text-lg mb-10">
                  Fill the form and we will get back to you within 24 hours.
                </p>
                <ul className="flex flex-col space-y-5 mb-10">
                  <li className="flex items-center gap-4">
                    <span>
                      <Image src={call} alt="Phone Icon" />
                    </span>
                    <span>
                      <a
                        href="tel:+1(250)-222-2502"
                        className="text-white text-lg"
                      >
                        +1(250)-222-2502
                      </a>
                    </span>
                  </li>

                  <li className="flex items-center gap-4">
                    <span className="shrink-0">
                      <Image src={email} alt="Email Icon" />
                    </span>
                    <span>
                      <a
                        href="hemish@caretino.ca"
                        className="text-white text-lg"
                      >
                        hemish@caretino.ca
                      </a>
                    </span>
                  </li>

                  <li className="flex items-center gap-4">
                    <span className="flex shrink-0">
                      <Image
                        src={location}
                        alt="Calender Icon"
                        width={28}
                        height={28}
                        className="shrink-0"
                      />
                    </span>
                    <span>
                      <a
                        href="tel:+1(250)-222-2502"
                        className="text-white text-sm lg:text-lg"
                      >
                        A-101,Vrundavan Nagar, Near Gitanjali Petrol Pump, Varachha Road, Surat - 395006{" "}
                      </a>
                    </span>
                  </li>
                </ul>

                <ul className="flex gap-4 justify-center pt-10">
                  <li className="w-12 h-12 flex justify-center items-center rounded-lg bg-[#282828]">
                    <a href="https://wa.link/afsowz">
                      <Image
                        src={whatsapp}
                        alt="Image of Whatsapp Icon"
                        className="w-7 h-7"
                      />
                    </a>
                  </li>
                  <li className="w-12 h-12 flex justify-center items-center rounded-lg bg-[#282828]">
                    <a href="#">
                      <Image
                        src={facebook}
                        alt="Image of Facebook Icon"
                        className="w-7 h-7"
                      />
                    </a>
                  </li>
                  <li className="w-12 h-12 flex justify-center items-center rounded-lg bg-[#282828]">
                    <a href="#">
                      <Image src={instagram} alt="Image of Instahram Icon" />
                    </a>
                  </li>
                  <li className="w-12 h-12 flex justify-center items-center rounded-lg bg-[#282828]">
                    <a href="#">
                      <Image src={twitter} alt="Image of Twitter Icon" />
                    </a>
                  </li>
                </ul>
              </div>
              <div className="w-full flex justify-end px-5">
                <Formik
                  initialValues={{
                    name: "",
                    email: "",
                    phoneNumber: "",
                    message: "",
                  }}
                  validationSchema={validationSchema}
                  onSubmit={async (values, { setSubmitting, resetForm }) => {
                    await handleSubmit(values);
                    resetForm();
                    setSubmitting(false);
                  }}
                >
                  {({ isSubmitting }) => (
                    <Form className="space-y-5 max-w-2xl w-full">
                      <div className="">
                        <Field
                          type="text"
                          name="name"
                          placeholder="Name"
                          className="border-b border-black  w-full pb-2 bg-transparent text-black focus:outline-none"
                        />
                        <ErrorMessage
                          name="name"
                          component="div"
                          className="text-red-500"
                        />
                      </div>
                      <div className="flex flex-col gap-6">
                        <Field
                          type="email"
                          name="email"
                          placeholder="Email"
                          className="border-b border-black w-full bg-transparent pb-2 focus:outline-none"
                        />
                        <ErrorMessage
                          name="email"
                          component="div"
                          className="text-red-500"
                        />
                        <Field
                          type="text"
                          name="phoneNumber"
                          placeholder="Phone"
                          className="border-b border-black focus:outline-none w-full bg-transparent pb-2"
                        />
                        <ErrorMessage
                          name="phoneNumber"
                          component="div"
                          className="text-red-500"
                        />
                      </div>
                      <div className="">
                        <Field
                          as="textarea"
                          name="message"
                          className="h-48 w-full focus:outline-none  border-b border-black  bg-transparent"
                          placeholder="Message"
                        />
                        <ErrorMessage
                          name="message"
                          component="div"
                          className="text-red-500"
                        />
                      </div>
                      <div className="">
                        <button
                          type="submit"
                          disabled={isSubmitting}
                          className="bg-black text-white rounded-2xl px-8 py-3 text-xl cursor-pointer border-black border-2 hover:bg-white hover:text-black"
                        >
                          {isSubmitting ? "Submitting..." : "Submit"}
                        </button>
                      </div>
                      {successMessage && (
                        <p className="text-green-600">
                          {" "}
                          Thank You For Contacting We Will Contact You Soon!
                        </p>
                      )}
                    </Form>
                  )}
                </Formik>
              </div>
            </div>
          </div>

          <div className="mt-32 font-Fahkwang py-20 bg-black">
            <div className="">
              <div className="relative">
                <h2 className="font-bold text-center text-white w-full text-2xl lg:text-5xl mb-16">
                  Our Global Presence
                </h2>

                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 2xl:grid-cols-6 gap-5 px-5 text-white">
                  <div className="border border-white p-10 space-y-4 ">
                      <div className="h-28 w-28 bg-white rounded-full mx-auto overflow-hidden border-2 border-white">
                        <Image src={india} alt="India Image" className="rounded-full"/>
                      </div>
                      <h3 className="text-center text-2xl font-bold">Surat</h3>
                      
                  </div>
                  <div className="border border-white p-10 space-y-4">
                  <div className="h-28 w-28 bg-white rounded-full mx-auto overflow-hidden border-2 border-white">
                        <Image src={canada} alt="Canada Image" className="rounded-full"/>
                      </div>
                      <h3 className="text-center text-2xl font-bold">Vancouver, Toronto</h3>
                      
                  </div>
                  <div className="border border-white p-10 space-y-4">
                      <div className="h-28 w-28 bg-white rounded-full mx-auto border-2 border-white overflow-hidden">
                      <Image src={dubai} alt="Dubai Image" className="rounded-full"/>
                      </div>
                      <h3 className="text-center text-2xl font-bold">Dubai</h3>
                     
                  </div>
                  <div className="border border-white p-10 space-y-4">
                      <div className="h-28 w-28 bg-white rounded-full mx-auto border-2 border-white overflow-hidden">
                      <Image src={hongkong} alt="Hong-Kong Image" className="rounded-full"/>
                      </div>
                      <h3 className="text-center text-2xl font-bold">Hongkong</h3>
                      
                  </div>
                  <div className="border border-white p-10 space-y-4">
                      <div className="h-28 w-28 bg-white rounded-full mx-auto border-2 border-white overflow-hidden">
                      <Image src={bangkok} alt="Hong-Kong Image" className="rounded-full"/>
                      </div>
                      <h3 className="text-center text-2xl font-bold">Bangkok</h3>
                      
                  </div>
                  <div className="border border-white p-10 space-y-4">
                      <div className="h-28 w-28 bg-white rounded-full mx-auto border-2 border-white overflow-hidden">
                      <Image src={usa} alt="USA Image" className="rounded-full"/>
                      </div>
                      <h3 className="text-center text-2xl font-bold">America</h3>
                      
                  </div>
                </div>





               
              </div>
            </div>
          </div>
          
          <Footer/>
        </div>
      </div>
    </main>
  );
}
