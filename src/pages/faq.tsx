import FaqText from "./FaqText";
import Pirat from "../images/Pirat2.jpg";

const Faq = () => {
  return (
    <div>
      <div className="flex flex-col px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20 lg:flex-row">
        <div className="mb-5 lg:w-1/3 lg:mb-0 lg:mr-20">
          <h2 className="relative mb-4 font-sans text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl sm:leading-none">
            <span className="relative inline-block">
              <span className="relative">Vanliga</span>
            </span>{" "}
            frågor
          </h2>
          <p className="mb-4 text-gray-900 lg:mb-6">
            Här är de vanligaste frågorna, undrar ni någonting som inte finns
            med? Kontakta oss gärna så kan vi hjälpa dig!
          </p>
        </div>
        <div className="flex-grow pt-1">
          <div className="flex items-center mb-3">
            <FaqText />
          </div>
        </div>
      </div>
      <div className="relative">
        <img
          className="object-cover w-full h-56 sm:h-96"
          src={Pirat}
          alt="hund"
        />
        <div className="absolute inset-0 bg-gray-900 bg-opacity-50" />
      </div>
    </div>
  );
};

export default Faq;
