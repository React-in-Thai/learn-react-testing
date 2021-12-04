import * as React from "react";
import { PersonOutlined } from "../icons";

export const Avatar = ({ src, children: childrenProp, size, ...props }) => {
  if (process.env.NODE_ENV !== "production") {
    if (typeof props["aria-label"] !== "string") {
      console.warn(
        'Avatar: should provide aria-label or use aria-label="" to remove this warning.'
      );
    }
  }
  const children = childrenProp || <PersonOutlined fontSize="inherit" />;
  return (
    <div
      style={{
        width: 80,
        height: 80,
        fontSize: 24,
        ...(size === "sm" && {
          width: 64,
          height: 64,
          fontSize: 20,
        }),
        ...(size === "lg" && {
          width: 100,
          height: 100,
          fontSize: 28,
        }),
        color: "rgba(0 0 0 / 0.6)",
        borderRadius: "50%",
        backgroundColor: "#e9e9e9",
        boxShadow: "inset 0 0 0 1px rgba(0 0 0 / 0.08)",
        display: "inline-flex",
        justifyContent: "center",
        alignItems: "center",
        fontFamily:
          '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"',
      }}
      role={src ? undefined : "img"}
      {...props}
    >
      {src ? (
        <img
          src={src}
          alt=""
          style={{ width: "100%", height: "100%", borderRadius: "50%" }}
        />
      ) : (
        children
      )}
    </div>
  );
};
