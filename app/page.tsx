import Introduction from "@/components/Introduction";
import HorizontalScorller from "@/components/Horizontalscroller";
import Projects from "@/components/Projects";
export default function Home() {
  return (
    <div className="md:p-10 p-4 ">
      <Introduction />
      <Projects />
    </div>
  );
}
