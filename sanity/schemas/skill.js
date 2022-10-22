export default {
  name: 'skill',
  title: 'Skill',
  type: 'document',
  fields: [
    {
      name: 'tittle',
      title: 'Tittle',
      description: "Tittle of skill",
      type: 'string',
    },
    {
      name: 'progress',
      title: 'Progress',
      type: 'number',
      description: "Tittle of skill",
      validation: (Rule) => Rule.min(0).max(100),
    },
    {
      name: "image",
      tittle: "Image",
      type: "image",
      option: {
        hotspot : true,
      }
    },
  ],

}
