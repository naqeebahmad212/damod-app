"use client";
import logo from "@/images/logo.png";
import Image from "next/image";
import hello from "@/images/admin-bg.png";
import user from "@/images/user.png";
import { useEffect, useState } from "react";
import { contactApi, usersApi } from "@/api";
import { useRouter } from "next/navigation";

export default function Loginadmin() {
  const [enquries, setEnquiries] = useState<any>();
  const [filteredRecords, setFilteredRecords] = useState<any>([]);
  const router = useRouter();
  useEffect(() => {
    fetchEnquires();
  }, []);
  const fetchEnquires = async () => {
    try {
      const res = await contactApi.findAll();
      console.log(res);
      setEnquiries(res.result);
      setFilteredRecords(res.result);
    } catch (error) {
      console.log(error);
    }
  };

  function filterDocumentsByDateRange(
    userRecordDocuments: any,
    dateRange: any
  ) {
    const currentDate = new Date(); // Current date
    let startDate: any;
    if (dateRange == "") {
      setFilteredRecords([...enquries]);
      return;
    }
    // Calculate the start date based on the selected date range
    switch (dateRange) {
      case "last7days":
        startDate = new Date(currentDate.getTime() - 7 * 24 * 60 * 60 * 1000);
        break;
      case "last15days":
        startDate = new Date(currentDate.getTime() - 15 * 24 * 60 * 60 * 1000);
        break;
      // Add cases for other date ranges as needed
      case "last30days":
        startDate = new Date(
          currentDate.getFullYear(),
          currentDate.getMonth() - 1,
          1
        );
        break;
      case "last90days":
        startDate = new Date(
          currentDate.getFullYear(),
          currentDate.getMonth() - 3,
          1
        );
        break;
      case "last180days":
        startDate = new Date(
          currentDate.getFullYear(),
          currentDate.getMonth() - 6,
          1
        );
        break;
      case "last365days ":
        startDate = new Date(currentDate.getFullYear() - 1, 0, 1);
        break;

      default:
        return userRecordDocuments; // If date range is not recognized, return all documents
    }

    // Filter documents based on the start date and current date
    const newDocuument = enquries.filter(
      (document: any) =>
        new Date(document.createdAt) >= startDate &&
        new Date(document.createdAt) <= currentDate
    );
    setFilteredRecords(newDocuument);
  }
  const handleLogout = () => {
    typeof window !== 'undefined'?window.localStorage.removeItem("adminToken"):null;
    router.push("./login");
  };
  return (
    <div
      
      className="min-h-screen font-Fahkwang bg-black"
    >
      <div className="flex p-5 gap-14 min-h-screen">
        <div className="p-5 bg-zinc-950 rounded-3xl w-1/4">
          <div className="bg-white p-5 rounded-3xl">
            <Image src={logo} alt="Website Logo" />
          </div>
          <div className="mt-10">
            <ul className="text-white space-y-3 text-xl">
              <li className="px-5 py-2 rounded-lg">
                <a href="./dashboard">Dashboard</a>
              </li>
              <li className="px-5 py-2 rounded-lg">
                <a href="./addstock">Add Stock</a>
              </li>
              <li className="px-5 py-2 rounded-lg">
                <a href="./stock">List of Stock</a>
              </li>
              <li className="px-5 py-2 rounded-lg">
                <a href="./visitor">List of Visitor</a>
              </li>
              <li className="px-5 py-2 rounded-lg bg-[#1b1b21]">
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
          <div className="flex justify-between">
            <div className="flex gap-4 items-center font-Fahkwang">
              <div>
                <Image src={user} alt="Visitor Image" width={60} height={60} />
              </div>
              <h3 className="text-white text-3xl font-medium">Enquiry</h3>
            </div>
            <div className="">
              <select
                className="bg-white  rounded-md h-10 w-48 px-3 focus:outline-none"
                onChange={(e) =>
                  filterDocumentsByDateRange(enquries, e.target.value)
                }
              >
                <option value="">All</option>
                <option value="last7days">Last 7 Days</option>
                <option value="last15days">Last 15 Days</option>
                <option value="last30days">Last Months</option>
                <option value="last90days">Last 3 Months</option>
                <option value="last180days">Last 6 Months</option>
                <option value="last365days">Last 12 Months</option>
              </select>
            </div>
          </div>

          <div className="mt-10">
            <ul className="text-white flex w-full justify-around bg-zinc-900 px-3 py-2 rounded-md mb-1">
              <li className="font-semibold w-3/12 text-center">Name</li>
              <li className="font-semibold w-3/12 text-center">Email</li>
              <li className="font-semibold w-3/12 text-center">Phone No</li>
              <li className="font-semibold w-3/12 text-center">Message</li>
            </ul>
            {filteredRecords?.map((userRecord: any,index:number) => {
              return (
                <ul key={"userRecord"+index} className="text-white flex w-full justify-around bg-zinc-900 px-3 py-2 rounded-md mb-1">
                  <li className="w-3/12 text-center">{userRecord.name}</li>
                  <li className="w-3/12 text-center">{userRecord.email}</li>
                  <li className="w-3/12 text-center">
                    {userRecord.phoneNumber}
                  </li>
                  <li className="w-3/12 text-center">{userRecord.message}</li>
                </ul>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
