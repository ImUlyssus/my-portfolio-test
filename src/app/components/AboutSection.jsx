"use client";
import React, { useTransition, useState } from "react";
import Image from "next/image";
import TabButton from "./TabButton";

const TAB_DATA = [
  {
    title: "Skills",
    id: "skills",
    content: (
      <ul className="list-disc pl-2">
        <li>Languages: Python, SQL, JAVA</li>
        <li>Frameworks: Pandas, Numpy, Scikit-Learn, Matplotlib</li>
        <li>Tools: Excel, PowerPoint, Tableau, MySQL</li>
        <li>Platforms: Visual Studio Code, Kaggle, NetBean IDE</li>
        <li>Soft Skills: Excellent Communication, Resource Management, Time Management, Researching, Team Player</li>
      </ul>
    ),
  },
  {
    title: "Education",
    id: "education",
    content: (
      <ul className="list-disc pl-2">
        <li className="text-orange-500"><b>King Mongut&apos;s University of Technology Thonburi</b></li>
        <li>CGPA: 3.75/4.00</li>
        <li>Relevant Coursework: Data Structures, Machine Learning, Data Science, Data Mining, Advanced Java, Artificial Intelligence, Statistics, Web App Development, Agile Software Development</li>
      </ul>
    ),
  },
  {
    title: "Certifications",
    id: "certifications",
    content: (
      <ul className="list-disc pl-2">
        <li>AWS Cloud Practitioner</li>
        <li>Google Professional Cloud Developer</li>
      </ul>
    ),
  },
];

const AboutSection = () => {
  const [tab, setTab] = useState("skills");
  const [isPending, startTransition] = useTransition();

  const handleTabChange = (id) => {
    startTransition(() => {
      setTab(id);
    });
  };

  return (
    <section className="text-white" id="about">
      <div className="md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16">
        <Image src="/images/about-image.jpg" width={500} height={500} className="rounded-lg"/>
        <div className="mt-4 md:mt-0 text-left flex flex-col h-full">
          <h2 className="text-4xl font-bold text-white mb-4">About Me</h2>
          <p className="text-base lg:text-lg">
            I am a Computer Science student, who is currently studying at King
            Mongut&apos;s University of Technology Thonburi. I have experience working
            with Python, R, SQL, Tableau, NLP, Computer Vision, and many Machine
            Learning Libraries. In addition, I can do data collection, data cleaning,
            data transformation, data analysis, and data visualization tasks. I am
            a quick learner and I am always looking to expand my knowledge and
            skill set. I am a team player and I am excited to work with others
            to create a better world while working with data.
          </p>
          <div className="flex flex-row justify-start mt-8">
            <TabButton
              selectTab={() => handleTabChange("skills")}
              active={tab === "skills"}
            >
              {" "}
              Skills{" "}
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("education")}
              active={tab === "education"}
            >
              {" "}
              Education{" "}
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("certifications")}
              active={tab === "certifications"}
            >
              {" "}
              Certifications{" "}
            </TabButton>
          </div>
          <div className="mt-8">
            {TAB_DATA.find((t) => t.id === tab).content}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
