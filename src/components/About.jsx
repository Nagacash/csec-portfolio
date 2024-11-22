import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/all";

import AnimatedTitle from "./AnimatedTitle";

gsap.registerPlugin(ScrollTrigger);

const About = () => {
  useGSAP(() => {
    const clipAnimation = gsap.timeline({
      scrollTrigger: {
        trigger: "#clip",
        start: "center center",
        end: "+=800 center",
        scrub: 0.5,
        pin: true,
        pinSpacing: true,
      },
    });

    clipAnimation.to(".mask-clip-path", {
      width: "100vw",
      height: "100vh",
      borderRadius: 0,
    });
  });

  return (
    <div id="about" className="min-h-screen w-screen">
      <div className="relative mb-8 mt-36 flex flex-col items-center gap-5">
        <p className="font-general text-sm uppercase md:text-[10px]">
          WWhy Choose Me?
        </p>

        <AnimatedTitle
          title="Mauric<b>e </b>Holda <br /> portfolio <b>W</b>ebsite"
          containerClass="mt-5 !text-black text-center"
        />

        <div className="about-subtext">
          <p>
          In the ever-evolving landscape of digital threats, I bring a proactive and knowledgeable approach to securing systems and networks.
          </p>
          <p className="text-black">
         <br /> <br />

Linux and Operating Systems:  <br />  <br />Proficient in managing and securing  <br />Linux environments and other operating systems. <br /> <br />
General Security: <br /> Skilled in identifying vulnerabilities, applying best practices, and implementing effective defenses.
Basic Python Skills: Leveraging Python for automation, scripting, and solving cybersecurity challenges.

          </p>
        </div>
      </div>

      <div className="h-dvh w-screen" id="clip">
        <div className="mask-clip-path about-image">
          <img
            src="img/new3.webp"
            alt="Background"
            className="absolute left-0 top-0 size-full object-cover"
          />
        </div>
      </div>
    </div>
  );
};

export default About;
