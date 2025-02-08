'use client';

import Link from 'next/link';
import { Button } from '@/components/components/ui/button';
import { Sheet, SheetTrigger, SheetContent } from '@/components/components/ui/sheet';
import { Menu } from 'lucide-react';

const Navber = () => {
  return (
    <nav className="h-16 bg-[#161b2a] flex justify-between px-5 items-center text-white shadow-lg">
      {/* Logo */}
      <div className="logo font-bold text-xl text-[#00eaff]">
        <Link href="/">Link Shortner</Link>
      </div>
      
      {/* Desktop Menu */}
      <ul className="hidden md:flex justify-center gap-6 items-center">
        <Link href="/" className="hover:text-[#00eaff] transition duration-300">Home</Link>
        <Link href="/about" className="hover:text-[#00eaff] transition duration-300">About</Link>
        <Link href="/shorten" className="hover:text-[#00eaff] transition duration-300">Shorten</Link>
        <div className="flex gap-3">
          <Link href="/shorten">
            <Button className="bg-[#007bff] hover:bg-[#0056b3] text-white font-semibold">Try Now</Button>
          </Link>
          <Link href='https://github.com/hassanmasood200716'>
            <Button className="bg-[#00eaff] hover:bg-[#00c3cc] text-black font-semibold">GitHub</Button>
          </Link>
        </div>
      </ul>
      
      {/* Mobile Menu */}
      <Sheet>
        <SheetTrigger className="md:hidden">
          <Menu className="w-6 h-6" />
        </SheetTrigger>
        <SheetContent side="left" className="bg-[#161b2a] text-white w-64 p-5">
          <div className="flex flex-col gap-4">
            <Link href="/" className="hover:text-[#00eaff] transition duration-300">Home</Link>
            <Link href="/about" className="hover:text-[#00eaff] transition duration-300">About</Link>
            <Link href="/shorten" className="hover:text-[#00eaff] transition duration-300">Shorten</Link>
            <Link href="/shorten">
              <Button className="w-full bg-[#007bff] hover:bg-[#0056b3] text-white font-semibold">Try Now</Button>
            </Link>
            <Link href='https://github.com/hassanmasood200716'>
              <Button className="w-full bg-[#00eaff] hover:bg-[#00c3cc] text-black font-semibold">GitHub</Button>
            </Link>
          </div>
        </SheetContent>
      </Sheet>
    </nav>
  );
};

export default Navber;
