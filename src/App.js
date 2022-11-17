/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable jsx-a11y/anchor-is-valid */
import axios from "axios";
import { useState, useEffect, lazy, Suspense } from "react";
import SkeletonLoader from "./components/SkeletonLoader";
import Footer from "./components/Layouts/Footer";
import Header from "./components/Layouts/Header";
import Navbar from "./components/Layouts/Navbar";

const Card = lazy(
  () =>
    new Promise((resolve) => setTimeout(() => resolve(import("./Card")), 1000))
);

export default function App() {
  const [data, setData] = useState();
  const [category, setCategory] = useState();
  const [searchQuerry, setSearchQuerry] = useState();

  async function getDataFromAPI() {
    await axios
      .get(
        `${process.env.REACT_APP_API_URL}/?key=${
          process.env.REACT_APP_API_KEY
        }&per_page=21&safesearch=true${
          category ? `&category=${category}` : ""
        }${searchQuerry ? `&q=${searchQuerry}` : ""}`
      )
      .then((res) => setData(res.data.hits))
      .catch((err) => console.log(err));
  }

  useEffect(() => {
    getDataFromAPI();
  }, [category, searchQuerry]);

  return (
    <div className="flex flex-col min-h-screen">
      <Header setSearchQuerry={setSearchQuerry} />
      <main className="max-w-7xl mx-auto pt-5 pb-8 px-5 flex-1 w-full h-full">
        <Navbar setCategory={setCategory} category={category} />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {data &&
            data.map((item) => (
              <Suspense fallback={<SkeletonLoader />} key={item.id}>
                <Card data={item} />
              </Suspense>
            ))}
        </div>
      </main>
      <Footer />
    </div>
  );
}
