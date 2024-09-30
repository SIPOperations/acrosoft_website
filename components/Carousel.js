"use client";
import { useState } from "react";
import Image from "next/image";
import leftArrow from "../public/img/leftArrow2.svg";
import rightArrow from "../public/img/rightArrow2.svg";
import whiteLogoSlider from "../public/img/whiteLogoSlider.svg";
import whiteStar1 from "../public/img/whiteStar.svg";
import orangeStar1 from "../public/img/orangeStar.svg";
import whiteStar2 from "../public/img/whiteStar.svg";
import orangeStar2 from "../public/img/orangeStar.svg";
import TransBtn from "./TransBtn";

const Carousel = () => {
  const images = [
    {
      name: "Adam",
      img: whiteLogoSlider,
      rate: [orangeStar1, orangeStar2, whiteStar1, whiteStar2, whiteStar1],
      details:
        "Lorem ipsum odor amet, consectetuer adipiscing elit. Netus porta consequat eget dictum maximus.",
    },
    {
      name: "Harry",
      img: whiteLogoSlider,
      rate: [orangeStar1, orangeStar2, whiteStar1, whiteStar2],
      details:
        "Lorem ipsum odor amet, consectetuer adipiscing elit. Netus porta consequat eget dictum maximus.",
    },
    {
      name: "Morris",
      img: whiteLogoSlider,
      rate: [orangeStar1, orangeStar2, whiteStar1, whiteStar2],
      details:
        "Lorem ipsum odor amet, consectetuer adipiscing elit. Netus porta consequat eget dictum maximus.",
    },
    {
      name: "John",
      img: whiteLogoSlider,
      rate: [orangeStar1, orangeStar2, orangeStar1, whiteStar2, whiteStar1],
      details:
        "Lorem ipsum odor amet, consectetuer adipiscing elit. Netus porta consequat eget dictum maximus.",
    },
    {
      name: "Jane",
      img: whiteLogoSlider,
      rate: [orangeStar1, orangeStar2, whiteStar1, whiteStar2],
      details:
        "Lorem ipsum odor amet, consectetuer adipiscing elit. Netus porta consequat eget dictum maximus.",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const itemsToShow = 3;

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex + itemsToShow < images.length ? prevIndex + 1 : 0
    );
  };

  const handlePrevious = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex - itemsToShow >= 0 ? prevIndex - 1 : images.length - itemsToShow
    );
  };

  return (
    <div className="px-16 py-20 lg:px-40 flex flex-col items-center xl:items-start">
      <h1
        className="font-extrabold text-center xl:text-left mb-20"
        style={{ fontSize: "64px", color: "#1B1B1B", lineHeight: "75px" }}
      >
        Client Testimonials
      </h1>

      {/* Carousel Container */}
      <div className="flex flex-col items-center w-full">
        <div className="relative w-full overflow-hidden">
          <div className="flex justify-center items-center">
            {/* Cards */}
            <div className="flex space-x-6 lg:space-x-10 transform transition-transform duration-500">
              {images
                .slice(currentIndex, currentIndex + itemsToShow)
                .map((card, index) => (
                  <div
                    key={index}
                    className={`w-64 lg:w-80 p-4 bg-white shadow-lg rounded-lg transition-transform duration-300 transform ${
                      index === 1 ? "scale-105 z-10" : "scale-95"
                    }`}
                  >
                    <div className="flex justify-center mb-4">
                      <Image
                        src={card.img}
                        alt={card.name}
                        width={50}
                        height={50}
                      />
                    </div>
                    <div className="text-center">
                      <h2 className="font-bold text-lg mb-2">{card.name}</h2>
                      <ul className="flex justify-center gap-1 mb-4">
                        {card.rate.map((star, starIndex) => (
                          <li key={starIndex}>
                            <Image
                              src={star}
                              alt={`star-${starIndex}`}
                              width={20}
                              height={20}
                            />
                          </li>
                        ))}
                      </ul>
                      <p className="text-sm text-gray-500">{card.details}</p>
                    </div>
                  </div>
                ))}
            </div>
          </div>
        </div>

        {/* Dots Navigation */}
        <div className="flex justify-center space-x-2 mt-6 items-center">
          <TransBtn handle={handlePrevious} icon={leftArrow} />
          {images
            .slice(currentIndex, currentIndex + itemsToShow)
            .map((_, index) => (
              <div
                key={index}
                className={`w-3 h-3 rounded-full ${
                  index === currentIndex ? "bg-blue-500" : "bg-gray-300"
                }`}
              />
            ))}
          <TransBtn handle={handleNext} icon={rightArrow} />
        </div>
      </div>
    </div>
  );
};

export default Carousel;
