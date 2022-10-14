export default {
  name: "sermon",
  title: "Sermons",
  type: "document",
  fields: [
    {
      name: "title",
      type: "string",
      title: "Title",
      validation: Rule => Rule.required()
    },
    {
      name: "subtitle",
      type: "string",
      title: "Subtitle",
      description: "For podcasting purposes, if relevant"
    },
    {
      name: "passage",
      type: "string",
      title: "Bible Passage",
      validation: Rule => Rule.required()
    },
    {
      name: "preacher",
      type: "reference",
      title: "Preacher",
      to: [{ type: "preacher" }],
      validation: Rule => Rule.required()
    },
    {
      name: "series",
      type: "reference",
      title: "Sermon Series",
      to: [{ type: "sermonSeries" }],
    },
    {
      name: "date",
      type: "date",
      title: "Date",
      validation: Rule => Rule.required()
    },
    {
      name: "description",
      type: "text",
      title: "Description",
    },
    {
      name: "audio",
      type: "file",
      title: "Audio",
    },
  ],
};
