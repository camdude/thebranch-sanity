export default {
  name: "page",
  title: "Pages",
  type: "document",
  fields: [
    {
      name: "title",
      title: "Title",
      type: "string",
      validation: (Rule) => {
        return Rule.required();
      },
    },
    {
      name: "coverImage",
      title: "Cover Image",
      type: "image",
      fields: [
        {
          name: "alt",
          title: "Description",
          type: "text",
        },
      ],
      options: {
        hotspot: true,
      },
    },
    {
      name: "pageBuilder",
      type: "array",
      title: "Page Builder",
      of: [
        { type: "textBlock" },
        { type: "gallery" },
        { type: "form" },
        { type: "hero" },
      ],
      validation: (Rule) => {
        return Rule.required();
      },
    },
    {
      name: "slug",
      title: "Slug",
      type: "slug",
      validation: (Rule) => {
        return Rule.required();
      },
    },
  ],
};
