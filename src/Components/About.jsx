import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

function About() {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <>
      <section id="about" className="bg-slate-300 min-h-screen">
        <div className="container">
          <h1 data-aos="fade-up" className="font-bold  text-4xl text-center pt-20">
            <i className="fas fa-user" /> About <span className="text-purple-700">Me</span>
          </h1>
          <div className="flex flex-wrap justify-between">
            <div className="w-full self-center  mt-10 lg:mt-40 lg:w-1/2">
              <div className="w-full grid place-items-center">
                <img data-aos="flip-left" src="/GRS_2012_resize.jpg" className="shadow-lg border-8 lg:hover:scale-150 transition duration-300 rounded-full h-72 w-72 object-cover"></img>
              </div>
            </div>
            <div data-aos="fade-right" data-aos-offset="300" data-aos-easing="ease-in-sine" className="w-full  px-4 lg:w-1/2 mt-10 mb-10 lg:mt-40">
              <h2 className="font-bold text-lg text-primary">I'm Eko Teguh Muhammadi</h2>
              <p className="text-base font-semibold">
                <span className="text-red-800">23</span> Years Old | <span className="text-secondary">Fresh Graduate</span>
              </p>
              <br />
              <p className="text-base">Nama saya Eko Teguh Muhammadi, lulusan S1 Teknik Informatika Universitas Serang Raya. Mencari peluang kerja yang memberi kesempatan untuk semakin berkembang, Saya memiliki pengalaman dalam membangun sistem presensi siswa di suatu SMK di Kota Serang</p>
              <table className="mt-3">
                <tbody>
                  <tr>
                    <td className="text-blue-700 pr-3">Alamat</td>
                    <td>:</td>
                    <td> Kebondalem, Cilegon</td>
                  </tr>
                  <tr>
                    <td className="text-blue-700">Email</td>
                    <td>:</td>
                    <td> ekohunterz@gmail.com</td>
                  </tr>
                </tbody>
              </table>
              <br />
              <a href="https://drive.google.com/file/d/1FI-McOOIR6WQV3nwF6HbP7vfTOAKh5tG/view?usp=sharing" className="bg-blue-800 py-2 px-10 text-xl text-white rounded-full shadow-md hover:bg-blue-950 transition duration-300 ease-in-out inline-block hover:scale-110" target="_blank">
                Download CV
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default About;
