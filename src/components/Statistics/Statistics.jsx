import Graph from "./Graph";

const Statistics = () => {
  return (
    <div>
      <div className="mb-6 mt-6 flex flex-col items-center gap-4 bg-primary-0 p-8 text-center text-white md:mb-12">
        <p className="text-2xl font-semibold md:text-3xl md:font-bold">
          Statistics
        </p>
        <p className="text-sm md:w-[700px] md:text-base">
          Explore the latest gadgets that will take your experience to the next
          level. From smart devices to the coolest accessories, we have it all!
        </p>
      </div>
      <div className="space-y-8 bg-background-0 px-5 pb-6 text-black md:px-32 md:pb-12">
        <p className="text-xl font-bold text-[#0B0B0B] md:text-2xl">Cart</p>
        <div className="flex h-full justify-center rounded-2xl bg-white px-3 py-5 md:px-6 md:py-20">
          <Graph></Graph>
        </div>
      </div>
    </div>
  );
};

export default Statistics;
