
import natural from "@/images/natural.png";
import labgrown from "@/images/lab-grown.png";
import Image from 'next/image'; // Assuming you're using Image from Next.js
import Link from 'next/link'; // Assuming you're using Link from Next.js
import Header from "@/app/header/page";

export default function selectdiamond() {
    return (
        <main className="flex min-h-screen flex-col items-center justify-start font-Fahkwang">
            <div className="w-full bg-[#E9E9E9]">
                <Header/>
            </div>
            <div className="font-Fahkwang">
            <div className="flex flex-col lg:flex-row">
              <div className="1/2 bg-[#EDEDED] p-10">
                <h2 className="text-black text-4xl text-center mb-8">Natural Diamond</h2>
                <div className="flex justify-center mb-8">
                  <Image src={natural} alt="Natural Diamond" />
                </div>
                <p className="text-lg text-[#333] text-center mb-8">By focusing on these areas and staying adaptable to changes in the industry landscape, we can position our <span className="text-[#000] font-bold">Natural Diamond</span> business for success and contribute to the sustainable growth of the diamond industry.</p>
                <div className="flex justify-center pb-6">
                  <Link href="/natural" className="flex ">
                    <span className="bg-[#282828] pl-6 pr-14 py-3 text-white rounded-3xl flex items-center">Go to Our Natural Inventory</span> 
                    <span className="bg-[#333] text-white border-2 border-[#555] rounded-full px-4 py-4 -ml-10">
                      <svg width="17" height="16" viewBox="0 0 17 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M16.7071 8.70711C17.0976 8.31658 17.0976 7.68342 16.7071 7.29289L10.3431 0.928932C9.95262 0.538408 9.31946 0.538408 8.92893 0.928932C8.53841 1.31946 8.53841 1.95262 8.92893 2.34315L14.5858 8L8.92893 13.6569C8.53841 14.0474 8.53841 14.6805 8.92893 15.0711C9.31946 15.4616 9.95262 15.4616 10.3431 15.0711L16.7071 8.70711ZM0 9H16V7H0V9Z" fill="white"/>
                      </svg>
                    </span>
                  </Link>
                </div>
              </div>
              <div className="1/2 bg-[#F1F1F1] p-10">
              <h2 className="text-black text-4xl text-center mb-8">Lab Grown Diamond</h2>
                <div className="flex justify-center mb-8">
                  <Image src={labgrown} alt="Lab Grown Diamond" />
                </div>
                <p className="text-lg text-[#333] text-center mb-8">By focusing on these areas and staying adaptable to changes in the industry landscape, we can position our<span className="text-[#000] font-bold"> Lab Grown Diamond</span> business for success and contribute to the sustainable growth of the diamond industry.</p>
                <div className="flex justify-center pb-6">
                  <a href="/labgrown" className="flex ">
                    <span className="bg-[#282828] pl-6 pr-14 py-3 text-white rounded-3xl flex items-center">Go to Our Lab Grown Inventory</span> 
                    <span className="bg-[#333] text-white border-2 border-[#555] rounded-full px-4 py-4 -ml-10">
                      <svg width="17" height="16" viewBox="0 0 17 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M16.7071 8.70711C17.0976 8.31658 17.0976 7.68342 16.7071 7.29289L10.3431 0.928932C9.95262 0.538408 9.31946 0.538408 8.92893 0.928932C8.53841 1.31946 8.53841 1.95262 8.92893 2.34315L14.5858 8L8.92893 13.6569C8.53841 14.0474 8.53841 14.6805 8.92893 15.0711C9.31946 15.4616 9.95262 15.4616 10.3431 15.0711L16.7071 8.70711ZM0 9H16V7H0V9Z" fill="white"/>
                      </svg>
                    </span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </main>
    )
}