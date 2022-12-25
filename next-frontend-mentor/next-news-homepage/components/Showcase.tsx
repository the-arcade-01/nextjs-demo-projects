import Image from "next/image";
import web3 from "../public/images/image-web-3-desktop.jpg";

const Showcase = () => {
  return (
    <div className="flex flex-row justify-center items-center">
      <section className="basis-1/2">
        <div className="relative h-10">
          <Image src={web3} alt="web3" className="object-contain" fill />
        </div>
      </section>
      <section className="basis-1/3">
        <h1>somethign</h1>
      </section>
    </div>
  );
};

export default Showcase;
