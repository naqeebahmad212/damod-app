"use client";
import logo from "@/images/logo.png";
import Image from "next/image";
import hello from "@/images/admin-bg.png";
import { useRouter } from "next/navigation";
import Link from "next/link";

export default function Addstock() {
  const router = useRouter();
  const handleNavigation = () => {
    router.push("./addnatural", {});
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
        <div className="p-5 bg-zinc-950 rounded-3xl w-1/4">
          <div className="bg-[#fff] p-5 rounded-3xl">
            <Image src={logo} alt="Website Logo" />
          </div>
          <div className="mt-10">
            <ul className="text-white space-y-3 text-xl">
              <li className="px-5 py-2 rounded-lg ">
                <a href="./dashboard">Dashboard</a>
              </li>
              <li className="px-5 py-2 rounded-lg bg-[#1b1b21]">
                <a href="./addstock">Add Stock</a>
              </li>
              <li className="px-5 py-2 rounded-lg ">
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
        <div className="w-3/4 flex flex-col min-h-screen justify-center">
          <div className="flex gap-5 items-center justify-center">
            <div className="flex flex-col bg-zinc-900  rounded-xl justify-center p-8  item-center w-80">
              <Link
                href={{
                  pathname: "./addDiamond",
                  query: {
                    category: "Natural",
                  },
                }}
              >
                <div className="flex flex-col gap-8">
                  <div className="text-center ">
                    <svg
                      width="166"
                      height="129"
                      viewBox="0 0 166 129"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      className="inline-block"
                    >
                      <path
                        d="M27.5383 15.4722L30.0924 34.2019L42.0113 80.1749"
                        stroke="#fff"
                        stroke-width="2"
                      />
                      <path
                        d="M137.364 15.4722L135.661 34.2019L123.742 80.1749"
                        stroke="#fff"
                        stroke-width="2"
                      />
                      <path
                        d="M82.0276 1L59.0412 15.6963M59.0412 15.6963L30.0952 34.2027L70.1087 76.7703L59.0412 34.2027V15.6963Z"
                        stroke="#fff"
                        stroke-width="2"
                      />
                      <path
                        d="M82.0271 1L106.716 16.045M106.716 16.045L136.514 34.2027L95.6487 76.7703L106.716 34.2027V16.045Z"
                        stroke="#fff"
                        stroke-width="2"
                      />
                      <path
                        d="M48.825 1L58.1898 16.3243L82.879 34.2027L106.717 16.3243L116.933 1"
                        stroke="#fff"
                        stroke-width="2"
                      />
                      <path
                        d="M2 34.2021H163.755"
                        stroke="#fff"
                        stroke-width="2"
                      />
                      <path
                        d="M95.6485 76.769L82.8782 126.999L70.1079 76.769L82.8782 35.0527L95.6485 76.769Z"
                        stroke="#fff"
                        stroke-width="2"
                      />
                      <path
                        d="M116.932 1H48.824L2 34.2024L82.8777 126.999L163.755 34.2024L116.932 1Z"
                        stroke="#fff"
                        stroke-width="2"
                      />
                    </svg>
                  </div>
                  <h5 className="text-2xl text-[#fff] font-bold text-center">
                    Upload Natural Diamond
                  </h5>
                </div>
              </Link>
            </div>
            <div className="text-black bg-white rounded-full w-10 h-10 flex justify-center items-center">
              <h4>OR</h4>
            </div>
            <div className="flex flex-col bg-zinc-900 rounded-xl justify-center p-8 gap-8 item-center w-80">
              <Link
                href={{
                  pathname: "./addDiamond",
                  query: {
                    category: "Lab Grown",
                  },
                }}
              >
                <div className="flex flex-col gap-8">
                  <div className="text-center ">
                    <svg
                      width="166"
                      height="129"
                      viewBox="0 0 166 129"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      className="inline-block"
                    >
                      <path
                        d="M27.5383 15.4722L30.0924 34.2019L42.0113 80.1749"
                        stroke="#fff"
                        stroke-width="2"
                      />
                      <path
                        d="M137.364 15.4722L135.661 34.2019L123.742 80.1749"
                        stroke="#fff"
                        stroke-width="2"
                      />
                      <path
                        d="M82.0276 1L59.0412 15.6963M59.0412 15.6963L30.0952 34.2027L70.1087 76.7703L59.0412 34.2027V15.6963Z"
                        stroke="#fff"
                        stroke-width="2"
                      />
                      <path
                        d="M82.0271 1L106.716 16.045M106.716 16.045L136.514 34.2027L95.6487 76.7703L106.716 34.2027V16.045Z"
                        stroke="#fff"
                        stroke-width="2"
                      />
                      <path
                        d="M48.825 1L58.1898 16.3243L82.879 34.2027L106.717 16.3243L116.933 1"
                        stroke="#fff"
                        stroke-width="2"
                      />
                      <path
                        d="M2 34.2021H163.755"
                        stroke="#fff"
                        stroke-width="2"
                      />
                      <path
                        d="M95.6485 76.769L82.8782 126.999L70.1079 76.769L82.8782 35.0527L95.6485 76.769Z"
                        stroke="#fff"
                        stroke-width="2"
                      />
                      <path
                        d="M116.932 1H48.824L2 34.2024L82.8777 126.999L163.755 34.2024L116.932 1Z"
                        stroke="#fff"
                        stroke-width="2"
                      />
                    </svg>
                  </div>
                  <h5 className="text-2xl text-[#fff] font-bold text-center">
                    Upload Lab Grown Diamond
                  </h5>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
