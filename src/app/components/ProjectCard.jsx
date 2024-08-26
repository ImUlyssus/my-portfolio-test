import React from "react";
import Link from "next/link";

const ProjectCard = ({ imgUrl, title, description, links }) => {
  return (
    <div className="flex flex-col md:flex-row p-4 bg-[#18191E] border border-[#33353F] rounded-lg shadow-lg relative">
      <div className="w-full md:w-1/3">
        <img src={imgUrl} alt={title} className="w-full h-full object-cover rounded-t-lg md:rounded-lg" />
      </div>
      <div className="w-full text-gray-300 md:w-2/3 pl-0 md:pl-4 flex flex-col mt-4 md:mt-0">
        <h2 className="text-md lg:text-xl font-bold text-[#59b993]">{title}</h2>
        <p className="mt-2 flex-grow whitespace-pre-line">{description}</p>
        <div className="mt-4 md:mt-2 flex space-x-4">
          {links.map((link, index) => (
            <Link key={index} href={link.linkUrl} target="_blank" rel="noopener noreferrer">
              <button className="text-xs lg:text-md border border-white text-white px-2 py-2 lg:px-4 rounded-lg hover:bg-white hover:text-black focus:outline-none">
                {link.linkText}
              </button>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;