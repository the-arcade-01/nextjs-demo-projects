import Image from "next/image";
import Person from "../public/assets/person4.png";

const Testimonial = () => {
  return (
    <div className="mt-4 mb-20 mx-2 p-4 md:max-w-[800px] md:mx-56">
      <p className="text-2xl font-medium md:text-3xl">
        "Fast and understanding results. Edie understands their customer's
        needs. They have a young and talented team."
      </p>
      <div className="flex gap-4 pt-8">
        <Image src={Person} width={80} height={80} className="rounded-xl" />
        <div className="flex flex-col gap-2 justify-center items-start">
          <h1 className="text-xl font-medium">Carlos Tran</h1>
          <p className="text-gray-500">The Decorate Gatsby</p>
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
