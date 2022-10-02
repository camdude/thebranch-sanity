import { FaImage } from "react-icons/fa";

export default {
  title: "Image",
  name: "image",
  type: "image",
  icon: FaImage,
  fields: [
    {
      name: "alt",
      title: "Description",
      type: "string",
      options: {
        isHighlighted: true,
      },
    },
    {
      title: "Position",
      name: "position",
      type: "string",
      options: {
        list: [
          { title: "Center", value: "center" },
          { title: "Left", value: "left" },
          { title: "Right", value: "right" },
        ],
        layout: "radio",
        isHighlighted: true,
      },
    },
  ],
  options: {
    hotspot: true,
  },
};
