import { createRoot } from "react-dom/client";

const NavigationBar = () => {
  return <h1>From React</h1>;
};

const domNode = document.getElementById("navigation");
const root = createRoot(domNode);
root.render(<NavigationBar />);
