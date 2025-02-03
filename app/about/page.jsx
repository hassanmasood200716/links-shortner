import Link from "next/link";

const About = () => {
  return (
    <>
    <main className="min-h-screen bg-[#0a0f1a] text-white flex flex-col items-center justify-center p-6">
      <section className="max-w-4xl w-full bg-[#161b2a] shadow-2xl rounded-2xl p-10 text-center">
        <h1 className="text-4xl font-extrabold text-[#00eaff] mb-4">Link Shortner</h1>
        <p className="text-gray-300 text-lg leading-relaxed mb-6">
          Bitlinks is a privacy-focused and easy-to-use URL shortener developed by
          <span className="text-[#00eaff] font-semibold"> M. Hassan Masood</span>. Unlike other URL shorteners, we prioritize your
          privacy by ensuring no tracking and no need for logins.
        </p>
        <h2 className="text-2xl font-bold text-[#00eaff] mt-6 mb-3">Features:</h2>
        <ul className="text-gray-300 space-y-3 mb-6">
          <li className="bg-[#1f2d3d] p-3 rounded-lg">✅ No Tracking or Data Collection</li>
          <li className="bg-[#1f2d3d] p-3 rounded-lg">✅ Completely Free and Open Source</li>
          <li className="bg-[#1f2d3d] p-3 rounded-lg">✅ Instant Link Shortening</li>
          <li className="bg-[#1f2d3d] p-3 rounded-lg">✅ Simple and Clean User Interface</li>
        </ul>
        <Link href="/">
          <button className="bg-[#007bff] hover:bg-[#0056b3] text-white font-semibold px-6 py-2 rounded-lg shadow-md transition duration-300">
            Back to Home
          </button>
        </Link>
      </section>
    </main>
    </>
  );
};

export default About;