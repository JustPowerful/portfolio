import Image from "next/image";
import thumbnailImg from "@/assets/thumbnail.png";

const Hero = () => {
  return (
    <section className="min-h-screen w-full flex items-center justify-center px-4 pt-24 md:px-8 md:pt-20">
      <div className="max-w-7xl w-full grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        {/* Left Content */}
        <div className="space-y-8 z-10">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-black tracking-tight">
            Software Engineer & <br />
            <span className="font-normal inline mt-2">A</span> Software
            Consultant, <br />
            <span className="font-normal block mt-2">Specialized in</span>
          </h1>

          <div className="flex flex-wrap gap-3 md:gap-4 text-base md:text-lg font-medium max-w-xl">
            <span className="px-6 py-2.5 rounded-full bg-[#3d352b] text-white shadow-sm">
              AI integration
            </span>
            <span className="px-6 py-2.5 rounded-full bg-[#c49b08] text-white shadow-sm">
              Mobile Apps
            </span>
            <span className="px-6 py-2.5 rounded-full bg-[#cddc39] text-[#3d352b] shadow-sm">
              Backend Development
            </span>
            <span className="px-6 py-2.5 rounded-full bg-[#6d705f] text-white shadow-sm">
              Automation
            </span>
            <span className="px-6 py-2.5 rounded-full bg-[#c49b08] text-white shadow-sm">
              Frontend Development
            </span>
          </div>
        </div>

        {/* Right Image */}
        <div className="relative flex justify-center lg:justify-end mt-8 lg:mt-0">
          {/* Polaroid-style container */}
          <div className="relative bg-white pl-3 pr-3 pt-3 pb-16 shadow-2xl rotate-3 transform transition-transform hover:rotate-0 duration-500 ease-out border border-gray-100">
            <div className="relative w-80 h-[220px] md:w-[480px] md:h-80 overflow-hidden bg-gray-100">
              <Image
                src={thumbnailImg}
                alt="Software Engineer working at desk"
                fill
                className="object-cover"
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
