import Link from "next/link";
import Image from "next/image";

export default function Header() {
  return (
    <div className="flex bg-gray-300 text-2xl align-center justify-between p-4">
      <div className="relative w-20 h-15 rounded p-4">
        <Image
          src="/logo.png"
          alt="get the Word out logo"
          className="!relative"
          fill
        ></Image>
      </div>
      <Link
        className="flex items-center justify-center bg-gray-400 rounded px-4 pointer"
        href="/"
      >
        Next Spiritual Vitamins
      </Link>
      <Link
        className="flex items-center justify-center bg-gray-400 rounded px-4 pointer"
        href="about"
      >
        About
      </Link>
      <Link
        className="flex items-center justify-center bg-gray-400 rounded px-4 pointer"
        href="christianity"
      >
        Become a Christian
      </Link>
    </div>
  );
}
