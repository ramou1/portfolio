import Image from "next/image";

interface CardProps {
  image: string;
  title: string;
  category: string;
  height?: string;
  onClick: () => void;
}

const Card = ({ image, title, category, height = "356", onClick }: CardProps) => {
  return (
    <div
      className="overflow-hidden cursor-pointer transition-transform hover:scale-105"
      onClick={onClick}
    >
      <div className="relative w-full" style={{ height: `${height}px` }}>
        <Image
          src={image}
          alt={title}
          fill
          className="rounded-xl object-cover"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
      </div>
      <div className="p-4">
        <p
          className="text-sm uppercase"
          style={{ color: "var(--accent-color)" }}
        >
          {category}
        </p>
        <h3 className="text-2xl font-semibold">{title}</h3>
      </div>
    </div>
  );
};

export default Card;
