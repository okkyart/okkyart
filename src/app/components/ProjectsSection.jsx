'use client';
import React, { useState, useRef } from 'react';
import ProjectCard from './ProjectCard';
import ProjectTag  from './ProjectTag';
import { animate, motion, useInView } from 'framer-motion';

const projectsData = [
  {
    id: 1,
    title: "Reila",
    description: "",
    image: "/images/projects/Reila.png",
    tag: ["All", "animations"],
    gitUrl: "/",
    previewUrl: "https://drive.google.com/file/d/1OhTEEzaDz9hmirtkIcGzTawzYxJkOXgU/view?usp=sharing",
  },
  {
    id: 2,
    title: "Amber",
    description: "",
    image: "/images/projects/Amber_post.png",
    tag: ["All", "illustrations"],
    gitUrl: "/",
    previewUrl: "/images/projects/Amber_post.png",
  },
  {
    id: 3,
    title: "Hombre lobo",
    description: "Pequeña animación de un hombre lobo",
    image: "/images/projects/mini.png",
    tag: ["All", "animations"],
    gitUrl: "/",
    previewUrl: "https://drive.google.com/file/d/17hjcpJUg6RicI1XLODyzio1of8kWaOKS/view?usp=sharing",
  },
  {
    id: 4,
    title: "Respiración",
    description: "",
    image: "/images/projects/Respiración.png",
    tag: ["All", "animations"],
    gitUrl: "/",
    previewUrl: "https://drive.google.com/file/d/1KGnZGk5Z3rqKa8lJduW55WaV1wmElLwz/view?usp=sharing",
  },
  {
    id: 5,
    title: "Adam y Eva",
    description: "",
    image: "/images/projects/Adam.png",
    tag: ["All", "illustrations"],
    gitUrl: "/",
    previewUrl: "/images/projects/Adam.png",
  },
  {
    id: 6,
    title: "Go Dance",
    description: "",
    image: "/images/projects/DanceI_1080.png",
    tag: ["All", "animations"],
    gitUrl: "/",
    previewUrl: "https://drive.google.com/file/d/12cSjtTcFx-vUfF7KKEk7JiYUy01Gn5hi/view?usp=sharing",
  },
];

const ProjectsSection = () => {
  const [tag, setTag] = useState("All");
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true});
  
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
    <section id='projects'>
    <h2 className='text-center text-4xl font-bold text-white mt-4 mb-8 md:mb-12'>
      My projects
      </h2>
      <div className=' text-white flex flex-row justify-center items-center gap-2 py-6'>
        <ProjectTag 
        onClick={handleTagChange} 
        name="All"
        isSelected={tag === "All"}
         />
        <ProjectTag 
        onClick={handleTagChange} 
        name="animations"
        isSelected={tag === "animations"}
         />
        <ProjectTag 
        onClick={handleTagChange} 
        name="illustrations"
        isSelected={tag === "illustrations"}
         />
      </div>
    <ul ref={ref} className='grid md:grid-cols-3 gap-8 md:gap-12'>
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

export default ProjectsSection