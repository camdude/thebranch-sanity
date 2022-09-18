import { H1, H2, H3, H4, H5, H6 } from "../documents/pageStyles";
import button from "./button";

export default {
  name: "textBlock",
  type: "object",
  title: "Text Block",
  fields: [
    {
      name: "content",
      title: "Content",
      type: "array",
      of: [
        {
          type: "block",
          styles: [
            { title: "Normal", value: "normal" },
            {
              title: "H1",
              value: "h1",
              blockEditor: {
                render: H1,
              },
            },
            {
              title: "H2",
              value: "h2",
              blockEditor: {
                render: H2,
              },
            },
            {
              title: "H3",
              value: "h3",
              blockEditor: {
                render: H3,
              },
            },
            {
              title: "H4",
              value: "h4",
              blockEditor: {
                render: H4,
              },
            },
            {
              title: "H5",
              value: "h5",
              blockEditor: {
                render: H5,
              },
            },
            {
              title: "H6",
              value: "h6",
              blockEditor: {
                render: H6,
              },
            },
            { title: "Quote", value: "blockquote" },
          ],
          marks: {
            annotations: [
              {
                name: "link",
                type: "object",
                title: "External link",
                fields: [
                  {
                    name: "href",
                    type: "url",
                    title: "URL",
                  },
                  {
                    title: "Open in new tab",
                    name: "blank",
                    type: "boolean",
                  },
                ],
              },
            ],
          },
        },
        button,
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
