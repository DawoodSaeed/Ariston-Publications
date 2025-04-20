interface SectionBadgeProps {
  title: string;
}

const SectionBadge = ({ title }: SectionBadgeProps) => {
  return (
    <div
      className="inline-block px-3 py-1 rounded-full text-sm mb-4 max-w-[150px]"
      style={{
        background:
          "linear-gradient(269.21deg, rgba(125, 127, 244, 0.26) 1.92%, rgba(3, 3, 208, 0.14) 26.97%, rgba(6, 6, 82, 0.02) 92.72%)",
        color: "#353535",
        fontFamily: "Inter",
        fontWeight: 500,
        fontSize: "14px",
        lineHeight: "19.6px",
        letterSpacing: "0%",
        textAlign: "center",
        verticalAlign: "middle",
        textTransform: "uppercase",
      }}
    >
      {title}
    </div>
  );
};

export default SectionBadge;
