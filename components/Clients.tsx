import { testimonials } from "@/data";
import { InfiniteMovingCards } from "./ui/InifiteMovingCards";

const Clients = () => {
  return (
    <div className="py-20" id="projects">
      <h1 className="heading">
        Quelques témoignages de {""}
        <span className="text-purple">clients</span>
      </h1>
      <div className="flex flex-col items-center">
        <InfiniteMovingCards
          items={testimonials}
          direction="right"
          speed="slow"
        />
        {/* WIP */}
      </div>
    </div>
  );
};

export default Clients;
