import { Avatar } from "./Avatar";

export default {
  title: "Avatar",
};

export const Basic = () => (
  <Avatar
    aria-label="Your name"
    src="https://avatars.githubusercontent.com/u/18292247?s=160&v=4"
  />
);

export const NoSrc = () => <Avatar aria-label="Your name" />; // show icon

export const Initials = () => <Avatar aria-label="Your name">SK</Avatar>;

export const Size = () => (
  <div style={{ display: "flex", gap: "1rem", alignItems: "flex-start" }}>
    <Avatar aria-label="Your name" size="sm" />
    <Avatar aria-label="Your name" />
    <Avatar aria-label="Your name" size="lg" />
  </div>
);
