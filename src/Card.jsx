import {
  ArrowDownTrayIcon,
  ChatBubbleLeftEllipsisIcon,
  EyeIcon,
  HeartIcon,
} from "@heroicons/react/24/solid";
import Devider from "./components/Basic/Devider";

export default function Card({ data }) {
  return (
    <div>
      <div className="aspect-video relative">
        <div className="w-full h-full group relative rounded-xl overflow-hidden hover:scale-[1.01] hover:shadow-md transition-transform">
          <img
            src={data.webformatURL}
            className="w-full h-full bg-slate-100  object-cover "
            alt=""
          />
          <div className="w-full h-full hidden absolute top-0 group-hover:block transition-colors bg-gradient-to-t from-black/50 via-transparent to-transparent">
            <div className="absolute bottom-3 flex items-center justify-between w-full px-4">
              <div className="flex-1 flex gap-2 text-white capitalize">
                <p className="truncate">{data.tags}</p>
              </div>
              <a href={data.largeImageURL} target="_blank" rel="noreferrer">
                <ArrowDownTrayIcon className=" w-5 h-5 text-white" />
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="flex items-center justify-between mt-2.5 gap-2 flex-wrap">
        <div className="flex items-center gap-1.5">
          <img
            src={
              data.userImageURL
                ? data.userImageURL
                : "default-profile-image.jpg"
            }
            className="w-7 h-7 rounded-full bg-slate-400"
            alt={data.user}
          />
          <span className="text-sm font-semibold text-slate-700 truncate">
            {data.user}
          </span>
        </div>
        <div className="flex items-center gap-2 font-medium text-slate-400 text-sm justify-between md:justify-end">
          <div className="inline-flex gap-2 items-center">
            <span>{data.comments}</span>
            <ChatBubbleLeftEllipsisIcon className="w-4 h-4" />
          </div>
          <div className="inline-flex gap-2 items-center">
            <span>{data.views}</span>
            <EyeIcon className="w-4 h-4" />
          </div>
          <div className="inline-flex gap-2 items-center">
            <span>{data.likes}</span>
            <HeartIcon className="w-4 h-4" />
          </div>
        </div>
      </div>
      <Devider />
    </div>
  );
}
