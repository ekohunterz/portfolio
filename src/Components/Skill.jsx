import React from "react";

const SkillItem = ({ iconSrc, altText, title }) => {
  return (
    <div data-aos="flip-left" data-aos-easing="ease-out-cubic" data-aos-duration="2000" className="flex flex-col items-center bg-black w-52 gap-3 justify-center rounded-md shadow-md overflow-hidden p-6 hover:scale-110">
      <img width="48" height="48" src={iconSrc} alt={altText} />
      <h2 className="text-xl font-semibold text-white">{title}</h2>
    </div>
  );
};

const Skill = () => {
  const skills = [
    {
      iconSrc: "https://img.icons8.com/color/48/html-5--v1.png",
      altText: "html-5--v1",
      title: "HTML",
    },
    {
      iconSrc: "https://img.icons8.com/color/48/css3.png",
      altText: "css",
      title: "CSS",
    },
    {
      iconSrc: "https://img.icons8.com/color/48/javascript--v1.png",
      altText: "javascript--v1",
      title: "JavaScript",
    },
    {
      iconSrc: "https://img.icons8.com/offices/80/php-logo.png",
      altText: "php",
      title: "PHP",
    },
    {
      iconSrc: "https://img.icons8.com/external-tal-revivo-shadow-tal-revivo/48/external-codeigniter-is-an-open-source-software-rapid-development-web-framework-logo-shadow-tal-revivo.png",
      altText: "CI",
      title: "Codeigniter",
    },
    {
      iconSrc: "985px-Laravel.png",
      altText: "laravel",
      title: "Laravel",
    },
    {
      iconSrc: "https://img.icons8.com/color/48/bootstrap.png",
      altText: "bootstrap",
      title: "Bootstrap",
    },
    {
      iconSrc: "https://img.icons8.com/color/48/tailwindcss.png",
      altText: "tailwind",
      title: "TailwindCSS",
    },
    {
      iconSrc: "https://img.icons8.com/external-tal-revivo-color-tal-revivo/48/external-jquery-is-a-javascript-library-designed-to-simplify-html-logo-color-tal-revivo.png",
      altText: "jquery",
      title: "JQuery",
    },
    {
      iconSrc: "https://img.icons8.com/color/48/mysql-logo.png",
      altText: "mysql",
      title: "MySQL",
    },
    // tambahkan daftar keahlian lainnya di sini
  ];

  const tools = [
    {
      iconSrc: "https://img.icons8.com/fluency/48/visual-studio.png",
      altText: "visual-studio",
      title: "VS Code",
    },
    {
      iconSrc: "https://img.icons8.com/color/48/git.png",
      altText: "git",
      title: "Git",
    },
    {
      iconSrc: "https://img.icons8.com/color/48/npm.png",
      altText: "npm",
      title: "NPM",
    },
    {
      iconSrc: "https://img.icons8.com/color/48/android-studio--v2.png",
      altText: "android_studio",
      title: "Android Studio",
    },
    {
      iconSrc: "https://img.icons8.com/color/48/adobe-photoshop--v1.png",
      altText: "photoshop",
      title: "Photoshop",
    },
    // tambahkan daftar alat lainnya di sini
  ];

  return (
    <>
      <section id="skill" className="bg min-h-screen pb-10">
        <div className="container">
          <h1 data-aos="fade-up" data-aos-anchor-placement="center-bottom" className="font-bold text-4xl text-center pt-20 text-white">
            <i className="fas fa-code" /> My <span className="text-secondary">Skill</span>
          </h1>
          <p data-aos="fade-up" data-aos-anchor-placement="center-bottom" className="text-center text-lg text-white mt-4">
            I'm familiar with:
          </p>
          <div className="flex flex-wrap mt-10 justify-center gap-7 ">
            {skills.map((skill, index) => (
              <SkillItem key={index} iconSrc={skill.iconSrc} altText={skill.altText} title={skill.title} />
            ))}
          </div>

          <h1 data-aos="fade-up" data-aos-anchor-placement="center-bottom" className="font-bold text-4xl text-center pt-12 text-white">
            <i className="fas fa-tools" /> Tools <span className="text-secondary">I Use</span>
          </h1>
          <div className="flex flex-wrap mt-10 justify-center gap-7 ">
            {tools.map((tool, index) => (
              <SkillItem key={index} iconSrc={tool.iconSrc} altText={tool.altText} title={tool.title} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Skill;
