import ArrowUp from "assets/arrow_up.svg";

const ActivityOverview = () => {
  return (
    <div className="bg-sec w-full rounded-md p-6">
      <div className="flex flex-col gap-2">
        <div className="text-xl font-bold text-white">Activity Overview</div>
        <div className="flex gap-2 text-white">
          <img src={ArrowUp} alt="Arrow up" />
          16% this month
        </div>
      </div>
      <div className="py-6">
        <div className="flex gap-4">
          <div className="flex flex-col items-center">
            <span className="w-[21px] h-[21px] rounded-full border-2 border-acco" />
            <span className="h-[70px] w-0 border border-[#5C6CA5]" />
          </div>
          <div>
            <div className="text-sm text-white leading-[175%]">
              <span className="font-bold">Nick Mark</span> Mentioned
              <span className="font-bold"> Sara Smith </span>
              In New Post
            </div>
            <div className="text-xs text-[#9F9F9F] leading-[175%]">
              11 JUL 8:10 PM
            </div>
          </div>
        </div>
        <div className="flex gap-4">
          <div className="flex flex-col items-center">
            <span className="w-[21px] h-[21px] rounded-full border-2 border-acco" />
            <span className="h-[70px] w-0 border border-[#5C6CA5]" />
          </div>
          <div>
            <div className="text-sm text-white leading-[175%]">
              The <span className="font-bold">Post Name</span> was removed by
              <span className="font-bold"> Nick Mark</span>
            </div>
            <div className="text-xs text-[#9F9F9F] leading-[175%]">
              11 JUL 8:10 PM
            </div>
          </div>
        </div>
        <div className="flex gap-4">
          <div className="flex flex-col items-center">
            <span className="w-[21px] h-[21px] rounded-full border-2 border-acco" />
            <span className="h-[70px] w-0 border border-[#5C6CA5]" />
          </div>
          <div>
            <div className="text-sm text-white leading-[175%]">
              <span className="font-bold">Patrick Sulivan</span> Published a New
              Post
            </div>
            <div className="text-xs text-[#9F9F9F] leading-[175%]">
              11 JUL 8:10 PM
            </div>
          </div>
        </div>
        <div className="flex gap-4">
          <div className="flex flex-col items-center">
            <span className="w-[21px] h-[21px] rounded-full border-2 border-acco" />
            <span className="h-[70px] w-0 border border-[#5C6CA5]" />
          </div>
          <div>
            <div className="text-sm text-white leading-[175%]">
              <span className="font-bold">240+ users</span> have subscribed to
              Newsletter #1
            </div>
            <div className="text-xs text-[#9F9F9F] leading-[175%]">
              11 JUL 8:10 PM
            </div>
          </div>
        </div>
        <div className="flex gap-4">
          <div className="flex flex-col items-center">
            <span className="w-[21px] h-[21px] rounded-full border-2 border-acco" />
            <span className="h-[60px] w-0 border border-[#5C6CA5]" />
          </div>
          <div>
            <div className="text-sm text-white leading-[175%]">
              The <span className="font-bold">Post Name</span> was suspended by{" "}
              <span className="font-bold">Nick Mark</span>
            </div>
            <div className="text-xs text-[#9F9F9F] leading-[175%]">
              11 JUL 8:10 PM
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ActivityOverview;
