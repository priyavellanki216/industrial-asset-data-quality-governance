/**
 * Operations Control Atlas design: a line-led section heading that makes every monitoring region legible as an evidence layer.
 */
import type { ReactNode } from "react";

type SectionHeadingProps = {
  eyebrow: string;
  title: string;
  description?: string;
  action?: ReactNode;
};

export function SectionHeading({ eyebrow, title, description, action }: SectionHeadingProps) {
  return (
    <div className="mb-5 flex flex-wrap items-end justify-between gap-4">
      <div>
        <p className="eyebrow text-[#78a0ff]">{eyebrow}</p>
        <h2 className="mt-2 font-display text-xl font-medium tracking-[-0.04em] text-white sm:text-2xl">{title}</h2>
        {description && <p className="mt-2 max-w-2xl text-sm leading-6 text-slate-400">{description}</p>}
      </div>
      {action}
    </div>
  );
}

