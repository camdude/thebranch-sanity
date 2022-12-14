import navigationSection from "../objects/navigationSection";

export default {
  name: "navigation",
  title: "Navigation",
  type: "document",
  __experimental_actions: ["update", /* 'create', 'delete', */ "publish"],
  fields: [
    {
      type: "string",
      name: "name",
      title: "Name",
    },
    {
      type: "string",
      name: "title",
      title: "Title",
    },
    {
      type: "array",
      name: "sections",
      title: "Sections",
      of: [navigationSection],
    },
    {
      type: "reference",
      name: "homepage",
      title: "Homepage",
      to: [{ type: "page" }],
    },
  ],
};
