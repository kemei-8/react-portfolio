import React from 'react'
import projects from '../data/projects';
import PortfolioItem from './PortfolioItem';

function Projects() {
    return (
        <div className="mx-[15%] "> 
            <h1 className="text-left text-4xl">Projects</h1>

            <hr class="w-48 h-px bg-gray-400 border-0 rounded md:my-10 dark:bg-gray-950"></hr>

            <div className="flex flex-col md:flex-row items-center justify-center">

                <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3"> 
                    {projects.map(projects => (
                        <PortfolioItem 
                            imgUrl={projects.imgUrl}
                            title={projects.title}
                            desc={projects.desc}
                            stack={projects.stack}
                            link={projects.link}
                            type={projects.type}
                            />
                    ))}
                </div>

            </div>
        </div>
    )
}

export default Projects;