interface ValueCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  className?: string;
}

const ValueCard = ({
  icon,
  title,
  description,
  className = "",
}: ValueCardProps) => {
  return (
    <div
      className={`flex flex-col p-6 rounded-lg bg-white  transition-shadow ${className}`}
    >
      <div className="mb-4 p-2.5 bg-blue-50 rounded-lg w-[60px] h-[60px]">
        {icon}
      </div>
      <h3
        className="font-inter font-bold text-20px leading-[29.88px] tracking-normal mb-2"
        style={{ color: "#0B0C58", verticalAlign: "middle" }}
      >
        {title}
      </h3>
      <p className="font-inter font-normal text-16px leading-[25.92px] tracking-normal text-[#434343]">
        {description}
      </p>
    </div>
  );
};

export default ValueCard;
