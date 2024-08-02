"use client";
import React, { useState, useRef } from "react";
import ProjectCard from "./ProjectCard";
import ProjectTag from "./ProjectTag";
import { motion, useInView } from "framer-motion";

const projectsData = [
  {
    id: 1,
    title: "Cyclistic Bike-Sharing System: Identifying Different Users' Behaviors",
    description: "This is a capstone project from Google Data Analytics Course. In the project, the data analyst was assigned to answer this question: 'How do annual members and casual riders use Cyclistic bikes differently?' \n - Used MS Excel to load and preliminary analysis.   \n - Merged, preprocessed, transformed, analyzed and visualized data using Python, Pandas, Numpy, and Matplotlib libraries. \n - Prepared Google slides for sharing stakeholders. \n - Generated helpful recommendations to meet stakeholders requirements using insights gained from data analytics process.",
    image: "/images/projects/Data_Analytics/Cyclistic.jpg",
    tag: ["Data Analytics"],
    linkText: "See full document",
    linkUrl: "https://docs.google.com/document/d/16xrq4ZwgZbPqy3sEJ86U592jy5cu-pzDQXahd2XSFyI/edit?usp=sharing"
  },
  {
    id: 2,
    title: "This is just a dummy card",
    description: "I have several data science projects. Coming soon! 😉",
    image: "/images/projects/1.png",
    tag: ["Data Science"],
    linkUrl: "/"
  },
];

const ProjectsSection = () => {
  const [tag, setTag] = useState("Data Analytics");
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const handleTagChange = (newTag) => {
    setTag(newTag);
  };

  const filteredProjects = projectsData.filter((project) =>
    project.tag.includes(tag)
  );

  const cardVariants = {
    initial: { y: 50, opacity: 0 },
    animate: { y: 0, opacity: 1 },
  };

  return (
    <section id="projects">
      <h2 className="text-center text-4xl font-bold text-white mt-4 mb-4 md:mb-4">
        Projects
      </h2>
      <div className="text-white flex flex-row justify-center items-center gap-2 py-6">
        <ProjectTag
          onClick={handleTagChange}
          name="Data Analytics"
          isSelected={tag === "Data Analytics"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="Data Science"
          isSelected={tag === "Data Science"}
        />
      </div>
      <ul ref={ref} className="grid grid-cols-1 gap-4">
        {filteredProjects.map((project, index) => (
          <motion.li
            key={index}
            variants={cardVariants}
            initial="initial"
            animate={isInView ? "animate" : "initial"}
            transition={{ duration: 0.3, delay: index * 0.4 }}
          >
            <ProjectCard
              key={project.id}
              title={project.title}
              description={project.description}
              imgUrl={project.image}
              linkText={project.linkText}
              linkUrl={project.linkUrl}
            />
          </motion.li>
        ))}
      </ul>
    </section>
  );
};

export default ProjectsSection;
