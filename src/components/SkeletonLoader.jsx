export default function SkeletonLoader() {
  return (
    <div>
      <div className="aspect-video relative">
        <div className="w-full h-full group relative rounded-xl overflow-hidden hover:scale-[1.01] hover:shadow-md transition-transform">
          <div className="w-full h-full bg-slate-100  object-cover animate-pulse" />
        </div>
      </div>
      <div className="flex items-center justify-between mt-2.5 bg-slate-100 h-7 animate-pulse" />
    </div>
  );
}
