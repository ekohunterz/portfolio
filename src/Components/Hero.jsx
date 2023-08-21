import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const Hero = () => {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <section id="hero" className="bg-slate-100 min-h-screen">
      <div className="container">
        <div className="flex flex-wrap justify-between">
          <div data-aos="fade-right" data-aos-offset="300" data-aos-easing="ease-in-sine" className="w-full self-center px-4 lg:w-1/2 mt-48">
            <h1 className="font-bold text-4xl text-primary leading-relaxed">
              Hi, My Name <span className="text-secondary">Is</span>
              <span className="block text-5xl">
                Eko Teguh<span className="text-secondary"> Muhammadi</span>
              </span>
            </h1>
            <p className="text-2xl font-semibold mt-3">
              Junior <span className="text-red-800">Web Developer</span>
            </p>
            <br />
            <a href="#" className="bg-blue-800 py-2 px-10 text-xl text-white rounded-full shadow-md hover:bg-blue-950 transition duration-300 ease-in-out inline-block hover:scale-110">
              About Me
            </a>
            <div className="mt-10">
              <a target="_blank" href="https://www.facebook.com/Ryuuza01/" className="bg-black px-3 py-2 mr-3 text-xl text-white rounded-full shadow-md hover:bg-secondary transition duration-300 ease-in-out">
                <i className="fab fa-facebook"></i>
              </a>
              <a target="_blank" href="https://www.linkedin.com/in/eko-teguh-muhammadi-3614b1144/" className="bg-black px-3 py-2 mr-3 text-xl text-white rounded-full shadow-md hover:bg-secondary transition duration-300 ease-in-out">
                <i className="fab fa-linkedin"></i>
              </a>
              <a target="_blank" href="https://www.instagram.com/ekoteguh.m" className="bg-black px-3 py-2 mr-3 text-xl text-white rounded-full shadow-md hover:bg-secondary transition duration-300 ease-in-out">
                <i className="fab fa-instagram"></i>
              </a>
              <a target="_blank" href="https://github.com/ekohunterz" className="bg-black px-3 py-2 mr-3 text-xl text-white rounded-full shadow-md hover:bg-secondary transition duration-300 ease-in-out">
                <i className="fab fa-github"></i>
              </a>
            </div>
          </div>
          <div className="w-full self-center mt-20 mb-10 lg:mt-48 lg:w-1/2">
            <div data-aos="flip-left" data-aos-offset="300" data-aos-easing="ease-in-sine" className="w-full grid place-items-center">
              <img src="/foto.png" width={400} className="lg:hover:scale-150 lg:hover:-rotate-6 transition duration-300 overflow-auto"></img>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
