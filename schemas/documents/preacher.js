export default {
  name: "preacher",
  title: "Preachers",
  type: "document",
  fields: [
    {
      name: "firstname",
      type: "string",
      title: "First Name",
      validation: (Rule) => Rule.required(),
    },
    {
      name: "surname",
      type: "string",
      title: "Surname",
    },
    {
      name: "position",
      type: "string",
      title: "Position",
    },
    {
      name: "profile",
      type: "image",
      title: "Profile Picture",
    },
    {
      name: "description",
      type: "text",
      title: "Description",
    },
  ],
  preview: {
    select: {
      media: "profile",
      first: "firstname",
      last: "surname",
    },
    prepare(selection) {
      const { media, first, last } = selection;
      return {
        title: first + " " + last,
        media: media
      };
    },
  },
};
