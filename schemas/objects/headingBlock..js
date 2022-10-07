export default {
  name: "headingBlock",
  type: "object",
  title: "Heading",
  fields: [
    {
      name: "heading",
      type: "string",
      title: "Heading",
    },
    {
      name: "colour",
      type: "string",
      title: "Background Colour",
      options: {
        list: ["primary", "secondary", "tertiary", "white", "grey", "black"],
      },
    },
  ],
};
