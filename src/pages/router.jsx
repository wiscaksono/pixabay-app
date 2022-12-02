import { Route, Routes } from "react-router-dom";
import pagesData from "./PageData";

const Router = () => {
  return (
    <Routes>
      {pagesData.map((page) => (
        <Route
          key={page.path}
          path={`/${page.path}`}
          element={page.element}
          title={page.title}
        />
      ))}
    </Routes>
  );
};

export default Router;
