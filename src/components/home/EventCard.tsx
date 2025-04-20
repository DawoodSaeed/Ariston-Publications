import React from "react";
import { Card, CardContent } from "@/components/ui/card";

export type EventCardProps = {
  title: string;
  date?: string;
  link?: string;
};

const EventCard: React.FC<EventCardProps> = ({ title, date, link }) => {
  return (
    <Card className="rounded-xl border border-gray-200 p-6 w-full max-w-sm shadow-sm hover:shadow-md transition duration-300 cursor-pointer">
      <CardContent className="p-0 space-y-3">
        <p
          className="font-bold text-[20px] leading-[148%] text-[#0B0C58] "
          style={{ fontFamily: "Inter" }}
        >
          {title}
        </p>
        <div className="flex items-center gap-2">
          <span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
            >
              <rect
                width="16"
                height="16"
                rx="8"
                fill="#0401A5"
                fillOpacity="0.22"
              />
              <rect x="5" y="5" width="6" height="6" rx="3" fill="#0B0C58" />
            </svg>
          </span>
          <span
            className="text-[14px] leading-[20px] font-normal text-[#0B0C58]"
            style={{ fontFamily: "Inter" }}
          >
            {date}
          </span>
        </div>
        <div className="pt-2">
          <a
            href={link || "#"}
            className="flex items-center gap-2 text-[16px] font-semibold text-[#0B0C58] hover:underline"
            style={{ fontFamily: "Inter" }}
          >
            Read More
            <span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="8"
                height="14"
                viewBox="0 0 8 14"
                fill="none"
              >
                <path
                  d="M5.1724 7.0007L0.222656 2.05093L1.63688 0.636719L8.0008 7.0007L1.63688 13.3646L0.222656 11.9504L5.1724 7.0007Z"
                  fill="#0B0C58"
                />
              </svg>
            </span>
          </a>
        </div>
      </CardContent>
    </Card>
  );
};

export default EventCard;
