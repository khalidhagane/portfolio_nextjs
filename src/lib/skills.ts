// import { client } from "@/sanity/lib/client"
// import { Skill } from "@/types/Interfaces";


// export async function getSkills(){
//     const query = `
//     *[_type=="skills"]{
//   _id,label,value,category
// }
//     `
//     const data = await client.fetch(query )
//     console.log('datatt',data);
    
//     return data as Skill[];
// }


import { client } from "@/sanity/lib/client"
import { Skill , SkillsCategory } from "@/types/Interfaces";

export async function getSkills(category: SkillsCategory){
    const query = `
    *[_type == "skills" && category == "${category}"]{
      _id, label, value, category
    }
    `;
    
    try {
        const data = await client.fetch(query);
        console.log('Fetched data:', data);
        
        if (data.length === 0) {
            console.warn('No skills found. Check if there are any documents of type "skills" in the dataset.');
        }
        
        return data as Skill[];
    } catch (error) {
        console.error('Error fetching skills:', error);
        return [];
    }
}
