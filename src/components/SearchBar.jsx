const AVATARS = [
  "https://i.pravatar.cc/64?img=5",
  "https://i.pravatar.cc/64?img=12",
  "https://i.pravatar.cc/64?img=32",
];

export default function ReviewAvatars({ count = "12.8k" }) {
  return (
    <div className="flex items-center gap-3">
      <div className="flex -space-x-3">
        {AVATARS.map((src, i) => (
          <img
            key={i}
            src={src}
            alt=""
            className="h-10 w-10 rounded-full border-2 border-stone-50 object-cover"
          />
        ))}
        <span className="flex h-10 w-10 items-center justify-center rounded-full border-2 border-stone-50 bg-stone-200 text-xs font-medium text-stone-700">
          +2k
        </span>
      </div>
      <p className="text-sm text-stone-600">
        <span className="font-semibold text-stone-900">{count}</span> reseñas
        verificadas
      </p>
    </div>
  );
}
