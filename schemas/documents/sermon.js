export default {
  name: "sermon",
  title: "Sermons",
  type: "document",
  fields: [
    {
      name: "title",
      type: "string",
      title: "Title",
    },
    {
      name: "passage",
      type: "string",
      title: "Bible Passage",
    },
    {
      name: "preacher",
      type: "string",
      title: "Preacher",
    },
    {
      name: "series",
      type: "string",
      title: "Sermon Series",
    },
    {
      name: "date",
      type: "date",
      title: "Date",
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
