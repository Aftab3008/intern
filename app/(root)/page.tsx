"use client";

import AreaCharts from "@/components/shared/charts/AreaCharts";
import BarCharts from "@/components/shared/charts/BarCharts";
import LineCharts from "@/components/shared/charts/LineCharts";
import PieCharts from "@/components/shared/charts/PieCharts";
import { BentoGrid, BentoGridItem } from "@/components/ui/bento-grid";
import { ScrollArea } from "@/components/ui/scroll-area";
import { BarChart, AreaChart, PieChart, LineChart } from "lucide-react";

export default function Home() {
  return (
    <div className="w-full">
      <h1 className="text-2xl mb-4">Home</h1>
      <ScrollArea className="h-[calc(86vh-3rem)] w-full border rounded-md p-6 mb-0">
        <BentoGrid className="gap-4 md:grid-cols-1">
          <BentoGridItem
            title="Bar Chart"
            description="A sample bar chart"
            icon={<BarChart className="h-4 w-4 text-neutral-500" />}
          >
            <div className="w-full h-0 pb-[56.25%] relative">
              <div className="absolute top-0 left-0 w-full h-full">
                <BarCharts />
              </div>
            </div>
          </BentoGridItem>
          <BentoGridItem
            title="Area Chart"
            description="A sample area chart"
            icon={<AreaChart className="h-4 w-4 text-neutral-500" />}
          >
            <div className="w-full h-0 pb-[56.25%] relative">
              <div className="absolute top-0 left-0 w-full h-full">
                <AreaCharts />
              </div>
            </div>
          </BentoGridItem>

          <BentoGridItem
            title="Pie Chart"
            description="A sample pie chart"
            icon={<PieChart className="h-4 w-4 text-neutral-500" />}
          >
            <div className="w-full h-0 pb-[56.25%] relative">
              <div className="absolute top-0 left-0 w-full h-full">
                <PieCharts />
              </div>
            </div>
          </BentoGridItem>

          <BentoGridItem
            title="Line Chart"
            description="A sample line chart"
            icon={<LineChart className="h-4 w-4 text-neutral-500" />}
          >
            <div className="w-full h-0 pb-[56.25%] relative">
              <div className="absolute top-0 left-0 w-full h-full">
                <LineCharts />
              </div>
            </div>
          </BentoGridItem>
        </BentoGrid>
      </ScrollArea>
      {/* <BentoGrid className="gap-4 md:grid-cols-1">
        <BentoGridItem
          title="Bar Chart"
          description="A sample bar chart"
          icon={<BarChart className="h-4 w-4 text-neutral-500" />}
        >
          <div className="w-full h-0 pb-[56.25%] relative">
            <div className="absolute top-0 left-0 w-full h-full">
              <BarCharts />
            </div>
          </div>
        </BentoGridItem>
        <BentoGridItem
          title="Area Chart"
          description="A sample area chart"
          icon={<AreaChart className="h-4 w-4 text-neutral-500" />}
        >
          <div className="w-full h-0 pb-[56.25%] relative">
            <div className="absolute top-0 left-0 w-full h-full">
              <AreaCharts />
            </div>
          </div>
        </BentoGridItem>

        <BentoGridItem
          title="Pie Chart"
          description="A sample pie chart"
          icon={<PieChart className="h-4 w-4 text-neutral-500" />}
        >
          <div className="w-full h-0 pb-[56.25%] relative">
            <div className="absolute top-0 left-0 w-full h-full">
              <PieCharts />
            </div>
          </div>
        </BentoGridItem>

        <BentoGridItem
          title="Line Chart"
          description="A sample line chart"
          icon={<LineChart className="h-4 w-4 text-neutral-500" />}
        >
          <div className="w-full h-0 pb-[56.25%] relative">
            <div className="absolute top-0 left-0 w-full h-full">
              <LineCharts />
            </div>
          </div>
        </BentoGridItem>
      </BentoGrid> */}
    </div>
  );
}
