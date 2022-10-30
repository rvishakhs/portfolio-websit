export default {
  name: 'experience',
  title: 'experience',
  type: 'document',
  fields: [
    {
      name: 'jobTitle',
      title: 'JobTitle',
      type: 'string',
    },
    {
      name: 'companyImage',
      title: 'Company Image',
      type: 'string',
      options : {
        hotspot : true,
      }
    },
    {
      name: 'company',
      title: 'Company',
      type: 'text',

    },
    {
      name: "dateStarted",
      tittle: "DateStarted",
      type: "date",
    },
    {
      name: "dateEnded",
      tittle: "dateEnded",
      type: "date",
    },
    {
      name: "profilePic",
      tittle: "ProfilePic",
      type: "image",
      option: {
        hotspot : true,
      }
    },
    {
      name: "isCurrentlyWorkingHere",
      tittle: "IsCurrentlyWorkingHere",
      type: "boolean",
    },

    {
      name: "address",
      tittle: "Address",
      type: "string",
    },
    
    
    
    
    {
      name: "technologies",
      tittle: "Technologies",
      type: "array",
      of:[{type: "reference", to: {type: "skill"}}],
    },
    {
      name: "points",
      tittle: "Ponits",
      type: "array",
      of:[{type: "reference"}], 
    },
  ],

}
