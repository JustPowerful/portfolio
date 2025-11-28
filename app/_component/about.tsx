import React from "react";

const About = () => {
  return (
    <section id="about" className="w-full py-20 px-4 md:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row gap-12 items-start">
          {/* Title Column */}
          <div className="w-full md:w-1/3">
            <h2 className="text-4xl font-bold text-black mb-6 relative inline-block">
              About Me
              <span className="absolute -bottom-2 left-0 w-1/2 h-1 bg-[#c49b08] rounded-full"></span>
            </h2>
          </div>

          {/* Content Column */}
          <div className="w-full md:w-2/3 space-y-6 text-lg text-gray-700 leading-relaxed">
            <p>
              I am a passionate Software Engineer, Freelancer, And, Consultant
              with a deep focus on creating intelligent, scalable, and
              user-centric digital solutions. With expertise spanning across AI
              integration, mobile and web development, and backend automation, I
              help businesses transform their ideas into robust reality.
            </p>
            <p>
              My approach combines technical precision with creative
              problem-solving. Whether it&apos;s building a complex backend
              infrastructure, designing an intuitive mobile app, or integrating
              cutting-edge AI models, I am driven by the goal of delivering
              excellence and value.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-8">
              <div className="p-6 bg-[#fcfcfc] rounded-xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
                <h3 className="text-xl font-bold text-[#3d352b] mb-2">
                  Experience
                </h3>
                <p className="text-gray-600">
                  5+ Years in Software Development
                </p>
              </div>
              <div className="p-6 bg-[#fcfcfc] rounded-xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
                <h3 className="text-xl font-bold text-[#3d352b] mb-2">
                  Projects
                </h3>
                <p className="text-gray-600">50+ Successful Deliveries</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
