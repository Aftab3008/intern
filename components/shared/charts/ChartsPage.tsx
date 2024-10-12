import AreaCharts from "@/components/shared/charts/AreaCharts";
import BarCharts from "@/components/shared/charts/BarCharts";
import LineCharts from "@/components/shared/charts/LineCharts";
import PieCharts from "@/components/shared/charts/PieCharts";
import { BentoGrid, BentoGridItem } from "@/components/ui/bento-grid";
import { ScrollArea } from "@/components/ui/scroll-area";
import { appleData, getCoinsPrice } from "@/utils/actions/apiactions";
import { AreaChart, BarChart, LineChart, PieChart } from "lucide-react";

export default async function ChartsPage() {
  const { coins: piechartData, prices: bargaphData } = await getCoinsPrice();
  return (
    <ScrollArea className="h-[calc(86vh-3rem)] w-full border rounded-md p-6 mb-0">
      <BentoGrid className="gap-4  md:grid-cols-4 lg:grid-cols-4">
        <BentoGridItem
          title="Bar Chart"
          description="Top 8 Crypto Coins and their prices"
          icon={<BarChart className="h-4 w-4 text-neutral-500" />}
          className="border border-gray-200 col-span-4"
        >
          <div className="w-full h-0 pb-[56.25%] relative">
            <div className="absolute top-0 left-0 w-full h-full">
              <BarCharts data={bargaphData} />
            </div>
          </div>
        </BentoGridItem>
        <BentoGridItem
          title="Pie Chart"
          description="Top 8 Crypto Coins Market Cap"
          icon={<PieChart className="h-4 w-4 md:h-8 md:w-8 text-neutral-500" />}
          className="border border-gray-200 sm:col-span-4"
        >
          <div className="w-full h-0 pb-[56.25%] relative">
            <div className="absolute top-0 left-0 w-full h-full">
              <PieCharts data={piechartData} />
            </div>
          </div>
        </BentoGridItem>
        <BentoGridItem
          title="Area Chart"
          description="Apple Samsung stock price"
          icon={<AreaChart className="h-4 w-4 text-neutral-500" />}
          className="border border-gray-200 sm:col-span-4 md:col-span-2"
        >
          <div className="w-full h-0 pb-[56.25%] relative">
            <div className="absolute top-0 left-0 w-full h-full">
              <AreaCharts />
            </div>
          </div>
        </BentoGridItem>

        <BentoGridItem
          title="Line Chart"
          description="A sample line chart"
          icon={<LineChart className="h-4 w-4 text-neutral-500" />}
          className="border border-gray-200 sm:col-span-4 md:col-span-2 lg:col-span-2"
        >
          <div className="w-full h-0 pb-[56.25%] relative">
            <div className="absolute top-0 left-0 w-full h-full">
              <LineCharts />
            </div>
          </div>
        </BentoGridItem>
      </BentoGrid>
    </ScrollArea>
  );
}
