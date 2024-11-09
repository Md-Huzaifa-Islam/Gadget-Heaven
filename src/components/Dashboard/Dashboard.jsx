import Tabbs from "./Tabs";

const Dashboard = () => {
  return (
    <div>
      <div className="mt-6 flex flex-col items-center gap-4 bg-primary-0 pt-8 text-center text-white">
        <p className="text-2xl font-bold md:text-3xl">Dashboard</p>
        <p className="text-sm md:w-[700px] md:text-base">
          Explore the latest gadgets that will take your experience to the next
          level. From smart devices to the coolest accessories, we have it all!
        </p>
        <Tabbs></Tabbs>
      </div>
    </div>
  );
};

export default Dashboard;
