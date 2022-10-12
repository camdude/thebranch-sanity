export default {
    name: "sermonSeries",
    title: "Sermon Series",
    type: "document",
    fields: [
      {
        name: "title",
        type: "string",
        title: "Title",
        validation: Rule => Rule.required()
      },
      {
        name: "thumbnail",
        type: "image",
        title: "Thumbnail",
      },
      {
        name: "description",
        type: "text",
        title: "Description",
      },
    ],
  };
  