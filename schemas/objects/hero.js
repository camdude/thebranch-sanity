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
      name: "buttonText",
      type: "string",
      title: "Button Text",
    },
    {
      name: "buttonLink",
      type: "url",
      title: "Button Link",
    },
  ],
};
