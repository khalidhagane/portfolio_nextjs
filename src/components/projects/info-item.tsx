import { LucideIcon } from "lucide-react";
import { FC } from "react";

interface InfoItemProps {
    icon:LucideIcon
    label:string
    children:React.ReactNode   
}


const InfoItem : FC<InfoItemProps> = ({icon:Icon , label,children}) =>{
    return <div className="grid grid-cols-3 items-start gap-2"> 
        <div className="flex items-center gap-2 capitalize ">
            <Icon className="size-5" />
            <span > {label}: </span> 
        </div>
        <div className="col-span-2 text-foreground">
             {children}
        </div>
     </div>
       
}


export default InfoItem 