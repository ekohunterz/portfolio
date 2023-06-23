import React from "react";

function Education() {
  return (
    <>
      <section id="education" className="bg-slate-200 min-h-screen pb-10">
        <div className="container">
          <h1 data-aos="fade-down" data-aos-duration="1500" className="font-bold  text-4xl text-center pt-20">
            <i className="fas fa-user-graduate" /> My <span className="text-purple-700">Education</span>
          </h1>
          <div className="flex flex-wrap mt-10 justify-center gap-6">
            <div data-aos="fade-down" data-aos-duration="1500" className="bg-white w-2/3 rounded-md shadow-md overflow-hidden hover:shadow-2xl transition duration-300 hover:scale-110">
              <div className="flex flex-wrap">
                <img src="unsera.jpg" width={300}></img>
                <div className="p-4 ">
                  <h2 className="text-2xl text-primary font-semibold leading-relaxed">Universitas Serang Raya</h2>
                  <p className="font-medium leading-relaxed">Teknik Informatika</p>
                  <p className="text-red-800 font-semibold text-xl leading-relaxed">2018-2023 | IPK: 3,73</p>
                </div>
              </div>
            </div>
            <div data-aos="fade-down" data-aos-duration="1500" className="bg-white w-2/3 rounded-md shadow-md overflow-hidden hover:shadow-2xl transition duration-300 hover:scale-110">
              <div className="flex flex-wrap">
                <img src="smk1.jpg" width={300}></img>
                <div className="p-4 ">
                  <h2 className="text-2xl text-primary font-semibold leading-relaxed">SMK Negeri 1 Kota Cilegon</h2>
                  <p className="font-medium leading-relaxed">Teknik Komputer Jaringan</p>
                  <p className="text-red-800 font-semibold text-xl leading-relaxed">2014-2017</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Education;
