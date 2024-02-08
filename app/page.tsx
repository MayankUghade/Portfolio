import Introduction from "@/components/Introduction";
import HorizontalScorller from "@/components/Horizontalscroller";
import { motion } from "framer-motion";
import Projects from "@/components/Projects";
export default function Home() {
  return (
    <div className="md:p-10 p-4 ">
      <Introduction />
      <HorizontalScorller />
      <Projects />
    </div>
  );
}
