import { defaultIconHeith, defaultIconWidth } from "@/app/lib/utils";
import { SVGProps } from "react";

export default function YoutubeIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width={defaultIconWidth}
      height={defaultIconHeith}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="lucide lucide-youtube-icon lucide-youtube"
    >
      <path d="M21.54 6.42a2 2 0 0 0-1.96-1.97l-8.5 1.01a2 2 0 0 0-1.64.57l-4.29 4.29a2 2 0 0 1-1.23.58L3 16a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2l8.5.99a2 2 0 0 0 1.64-.57l4.29-4.29A1.92 1.92 0 0 1 21.54 6.42z" />
    </svg>
  );
}
