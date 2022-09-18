export default {
  name: "siteSettings",
  title: "Site Settings",
  type: "document",
  __experimental_actions: ['update', /* 'create', 'delete', */ 'publish'],
  fields: [
    {
      name: "url",
      title: "URL",
      type: "string",
      validation: (Rule) => {
        return Rule.required();
      },
    },
    {
      name: "site_name",
      title: "Site Name",
      type: "string",
      validation: (Rule) => {
        return Rule.required();
      },
    },
    {
      name: "description",
      title: "Description",
      type: "text",
      validation: (Rule) => {
        return Rule.required();
      },
    },
    {
      name: "theme_color",
      title: "Theme Color",
      type: "string",
      validation: (Rule) => {
        return Rule.required();
      },
    },
  ],
};
