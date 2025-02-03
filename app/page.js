import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <>
    <main className="min-h-screen flex items-center justify-center bg-[#0a0f1a] p-6">
      <section className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl w-full bg-[#161b2a] shadow-2xl rounded-2xl overflow-hidden">
        {/* Left Content */}
        <div className="flex flex-col items-center justify-center text-center p-10 space-y-6">
          <h1 className="text-3xl md:text-4xl font-extrabold text-[#00eaff]">
            The Best URL Shortener in the Market
          </h1>
          <p className="text-gray-300 leading-relaxed max-w-lg">
            We are the most straightforward URL shortener in the world. Most
            of the URL shorteners will track you or ask you for login details.
            We understand your needs, and hence we have created this URL shortener.
          </p>
          <div className="flex space-x-4">
            <Link href="/shorten">
              <button className="bg-[#007bff] hover:bg-[#0056b3] text-white font-semibold px-6 py-2 rounded-lg shadow-md transition duration-300">
                Try Now
              </button>
            </Link>
            <Link href="/github">
              <button className="bg-[#00eaff] hover:bg-[#00c3cc] text-black font-semibold px-6 py-2 rounded-lg shadow-md transition duration-300">
                GitHub
              </button>
            </Link>
          </div>
        </div>
        {/* Right Image */}
        <div className="relative hidden md:flex items-center justify-center bg-[#1f2d3d]">
          <Image
            className=" rounded-r-2xl"
            alt="An image of the vector"
            src="/vector.jpg"
            fill={true}
            style={{ objectFit: "cover" }}
          />
        </div>
      </section>
    </main>
    </>
  );
}
