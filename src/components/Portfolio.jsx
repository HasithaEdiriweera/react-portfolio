import React from "react";
import portfolio from "../assets/portfolio/portfolio.jpg";
import bookMgtSys from "../assets/portfolio/bookMgtSys.jpg";
import habbitApp from "../assets/portfolio/habbitDev.jpg";
import birthRateChart from "../assets/portfolio/birthRateChart.jpg";
import reactWeather from "../assets/portfolio/reactWeather.jpg";

const Portfolio = () => {
  const portfolios = [
    {
      id: 1,
      src: bookMgtSys,
      href: "https://github.com/HasithaEdiriweera/vue3-book-mgt-system",
      demo: "https://github.com/HasithaEdiriweera/laravel-book-mgt-system",
    },
    {
      id: 2,
      src: habbitApp,
      href: "https://github.com/HasithaEdiriweera/habit-app",
      demo: "https://github.com/HasithaEdiriweera/habbit_app_be",
    },
    {
      id: 3,
      src: portfolio,
      href: "https://github.com/HasithaEdiriweera",
      demo: "https://github.com/HasithaEdiriweera",
    },
    {
      id: 4,
      src: reactWeather,
      href: "https://github.com/HasithaEdiriweera/react-weather-app",
      demo: "https://react-weather-app-25n4.vercel.app/",
    },
    {
      id: 5,
      src: birthRateChart,
      href: "https://github.com/HasithaEdiriweera/birth-rate-chart",
      demo: "https://hasithaediriweera.github.io/",
    },
  ];

  return (
    <div
      name="portfolio"
      className="bg-gradient-to-b from-black to-sky-900 w-full text-white md:h-screen"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            Portfolio
          </p>
          <p className="py-6">Check out some of my work right here</p>
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0">
          {portfolios.map(({ id, src, href, demo }) => (
            <div key={id} className="shadow-md shadow-gray-500 rounded-lg">
              <img
                src={src}
                alt=""
                className="rounded-md duration-200 hover:scale-105"
              />
              <div className="flex items-center justify-center">
                <a
                  href={demo}
                  className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105"
                  target="_blank"
                  rel="noreferrer"
                >
                  Demo
                </a>
                <a
                  href={href}
                  className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105"
                  target="_blank"
                  rel="noreferrer"
                >
                  Code
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
