import { TypeAnimation } from "react-type-animation";
import Image from "../assets/Gemini_Generated_Image_y4b4tzy4b4tzy4b4.png";
import Tilt from "react-parallax-tilt";

const About = () => {
  return (
    <section
      id="about"
      className="py-4 px-[7vw] lg:px-[20vw] font-sans mt-16 md:mt-24 lg:mt-32"
    >
      <div className="flex flex-col-reverse md:flex-row justify-between items-center">
        <div className="md:w-1/2 text-center md:text-left mt-8 md:mt-0">
          <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold text-white mb-2 leading-tight ">
            {" "}
            Hii I Am Harsh Pandey
          </h1>
          <h3 className="text-xl sm:text-2xl md:text-3xl font-semibold mb-4 text-[#8245ec] leading-tight">
            <span className="text-white">I am a</span>
            <TypeAnimation
              sequence={[
                "Full Stack Developer",
                2000,
                "Backend Developer",
                2000,
                "Frontend Developer",
                2000,
              ]}
              wrapper="span"
              speed={50}
              className="text-[#8245ec]"
              repeat={Infinity}
            />
          </h3>
          <p className="text-base sm:text-xl text-gray-500 mb-5 mt-5 leading-relaxed">
            Hi! I’m Harsh Pandey, a passionate [BCA] student and an aspiring
            Full-Stack Web Developer. I love building creative and user-focused
            web applications using technologies like HTML, CSS, JavaScript,
            React, Node.js, Express.js, and MongoDB.I enjoy turning ideas into
            functional, visually appealing websites that provide great user
            experiences. I’m always eager to learn new tools, improve my coding
            skills, and explore the latest trends in web development.My goal is
            to grow as a developer and work on real-world projects that make an
            impact while continuously improving my technical and problem-solving
            abilities.
          </p>
          <a
            href="https://drive.google.com/file/d/17NXdwWnCrn5UIIBolCe_26o5PKbyANDw/view?usp=sharing"
            target="blank"
            rel="noopener noreferrer"
            className="inline-block text-white py-3 px-8 rounded-full mt-5 text-lg font-bold transition duration-300 transform hover:scale-105"
            style={{
              background: "liner-gradient(90deg, #8245ec, #a855f7)",
              boxShadow: "0 0 2px #8245ec, 0 0 2px #8245ec, 0 0 40px #8245ec",
            }}
          >
            {" "}
            Download My CV
          </a>
        </div>
        {/*right side of profile*/}
        <div className="md:w-1/2 flex justify-center md:justify-end">
          <Tilt
            className="w-48 h-48 sm:w-64 sm:h-64 md:w-[30rem] md:h-[30rem] border-4 border-purple-700 rounded-full"
            tiltMaxAngleX={20}
            tiltMaxAngleY={20}
            perspective={1000}
            scale={1.05}
            transitionSpeed={1000}
            gyroscope:true
          >
            <img
              src={Image}
              alt="Harsh Pandey"
              className="w-48 h-48 sm:w-64 sm:h-64 md:w-[30rem] md:h-[30rem] border-4 border-purple-700 rounded-full object-cover drop-shadow-[0_10px_20px_rgba(130,69,236,0.5)]"
            />
          </Tilt>
        </div>
      </div>
    </section>
  );
};

export default About;
