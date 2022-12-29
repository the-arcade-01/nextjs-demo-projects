import { useState } from "react";
import { BsChevronCompactLeft, BsChevronCompactRight } from "react-icons/bs";
import { RxDotFilled } from "react-icons/rx";

const ImageSlider = () => {
  const slides = [
    {
      url: "https://images.pexels.com/photos/10980737/pexels-photo-10980737.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      title: "Islands",
    },
    {
      url: "https://images.pexels.com/photos/931007/pexels-photo-931007.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      title: "Waterfall",
    },
    {
      url: "https://images.pexels.com/photos/2409681/pexels-photo-2409681.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      title: "Girls",
    },
  ];

  const [currIndex, setCurrIndex] = useState(0);

  const prevSlide = () => {
    if (currIndex == 0) {
      setCurrIndex(slides.length - 1);
    } else setCurrIndex(currIndex - 1);
  };

  const nextSlide = () => {
    if (currIndex == slides.length - 1) {
      setCurrIndex(0);
    } else setCurrIndex(currIndex + 1);
  };

  const goToSlide = (index) => {
    setCurrIndex(index);
  };

  return (
    <div className="max-w-[1400px] h-[580px] w-full m-auto py-16 px-4 relative group">
      <div
        className="w-full h-full rounded-2xl bg-center bg-cover duration-500"
        style={{ backgroundImage: `url(${slides[currIndex].url})` }}
      ></div>
      {/* Left Arrow */}
      <div className="absolute top-[50%] -translate-x-0 translate-y-[-50%] left-5 text-2xl rounded-full p-2 group-hover:bg-black/20 text-white cursor-pointer">
        <BsChevronCompactLeft size={30} onClick={prevSlide} />
      </div>
      {/* Right Arrow */}
      <div className="absolute top-[50%] -translate-x-0 translate-y-[-50%] right-5 text-2xl rounded-full p-2 group-hover:bg-black/20 text-white cursor-pointer">
        <BsChevronCompactRight size={30} onClick={nextSlide} />
      </div>

      <div className="flex top-4 justify-center py-2">
        {slides.map((slide, index) => (
          <div
            className="text-2xl cursor-pointer"
            key={index}
            onClick={() => goToSlide(index)}
          >
            <RxDotFilled />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ImageSlider;
