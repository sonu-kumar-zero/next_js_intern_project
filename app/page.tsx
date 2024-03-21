import CommentCard from "@/components/home/comments/CommentCard";
import StorieCard from "@/components/home/stories/StorieCard";
import Navbar from "@/components/navbar/Navbar";
import HomeMobile from "@/pages/mobile/HomeMobile";

export default function Home() {
  return (
    <main className="w-[100dvw] h-[100dvh] flex">
      <Navbar />
      <div className="hidden md:flex w-full h-full justify-between py-2 pr-10 gap-10 lg:gap-32 overflow-y-scroll">
        <div className="md:w-2/3">
          <div className="ml-2 px-5 py-2 bg-gray-300 text-red-400 font-bold mb-2 w-fit">DISSCUSSION FOURM</div>
          <div className="flex flex-col gap-5">
            <CommentCard />
            <CommentCard />
            <CommentCard />
            <CommentCard />
            <CommentCard />
            <CommentCard />
            <CommentCard />
            <CommentCard />
          </div>
        </div>
        <div className="w-1/3">
          <div className="px-5 py-2 bg-gray-300 text-red-400 font-bold mb-2 w-fit">MARKET STORIES</div>
          <div className="flex flex-col gap-5">
            <StorieCard />
            <StorieCard />
            <StorieCard />
            <StorieCard />
            <StorieCard />
            <StorieCard />
            <StorieCard />
            <StorieCard />
          </div>
        </div>
      </div>
      {/* <div className="block md:hidden h-[100dvh]">
        <div className="flex h-fit text-sm gap-1">
          <div className="ml-2 px-5 py-2 bg-gray-300 text-red-400 font-bold mb-2 w-fit">DISSCUSSION FOURM</div>
          <div className="px-5 py-2 bg-gray-300 text-red-400 font-bold mb-2 w-fit">MARKET STORIES</div>
        </div>
        <div className="flex flex-col gap-5 max-h-full overflow-y-scroll pr-5">
          <StorieCard />
          <StorieCard />
          <StorieCard />
          <StorieCard />
          <StorieCard />
          <StorieCard />
          <StorieCard />
          <StorieCard />
        </div>
      </div> */}
      <HomeMobile />
    </main>
  );
}
