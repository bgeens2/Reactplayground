import MDX from "@mdx-js/runtime";
import React from "react";

// Provide custom components for markdown elements
const components = {
  h1: props => <h1 style={{ color: "tomato" }} {...props} />,
  Demo: props => <h1>This... is a demo component</h1>
};

// Provide variables that might be referenced by JSX
const scope = {
  some: "value"
};

const mdx = `
# Hello, world!

- go
- test 
- mdx

<Demo />

## woo hoo, it works!

`;

export default () => (
  <MDX components={components} scope={scope}>
    {mdx}
  </MDX>
);
