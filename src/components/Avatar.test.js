import * as React from "react";
import { render, screen } from "@testing-library/react";
import { Avatar } from "./Avatar"; // change to "./index"

describe("Avatar", () => {
  it("works!", () => {
    expect(() => render(<Avatar />)).not.toThrow();
  });
});
