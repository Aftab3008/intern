import { Loader2 } from "lucide-react";

export default function loading() {
  return (
    <div className="flex items-center justify-center h-full w-full">
      <Loader2 className="animate-spin h-10 w-10 text-primary" />
      <span className="ml-2">Loading..</span>
    </div>
  );
}
