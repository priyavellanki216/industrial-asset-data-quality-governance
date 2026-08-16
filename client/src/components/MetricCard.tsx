/**
 * Operations Control Atlas design: dense instrument-style KPI card with an evidence label and a measured status cue.
 */
import { type LucideIcon } from "lucide-react";

type Tone = "blue" | "green" | "amber" | "slate";

type MetricCardProps = {
  label: string;
  value: string;
  helper: string;
  icon: LucideIcon;
  tone?: Tone;
};

const toneClasses: Record<Tone, string> = {
  blue: "bg-[#2f6bff]/10 text-[#78a0ff] ring-[#2f6bff]/30",
  green: "bg-[#39b98a]/10 text-[#73d9ad] ring-[#39b98a]/30",
  amber: "bg-[#f7b74b]/10 text-[#f7c86d] ring-[#f7b74b]/30",
  slate: "bg-white/[0.05] text-slate-300 ring-white/[0.08]",
};

export function MetricCard({ label, value, helper, icon: Icon, tone = "slate" }: MetricCardProps) {
  return (
    <article className="instrument-card group min-w-0 p-4">
      <div className="flex items-start justify-between gap-3">
        <p className="eyebrow truncate">{label}</p>
        <span className={`grid h-8 w-8 shrink-0 place-items-center rounded-lg ring-1 ${toneClasses[tone]}`}>
          <Icon size={15} strokeWidth={1.8} />
        </span>
      </div>
      <div className="mt-5 font-display text-[27px] font-semibold leading-none tracking-[-0.06em] text-white sm:text-[30px]">
        {value}
      </div>
      <p className="mt-3 truncate text-[11px] text-slate-500">{helper}</p>
    </article>
  );
}
