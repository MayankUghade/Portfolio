export default function Projects() {
  return (
    <div className="p-5 mt-5 flex flex-col">
      <div>
        <h1 className="text-6xl font-bold">
          featured{" "}
          <span className="w-fit font-bold bg-clip-text text-transparent bg-gradient-to-r from-pink-500 via-blue-500 to-orange-500">
            Projects
          </span>
        </h1>
      </div>

      {/* the main projects */}
      <div className="flex items-center justify-center mt-[100px]">
        <div className="w-[500px] h-[500px] bg-slate-200 rounded-lg">
          <h1>Hello there</h1>
        </div>
      </div>
    </div>
  );
}
