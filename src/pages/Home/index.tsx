import React, { useState, useEffect } from "react";
import { FaLinkedinIn, FaWhatsapp, FaInstagram } from "react-icons/fa";

const index = () => {
  const [view, setView] = useState<number>(1);

  useEffect(() => {
    const timer = setTimeout(() => {
      if (view < 10) setView(view + 1);
    }, 7000);

    return () => clearTimeout(timer);
  }, [view]);

  return (
    <div className="grid h-screen max-w-screen-lg m-auto items-center justify-center">
      {view === 1 && (
        <div className="text-white flex flex-col animate-opacityInOut font-medium text-lg     text-center uppercase md:text-3xl sm:text-2xl">
          <img
            src="./image_me_nbg_resize.png"
            alt=""
            className="w-1/2 sm:w-1/3 m-auto rounded-full p-2 aspect-square object-cover border-2 border-emerald-600"
          />
          <h2 className="">
            Hello I am <br />
            <span className="text-2xl sm:text-4xl md:text-5xl font-semibold">
              Fabrizhio Al chariti
            </span>
          </h2>
          <h3 className="uppercase">A Web Developer</h3>
        </div>
      )}
      {view === 2 && (
        <div className="text-white flex flex-col animate-opacityInOut font-medium text-lg     text-center uppercase md:text-3xl sm:text-2xl">
          <h2 className="text-2xl font-semibold sm:text-4xl">
            Mid-Level FullStack Programmer
          </h2>
        </div>
      )}
      {view === 3 && (
        <div className="text-white flex flex-col animate-opacityInOut font-medium text-lg     text-center uppercase md:text-3xl sm:text-2xl">
          <h2 className="text-2xl font-semibold sm:text-4xl">
            With programming languages:
          </h2>
          <ul className="flex w-full flex-wrap gap-4 p-2 items-center justify-center auto-rows-max m-auto text-xl sm:text-2xl md:text-3xl ">
            <li>
              <i className="text-emerald-600">✔</i> JavaScript
            </li>
            <li>
              <i className="text-emerald-600">✔</i> PHP
            </li>
            <li>
              <i className="text-amber-500">🕒</i> GoLang{" "}
              <span className="text-sm sm:text-base md:text-lg">
                (Studying it)
              </span>
            </li>
          </ul>
        </div>
      )}

      {view === 4 && (
        <div className="text-white flex flex-col animate-opacityInOut font-medium text-lg     text-center uppercase md:text-3xl sm:text-2xl">
          <h2 className="text-2xl font-semibold sm:text-4xl">
            Mastered technologies
          </h2>
          <ul className="flex w-full flex-wrap gap-2 p-2 items-center justify-center auto-rows-max m-auto text-xl sm:text-2xl md:text-3xl ">
            <li>
              <i className="text-emerald-600">✔</i> NodeJS
            </li>
            <li>
              <i className="text-emerald-600">✔</i> XAMPP
            </li>
            <li>
              <i className="text-emerald-600">✔</i> MySQL
            </li>
            <li>
              <i className="text-emerald-600">✔</i> SQLServer
            </li>
            <li>
              <i className="text-emerald-600">✔</i> MongoDB
            </li>
          </ul>
        </div>
      )}

      {view === 5 && (
        <div className="text-white flex flex-col animate-opacityInOut font-medium text-lg     text-center uppercase md:text-3xl sm:text-2xl">
          <h2 className="text-2xl font-semibold sm:text-4xl">
            Experience in frameworks
          </h2>
          <ul className="flex w-full flex-wrap gap-2 p-2 items-center justify-center auto-rows-max m-auto text-xl sm:text-2xl md:text-3xl ">
            <li>
              <i className="text-emerald-600">✔</i> ReactJS
            </li>
            <li>
              <i className="text-emerald-600">✔</i> NextJS
            </li>
            <li>
              <i className="text-emerald-600">✔</i> TailwindCSS
            </li>
            <li>
              <i className="text-emerald-600">✔</i> Sass
            </li>
          </ul>
        </div>
      )}

      {view === 6 && (
        <div className="text-white flex flex-col animate-opacityInOut font-medium text-lg     text-center uppercase md:text-3xl sm:text-2xl p-4">
          <h2 className="text-2xl font-semibold sm:text-4xl text-left">
            <i className="text-emerald-600 ">✔</i> Version Controller with
            GITHUB
          </h2>
          <h2 className="text-2xl font-semibold sm:text-4xl text-left">
            <i className="text-emerald-600">✔</i> ServerLess with Vercel
          </h2>
          <h2 className="text-2xl font-semibold sm:text-4xl text-left">
            <i className="text-emerald-600">✔</i> REST API Management
          </h2>
          <h2 className="text-2xl font-semibold sm:text-4xl text-left">
            <i className="text-emerald-600">✔</i> Compiled with WEBPACK
          </h2>
        </div>
      )}

      {view === 7 && (
        <div className="text-white flex flex-col animate-opacityInOut font-medium text-lg     text-center uppercase md:text-3xl sm:text-2xl p-4">
          <h2 className="text-2xl font-semibold sm:text-4xl">
            Dependency managers
          </h2>
          <ul className="flex w-full flex-wrap gap-2 p-2 items-center justify-center auto-rows-max m-auto text-xl sm:text-2xl md:text-3xl ">
            <li>
              <i className="text-emerald-600">✔</i> Yarn
            </li>
            <li>
              <i className="text-emerald-600">✔</i> Composer
            </li>
          </ul>
        </div>
      )}

      {view === 8 && (
        <div className="text-white flex flex-col animate-opacityInOut font-medium text-lg     text-center uppercase md:text-3xl sm:text-2xl p-4">
          <h2 className="text-2xl font-semibold sm:text-4xl">Previous works</h2>
          <ul className="grid text-left  w-full flex-wrap gap-2 p-2 items-center justify-center auto-rows-max m-auto text-xl sm:text-2xl md:text-3xl ">
            <li>
              <i className="text-emerald-600">✔</i> FullStack - Collage Cristo
              Rey
            </li>
            <li>
              <i className="text-emerald-600">✔</i> FullStack - Branak
            </li>
            <li>
              <i className="text-emerald-600">✔</i> FullStack - Minds Over
              Market
            </li>
            <li>
              <i className="text-emerald-600">✔</i> FullStack - LimitlessGN
            </li>
            <li>
              <i className="text-emerald-600">✔</i> Frontend - TRCSports
            </li>
          </ul>
        </div>
      )}

      {view === 9 && (
        <div className="text-white flex flex-col animate-opacityInOut font-medium text-lg     text-center uppercase md:text-3xl sm:text-2xl">
          <h2 className="text-2xl font-semibold sm:text-4xl">
            University Degree: <br /> Bachelor degree in computer science
          </h2>
          <span className="text-sm sm:text-base md:text-lg">
            (Awaiting Title)
          </span>
        </div>
      )}

      {view === 10 && (
        <div className="text-white flex flex-col animate-opacityIn font-medium text-lg     text-center uppercase md:text-3xl sm:text-2xl">
          <img
            src="./image_me_nbg_resize.png"
            alt=""
            className="w-1/2 sm:w-1/3 m-auto rounded-full p-2 aspect-square object-cover border-2 border-emerald-600"
          />
          <h2 className="text-2xl font-semibold sm:text-4xl">
            Profiles and Contact
          </h2>
          <ul className="flex text-left  w-full flex-wrap gap-2 p-2 items-center justify-center auto-rows-max m-auto text-4xl sm:text-5xl md:text-6xl ">
            <li>
              <a
                href="https://www.linkedin.com/in/fabrizhioa/"
                className="text-emerald-600 hover:text-emerald-500"
              >
                <FaLinkedinIn />
              </a>
            </li>
            <li>
              <a
                href="https://www.instagram.com/fabrizhio.a/"
                className="text-emerald-600 hover:text-emerald-500"
              >
                <FaInstagram />
              </a>
            </li>
            <li>
              <a
                href="https://wa.me/584121075052"
                className="text-emerald-600 hover:text-emerald-500"
              >
                <FaWhatsapp />
              </a>
            </li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default index;
