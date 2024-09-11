import { defineField, defineType } from "sanity";

export default defineType({
    name: "skills",
    type:"document",
    title: "Skills",
    fields: [
        defineField({
            name: "label",
            type: "string",
            title: "label",
            validation: (Rule) =>(Rule.required().min(3).max(10))
        }),
        defineField({
            name: "value",
            type: "number",
            title: "percentage",
            validation: (Rule) => (Rule.required().min(0).error("minmum value must be 1").max(100).error("max value must be 100"))
        }),
        defineField({
            name: "category",
            type: "string",
            title: "category",
            options: {
                list: [
                    { title: "Front End" ,  value: "frontend" },
                    { title: "Back End" ,  value: "backend" },
                    { title: "Tools" ,  value: "tools"},
                ],
            },
            validation: (Rule) => (Rule.required())
        })
    ]

});