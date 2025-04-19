import { ArrowRight } from "lucide-react";
import { Button, ButtonProps } from "./button";

interface ViewMoreButtonProps extends ButtonProps {
  children?: React.ReactNode;
}

const ViewMoreButton = ({
  children = "View More",
  ...props
}: ViewMoreButtonProps) => {
  return (
    <Button
      variant="outline"
      className="gap-2"
      style={{
        width: "149.06px",
        height: "47.91px",
        borderRadius: "99px",
        border: "1px solid #0401A5",
        fontFamily: "Inter",
        fontWeight: 500,
        fontSize: "16px",
        lineHeight: "25.92px",
        letterSpacing: "0%",
        textAlign: "center",
        verticalAlign: "middle",
        color: "#0401A5",
      }}
      {...props}
    >
      {children} <ArrowRight className="h-4 w-4" />
    </Button>
  );
};

export default ViewMoreButton;
