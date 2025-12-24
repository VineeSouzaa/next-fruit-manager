import { cn } from "@/app/lib/utils";

export default function Input({
  type,
  id,
  className,
  placeholder,
  icon,
}: {
  type:
    | "text"
    | "password"
    | "email"
    | "number"
    | "tel"
    | "url"
    | "search"
    | "date"
    | "time"
    | "datetime-local"
    | "month"
    | "week"
    | "color"
    | "file"
    | "hidden"
    | "image"
    | "radio"
    | "checkbox"
    | "range"
    | "textarea";
  id?: string;
  className?: string;
  placeholder: string;
  icon?: React.ReactNode;
}) {
  return (
    <div className={cn("shadow-xs", className, icon && "flex")}>
      {icon && (
        <span className="block py-2.5 px-2 border-b-2 border-r border-right-0 ">
          {icon}
        </span>
      )}

      <div className="relative z-0 ">
        <input
          type={type}
          id={id}
          className="block py-2.5 px-0 w-full text-sm text-heading bg-transparent border-0 border-b-2 border-default-medium appearance-none focus:outline-none focus:ring-0 focus:border-brand peer"
          placeholder=" "
        />
        <label
          htmlFor={id}
          className="ml-2 absolute text-sm text-body duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-left peer-focus:start-0 peer-focus:text-fg-brand peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto"
        >
          {placeholder}
        </label>
      </div>
    </div>
  );
}
