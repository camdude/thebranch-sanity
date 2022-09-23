export default {
  name: "contact",
  title: "Contact Information",
  type: "document",
  __experimental_actions: ["update", /* "create", "delete", */ "publish"],
  fields: [
    {
      type: "object",
      name: "details",
      title: "Contact Details",
      fields: [
        {
          name: "address",
          type: "string",
          title: "Street Address",
        },
        {
          name: "email",
          type: "string",
          title: "Email",
        },
        {
          name: "phone",
          type: "string",
          title: "Phone",
        },
      ],
    },
    {
      type: "object",
      name: "socials",
      title: "Social Accounts",
      fields: [
        {
          name: "fb",
          type: "string",
          title: "Facebook",
          description: "i.e. https://www.facebook.com/{USERNAME}",
        },
        {
          name: "ig",
          type: "url",
          title: "Instagram",
          description: "i.e. https://www.instagram.com/{USERNAME}",
        },
        {
          name: "yt",
          type: "url",
          title: "Youtube",
          description: "i.e. https://www.youtube.com/channel/{CHANNEL_ID}",
        },
      ],
    },

    {
      type: "array",
      name: "member",
      title: "Member Links",
      of: [
        {
          name: "link",
          type: "object",
          title: "Link",
          fields: [
            { name: "label", type: "string", title: "Label" },
            { name: "link", type: "url", title: "Link" },
          ],
        },
      ],
    },
  ],
};
