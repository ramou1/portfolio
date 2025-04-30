"use client";

import Image from "next/image";
import { useLoading } from "../../components/Loader";

interface CardProps {
  media: string;
  title: string;
  category: string;
  height?: string;
  onClick: () => void;
  mediaType?: "image" | "video";
}

const getCategoryColor = (category: string) => {
  switch (category) {
    case "mobile":
      return "var(--mobile-color)";
    case "web":
      return "var(--web-color)";
    case "design":
      return "var(--design-color)";
    case "ai":
      return "var(--teal-color)";
    default:
      return "var(--teal-color)";
  }
};

const Card = ({
  media,
  title,
  category,
  height = "356",
  onClick,
  mediaType = "image",
}: CardProps) => {
  // Utilizando o hook de loading
  const { setLoading } = useLoading();

  const handleClick = () => {
    // Ativar o loader antes de navegar
    setLoading(true);
    // Chamar a função onClick original (que provavelmente faz a navegação)
    onClick();
  };

  return (
    <div
      className="overflow-hidden cursor-pointer transition-transform hover:scale-105"
      onClick={handleClick}
    >
      <div className="relative w-full" style={{ height: `${height}px` }}>
        {mediaType === "image" ? (
          <Image
            src={media}
            alt={title}
            fill
            className="rounded-xl object-cover"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            loading="lazy"
          />
        ) : (
          <video
            src={media}
            className="rounded-xl object-cover w-full h-full"
            autoPlay
            muted
            loop
            playsInline
          />
        )}
      </div>
      <div className="pt-2 pb-4">
        <span
          className="inline-flex items-center rounded-xl text-white px-3 py-1 mb-2 text-xs uppercase"
          style={{ backgroundColor: getCategoryColor(category) }}
        >
          {category}
        </span>
        
        <h3 className="text-3xl font-semibold">{title}</h3>
      </div>
    </div>
  );
};

export default Card;