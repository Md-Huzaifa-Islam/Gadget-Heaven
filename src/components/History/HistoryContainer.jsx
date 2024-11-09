import { useContext } from "react";
import HistoryContext from "../../context/purchasecontext";
import HistoryDevice from "./HistoryDevice";

const HistoryContainer = () => {
  const { history } = useContext(HistoryContext);
  return (
    <div className="flex flex-col gap-3 md:gap-6 md:px-5">
      {history.map((device, id) => {
        return <HistoryDevice key={id} device={device}></HistoryDevice>;
      })}
    </div>
  );
};

export default HistoryContainer;
