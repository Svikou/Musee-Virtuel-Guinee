import AppBarChart from "@/components/dashboard/AppBarChart";
import AppAreaChart from "@/components/dashboard/AppAreaChart";
import AppPieChart from "@/components/dashboard/AppPieChart";
import CardList from "@/components/dashboard/CardList";
import { SectionCards } from "@/components/dashboard/CardSection2";
import { RecentActivities } from "@/components/dashboard/RecentActivities";

const Homepage = () => {
  return (
    <div>
      <div className="@container/main flex flex-1 flex-col gap-2 mb-8">
        <SectionCards />
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 2xl:grid-cols-4 gap-4 lg:px-4 mb-4">
        <div className="backdrop-blur-lg bg-black/10 p-4 rounded-lg lg:col-span-2 xl:col-span-1 2xl:col-span-2">
          <AppAreaChart />
        </div>
        <div className="backdrop-blur-lg bg-black/10 p-4 rounded-lg">
          <AppPieChart />
        </div>
        <div className="backdrop-blur-lg bg-black/10 p-4 rounded-lg lg:col-span-2 xl:col-span-1 2xl:col-span-2">
          <AppBarChart />
        </div>
        {/* <div className="bg-primary-foreground p-4 rounded-lg">
        <CardList title="Latest Transactions" />
      </div> */}
        {/* <div className="bg-primary-foreground p-4 rounded-lg"></div> */}
        {/* <div className="bg-primary-foreground p-4 rounded-lg lg:col-span-2 xl:col-span-1 2xl:col-span-2">
        <AppAreaChart />
      </div> */}
      </div>
      <div className="lg:px-4 mb-4">
        <RecentActivities />
      </div>
    </div>
  );
};

export default Homepage;
