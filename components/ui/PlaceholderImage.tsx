interface PlaceholderImageProps {
  className?: string;
  alt?: string;
}

export function PlaceholderImage({ className = "", alt = "placeholder" }: PlaceholderImageProps) {
  return (
    <div
      className={`bg-gray-100 flex items-center justify-center overflow-hidden ${className}`}
      role="img"
      aria-label={alt}
    >
      {/* Using the uploaded blank image */}
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img loading="lazy"         src="/images/placeholder.png"
        alt={alt}
        className="w-full h-full object-cover"
        onError={(e) => {
          const target = e.target as HTMLImageElement;
          target.style.display = "none";
        }}
      />
    </div>
  );
}
