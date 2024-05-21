import { Route, Routes } from "react-router-dom";
import HtmlDefinition from "../pages/HtmlDefinition";
import Articles from "../pages/Articles";
import ArticlesDetails from "../pages/ArticlesDetails";

const Main = () => {
  return (
    <main>
      <Routes>
        <Route path="/" element={<div>frontend</div>} />
        <Route path="/html" element={<HtmlDefinition />} />
        <Route path="/articles" element={<Articles />} />
        <Route path="/articles/:toto" element={<ArticlesDetails />} />
      </Routes>
    </main>
  );
};

export default Main;
