import db from "../../database/database";

const Hero = () => {
  return (
    <div className="relative">
      <div className="hero-container">
        <div className="flex-2/4 grid gap-2">
          <h1 className="text-2xl text-indigo-300 font-light sm_md_text">
            Hello! I am
          </h1>
          <h1 className="text-2xl font-medium sm_md_text">{db.profile.name}</h1>
          <p className="text-2xl text-cyan-400 font-light sm_md_text">
            {db.profile.title}
          </p>
          <p className="text-2xl font-light sm_md_text">
            {db.profile.description}
          </p>
          <a
            href="/resume.pdf"
            className="get-resume-button justify-self-center sm:justify-self-auto"
          >
            Get my resume
          </a>
        </div>
        <div className="flex-1/4 p-5 flex items-center justify-center relative">
          <div className="relative mt-10 sm:mt-5 m-5 flex items-center justify-center">
            <div className="-rotate-10 border-3 border-cyan-400 bg-[#111821] relative overflow-hidden">
              <img
                src={db.profile.image}
                alt={db.profile.name}
                className="rotate-10 opacity-0"
              />
            </div>
            <div className="absolute h-full w-full bg-cyan-400 -rotate-10 translate-x-3 translate-y-2 -z-2"></div>
            <div className="absolute blur-[6rem] opacity-30 h-full w-full bg-cyan-400 -rotate-10 translate-x-3 translate-y-2 -z-2"></div>
          </div>
        </div>
      </div>
      <div className="hero-circle"></div>
    </div>
  );
};

export default Hero;
