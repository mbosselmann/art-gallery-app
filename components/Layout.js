import Navigation from "./Navigation/index.js";

export default function Layout({ children }) {
  return (
    <>
      {children}
      <Navigation />
    </>
  );
}
