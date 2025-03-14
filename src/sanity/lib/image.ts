import createImageUrlBuilder from '@sanity/image-url'
import { SanityImageSource } from "@sanity/image-url/lib/types/types";
import { dataset, projectId } from '../env'
import { Image } from 'sanity';

// Check if projectId and dataset are defined
const builder = createImageUrlBuilder({ 
  projectId : projectId || ""  ,
  dataset : dataset || "" 
});

export const urlForImage = (source: Image) => {
  return builder?.image(source).auto("format").fit("max").url();
}

// export const urlFor = (source: Image | undefined) => {
//   console.log("sourcesource",source);
  
//   if (!source || !source.asset?._ref) {
//     throw new Error("Source image is undefined or missing asset reference.");
//   }
//   return builder.image(source).auto("format").fit("max").url();
// };
