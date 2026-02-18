import { Separator } from "@/components/ui/separator";
import FormContribute from "@/components/FormContribute";

const page = () => {
  return (
    <div className="w-full px-1 sm:px-4 md:px-2 lg:px-2 py-4">
      <h1 className="text-xl sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl font-bold text-white mb-4">
        Je Contribue
      </h1>

      <Separator className="mb-2 bg-white/10" />
      <div className="my-8">
        <p className="text-white">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut
          praesentium blanditiis porro recusandae quo ipsam. Maiores optio sit
          obcaecati quae?
        </p>
      </div>
      <div>
        <FormContribute />
      </div>
    </div>
  );
};

export default page;
