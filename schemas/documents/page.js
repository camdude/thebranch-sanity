import banner from "../objects/banner";
import form from "../objects/form";
import gallery from "../objects/gallery";
import hero from "../objects/hero";
import textBlock from "../objects/textBlock";
import textBlockWithImage from "../objects/textBlockWithImage";

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
      description: "Please use images with a 16:9 ratio to avoid strectching.",
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
      of: [banner, textBlock, textBlockWithImage, gallery, form, hero],
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
