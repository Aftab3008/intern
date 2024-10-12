import UpdateForm from "@/components/shared/authforms/UpdateForm";
import { getCurrentUser } from "@/utils/actions/useractions";
import { Loader2, User2Icon } from "lucide-react";

export default async function page({ params }: { params: { userId: string } }) {
  const user = await getCurrentUser();
  if (!user)
    return (
      <div className="h-screen w-full flex justify-center items-center">
        <Loader2 className="animate-spin h-10 w-10 text-primary" />
      </div>
    );

  return (
    <div className="w-full h-full flex flex-col">
      <h1 className="text-2xl mb-4 font-semibold text-primary">
        <User2Icon className="h-6 w-6 inline-block -mt-1 mr-2" />
        My Profile
      </h1>
      <div className="flex-grow overflow-auto">
        <UpdateForm user={user} />
      </div>
    </div>
  );
}
