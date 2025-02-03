import Link from "next/link";

const Navber = () => {
  return (
    <nav className="h-16 bg-[#161b2a] flex justify-between px-5 items-center text-white shadow-lg">
      <div className="logo font-bold text-xl text-[#00eaff]">
        <Link href="/">Link Shortner</Link>
      </div>
      <ul className="flex justify-center gap-6 items-center">
        <Link href="/"><li className="hover:text-[#00eaff] transition duration-300">Home</li></Link>
        <Link href="/about"><li className="hover:text-[#00eaff] transition duration-300">About</li></Link>
        <Link href="/shorten"><li className="hover:text-[#00eaff] transition duration-300">Shorten</li></Link>
        <li className="flex gap-3">
          <Link href="/shorten">
            <button className="bg-[#007bff] hover:bg-[#0056b3] text-white font-semibold px-4 py-2 rounded-lg shadow-md transition duration-300">Try Now</button>
          </Link>
          <Link href="/github">
            <button className="bg-[#00eaff] hover:bg-[#00c3cc] text-black font-semibold px-4 py-2 rounded-lg shadow-md transition duration-300">GitHub</button>
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navber;

