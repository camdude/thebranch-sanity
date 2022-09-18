import React from "react";

const headings = {
  display: "block",
  fontFamily: "'Raleway', sans-serif",
  fontWeight: "700",
  lineHeight: "1",
  marginBottom: "0",
};

export function H1(props) {
  const style = {
    fontSize: "1.5rem",
    textTransform: "capitalize",
  };

  return <h1 style={{ ...headings, ...style }}>{props.children}</h1>;
}

export function H2(props) {
  const style = {
    fontSize: "1rem",
    textTransform: "capitalize",
  };

  return <h2 style={{ ...headings, ...style }}>{props.children}</h2>;
}

export function H3(props) {
  const style = {
    fontSize: "1rem",
    textTransform: "capitalize",
  };

  return <h3 style={{ ...headings, ...style }}>{props.children}</h3>;
}

export function H4(props) {
  const style = {
    fontSize: "0.9rem",
    textTransform: "capitalize",
  };

  return <h4 style={{ ...headings, ...style }}>{props.children}</h4>;
}

export function H5(props) {
  const style = {
    fontSize: "0.6rem",
    fontStyle: "italic",
    textTransform: "capitalize",
  };

  return <h5 style={{ ...headings, ...style }}>{props.children}</h5>;
}

export function H6(props) {
  const style = {
    fontSize: "0.7rem",
    fontWeight: "500",
    textTransform: "capitalize",
  };

  return <h6 style={{ ...headings, ...style }}>{props.children}</h6>;
}
