"use client";
import React, { useTransition, useState } from 'react'
import Image from 'next/image'
import TabButton from "./TabButton";
import { Content } from 'next/font/google';

const TAB_DATA = [
  {
    title: "Skills",
    id: "skills",
    content: (
      <ul className='list-disc pl-2'>
        <li>Blender</li>
        <li>Zbrush</li>
        <li>Premiere Pro</li>
        <li>Photoshop</li>
        <li>After Effects</li>
        <li>Substance painter</li>
      </ul>
    )
  },
  {
    tittle: "Education",
    id: "education",
    content: (
      <ul className='list-disc pl-2'>
        <li>Universidad Rosario Castellanos</li>
      </ul>
    )
  },
  {
    title: "Certifications",
    id: "certifications",
    content: (
      <ul className='list-disc pl-2'>
        <li>Lincenciado en Ciencias de la Comunicación</li>
      </ul>
    )
  },
  

]

const AboutSection = () => {
  const [tab, setTab] = useState("skills");
  const [isPending, startTransition] = useTransition();

  const handletabChange = (id) => {
    startTransition(() => {
      setTab(id);
    });
  }

  return (
    <section className='text-white' id='about'>
        <div className='md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16'>
            <Image src="/images/about-image.svg" alt='hero' width={500} height={500} />
            <div className='mt-4 md:mt-0 text-left flex flex-col h-full'>
              <h2 className='text-4xl font-bold text-white mb-4'>About Me</h2>
              <p className='text-base lg:text-lg'>Soy artista 3D apasionado por la creación de contenido digital y la animación. A lo largo de mi formación superior, he desarrollado habilidades en modelado, texturizado, animación iluminación y renderizado 3D. Me especializo en el uso de softwares como Blender, After Effects, Premiere Pro, Substance Painter, Zbrush y Photoshop. Esto me permite crear proyectos visuales de calidad.</p>
              <div className='flex flex-row justify-start mt-8'>
                <TabButton 
                selectTab={() => handletabChange ("skills")} 
                active={tab === "skills"}
                >
                  {""}
                  Skills{""}
                </TabButton>
                <TabButton 
                selectTab={() => handletabChange ("education")} 
                active={tab === "education"}
                >
                  {""}
                  Education{""}
                </TabButton>  
                <TabButton 
                selectTab={() => handletabChange ("certifications")} 
                active={tab === "certifications"}
                >
                  {""}
                  Certifications{""}
                </TabButton>
              </div>
              <div className="mt-8">{TAB_DATA.find((t) => t.id === tab).content}</div>
            </div>
            </div>
            </section>
  )
}

export default AboutSection;