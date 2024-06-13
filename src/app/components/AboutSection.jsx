"use client";
import React, { useTransition, useState } from "react";
import Image from "next/image";
import TabButton from "./TabButton";
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

const TAB_DATA = [
  {
    title: "Skills",
    id: "skills",
    content: (
      <ul className="list-disc pl-2">
        <li><span className="text-blue-400 d-flex text-lg">Languages:</span> Python, SQL, JAVA</li>
        <li><span className="text-blue-400 d-flex text-lg">Frameworks:</span> Pandas, Numpy, Scikit-Learn, Matplotlib</li>
        <li><span className="text-blue-400 d-flex text-lg">Tools:</span> Excel, PowerPoint, Tableau, MySQL</li>
        <li><span className="text-blue-400 d-flex text-lg">Platforms:</span> Visual Studio Code, Kaggle, NetBean IDE</li>
        <li><span className="text-blue-400 d-flex text-lg">Soft Skills:</span> Excellent Communication, Resource Management, Time Management, Researching, Team Player</li>
      </ul>
    ),
  },
  {
    title: "Education",
    id: "education",
    content: (
      <>
        <b className='text-orange-500'>King Mongkut&apos;s University of Technology Thonburi</b>
        <ul className="list-disc pl-2 mt-3">
          <li>CGPA: 3.75/4.00</li>
          <li>Relevant Coursework: Data Structures, Machine Learning, Data Science, Data Mining, Advanced Java, Artificial Intelligence, Statistics, Web App Development, Agile Software Development</li>
        </ul>
      </>
    ),
  },
  {
    title: "Certifications",
    id: "certifications",
    content: (
      <Carousel showThumbs={false} showStatus={false} infiniteLoop={true} autoPlay={true}>
        <div style={{ textAlign: 'center', padding: '10px' }}>
      <div style={{ paddingBottom: '10px' }}>
        <b>Computer Vision</b>
        <a href='https://www.kaggle.com/learn/certification/kyawswarhein/computer-vision' style={{ marginLeft: '10px', color: 'blue' }}>Credential</a>
      </div>
      <div style={{ position: 'relative', width: '100%', height: '300px', overflow: 'hidden', borderRadius: '0.5rem' }}>
        <Image src="/images/certificates/Computer_Vision.png" alt="Computer Vision" layout="fill" objectFit="contain" className='rounded-lg' />
      </div>
    </div>
    <div style={{ textAlign: 'center', padding: '10px' }}>
      <div style={{ paddingBottom: '10px' }}>
        <b>Data Visualization</b>
        <a href='https://www.kaggle.com/learn/certification/kyawswarhein/data-visualization' style={{ marginLeft: '10px', color: 'blue' }}>Credential</a>
      </div>
      <div style={{ position: 'relative', width: '100%', height: '300px', overflow: 'hidden', borderRadius: '0.5rem' }}>
        <Image src="/images/certificates/Data_Visualization.png" alt="Data Visualization" layout="fill" objectFit="contain" className='rounded-lg' />
      </div>
    </div>
    <div style={{ textAlign: 'center', padding: '10px' }}>
      <div style={{ paddingBottom: '10px' }}>
        <b>Fundamentals of Deep Learning</b>
        <a href='https://learn.nvidia.com/certificates?id=4ac47dbf8d1a4a689d8a6f507d9a656e' style={{ marginLeft: '10px', color: 'blue' }}>Credential</a>
      </div>
      <div style={{ position: 'relative', width: '100%', height: '300px', overflow: 'hidden', borderRadius: '0.5rem' }}>
        <Image src="/images/certificates/Fundamentals_Of_Deep_Learning.jpg" alt="Fundamentals of Deep Learning" layout="fill" objectFit="contain" className='rounded-lg' />
      </div>
    </div>
    <div style={{ textAlign: 'center', padding: '10px' }}>
      <div style={{ paddingBottom: '10px' }}>
        <b>Geospatial Analysis</b>
        <a href='https://www.kaggle.com/learn/certification/kyawswarhein/geospatial-analysis' style={{ marginLeft: '10px', color: 'blue' }}>Credential</a>
      </div>
      <div style={{ position: 'relative', width: '100%', height: '300px', overflow: 'hidden', borderRadius: '0.5rem' }}>
        <Image src="/images/certificates/Geospatial_Analysis.png" alt="Geospatial Analysis" layout="fill" objectFit="contain" className='rounded-lg' />
      </div>
    </div>
    <div style={{ textAlign: 'center', padding: '10px' }}>
      <div style={{ paddingBottom: '10px' }}>
        <b>Intro to Game AI</b>
        <a href='https://www.kaggle.com/learn/certification/kyawswarhein/intro-to-game-ai-and-reinforcement-learning' style={{ marginLeft: '10px', color: 'blue' }}>Credential</a>
      </div>
      <div style={{ position: 'relative', width: '100%', height: '300px', overflow: 'hidden', borderRadius: '0.5rem' }}>
        <Image src="/images/certificates/Intro_To_Game_AI.png" alt="Intro to Game AI" layout="fill" objectFit="contain" className='rounded-lg' />
      </div>
    </div>
    <div style={{ textAlign: 'center', padding: '10px' }}>
      <div style={{ paddingBottom: '10px' }}>
        <b>Intro to Machine Learning</b>
        <a href='https://www.kaggle.com/learn/certification/kyawswarhein/intro-to-machine-learning' style={{ marginLeft: '10px', color: 'blue' }}>Credential</a>
      </div>
      <div style={{ position: 'relative', width: '100%', height: '300px', overflow: 'hidden', borderRadius: '0.5rem' }}>
        <Image src="/images/certificates/Intro_To_Machine_Learning.png" alt="Intro to Machine Learning" layout="fill" objectFit="contain" className='rounded-lg' />
      </div>
    </div>
    <div style={{ textAlign: 'center', padding: '10px' }}>
      <div style={{ paddingBottom: '10px' }}>
        <b>Machine Learning Explainability</b>
        <a href='https://www.kaggle.com/learn/certification/kyawswarhein/machine-learning-explainability' style={{ marginLeft: '10px', color: 'blue' }}>Credential</a>
      </div>
      <div style={{ position: 'relative', width: '100%', height: '300px', overflow: 'hidden', borderRadius: '0.5rem' }}>
        <Image src="/images/certificates/Machine_Learning_Explainability.png" alt="Machine Learning Explainability" layout="fill" objectFit="contain" className='rounded-lg' />
      </div>
    </div>
      </Carousel>
    ),
  },
  {
    title: "Awards",
    id: "awards",
    content: (
      <Carousel showThumbs={false} showStatus={false} infiniteLoop={true} autoPlay={true}>
        <div style={{ textAlign: 'center', padding: '10px' }}>
      <div style={{ paddingBottom: '10px' }}>
        <b>Sixth Standard Science First Prize</b>
      </div>
      <div style={{ position: 'relative', width: '100%', height: '400px', overflow: 'hidden', borderRadius: '0.5rem' }}>
        <Image src="/images/awards/SixthStdScienceFirstPrize.png" alt="Sixth Standard Science First Prize" layout="fill" objectFit="contain" className='rounded-lg' />
      </div>
    </div>
    <div style={{ textAlign: 'center', padding: '10px' }}>
      <div style={{ paddingBottom: '10px' }}>
        <b>Seventh Standard All Subjects First Prize</b>
      </div>
      <div style={{ position: 'relative', width: '100%', height: '400px', overflow: 'hidden', borderRadius: '0.5rem' }}>
        <Image src="/images/awards/SeventhStdAllSubjectsFirstPrize.png" alt="Seventh Standard All Subjects First Prize" layout="fill" objectFit="contain" className='rounded-lg' />
      </div>
    </div>
    <div style={{ textAlign: 'center', padding: '10px' }}>
      <div style={{ paddingBottom: '10px' }}>
        <b>Ninth Standard All Subjects First Prize</b>
      </div>
      <div style={{ position: 'relative', width: '100%', height: '400px', overflow: 'hidden', borderRadius: '0.5rem' }}>
        <Image src="/images/awards/NinthStdAllSubjectsFirstPrize.png" alt="Ninth Standard All Subjects First Prize" layout="fill" objectFit="contain" className='rounded-lg' />
      </div>
    </div>
    <div style={{ textAlign: 'center', padding: '10px' }}>
      <div style={{ paddingBottom: '10px' }}>
        <b className="text-sm">Outstanding Youth of Tanintharyi Region: Rank 1/2000+ Students</b>
      </div>
      <div style={{ position: 'relative', width: '100%', height: '400px', overflow: 'hidden', borderRadius: '0.5rem' }}>
        <Image src="/images/awards/RegionalOutstandingYouthPrize.png" alt="Outstanding Youth of Tanintharyi Region" layout="fill" objectFit="contain" className='rounded-lg' />
      </div>
    </div>
    <div style={{ textAlign: 'center', padding: '10px' }}>
      <div style={{ paddingBottom: '10px' }}>
        <b>Best Prize in Scout</b>
      </div>
      <div style={{ position: 'relative', width: '100%', height: '400px', overflow: 'hidden', borderRadius: '0.5rem' }}>
        <Image src="/images/awards/ScoutBestPrize.png" alt="Best Prize in Scout" layout="fill" objectFit="contain" className='rounded-lg' />
      </div>
    </div>
    <div style={{ textAlign: 'center', padding: '10px' }}>
      <div style={{ paddingBottom: '10px' }}>
        <b>Township Level Literacy Outstanding Performance</b>
      </div>
      <div style={{ position: 'relative', width: '100%', height: '400px', overflow: 'hidden', borderRadius: '0.5rem' }}>
        <Image src="/images/awards/Township10thStdLiteracyOutstandingPerformance.png" alt="Township Level Literacy Outstanding Performance" layout="fill" objectFit="contain" className='rounded-lg' />
      </div>
    </div>
    <div style={{ textAlign: 'center', padding: '10px' }}>
      <div style={{ paddingBottom: '10px' }}>
        <b>Township Level All Subjects Outstanding Performance</b>
      </div>
      <div style={{ position: 'relative', width: '100%', height: '400px', overflow: 'hidden', borderRadius: '0.5rem' }}>
        <Image src="/images/awards/TownshipAllSubjectsOutstandingPerformance.png" alt="Township Level All Subjects Outstanding Performance" layout="fill" objectFit="contain" className='rounded-lg' />
      </div>
    </div>
    <div style={{ textAlign: 'center', padding: '10px' }}>
      <div style={{ paddingBottom: '10px' }}>
        <b>Township Level Biology First Prize</b>
      </div>
      <div style={{ position: 'relative', width: '100%', height: '400px', overflow: 'hidden', borderRadius: '0.5rem' }}>
        <Image src="/images/awards/TownshipBiologyFirstPrize.png" alt="Township Level Biology First Prize" layout="fill" objectFit="contain" className='rounded-lg' />
      </div>
    </div>
    <div style={{ textAlign: 'center', padding: '10px' }}>
      <div style={{ paddingBottom: '10px' }}>
        <b>Township Level Chemistry Third Prize</b>
      </div>
      <div style={{ position: 'relative', width: '100%', height: '400px', overflow: 'hidden', borderRadius: '0.5rem' }}>
        <Image src="/images/awards/TownshipChemistryThirdPrize.png" alt="Township Level Chemistry Third Prize" layout="fill" objectFit="contain" className='rounded-lg' />
      </div>
    </div>
    <div style={{ textAlign: 'center', padding: '10px' }}>
      <div style={{ paddingBottom: '10px' }}>
        <b>Township Level Mathematics First Prize</b>
      </div>
      <div style={{ position: 'relative', width: '100%', height: '400px', overflow: 'hidden', borderRadius: '0.5rem' }}>
        <Image src="/images/awards/TownshipMathFirstPrize.png" alt="Township Level Mathematics First Prize" layout="fill" objectFit="contain" className='rounded-lg' />
      </div>
    </div>
    <div style={{ textAlign: 'center', padding: '10px' }}>
      <div style={{ paddingBottom: '10px' }}>
        <b>Township Level Myanmar First Prize</b>
      </div>
      <div style={{ position: 'relative', width: '100%', height: '400px', overflow: 'hidden', borderRadius: '0.5rem' }}>
        <Image src="/images/awards/TownshipMyanmarFirstPrize.png" alt="Township Level Myanmar First Prize" layout="fill" objectFit="contain" className='rounded-lg' />
      </div>
    </div>
    <div style={{ textAlign: 'center', padding: '10px' }}>
      <div style={{ paddingBottom: '10px' }}>
        <b>Township Level Painting First Prize</b>
      </div>
      <div style={{ position: 'relative', width: '100%', height: '400px', overflow: 'hidden', borderRadius: '0.5rem' }}>
        <Image src="/images/awards/TownshipPaintingFirstPrize.png" alt="Township Level Painting First Prize" layout="fill" objectFit="contain" className='rounded-lg' />
      </div>
    </div>
    <div style={{ textAlign: 'center', padding: '10px' }}>
      <div style={{ paddingBottom: '10px' }}>
        <b className='text-sm'>Township Level School Activities Outstanding Performance</b>
      </div>
      <div style={{ position: 'relative', width: '100%', height: '400px', overflow: 'hidden', borderRadius: '0.5rem' }}>
        <Image src="/images/awards/TownshipSchoolActivitiesOutstandingPerformance.png" alt="Township Level School Activities Outstanding Performance" layout="fill" objectFit="contain" className='rounded-lg' />
      </div>
    </div>
    <div style={{ textAlign: 'center', padding: '10px' }}>
      <div style={{ paddingBottom: '10px' }}>
        <b>First Prize: Rank 1/400+ Students</b>
      </div>
      <div style={{ position: 'relative', width: '100%', height: '400px', overflow: 'hidden', borderRadius: '0.5rem' }}>
        <Image src="/images/awards/TUFirstTimeFirstPrize.png" alt="First Prize: Rank 1/400+ Students" layout="fill" objectFit="contain" className='rounded-lg' />
      </div>
    </div>
    <div style={{ textAlign: 'center', padding: '10px' }}>
      <div style={{ paddingBottom: '10px' }}>
        <b>First Prize: Rank 1/400+ Students</b>
      </div>
      <div style={{ position: 'relative', width: '100%', height: '400px', overflow: 'hidden', borderRadius: '0.5rem' }}>
        <Image src="/images/awards/TUSecondTimeFirstPrize.png" alt="First Prize: Rank 1/400+ Students" layout="fill" objectFit="contain" className='rounded-lg' />
      </div>
    </div>
    <div style={{ textAlign: 'center', padding: '10px' }}>
      <div style={{ paddingBottom: '10px' }}>
        <b>First Prize: Rank 1/400+ Students</b>
      </div>
      <div style={{ position: 'relative', width: '100%', height: '400px', overflow: 'hidden', borderRadius: '0.5rem' }}>
        <Image src="/images/awards/TUThirdTimeFirstPrize.png" alt="First Prize: Rank 1/400+ Students" layout="fill" objectFit="contain" className='rounded-lg' />
      </div>
    </div>
      </Carousel>
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
        <Image src="/images/about-image.jpg" width={500} height={500} className="rounded-lg" />
        <div className="mt-4 md:mt-0 text-left flex flex-col h-full">
          <h2 className="text-4xl font-bold text-white mb-4">About Me</h2>
          <p className="text-base lg:text-lg">
            I am a Computer Science student, who is currently studying at King
            Mongkut&apos;s University of Technology Thonburi. I have experience working
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
              Skills
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("education")}
              active={tab === "education"}
            >
              Education
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("certifications")}
              active={tab === "certifications"}
            >
              Certifications
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("awards")}
              active={tab === "awards"}
            >
              Awards
            </TabButton>
          </div>
          <div className="mt-4">
            {TAB_DATA.find((t) => t.id === tab).content}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
