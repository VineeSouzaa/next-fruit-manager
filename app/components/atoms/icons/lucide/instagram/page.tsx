import { defaultIconHeith, defaultIconWidth } from "@/app/lib/utils";
import { SVGProps } from "react";

export default function InstagramIcon(props: SVGProps<SVGSVGElement>) {
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
      className="lucide lucide-instagram-icon lucide-instagram"
    >
      <path d="M17 2H7a5 5 0 0 0-5 5v10a5 5 0 0 0 5 5h10a5 5 0 0 0 5-5V7a5 5 0 0 0-5-5Z" />
      <path d="M16.5 11.5a1 1 0 1 0 0-2 1 1 0 0 0 0 2Z" />
      <circle cx="12" cy="12" r="3" />
    </svg>
  );
}
