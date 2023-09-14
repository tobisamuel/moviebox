import Image from "next/image";
import { DM_Sans } from "next/font/google";
import Link from "next/link";

const dm_sans = DM_Sans({ subsets: ["latin"] });

export default function SideBar() {
  return (
    // use this first div as a container for everything
    <div className="hidden lg:block w-60 h-full">
      {/* make this inner div a fixed component to keep it in place while scrolling */}
      <div className="fixed bg-white w-60 border flex flex-col justify-between border-black/30 rounded-r-[3rem] h-screen space-y-5">
        <div className="flex justify-between gap-6 items-center p-5">
          <Image src="/tv.png" alt="logo" height={50} width={50} />

          <span className={`${dm_sans.className} font-bold text-2xl`}>
            MovieBox
          </span>
        </div>

        <div className="pb-12">
          <Link
            href="/"
            className="pl-[42px] py-7 flex gap-4 items-center  hover:bg-[#BE123C]/10 hover:border-r-2 border-[#BE123C] hover:text-[#BE123C"
          >
            <Image src="/Home.png" alt="home icon" height={25} width={25} />
            <h2 className=" font-semibold text-xl text-[#666]">Home</h2>
          </Link>

          <Link
            href="/"
            className="pl-[42px] py-7 flex gap-4 items-center  hover:bg-[#BE123C]/10 hover:border-r-2 border-[#BE123C] hover:text-[#BE123C"
          >
            <Image
              src="/MovieProjector.png"
              alt="Projector icon"
              height={25}
              width={25}
            />
            <h2 className=" font-semibold text-xl text-[#666]">Movies</h2>
          </Link>

          <Link
            href="/"
            className="pl-[42px] py-7 flex gap-4 items-center  hover:bg-[#BE123C]/10 hover:border-r-2 border-[#BE123C] hover:text-[#BE123C"
          >
            <Image src="/TVShow.png" alt="tv icon" height={25} width={25} />
            <h2 className=" font-semibold text-xl text-[#666]">TV Series</h2>
          </Link>

          <Link
            href="/"
            className="pl-[42px] py-7 flex gap-4 items-center  hover:bg-[#BE123C]/10 hover:border-r-2 border-[#BE123C] hover:text-[#BE123C"
          >
            <Image
              src="/Calendar.png"
              alt="calender icon"
              height={25}
              width={25}
            />
            <h2 className=" font-semibold text-xl text-[#666]">Upcoming</h2>
          </Link>

          <div className="px-5 my-4">
            <div className="bg-[#BE123C]/10 border rounded-lg border-[#BE123C] px-3 pt-10 pb-4 flex flex-col justify-center items-center space-y-3">
              <p className="font-semibold text-sm text-[#333333]/80">
                Play movie quizes and earn free tickets
              </p>
              <p className=" font-medium text-xs text-[#666]">
                50k people are playing now
              </p>
              <button className="py-2 px-6 bg-[#BE123C]/10 text-[#BE123C] rounded-full">
                Start Playing
              </button>
            </div>
          </div>

          <div className="pl-[42px] flex gap-4 items-center text-[#666]">
            <Image src="/Logout.png" alt="logo" height={30} width={30} />
            <span className=" font-semibold text-xl">Logout</span>
          </div>
        </div>
      </div>
    </div>
  );
}
