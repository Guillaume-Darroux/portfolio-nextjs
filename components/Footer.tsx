import { socialMedia } from "@/data";
import { FaLocationArrow } from "react-icons/fa";
import MagicButton from "./ui/MagicButton";

const Footer = () => {
  return (
    <footer className="w-full pt-20 pb-10" id="contact">
      <div className="flex flex-col items-center">
        <h1 className="heading lg:max-w-[45vw]">
          Prêt à faire passer <span className="text-purple">votre</span>{" "}
          présence digitale au niveau supérieur ?
        </h1>
        <p className="text-white-200 md:mt-10 my-5 text-center">
          Contactez-moi et discutons ensemble dès aujourd&apos;hui de la manière
          dont je peux vous aider à atteindre vos objectifs.
        </p>
        <a href="mailto:g.darroux@gmail.com">
          <MagicButton
            title="Me contacter"
            icon={<FaLocationArrow />}
            position="right"
          />
        </a>
        {/* <Form /> */} {/* //TODO: Implémenter le formulaire  */}
      </div>
      <div className="flex mt-16 md:flex-row flex-col justify-between items-center">
        <p className="md:text-base text-sm md:font-normal font-light">
          Copyright © 2024 Guillaume Darroux
        </p>
        <div className="flex items-center md:gap-3 gap-6">
          {socialMedia.map((profile) => (
            <div
              key="profile.id"
              className="w-10 h-10 cursor-pointer flex justify-center items-center backdrop-filter backdrop-blur-lg saturate-180 bg-opacity-75 bg-black-200 rounded-lg border border-black-300"
            >
              <a href={profile.url} target="_blank" rel="noopener noreferrer">
                <img
                  src={profile.img}
                  alt={profile.alt}
                  width={20}
                  height={20}
                />
              </a>
            </div>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
