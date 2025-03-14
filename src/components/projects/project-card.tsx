import Image from "next/image"
import { FC } from "react"

interface ProjectCardProps {
    imageUrl: string
    title: string
}

const ProjectCard: FC<ProjectCardProps> = ({ imageUrl, title }) => {
    console.log("Project imageUrl:", imageUrl)
    return (
        <article className="relative group border rounded-md shadow cursor-pointer overflow-hidden">
            <figure className="absolute inset-0 bg-gradient-to-t from-background/70 to-transparent" />
            <Image 
                src={imageUrl} 
                width={220} 
                height={220} 
                alt={title} 
                className="w-full h-full object-cover rounded-sm group-hover:scale-105 transition" 
            />
            <h3 className="absolute bottom-2 left-2 text-foreground group-hover:text-primary capitalize truncate">
                {title}
            </h3>
        </article>
    )
}

export default ProjectCard
