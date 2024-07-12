"use client";
import React, { useState, useRef } from "react";
import ProjectCard from "./ProjectCard";
import ProjectTag from "./ProjectTag";
import { motion, useInView } from "framer-motion";

const projectsData = [
  {
    id: 1,
    title: "Data Data Everywhere",
    description: "",
    image: "/images/certificates/Data_Analytics/Data_Data_Everywhere.png",
    tag: ["Data Analytics"],
    gitUrl: "https://coursera.org/share/28cbd793b3848424735dba3df30dec35",
    previewUrl: "/",
  },
  {
    id: 2,
    title: "Ask Questions to Make Data Driven Decisions",
    description: "",
    image: "/images/certificates/Data_Analytics/Ask_Questions_to_Make_Data_Driven_Decisions.png",
    tag: ["Data Analytics"],
    gitUrl: "https://coursera.org/share/044cf985113fdbed76eb1cd307a48800",
    previewUrl: "/",
  },
  {
    id: 3,
    title: "Prepare Data for Exploration",
    description: "",
    image: "/images/certificates/Data_Analytics/Prepare_Data_for_Exploration.png",
    tag: ["Data Analytics"],
    gitUrl: "https://coursera.org/share/f83f1eed2ff52f5cd07c5f4b9f3dc1db",
    previewUrl: "/",
  },
  {
    id: 4,
    title: "Process Data from Dirty to Clean",
    description: "",
    image: "/images/certificates/Data_Analytics/Process_Data_from_Dirty_to_Clean.png",
    tag: ["Data Analytics"],
    gitUrl: "https://coursera.org/share/9a466ee7f8fb3ac8867e2555896c61b8",
    previewUrl: "/",
  },
  {
    id: 5,
    title: "Analyze Data to Answer Questions",
    description: "",
    image: "images/certificates/Data_Analytics/Analyze_Data_to_Answer_Questions.png",
    tag: ["Data Analytics"],
    gitUrl: "https://coursera.org/share/ef6774220050715334ab9c717ffc120a",
    previewUrl: "/",
  },
  {
    id: 6,
    title: "Share Data Through the Art of Visualization",
    description: "",
    image: "/images/certificates/Data_Analytics/Share_Data_Through_the_Art_of_Visualization.png",
    tag: ["Data Analytics"],
    gitUrl: "https://coursera.org/share/f7cc45fed751d8c4df6bb5234190fbf1",
    previewUrl: "/",
  },
  {
    id: 7,
    title: "Data Analysis with R Programming",
    description: "",
    image: "/images/certificates/Data_Analytics/Data_Analysis_with_R_Programming.png",
    tag: ["Data Analytics"],
    gitUrl: "https://coursera.org/share/1447b8174f8818d8600e46fa211b024d",
    previewUrl: "/",
  },
  {
    id: 8,
    title: "Google Data Analytics Capstone",
    description: "",
    image: "/images/certificates/Data_Analytics/Google_Data_Analytics_Capstone.png",
    tag: ["Data Analytics"],
    gitUrl: "https://coursera.org/share/25c74fbaab99abfeaa4cec9fb107df22",
    previewUrl: "/",
  },
  {
    id: 9,
    title: "Data Visualization",
    description: "",
    image: "/images/certificates/Data_Science/Data_Visualization.png",
    tag: ["Data Analytics"],
    gitUrl: "https://www.kaggle.com/learn/certification/kyawswarhein/data-visualization",
    previewUrl: "/",
  },
  {
    id: 10,
    title: "Computer Vision",
    description: "",
    image: "/images/certificates/Data_Science/Computer_Vision.png",
    tag: ["Data Science"],
    gitUrl: "https://www.kaggle.com/learn/certification/kyawswarhein/computer-vision",
    previewUrl: "/",
  },
  {
    id: 11,
    title: "Fundamentals of Deep Learning",
    description: "",
    image: "/images/certificates/Data_Science/Fundamentals_Of_Deep_Learning.jpg",
    tag: ["Data Science"],
    gitUrl: "https://learn.nvidia.com/certificates?id=4ac47dbf8d1a4a689d8a6f507d9a656e",
    previewUrl: "/",
  },
  {
    id: 12,
    title: "Geospatial Analysis",
    description: "",
    image: "/images/certificates/Data_Science/Geospatial_Analysis.png",
    tag: ["Data Science"],
    gitUrl: "https://www.kaggle.com/learn/certification/kyawswarhein/geospatial-analysis",
    previewUrl: "/",
  },
  {
    id: 13,
    title: "Intro to Game AI",
    description: "",
    image: "/images/certificates/Data_Science/Intro_To_Game_AI.png",
    tag: ["Data Science"],
    gitUrl: "https://www.kaggle.com/learn/certification/kyawswarhein/intro-to-game-ai-and-reinforcement-learning",
    previewUrl: "/",
  },
  {
    id: 14,
    title: "Intro to Machine Learning",
    description: "",
    image: "/images/certificates/Data_Science/Intro_To_Machine_Learning.png",
    tag: ["Data Science"],
    gitUrl: "https://www.kaggle.com/learn/certification/kyawswarhein/intro-to-machine-learning",
    previewUrl: "/",
  },
  {
    id: 15,
    title: "Machine Learning Explainability",
    description: "",
    image: "/images/certificates/Data_Science/Machine_Learning_Explainability.png",
    tag: ["Data Science"],
    gitUrl: "https://www.kaggle.com/learn/certification/kyawswarhein/machine-learning-explainability",
    previewUrl: "/",
  },
  {
    id: 16,
    title: "Accomplishment STAR Techniques for Job Interview",
    description: "",
    image: "/images/certificates/Others/Accomplishment_STAR_Techniques_for_Job_Interview.png",
    tag: ["Others"],
    gitUrl: "https://coursera.org/share/c9ea654811b3f0c07611edee432c6509",
    previewUrl: "/",
  },
  {
    id: 17,
    title: "Build and Engage Your Network on LinkedIn",
    description: "",
    image: "/images/certificates/Others/Build_and_Engage_Your_Network_on_LinkedIn.png",
    tag: ["Others"],
    gitUrl: "https://coursera.org/share/fdf7e514f600d057fb465172ea0d3c9a",
    previewUrl: "/",
  },
  {
    id: 18,
    title: "Create a Profile and Network on LinkedIn",
    description: "",
    image: "/images/certificates/Others/Create_a_Profile_and_Network_on_LinkedIn.png",
    tag: ["Others"],
    gitUrl: "https://coursera.org/share/9bff1e0ebaed7430ef2ff52985ecaf75",
    previewUrl: "/",
  },
  {
    id: 19,
    title: "Essentails of Entrepreneurship",
    description: "",
    image: "/images/certificates/Others/Essentails_of_Entrepreneurship.png",
    tag: ["Others"],
    gitUrl: "https://coursera.org/share/4c1852fa04a74c13b6e034cd5be9bb9f",
    previewUrl: "/",
  },
  {
    id: 20,
    title: "How to Write a Resume",
    description: "",
    image: "/images/certificates/Others/How_to_Write_a_Resume.png",
    tag: ["Others"],
    gitUrl: "https://coursera.org/share/b0375c6632c982efdfdfe0365d0e6eeb",
    previewUrl: "/",
  },
  {
    id: 21,
    title: "Utilize LinkedIn for Career Search",
    description: "",
    image: "/images/certificates/Others/Utilize_LinkedIn_for_Career_Search.png",
    tag: ["Others"],
    gitUrl: "https://coursera.org/share/a6f3380066ff0d1dd5839bb757819ab0",
    previewUrl: "/",
  },
  {
    id: 22,
    title: "Prepare, Clean, Transform, and Load Data using Power BI",
    description: "",
    image: "/images/certificates/Data_Analytics/Power_BI.png",
    tag: ["Data Analytics"],
    gitUrl: "https://coursera.org/share/8f43cb8319f36648fb56dd89d37f49ce",
    previewUrl: "/",
  },
];

const CertificationsSection = () => {
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
    <section id="certifications">
      <h2 className="text-center text-4xl font-bold text-white mt-4 mb-8 md:mb-12">
        Certifications
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
        <ProjectTag
          onClick={handleTagChange}
          name="Others"
          isSelected={tag === "Others"}
        />
      </div>
      <ul ref={ref} className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12">
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
              gitUrl={project.gitUrl}
              previewUrl={project.previewUrl}
            />
          </motion.li>
        ))}
      </ul>
    </section>
  );
};

export default CertificationsSection;
