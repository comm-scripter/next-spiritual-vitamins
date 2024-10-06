import Link from "next/link";
import Image from "next/image";

export default function Header() {
  return (
    <div className="flex bg-gray-300 text-2xl items-center justify-between p-4 shadow-md">
      <div className="flex">
        <div className="lg:hidden relative bg-gray-400 w-20 h-15 rounded p-4 mr-8">
          <Image
            src="/logo.png"
            alt="get the Word out logo"
            className="!relative"
            fill
          ></Image>
        </div>
        <div className="flex items-center justify-center text-3xl lg:text-5xl font-bold">
          <h2>Spiritual Vitamins</h2>
        </div>
      </div>

      <Link
        className="hidden xsm:hidden lg:block flex items-center justify-center bg-gray-400 rounded px-4 py-2 pointer"
        href="/"
      >
        Home
      </Link>
      <Link
        className="hidden lg:block flex items-center justify-center bg-gray-400 rounded px-4 py-2 pointer"
        href="about"
      >
        About
      </Link>
      <Link
        className="hidden lg:block flex items-center justify-center bg-gray-400 rounded px-4 py-2 pointer"
        href="christianity"
      >
        Become a Christian
      </Link>
    </div>
  );
}
