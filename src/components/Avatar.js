import * as React from "react";
import { PersonOutlined } from "../icons";

export const Avatar = ({ src, children, size, style, ...props }) => {
  return (
    <div
      {...props}
      style={{
        display: "inline-flex",
        alignItems: "center",
        justifyContent: "center",
        boxShadow: "inset 0 0 0 1px rgba(0 0 0 / 0.08)",
        borderRadius: "50%",
        width: 64,
        height: 64,
        fontSize: 24,
        fontWeight: 500,
        letterSpacing: "1px",
        fontFamily:
          '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"',
        ...(size === "sm" && {
          width: 64,
          height: 64,
        }),
        ...style,
      }}
      role={src ? undefined : "img"}
    >
      {src ? (
        <img
          src={src}
          alt=""
          style={{
            width: "100%",
            height: "100%",
            borderRadius: "50%",
          }}
        />
      ) : (
        children || <PersonOutlined />
      )}
    </div>
  );
};
