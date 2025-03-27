"use client"

import React, { useEffect, useState } from "react"
import Image from "next/image"
import Link from "next/link"
import SlideUp from "./SlideUp"
import { BsGithub, BsArrowUpRightSquare } from "react-icons/bs"
import axios from "axios"

export interface IProjectConfig {
    projects: IProject[];
}

export interface IProject {
    title: string;
    info: string;
    website: string;
    github: string;
    apidoc: string;
    imageurl: {
        light: string;
        dark?: string;
    };
    maintenance: boolean;
    techstack: string[];
}

const fetchProjects = async (): Promise<IProjectConfig | null> => {
    try {
        const { data } = await axios.get<IProjectConfig>('https://raw.githubusercontent.com/KailasMahavarkar/config/main/shweta_portfolio.json');
        return data;
    } catch (error) {
        console.error('Error fetching projects:', error);
        return null;
    }
}

const ProjectsSection = () => {
    const [projectData, setProjectData] = useState<IProjectConfig | null>(null);

    useEffect(() => {
        fetchProjects().then((data) => {
            if (data) {
                setProjectData(data);
            }
        });
    }, []);

    return (
        <section id="projects">
            <h1 className="my-10 text-center font-bold text-4xl">
                Projects
                <hr className="w-6 h-1 mx-auto my-4 bg-teal-500 border-0 rounded"></hr>
            </h1>

            <div className="flex flex-col space-y-28">
                {projectData?.projects.map((project, idx) => (
                    <div key={idx}>
                        <SlideUp offset="-300px 0px -300px 0px">
                            <div className="flex flex-col md:animate-slideUpCubiBezier md:animation-delay-2 md:flex-row md:space-x-12">
                                <div className="md:w-1/2 border-[1px] border-white border-solid rounded-md shadow-md">
                                    <Link href={project.website}>
                                        <Image
                                            src={project.imageurl.light}
                                            alt={project.title}
                                            width={1000}
                                            height={1000}
                                            className="rounded-xl shadow-xl hover:opacity-70"
                                        />
                                    </Link>
                                </div>
                                <div className="mt-8 md:w-1/2">
                                    <h1 className="text-4xl font-bold mb-6">{project.title}</h1>
                                    <p className="text-xl leading-7 mb-4 text-neutral-600 dark:text-neutral-400">
                                        {project.info}
                                    </p>
                                    <div className="flex flex-row align-bottom space-x-4">
                                        <Link href={project.github} target="_blank">
                                            <BsGithub
                                                size={30}
                                                className="hover:-translate-y-1 transition-transform cursor-pointer"
                                            />
                                        </Link>
                                        <Link href={project.website} target="_blank">
                                            <BsArrowUpRightSquare
                                                size={30}
                                                className="hover:-translate-y-1 transition-transform cursor-pointer"
                                            />
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </SlideUp>
                    </div>
                ))}
            </div>
        </section>
    )
}

export default ProjectsSection