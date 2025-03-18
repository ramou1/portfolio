import Image from "next/image";

interface CardProps {
  image: string;
  title: string;
  category: string;
  onClick: () => void;
}

const Card = ({ image, title, category, onClick }: CardProps) => {
  return (
    <div
      className="bg-white rounded-lg overflow-hidden shadow-md cursor-pointer transition-transform hover:scale-105"
      onClick={onClick}
    >
      <div className="relative h-48 w-full">
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
      </div>
      <div className="p-4">
        <h3 className="text-lg font-semibold">{title}</h3>
        <p className="text-sm text-gray-600">{category}</p>
      </div>
    </div>
  );
};

export default Card;
