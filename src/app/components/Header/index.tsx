import { Button } from "@/components/ui/button";
import Image from "next/image";
import React from "react";
import { AiOutlineMenu } from "react-icons/ai";

export default function GlobalHeader() {
  return (
    <>
      <header className="w-full h-[70px] bg-[#FFF] flex items-center justify-between fixed z-50">
        <div className="w-full flex mx-auto max-w-7xl justify-between px-4 xl:px-0">
          <div className="flex items-center">
            <Image
              src="/icon.png"
              alt="CredCertoBueno icon"
              height={40}
              width={40}
              className="mr-2"
            />
            <p className="text-xl text-black font-bold">CredCertoBueno</p>
          </div>
          <div className="flex items-center">
            <AiOutlineMenu size={25} color="#000" className="flex lg:hidden" />
            <Button className="hidden lg:flex bg-[#8FDB00] p-5 text-black hover:bg-[#8FDB00] hover:text-black ">
              Simule seu crédito
            </Button>
          </div>
        </div>
      </header>
      <div className="h-[70px]" />
    </>
  );
}
