export default {
  name: "banner",
  type: "object",
  title: "Banner",
  preview: {
    select: {
      media: 'image'
    }
  },
  fields: [
    { name: "image", type: "image", title: "Image", description: ""},
    { name: "link", type: "url", title: "Link" },
  ],
};
