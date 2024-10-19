import Image from "next/image";
import Link from "next/link";

const PortfolioCard = ({ portfolio }) => {
  const { image, title, description, skills, liveDemo, sourceCode } = portfolio;

  return (
    <div className="portfolio-card w-full h-auto group rounded-xl overflow-hidden shadow-lg transition-all hover:shadow-2xl duration-500 bg-white">
      {/* Image container */}
      <div className="img-box w-full h-[300px] relative overflow-hidden">
        <Link href={""}>
          <Image
            src={image}
            alt={title}
            width={1000}
            height={600}
            className="absolute top-0 left-0 h-auto min-h-full w-full object-top transition-transform duration-1000 ease-in-out group-hover:translate-y-[calc(-100%_+_300px)]"
            priority
          />
        </Link>
      </div>

      {/* Content */}
      <div className="content p-4">
        {/* Title */}
        <h3 className="text-lg font-semibold text-gray-800 mb-2 group-hover:text-secondary-400 transition-colors duration-300">
          {title}
        </h3>

        {/* Description */}
        <p className="text-sm text-gray-600 leading-relaxed mb-4">
          {description}
        </p>

        {/* Skills */}
        <div className="flex flex-wrap gap-2 mb-4">
          {skills.map((skill, index) => (
            <span
              key={index}
              className="text-xs font-medium bg-secondary-100 text-secondary-400 px-3 py-1 rounded-full"
            >
              {skill}
            </span>
          ))}
        </div>

        {/* Buttons */}
        <div className="flex gap-4 flex-wrap">
          {/* Live Demo Button */}
          <Link
            href={""}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-5 py-2 text-sm font-semibold bg-primary-400 text-white rounded-full shadow-lg hover:bg-primary-500 transition-all duration-300 transform hover:scale-105"
          >
            Live Demo
          </Link>

          {/* Source Code Button */}
          <Link
            href={""}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-5 py-2 text-sm font-semibold bg-secondary-400 text-white rounded-full shadow-lg hover:bg-secondary-500 transition-all duration-300 transform hover:scale-105"
          >
            Source Code
          </Link>
        </div>
      </div>
    </div>
  );
};

export default PortfolioCard;
