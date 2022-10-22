export default {
  name: 'project',
  title: 'Project',
  type: 'document',
  fields: [
    {
      name: 'tittle',
      title: 'Tittle',
      description: "Tittle of the project",
      type: 'string',
    },
    {
      name: 'image',
      title: 'Image',
      type: 'image',
      options : {
        hotspot : true,
      }
    },
    {
      name: 'summary',
      title: 'Summary',
      type: 'text',

    },
    {
      name: "technologies",
      tittle: "Technologies",
      type: "array",
      of:[{type: "reference", to: { type: "skill"}}],
    },
    {
      name: "linkToBuild",
      tittle: "Link To Build",
      type: "url"
    },
  ],
}
