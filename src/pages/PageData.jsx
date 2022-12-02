import Home from "./Home";
import PhotoView from "./PhotoView";

const pagesData = [
  {
    path: "",
    element: <Home />,
    title: "Home",
  },
  {
    path: "photo/:id",
    element: <PhotoView />,
    title: "Photo",
  },
];

export default pagesData;
