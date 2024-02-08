export default function Projects() {
  return (
    <div className="p-5 mt-12 flex flex-col">
      <div>
        <h1 className="lg:text-6xl md:text-6xl text-3xl font-bold">
          featured{" "}
          <span className="w-fit font-bold bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-blue-500">
            Projects
          </span>
        </h1>
      </div>

      {/* the main projects */}
      <div className="flex flex-wrap gap-[150px] items-center justify-center mt-[50px] md:mt-[100px]">
        <div className="w-[500px] h-[400px] bg-slate-200 rounded-lg">
          <h1>Hello there</h1>
        </div>
        <div className="w-[500px] h-[400px] bg-slate-200 rounded-lg">
          <h1>Hello there</h1>
        </div>
        <div className="w-[500px] h-[400px] bg-slate-200 rounded-lg">
          <h1>Hello there</h1>
        </div>
        <div className="w-[500px] h-[400px] bg-slate-200 rounded-lg">
          <h1>Hello there</h1>
        </div>
      </div>
    </div>
  );
}
