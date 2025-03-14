
import { LucideIcon } from "lucide-react";


export interface SocialLink {
    href : string;
    icon : LucideIcon
}


export interface NavLink extends SocialLink{
    title : string;
   
}

export interface Statistic {
    label : string;
    value: number;
}

export type SkillsCategory = "frontend" | "backend" | "tools"

export interface Skill{
    _id : string ;
    label : string;
    value: number;
    category : SkillsCategory;
}

export interface TabItem {
    value : SkillsCategory;
    icon : LucideIcon;
    label : string;
}

export interface Project {
    _id:string,
    title:string,
    description:string,
    images:any[],
    tags:string[],
    demoLink:string,
    githubLink:string,
    publishedAt:Date,
    isResponsive:boolean

}