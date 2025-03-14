


import { client } from "@/sanity/lib/client"
import { Project } from "@/types/Interfaces";

export async function getProjects(){
    const query = `
    *[_type == "projects"]{
      _id, 
      title, 
      description,
       images,
       tags,
       demoLinks,
       githubLink,
       publishedAt,
       isResponsive,
    }
    `;
    
    try {
        const data = await client.fetch(query);
        console.log('Fetched data:', data);
        
        if (data.length === 0) {
            console.warn('No skills found. Check if there are any documents of type "skills" in the dataset.');
        }
        
        return data as Project[];
    } catch (error) {
        console.error('Error fetching skills:', error);
        return [];
    }
}
