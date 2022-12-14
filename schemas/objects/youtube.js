import React from "react";
import { FaYoutube } from "react-icons/fa";
import getYouTubeId from "get-youtube-id";

const YouTubePreview = ({ value }) => {
  const id = getYouTubeId(value.url);
  const url = `https://www.youtube.com/embed/${id}`;
  if (!id) {
    return <div>Missing YouTube URL</div>;
  }
  return (
    <iframe
      title="YouTube Preview"
      width="560"
      height="315"
      src={url}
      frameborder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
    ></iframe>
  );
};

export default {
  name: "youtube",
  type: "object",
  title: "YouTube",
  icon: FaYoutube,
  fields: [
    {
      name: "url",
      type: "url",
      title: "YouTube video URL",
    },
  ],
  preview: {
    select: {
      url: "url",
    },
    component: YouTubePreview,
  },
};
