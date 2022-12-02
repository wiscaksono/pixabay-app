/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState, Suspense, lazy } from "react";
import { useParams } from "react-router";
import axios from "axios";
import Footer from "../components/Layouts/Footer";
import SkeletonLoader from "../components/SkeletonLoader";

const Card = lazy(
  () =>
    new Promise((resolve) =>
      setTimeout(() => resolve(import("../components/Card")), 1000)
    )
);

export default function PhotoView() {
  const [data, setData] = useState();
  const [similarImages, setSimilarImages] = useState();
  const param = useParams();

  useEffect(() => {
    axios
      .get(
        `${process.env.REACT_APP_API_URL}/?key=${process.env.REACT_APP_API_KEY}&id=${param.id}`
      )
      .then((res) => {
        setData(res.data.hits[0]);
        axios
          .get(
            `${process.env.REACT_APP_API_URL}/?key=${process.env.REACT_APP_API_KEY}&q=${res.data.hits[0].tags}&image_type=photo&pretty=true`
          )
          .then((res) =>
            setSimilarImages(
              res.data.hits.filter((item) => item.id !== param.id)
            )
          );
      });
  }, [param]);

  const heightCheck = () => {
    if (data?.webformatHeight > data?.webformatWidth) {
      return "portrait";
    } else {
      return "landscape";
    }
  };

  return (
    <>
      <header className="bg-slate-100">
        <div className="max-w-7xl mx-auto py-10 px-5">
          <h1 className="mb-2.5">
            <a className="text-indigo-500 text-2xl font-semibold" href="/">
              Pixabay <span className="font-normal text-slate-500">App</span>
            </a>
          </h1>
          <p className="text-slate-500">
            The best free stock photos, royalty free images & videos shared by
            creators.
          </p>
        </div>
      </header>
      <div
        className={`mx-auto p-5 pb-8 ${
          heightCheck() === "landscape"
            ? "h-screen max-w-7xl"
            : "h-screen overflow-hidden max-w-full"
        } `}
      >
        <div
          className={`h-full flex gap-5 ${
            heightCheck() === "landscape" && "flex-col"
          } `}
        >
          {data && (
            <Suspense fallback={<SkeletonLoader />} key={data.id}>
              <img
                src={data.largeImageURL}
                alt=""
                className={`${heightCheck()} ${
                  heightCheck() === "landscape"
                    ? "rounded-xl"
                    : "p-5 pr-0 rounded-xl"
                }`}
              />
            </Suspense>
          )}
          <div
            className={`${
              heightCheck() !== "landscape" &&
              "py-8 pr-8 overflow-y-auto overflow-x-hidden"
            }  `}
          >
            <div className={`grid gap-5 grid-cols-3`}>
              {similarImages &&
                similarImages.map((image) => (
                  <Suspense fallback={<SkeletonLoader />} key={image.id}>
                    <Card data={image} />
                  </Suspense>
                ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
