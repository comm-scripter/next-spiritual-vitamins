import Link from "next/link";
import Image from "next/image";

export default function Header() {
  return (
    <div className="flex bg-gradient-to-r from-gray-300 to-gray-100 text-2xl items-center justify-between p-4 shadow-md">
      <div className="flex">
        <div className="hover:scale-110 transition-all relative w-20 h-15 rounded p-4 mr-8">
          <Link className="flex items-center justify-center" href="about">
            <Image
              src="/logo.png"
              alt="get the Word out logo"
              className="!relative"
              fill
            ></Image>
          </Link>
        </div>
        <div className="flex items-center justify-center text-3xl lg:text-5xl font-bold">
          <h2>Spiritual Vitamins</h2>
        </div>
      </div>

      <Link
        className="hidden lg:flex items-center justify-center hover:scale-105 transition-all bg-gray-300 hover:bg-gray-400 hover:text-white rounded px-4 py-2 pointer"
        href="/"
      >
        Home
      </Link>
      <Link
        className="hidden lg:flex items-center justify-center hover:scale-105 transition-all bg-gray-300 hover:bg-gray-400 hover:text-white rounded px-4 py-2 pointer"
        href="about"
      >
        About
      </Link>
      <Link
        className="hidden lg:flex items-center justify-center hover:scale-105 transition-all bg-gray-300 hover:bg-gray-400 hover:text-white rounded px-4 py-2 pointer"
        href="christianity"
      >
        Become a Christian
      </Link>
    </div>
  );
}
