import { useContext } from "react";
import HistoryContainer from "./HistoryContainer";
import HistoryContext from "../../context/purchasecontext";

const History = () => {
  const { history, clearHistory } = useContext(HistoryContext);
  return (
    <div>
      <div className="mb-6 mt-6 flex flex-col items-center gap-4 bg-primary-0 p-8 text-center text-white md:mb-12">
        <p className="text-2xl font-semibold md:text-3xl md:font-bold">
          Thank You For Purchasing
        </p>
        <p className="text-sm md:w-[700px] md:text-base">
          Your devices will be delivered soon
        </p>
      </div>
      <div className="space-y-8 bg-background-0 px-5 pb-6 text-black md:px-32 md:pb-12">
        <div className="flex items-center justify-between">
          <p className="text-xl font-bold text-[#0B0B0B] md:text-2xl">
            Recent Purchase({history.length})
          </p>
          <button
            onClick={clearHistory}
            className={`btn ${history.length == 0 ? "btn-disabled" : ""} rounded-[32px] border-[1.5px] border-[#9538E2] bg-[#9538E2] px-5 py-2 font-medium text-white md:text-lg`}
          >
            Clear History
          </button>
        </div>
        <HistoryContainer></HistoryContainer>
      </div>
    </div>
  );
};

export default History;
