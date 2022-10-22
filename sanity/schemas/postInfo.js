export default {
  name: 'postInfo',
  title: 'PostInfo',
  type: 'document',
  fields: [
    {
      name: 'name',
      title: 'Name',
      type: 'string',
    },
    {
      name: 'role',
      title: 'Role',
      type: 'string',
    },
    {
      name: 'heroImage',
      title: 'Image',
      type: 'image',
      options : {
        hotspot: true,
      }
    },
    {
      name: "backgroundInformation",
      tittle: "backgroundInformation",
      type: "string",
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
      name: "phoneNumber",
      tittle: "PhoneNumber",
      type: "string",
    },
    {
      name: "email",
      tittle: "Email",
      type: "string",
    },
    {
      name: "address",
      tittle: "Address",
      type: "string",
    },
    {
      name: "socials",
      tittle: "Socials",
      type: "array",
      of:[{type: "reference", to: { type: "social"}}],
    },


  ],

}
