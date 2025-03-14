import { AppWindow, PencilRuler, TerminalSquare } from 'lucide-react';
import { TabItem } from './../types/Interfaces';
 
export const tabItems:TabItem[] = [
    {
        value : "frontend",
        icon : AppWindow,
        label : "frontend",
    },
    {
        value : "backend",
        icon : TerminalSquare,
        label : "backend",
    },
    {
        value : "tools",
        icon : PencilRuler,
        label : "tools",
    }
]