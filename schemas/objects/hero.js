export default {
  name: "hero",
  type: "object",
  title: "Hero",
  fields: [
    {
      name: "heading",
      type: "string",
      title: "Heading",
      readOnly: true,
    },
    {
      name: "subtitle",
      type: "text",
      title: "Subtitle",
    },
    {
      name: "image",
      type: "image",
      title: "Background Image",
    }
  ],
};
