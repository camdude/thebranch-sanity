import React from "react";

const ButtonPreview = ({ value }) => {
  const style = {
    display: "inline-block",
    border: "none",
    padding: "1rem 3rem",
    boxShadow: "0 0 0.2rem 0 #353535",
    backgroundColor: "#2e3b42",
    color: "#ffffff",
    fontWeight: "bold",
    fontSize: "1rem",
    textTransform: "uppercase",
    textDecoration: "none",
    textAlign: "center",
  };

  if (!value.url) {
    return <div>Missing URL</div>;
  }
  return (
    <button style={style} type="button" href={value.url}>
      {value.title}
    </button>
  );
};

export default {
  name: "button",
  type: "object",
  title: "Button",
  fields: [
    {
      name: "title",
      type: "string",
      title: "Title",
    },
    {
      name: "url",
      type: "url",
      title: "URL",
    },
  ],
  preview: {
    select: {
      url: "url",
      title: "title"
    },
    component: ButtonPreview,
  },
};
