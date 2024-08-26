import React from "react";
import Link from "next/link";

const ProjectCard = ({ imgUrl, title, description, process, links }) => {
  return (
    <>
      {/* Medium devices style */}
      <div className="hidden md:flex md:flex-wrap md:flex-row p-4 bg-[#18191E] border border-[#33353F] rounded-lg shadow-lg relative lg:hidden">
        {/* Row 1: Image, Title, and Description */}
        <div className="w-full lg:w-1/4 md:w-1/5">
          <img
            src={imgUrl}
            alt={title}
            className="w-full h-full object-cover rounded-t-lg md:rounded-lg"
          />
        </div>
        <div className="w-full lg:w-3/4 md:w-4/5 pl-0 md:pl-4 mt-4 md:mt-0 flex flex-col justify-between">
          <div className="flex flex-col h-full">
            <h2 className="text-md lg:text-xl font-bold text-blue-400">
              {title}
            </h2>
            <p className="mt-2 flex-grow whitespace-pre-line overflow-hidden">
              {description}
            </p>
          </div>
        </div>
        {/* Row 2: Process and Buttons */}
        <div className="w-full text-gray-300 md:w-full lg:w-3/4 pl-0 md:pl-4 flex flex-col mt-4 md:mt-0">
          <hr className="border-t border-gray-500 mt-4 mb-2" />
          <p className="flex-grow whitespace-pre-line">{process}</p>
          <div className="mt-4 md:mt-2 flex space-x-4">
            {links.map((link, index) => (
              <Link
                key={index}
                href={link.linkUrl}
                target="_blank"
                rel="noopener noreferrer"
              >
                <button className="text-xs md:text-base border border-white text-white px-2 py-2 lg:px-4 rounded-lg hover:bg-white hover:text-black focus:outline-none">
                  {link.linkText}
                </button>
              </Link>
            ))}
          </div>
        </div>
      </div>

      {/* Small and Large devices style */}
      <div className="flex flex-col md:hidden lg:flex lg:flex-row p-4 bg-[#18191E] border border-[#33353F] rounded-lg shadow-lg relative">
        <div className="w-full lg:w-1/4">
          <img
            src={imgUrl}
            alt={title}
            className="w-full h-full object-cover rounded-t-lg lg:rounded-lg"
          />
        </div>
        <div className="w-full text-gray-300 lg:w-3/4 pl-0 lg:pl-4 flex flex-col mt-4 lg:mt-0">
          <h2 className="text-md lg:text-xl font-bold text-blue-400">
            {title}
          </h2>
          <p className="mt-2 flex-grow whitespace-pre-line">{description}</p>
          <p className="mt-2 flex-grow whitespace-pre-line">{process}</p>
          <div className="mt-4 lg:mt-2 flex space-x-4">
            {links.map((link, index) => (
              <Link
                key={index}
                href={link.linkUrl}
                target="_blank"
                rel="noopener noreferrer"
              >
                <button className="text-xs lg:text-base border border-white text-white px-2 py-2 lg:px-4 rounded-lg hover:bg-white hover:text-black focus:outline-none">
                  {link.linkText}
                </button>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default ProjectCard;
