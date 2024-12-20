import { useState, useRef } from "react";
import { TiLocationArrow } from "react-icons/ti";

export const BentoTilt = ({ children, className = "" }) => {
  const [transformStyle, setTransformStyle] = useState("");
  const itemRef = useRef(null);

  const handleMouseMove = (event) => {
    if (!itemRef.current) return;

    const { left, top, width, height } =
      itemRef.current.getBoundingClientRect();

    const relativeX = (event.clientX - left) / width;
    const relativeY = (event.clientY - top) / height;

    const tiltX = (relativeY - 0.5) * 5;
    const tiltY = (relativeX - 0.5) * -5;

    const newTransform = `perspective(700px) rotateX(${tiltX}deg) rotateY(${tiltY}deg) scale3d(.95, .95, .95)`;
    setTransformStyle(newTransform);
  };

  const handleMouseLeave = () => {
    setTransformStyle("");
  };

  return (
    <div
      ref={itemRef}
      className={className}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ transform: transformStyle }}
    >
      {children}
    </div>
  );
};

export const BentoCard = ({ src, title, description, isComingSoon }) => {
  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });
  const [hoverOpacity, setHoverOpacity] = useState(0);
  const hoverButtonRef = useRef(null);

  const handleMouseMove = (event) => {
    if (!hoverButtonRef.current) return;
    const rect = hoverButtonRef.current.getBoundingClientRect();

    setCursorPosition({
      x: event.clientX - rect.left,
      y: event.clientY - rect.top,
    });
  };

  const handleMouseEnter = () => setHoverOpacity(1);
  const handleMouseLeave = () => setHoverOpacity(0);

  return (
    <div className="relative size-full">
      <video
        src={src}
        loop
        muted
        autoPlay
        className="absolute left-0 top-0 size-full object-cover object-center"
      />
      <div className="relative z-10 flex size-full flex-col justify-between p-5 text-blue-50">
        <div>
          <h1 className="bento-title special-font">{title}</h1>
          {description && (
            <p className="mt-3 max-w-64 text-xs md:text-base">{description}</p>
          )}
        </div>

        {isComingSoon && (
          <div
            ref={hoverButtonRef}
            onMouseMove={handleMouseMove}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            className="border-hsla relative flex w-fit cursor-pointer items-center gap-1 overflow-hidden rounded-full bg-black px-5 py-2 text-xs uppercase text-white/20"
          >
            {/* Radial gradient hover effect */}
            <div
              className="pointer-events-none absolute -inset-px opacity-0 transition duration-300"
              style={{
                opacity: hoverOpacity,
                background: `radial-gradient(100px circle at ${cursorPosition.x}px ${cursorPosition.y}px, #656fe288, #00000026)`,
              }}
            />
            <TiLocationArrow className="relative z-20" />
            <p className="relative z-20">coming soon</p>
          </div>
        )}
      </div>
    </div>
  );
};

const Features = () => (
  <section className="bg-black pb-52 flex">
    <div className="container mx-auto px-3 md:px-10">
      <div className="px-5 py-32">
        <p className="font-circular-web text-lg text-blue-50">
          Web Development Expertise        </p>
        <p className="max-w-md font-circular-web text-lg text-blue-50 opacity-50">

          Next.js: Developing cutting-edge web applications with high performance and modern architecture.
          JavaScript: Bringing interactivity and dynamic functionality to the web.
          HTML & CSS: Designing structured, visually appealing, and user-centered interfaces with precision.
          From concept to deployment, I focus on delivering projects that combine innovation with functionality, tailored to meet client and user needs.
        </p>
      </div>
      <div className="px-5 py-32">
        <p className="font-circular-web text-lg text-blue-50">
          MY CERTIFICATES        </p>
        <p className="max-w-md font-circular-web text-lg text-blue-50 opacity-50">

          <a href="https://www.credly.com/users/maurice-holda">Click here - Verified by CREDLY</a>
        </p>
      </div>

      <div className="px-5 py-32">
        <p className="font-circular-web text-lg text-blue-50">
          Why Choose Me?
        </p> <br /> 
        <p className="max-w-md font-circular-web text-lg text-blue-50 opacity-50">
          In the ever-evolving landscape of digital threats, I bring a proactive and knowledgeable approach to securing systems and networks.

          <br /> <br />

          <span className="font-circular-web text-lg text-blue-50">Linux and Operating Systems: </span>  <br />Proficient in managing and securing  <br />Linux environments and other operating systems. <br />  <br /> 
          General Security: <br /> Skilled in identifying vulnerabilities, applying best practices, and implementing effective defenses.
          Basic Python Skills: Leveraging Python for automation, scripting, and solving cybersecurity challenges.
        </p>
      </div>





      <BentoTilt className="border-hsla relative mb-7 h-96 w-full overflow-hidden rounded-md md:h-[65vh]">
        <BentoCard
          src="videos/vid6.mp4"
          title={
            <>
              Cyber Security Exper
              <b>ti</b>se
            </>
          }
          description="Whether it’s ensuring network reliability or protecting systems from emerging threats,
           I am dedicated to maintaining a secure digital landscape."
          isComingSoon
        />
      </BentoTilt>

      <div className="grid h-[135vh] w-full grid-cols-2 grid-rows-3 gap-7">
        <BentoTilt className="bento-tilt_1 row-span-1 md:col-span-1 md:row-span-2">
          <BentoCard
            src="videos/vid5.mp4"
            title={
              <>
                Network<b>ing</b>:
              </>
            }
            description="Deep knowledge of network protocols, architecture, and implementing secure connections."
            isComingSoon
          />
        </BentoTilt>

        <BentoTilt className="bento-tilt_1 row-span-1 ms-32 md:col-span-1 md:ms-0">
          <BentoCard
            src="videos/vid4.mp4"
            title={
              <>
                Linux and Operating Syst<b>em</b>:
              </>
            }
            description="Proficient in managing and securing Linux environments, as well as other operating systems."
            isComingSoon
          />
        </BentoTilt>

        <BentoTilt className="bento-tilt_1 me-14 md:col-span-1 md:me-0">
          <BentoCard
            src="videos/vid2.mp4"
            title={
              <>
                General Securi<b>ty</b>:
              </>
            }
            description="Skilled in assessing vulnerabilities, applying security frameworks, and responding to threats."
            isComingSoon
          />
        </BentoTilt>

        <BentoTilt className="bento-tilt_2">
          <div className="flex size-full flex-col justify-between bg-violet-300 p-5">
            <h1 className="bento-title special-font max-w-50 text-black">

              As a web developer, I specialize in creating responsive, scalable websites that provide seamless user experiences.
            </h1>

            <TiLocationArrow className="m-5 scale-[5] self-end" />
          </div>
        </BentoTilt>

        <BentoTilt className="bento-tilt_2">
          <video
            src="videos/vid3.mp4"
            loop
            muted
            autoPlay
            className="size-full object-cover object-center"
          />
        </BentoTilt>
      </div>
    </div>
  </section>
);

export default Features;
