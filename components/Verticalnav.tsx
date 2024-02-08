import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import WorkOutlineOutlinedIcon from "@mui/icons-material/WorkOutlineOutlined";
import PermIdentityOutlinedIcon from "@mui/icons-material/PermIdentityOutlined";
import MessageOutlinedIcon from "@mui/icons-material/MessageOutlined";
import DevicesOutlinedIcon from "@mui/icons-material/DevicesOutlined";
export default function Vertical() {
  return (
    <div className="h-screen border-r w-[230px] fixed">
      <div className="p-8 flex flex-col justify-center h-[120px] border-b">
        <h1 className="text-xl">Mayank Ughade</h1>
        <h1 className="text-sm text-gray-400">Full-Stack Developer</h1>
      </div>

      {/* Routes */}
      <div className="p-5 gap-5 flex items-center h-[80px] border-b text-gray-400 hover:text-white">
        <HomeOutlinedIcon />
        <h1>Home</h1>
      </div>

      <div className="p-5 gap-5 flex items-center h-[80px] border-b text-gray-400 hover:text-white">
        <WorkOutlineOutlinedIcon />
        <h1>Projects</h1>
      </div>

      <div className="p-5 gap-5 flex items-center h-[80px] border-b text-gray-400 hover:text-white">
        <PermIdentityOutlinedIcon />
        <h1>About me</h1>
      </div>

      <div className="p-5 gap-5 flex items-center h-[80px] border-b text-gray-400 hover:text-white">
        <DevicesOutlinedIcon />
        <h1>Skills</h1>
      </div>

      <div className="p-5 gap-5 flex items-center h-[80px] border-b text-gray-400 hover:text-white">
        <MessageOutlinedIcon />
        <h1>Contact me</h1>
      </div>
    </div>
  );
}
