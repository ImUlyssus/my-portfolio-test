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
    description: "In our classroom, we observed that lecturers often struggle to manage large student groups, leading to missed opportunities when students raise their hands to participate. To address this, our team developed a computer vision AI system that alerts lecturers when a student raises their hand. \n \n - Collected, annotated and preprocessed 3500 images in the classroom using Roboflow. \n - Trained, evaluated, and achieved 98% accuracy with Python and YOLOv8 on Google Colab. \n - Developed a MERN web app that integrates the model API from Roboflow for demonstration.",
    image: "/images/projects/Data_Science/HandRaisingAI.jpg",
    tag: ["Data Science"],
    links: [
      { linkText: "Live Demo", linkUrl: "https://youtu.be/UIZwZPt22dI?si=NXPO7-u2u4FmRaez" },
      { linkText: "View on GitHub", linkUrl: "https://github.com/ImUlyssus/handraising-detection-ai-project" },
      { linkText: "Notebook", linkUrl: "https://colab.research.google.com/drive/1d2EeIDaEtdiOssO-NWBBX9SfIToVVcFH?usp=sharing" }
    ]
  },
  {
    id: 3,
    title: "Sahara: A Flutter Mobile App that Allows Users to Donate or Receive Used Items",
    description: "This project was developed with the goal of addressing key Sustainable Development Goals (SDGs), particularly 'No Poverty' and 'Responsible Consumption and Production.' Every year, billions of tons of waste are generated, much of which could be repurposed rather than discarded. To tackle this issue, our team created an app designed to connect individuals who wish to donate gently used items with those in need. \n - Designed and prototyped user interface using Figma, creating over 40 pages and hundreds of components. \n - Developed a mobile application using Flutter and GetX that enables users to donate or receive unused items. \n - Integrated Firebase for user authentication and MySQL for data storage.",
    image: "/images/projects/SE/Sahara.jpg",
    tag: ["Software Engineering"],
    links: [
      { linkText: "View on GitHub", linkUrl: "https://github.com/khush2003/sahara" },
      { linkText: "Figma UI", linkUrl: "https://www.figma.com/design/PI3tcrcrp4QLNoCCUZLHxa/Sahara?node-id=0-1&t=4oLZFqF5KoGQyaS0-1" }
    ]
  },
  {
    id: 4,
    title: "Wismod: A Flutter Mobile App that Help Like-Minded People to Join Interesting Events",
    description: "Our team developed this app to allow people of the same interest to network and collaborate in competitions and other events. Main features include joining events, group chat, searching and filtering events. \n - Designed and prototyped user interface using Figma, creating over 30 pages and hundreds of components. \n - Implemented a mobile application using Flutter and GetX that enables users to create or join different events. \n - Integrated Firebase for user authentication and Firestore for data storage.",
    image: "/images/projects/SE/Wismod.jpg",
    tag: ["Software Engineering"],
    links: [
      { linkText: "View on GitHub", linkUrl: "https://github.com/khush2003/wismod" },
      { linkText: "Figma UI", linkUrl: "https://www.figma.com/design/NkVjLeaFA5njKngeFKOUGm/Untitled?node-id=0-1&t=bt9cCccrZRlPkeVZ-1" }
      // https://www.figma.com/design/dUzBJUffSv9Jxt1pMO1y6p/WisMod?node-id=0-1
    ]
  }
];

const ProjectsSection = () => {
  const [tag, setTag] = useState("Data Science");
  const [currentProjectIndex, setCurrentProjectIndex] = useState(0); // State to keep track of the current project index

  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  
  const handleTagChange = (newTag) => {
    setTag(newTag);
    setCurrentProjectIndex(0); // Reset to the first project of the selected tag
  };

  const filteredProjects = projectsData.filter((project) =>
    project.tag.includes(tag)
  );

  const handleNavigationClick = (index) => {
    setCurrentProjectIndex(index);
  };

  const cardVariants = {
    initial: { x: 50, opacity: 0 },
    animate: { x: 0, opacity: 1 },
  };

  return (
    <section id="projects">
      <h2 className="text-center text-4xl font-bold text-white mt-4 mb-2">
        Projects
      </h2>
      <div
        className="text-white flex flex-row md:justify-center md:items-center justify-start items-start gap-2 py-3 overflow-x-auto whitespace-nowrap scrollbar-hide"
        style={{
          WebkitOverflowScrolling: "touch",
        }}
      >
        <ProjectTag
          onClick={handleTagChange}
          name="Data Science"
          isSelected={tag === "Data Science"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="Data Analytics"
          isSelected={tag === "Data Analytics"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="Software Engineering"
          isSelected={tag === "Software Engineering"}
        />
      </div>
      
      {/* Navigation Icons */}
      <div className="flex justify-center mb-4">
        {filteredProjects.map((_, index) => (
          <button
            key={index}
            onClick={() => handleNavigationClick(index)}
            className={`md:text-md text-xs px-3 py-1 mx-1 rounded-full ${
              currentProjectIndex === index
                ? "bg-white text-black"
                : "bg-gray-400 text-white"
            }`}
          >
            {index + 1}
          </button>
        ))}
      </div>

      <div className="relative">
        <div
          id="slider"
          ref={ref}
          className="flex flex-row gap-4 justify-center"
        >
          {filteredProjects.map((project, index) => (
            index === currentProjectIndex && ( // Only show the current project
              <motion.div
                key={index}
                variants={cardVariants}
                initial="initial"
                animate={isInView ? "animate" : "initial"}
                transition={{ duration: 0.3 }}
                className="min-w-[80vw]" // Set the width of each card
              >
                <ProjectCard
                  key={project.id}
                  title={project.title}
                  description={project.description}
                  imgUrl={project.image}
                  links={project.links}
                />
              </motion.div>
            )
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;