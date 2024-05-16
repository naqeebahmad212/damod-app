"use client";
import logo from "@/images/logo.png";
import logowhite from "@/images/white-logo.png";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function Header() {
  const router = useRouter();
  const token = localStorage.getItem("userAccessToken");
  const handleLogout = () => {
    localStorage.removeItem("userAccessToken");
    router.push("/login");
  };
  return (
    <>
      <div className="flex flex-col sm:flex-row justify-between items-center font-Fahkwang p-4 relative z-50 w-full">
        
        <div className="w-1/2 sm:w-1/3 md:w-3/12 bg-white rounded-md p-1 md:p-4 2xl:bg-transparent 2xl:p-0 2xl:rounded-none flex justify-start">
          <a href="./">
            <Image src={logo} priority="high" alt="Caretino Logo" className=""/>
            
          </a>
        </div>
        <div className="flex gap-4 md:gap-5 items-center mt-5 md:mt-0">
          <Link href="./selectdiamond" className="text-zinc-400 text-sm md:text-base font-bold hover:text-white transition ease-in-out">Search Mele</Link>
          <Link href="./stocklist" className="text-zinc-400 text-sm md:text-base font-bold hover:text-white transition ease-in-out">Certified Diamond</Link>
          {!token ? (
            <Link
              href="/login"
              className="bg-[#333] block rouned-md md:rounded-3xl px-0 md:px-3 py-0 md:py-1 text-white text-sm md:text-base md:text-lg">Log In</Link>
          ) : (
            <div
              className="bg-[#333] block rouned-md md:rounded-3xl px-2 md:px-5 py-1.5 text-white text-sm md:text-lg cursor-pointer hover:bg-[#fff] hover:text-black font-semibold"
              onClick={handleLogout}>Log Out</div>
          )}
        </div>
      </div>
    </>
  );
}
