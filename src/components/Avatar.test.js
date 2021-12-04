import * as React from "react";
import { render, screen } from "@testing-library/react";
import { Avatar } from "./Avatar"; // change to "./index"

describe("Avatar", () => {
  it("render element with role='img' if src is provided", () => {
    render(<Avatar src="some-url" aria-label="name" />);

    expect(screen.getByRole("img")).toBeDefined();
  });

  it("render icon if src is not provided", () => {
    render(<Avatar aria-label="name" />);

    expect(screen.getByRole("img").firstChild.nodeName).toEqual("svg");
  });

  it("able to replace icon with custom children", () => {
    render(<Avatar aria-label="name">SK</Avatar>);

    expect(screen.getByRole("img").textContent).toEqual("SK");
  });
});
