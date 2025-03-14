import { FC } from 'react'
import { Calendar  , Eye, Github, LayoutDashboard, Tags} from 'lucide-react'

import { Project } from '@/types/Interfaces'
import { urlForImage } from '@/sanity/lib/image'
import { Separator } from '@radix-ui/react-dropdown-menu'

import {
    Dialog,
    DialogContent,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "../ui/dailog"
import { buttonVariants } from '../ui/button'

import ProjectCard from './project-card'
import Carousel from './carousel'
import InfoItem from './info-item'


interface ProjectItemProps {
    project: Project
}

const ProjectItem: FC<ProjectItemProps> = ({ project }) => {
    console.log("Project images:", project?.images)

    // Check if `project.images` is an object and get the image URL
    const imageUrl = project.images?.asset?._ref
        ? urlForImage(project.images.asset._ref)
        : "/fallback-image.jpg"

    return (
        <Dialog>
            <DialogTrigger asChild>
                <ProjectCard imageUrl={imageUrl} title={project.title} />
            </DialogTrigger>
            <DialogContent className='p-0 sm:max-w-4xl lg:max-w-7xl'>
                <DialogHeader className='bg-muted p-4 md:p-6'>
                    <DialogTitle className='text-foreground capitalize text-xl font-semibold truncate'>
                        {project?.title}
                    </DialogTitle>
                </DialogHeader>
                <div className='grid lg:grid-cols-2 gap-4 p-4 max-h[85vh] overflow-x-hidden overflow-y-auto'>
                    <Carousel images={[project?.images]} />
                    <div className='space-y-4 lg:space-y-6 p-2 lg:p-4
                    size-full'>
                        <p className='text-sm'>{project.description}</p><Separator />
                        <Separator />
                        <article className='space-y-2 lg:space-y-3'>
                            <InfoItem icon={Calendar} label="published">
                                  <p className='font-semibold'>{project.publishedAt?.toLocaleString()}</p>
                            </InfoItem>
                            <InfoItem icon={LayoutDashboard} label="layout">
                                  <p className='font-semibold'>{project.isResponsive?"responsive":"n/a"}</p>
                            </InfoItem>
                            <InfoItem icon={Tags} label="tags">
                                  <div className='flex items-center flex-wrap gap-2'>{project.tags.map((tag,index)=>(
                                    <span key={index} className='border rounded-sm py-1 px-2 hover:bg-muted cursor-pointer'>
                                        {tag}
                                        </span>
                                  ))}</div>
                            </InfoItem>
                            

                        </article>

                        <Separator />
                        <div className='flex items-center gap-2 '>
                            <a href={`${project?.demoLink}`} className={buttonVariants()} target='_blank'>
                                <Eye className='size-4'/>
                                <span>view demo </span>
                            </a>
                            <a href={`${project?.githubLink}`} className={buttonVariants({variant:"outline"})} target='_blank'>
                                <Github className='size-4'/>
                                <span>source code </span>
                            </a>
                            

                        </div>

                    </div>
                </div>
            </DialogContent>
        </Dialog>
    )
}

export default ProjectItem
