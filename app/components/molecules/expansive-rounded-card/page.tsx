import { cn } from "@/app/lib/utils";

export default function ExpansiveRoundedCard({
  children,
  className,
}: {
  className?: string;
  children: React.ReactNode;
}) {
  return (
    <div
      className={cn(
        "bg-white rounded-2xl shadow-lg border border-slate-200/60 p-8 mb-10",
        className
      )}
    >
      {children}
    </div>
  );
}
