import Image from "next/image";
import mayank from "@/public/mayank.jpeg";
export default function AboutMe() {
  return (
    <div className="p-8 ml-5 flex flex-col gap-10">
      <div className="text-5xl font-bold ">
        About{" "}
        <span className="w-fit font-bold bg-clip-text text-transparent bg-gradient-to-r from-pink-500 via-blue-500 to-orange-500">
          Me
        </span>
      </div>

      <div className="flex flex-col gap-6 items-center justify-center">
        <Image
          className="w-[530px] h-[500px]"
          src={mayank}
          alt="mayank Image"
        />

        <p className="lg:ml-[100px] lg:mr-[100px]">
          Soo you want to know more about me!!, Here's something.... I am a
          fullstack developer based out of India. I have been working with web
          technologies from last one year and been in love with programming
          since then.
        </p>
      </div>
    </div>
  );
}
