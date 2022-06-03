import { FC, memo } from "react";
import quiz from "../../Images/quiz.png";
import assignment from "../../Images/assignment.png";
import S1 from "../../Images/S1.png";
import S2 from "../../Images/S2.png";
import S3 from "../../Images/S3.png";

import "flowbite";
import { Link } from "react-router-dom";
type HomeProps = {};

const Home: FC<HomeProps> = () => {
  return (
    <div className="h-screen bg-gray-700">
      <div
        id="default-carousel"
        className="relative py-10 h-max "
        data-carousel="static"
      >
        <div className="relative py-10 overflow-hidden bg-gray-500 rounded-lg h-96 sm:h-64 xl:h-80 lg:h-2/3 2xl:my-5">
          <div
            className="hidden duration-700 ease-in-out lg:my-10 "
            data-carousel-item
          >
            <span className="absolute text-2xl font-semibold -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 text-cyan-800 sm:text-3xl dark:text-gray-800">
              First Slide
            </span>
            <a href="https://codeyogi.io/">
              <img
                src={S2}
                className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 "
                alt="..."
              />
            </a>
          </div>

          <div className="hidden duration-700 ease-in-out" data-carousel-item>
            <img
              src={S1}
              className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
              alt="..."
            />
          </div>

          <div className="hidden duration-700 ease-in-out" data-carousel-item>
            <img
              src={S3}
              className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
              alt="..."
            />
          </div>
        </div>

        <div className="absolute z-30 flex space-x-3 -translate-x-1/2 bottom-5 left-1/2">
          <button
            type="button"
            className="w-3 h-3 rounded-full"
            aria-current="false"
            aria-label="Slide 1"
            data-carousel-slide-to="0"
          ></button>
          <button
            type="button"
            className="w-3 h-3 rounded-full"
            aria-current="false"
            aria-label="Slide 2"
            data-carousel-slide-to="1"
          ></button>
          <button
            type="button"
            className="w-3 h-3 rounded-full"
            aria-current="false"
            aria-label="Slide 3"
            data-carousel-slide-to="2"
          ></button>
        </div>

        <button
          type="button"
          className="absolute top-0 left-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
          data-carousel-prev
        >
          <span className="inline-flex items-center justify-center w-8 h-8 rounded-full sm:w-10 sm:h-10 bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
            <svg
              className="w-5 h-5 text-black sm:w-6 sm:h-6 dark:text-gray-800"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M15 19l-7-7 7-7"
              ></path>
            </svg>
            <span className="hidden">Previous</span>
          </span>
        </button>
        <button
          type="button"
          className="absolute top-0 right-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
          data-carousel-next
        >
          <span className="inline-flex items-center justify-center w-8 h-8 rounded-full sm:w-10 sm:h-10 bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
            <svg
              className="w-5 h-5 text-black sm:w-6 sm:h-6 dark:text-gray-800"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M9 5l7 7-7 7"
              ></path>
            </svg>
            <span className="hidden">Next</span>
          </span>
        </button>
      </div>
      <div className="flex justify-center mt-16">
        <Link to="/lectures">
          <img
            className="w-24 h-24"
            src="https://codeyogi.io/images/favicon-96.png"
          ></img>
        </Link>
      </div>
    </div>
  );
};

Home.defaultProps = {};

export default memo(Home);
