import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import Cart from "../Cart/Cart";
import Wishlist from "../Wishlist/Wishlist";

const Tabbs = () => {
  return (
    <Tabs className={"grid w-full gap-8"}>
      <TabList className={"flex items-center justify-center gap-6 border-b-0"}>
        <Tab
          className={`px-16 py-3`}
          style={{
            borderRadius: "32px 32px 32px 32px",
            border: "1px solid white",
          }}
        >
          Cart
        </Tab>
        <Tab
          className={"rounded-[32px] px-16 py-3"}
          style={{
            borderRadius: "32px 32px 32px 32px",
            border: "1px solid white",
          }}
        >
          Wishlist
        </Tab>
      </TabList>

      <div className="">
        <TabPanel className={"bg-white"}>
          <Cart></Cart>
        </TabPanel>
        <TabPanel className={"bg-white"}>
          <Wishlist></Wishlist>
        </TabPanel>
      </div>
    </Tabs>
  );
};

Tabbs.displayName = "DashboardTabs";

export default Tabbs;
