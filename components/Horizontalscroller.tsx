import css from "@/public/css-3.svg";
import html from "@/public/html-1.svg";
import js from "@/public/logo-javascript.svg";
import ts from "@/public/typescript.svg";
import react from "@/public/react-2.svg";
import next from "@/public/nextjs-icon-svgrepo-com.svg";
import bootstrap from "@/public/bootstrap-4.svg";
import node from "@/public/nodejs-icon.svg";
import tailwind from "@/public/tailwind-css-2.svg";
import mongo from "@/public/mongodb-icon-1-1.svg";
import Image from "next/image";
export default function HorizontalScorller() {
  return (
    <div className="mt-[60px]">
      <div className="h-[100px] flex gap-12 items-center justify-center opacity-50">
        <div className="flex gap-2 items-center">
          <Image className="w-[30px]" src={html} alt="" />
          <h1>HTML</h1>
        </div>

        <div className="flex gap-2 items-center">
          <Image className="w-[30px]" src={css} alt="" />
          <h1>Css</h1>
        </div>

        <div className="flex gap-2 items-center">
          <Image className="w-[30px]" src={js} alt="" />
          <h1>Javascript</h1>
        </div>

        <div className="flex gap-2 items-center">
          <Image className="w-[30px]" src={ts} alt="" />
          <h1>Typescript</h1>
        </div>

        <div className="flex gap-2 items-center">
          <Image className="w-[30px]" src={react} alt="" />
          <h1>React</h1>
        </div>

        <div className="flex gap-2 items-center">
          <Image className="w-[32px] bg-white rounded-full" src={next} alt="" />
          <h1>Next</h1>
        </div>

        <div className="flex gap-2 items-center">
          <Image className="w-[30px]" src={bootstrap} alt="" />
          <h1>Bootstrap</h1>
        </div>

        <div className="flex gap-2 items-center">
          <Image className="w-[30px]" src={node} alt="" />
          <h1>NodeJs</h1>
        </div>

        <div className="flex gap-2 items-center">
          <Image className="w-[30px]" src={tailwind} alt="" />
          <h1>TailwindCss</h1>
        </div>

        <div className="flex gap-2 items-center">
          <Image className="w-[30px]" src={mongo} alt="" />
          <h1>MongoDb</h1>
        </div>
      </div>
    </div>
  );
}
