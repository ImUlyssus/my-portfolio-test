"use client";
import React, { useState, useRef } from "react";
import ProjectCard from "./ProjectCard";
import ProjectTag from "./ProjectTag";
import { motion, useInView } from "framer-motion";

const projectsData = [
  {
    id: 1,
    title: "Cyclistic Bike-Sharing System: Identifying Different Users' Behaviors",
    description: "This is a capstone project from Google Data Analytics Course. In the project, the data analyst was assigned to answer this question: 'How do annual members and casual riders use Cyclistic bikes differently?' \n - Used MS Excel to load and preliminary analysis.   \n - Merged, preprocessed, transformed, analyzed and visualized 12 datasets using Python, Pandas, Numpy, and Matplotlib libraries. \n - Prepared Google slides for sharing stakeholders. \n - Generated 4 recommendations to meet stakeholders requirements using insights gained from data analytics process.",
    image: "/images/projects/Data_Analytics/Cyclistic.jpg",
    tag: ["Data Analytics"],
    links: [
      { linkText: "See full document", linkUrl: "https://docs.google.com/document/d/16xrq4ZwgZbPqy3sEJ86U592jy5cu-pzDQXahd2XSFyI/edit?usp=sharing" }
    ]
  },
  {
    id: 2,
    title: "Hand Raising Detection System (Computer Vision)",
    description: "In our classroom, we noticed that lecturers cannot keep up with having so many students. Sometimes, students raise hands to participate but lecturers do not notice for some reasons. Our team, therefore, decided to create a computer vision AI system that notifies lecturer when someone raises his/her hands in the classroom. \n - Collected, annotated and preprocessed 3500 images in the classroom using Roboflow. \n - Trained, evaluated and achieved 98% accuracy using Python and YoloV8 on Google Colab. \n - Developed MERN web app that connects model API from Roboflow for demonstration.",
    image: "/images/projects/Data_Science/HandRaisingAI.jpg",
    tag: ["Data Science"],
    links: [
      { linkText: "Live Demo", linkUrl: "https://youtu.be/UIZwZPt22dI?si=NXPO7-u2u4FmRaez" },
      { linkText: "View on GitHub", linkUrl: "https://github.com/ImUlyssus/handraising-detection-ai-project" },
      { linkText: "Notebook", linkUrl: "https://colab.research.google.com/drive/1d2EeIDaEtdiOssO-NWBBX9SfIToVVcFH?usp=sharing" }
    ]
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
      <div
        className="text-white flex flex-row justify-center items-center gap-2 py-6 overflow-x-auto whitespace-nowrap scrollbar-hide"
        style={{
          WebkitOverflowScrolling: "touch", // Smooth scrolling for mobile
        }}
      >
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
        {/* <ProjectTag
          onClick={handleTagChange}
          name="Software Engineering"
          isSelected={tag === "Software Engineering"}
        /> */}
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
              links={project.links}
            />
          </motion.li>
        ))}
      </ul>
    </section>
  );
};

export default ProjectsSection;
