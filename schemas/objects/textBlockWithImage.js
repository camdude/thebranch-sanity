export default {
  name: "textBlockWithImage",
  type: "object",
  title: "Text Block With Image",
  fields: [
    {
      name: "title",
      title: "Title",
      type: "string",
    },
    {
      name: "content",
      title: "Content",
      type: "text",
    },
    {
      name: "image",
      title: "Image",
      type: "image",
      options: {
        hotspot: true,
      },
    },
    {
      name: "cta",
      title: "Call to Action",
      type: "object",
      fields: [
        { name: "ctaOption", title: "Include Button?", type: "boolean" },
        {
          name: "btnText",
          title: "Text",
          type: "string",
          hidden: ({ parent }) => {
            return !parent?.ctaOption;
          },
        },
        {
          name: "btnLink",
          title: "Link",
          type: "reference",
          to: [{ type: "page" }],
          hidden: ({ parent }) => {
            return !parent?.ctaOption;
          },
        },
      ],
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
