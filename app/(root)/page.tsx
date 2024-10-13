import ChartsPage from "@/components/shared/charts/ChartsPage";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Home } from "lucide-react";

export default async function page() {
  return (
    <div className="w-full">
      <h1 className="text-2xl mb-4 font-semibold text-primary">
        <Home className="h-6 w-6 inline-block -mt-1 mr-2 " />
        Home
      </h1>
      <ScrollArea className="h-[80vh]">
        <ChartsPage />
      </ScrollArea>
    </div>
  );
}
