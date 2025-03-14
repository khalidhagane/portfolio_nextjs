import { defineField , defineType } from 'sanity';

export default defineType({
    name: 'projects',
    type: 'document',
    title: 'Projects',
    fields: [
        defineField({
            name: 'title',
            type: 'string',
            title: 'Title',
            validation:(Rule)=>[
                Rule.required(),
                Rule.min(3).error("A title of  min . 10 characters is required"),
                Rule.max(100).error("A max 100 ")
            ]
            
            
        }),
        defineField({
            name: 'description',
            type: 'text',
            title: 'Description',
            validation: (Rule) => Rule.required().min(3).max(1000)
        }),
        defineField({
            name: 'images',
            type: 'image',
            title: 'Images',
            of:[{type: 'image'}],
        }),
        defineField({
            name: 'tags',
            type: 'array',
            title: 'tags',
            of: [{type:'string'}],
        }),
        defineField({
            name: 'demolink',
            type: 'url',
            title: 'Demo link',
            // validation:(Rule) =>Rule.regex(new RegExp(/[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b
            // ([-a-zA-Z0-9()@:%_\+.~#?&??=]*)?/gi)).optional()
        }),
        defineField({
            name: 'githublink',
            type: 'url',
            title: 'Github Respository link',
            // validation:(Rule) =>Rule.regex(new RegExp(/[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b
            // ([-a-zA-Z0-9()@:%_\+.~#?&??=]*)?/gi)).optional()
        }),
        defineField({
            name: 'publishedAt',
            type: 'date',
            title: 'Published At',
            validation: (Rule) =>Rule.min(new Date("2020-08-25").toDateString()).max(new Date().toDateString())
          
        }),
        defineField({
            name: 'isResponsive',
            type: 'boolean',
            title: 'Is Responsive',
            initialValue: true,
          
        }),
      

       
        ],
});
