import {NavLink} from "@/types/Interfaces";
import { Book, MessageSquareText, User, Wrench } from "lucide-react";


export const navLinks : NavLink[]= [
    {
        title : "about",
        href : "#/about",
        icon : User
    },
    {
        title : "skills",
        href : "#/skills",
        icon : Wrench
    },
    {
        title : "projrcts",
        href : "#/projrcts",
        icon : Book
    },
    {
        title : "contact",
        href : "#/contact",
        icon : MessageSquareText
    }

];