import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="w-full h-screen flex items-center justify-center flex-col p-2 bg-gradient-to-r from-blue-600 to-red-400">
      <div className="w-full p-2 flex items-center justify-center flex-col">
        <h1 className="text-2xl font-bold text-white">Go To Blogs</h1>
        <Link className="text-2xl font-bold text-white p-2 bg-blue-700 border-2 border-white rounded-xl" href={"/blogsList"}>Blogs</Link>
      </div>
      
    </div>
  );
}
