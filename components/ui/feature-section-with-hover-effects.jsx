import React from "react";
import { cn } from "@/lib/utils";
import * as Icons from "lucide-react";

function getIcon(name, props = {}) {
  const Icon = Icons[name];
  if (Icon) return <Icon {...props} />;
  // fallback simple circle if icon not available
  return (
    <span
      aria-hidden
      className="inline-block h-7 w-7 rounded-full bg-neutral-200 dark:bg-neutral-700"
      {...props}
    />
  );
}

export function FeaturesSectionWithHoverEffects() {
  const features = [
    {
      title: "Bulk Edit Expenses",
      description:
        "Select many expenses at once to quickly change category, date, or split rules.",
      icon: getIcon("ListChecks", { className: "h-7 w-7" }),
    },
    {
      title: "Recurring Bills",
      description:
        "Auto-create monthly rent, utilities, or subscriptions so you never forget.",
      icon: getIcon("RefreshCcw", { className: "h-7 w-7" }),
    },
    {
      title: "Group Pooled Pot",
      description:
        "Start a shared kitty for trips or events; expenses draw from the same fund.",
      icon: getIcon("PiggyBank", { className: "h-7 w-7" }),
    },
    {
      title: "Smart Settle Suggestions",
      description:
        "Minimize transfers with AI-guided who-pays-whom recommendations.",
      icon: getIcon("Brain", { className: "h-7 w-7" }),
    },
    {
      title: "Multi-Currency Travel Mode",
      description:
        "Log in any currency and see fair conversions for everyone in the group.",
      icon: getIcon("Coins", { className: "h-7 w-7" }),
    },
    {
      title: "Receipts & OCR",
      description:
        "Attach receipts and auto-extract totals, dates, and merchants from images.",
      icon: getIcon("Receipt", { className: "h-7 w-7" }),
    },
    {
      title: "Calendar & Reminders",
      description:
        "Sync due dates to your calendar and get nudges to settle up on time.",
      icon: getIcon("CalendarClock", { className: "h-7 w-7" }),
    },
    {
      title: "Privacy Controls",
      description:
        "Choose who can view or edit specific expenses; lock finalized trips.",
      icon: getIcon("ShieldCheck", { className: "h-7 w-7" }),
    },
  ];
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 relative z-10 py-10 max-w-7xl mx-auto">
      {features.map((feature, index) => (
        <Feature key={feature.title} {...feature} index={index} />
      ))}
    </div>
  );
}

const Feature = ({ title, description, icon, index }) => {
  return (
    <div
      className={cn(
        "flex flex-col lg:border-r  py-10 relative group/feature dark:border-neutral-800",
        (index === 0 || index === 4) && "lg:border-l dark:border-neutral-800",
        index < 4 && "lg:border-b dark:border-neutral-800"
      )}
    >
      {index < 4 && (
        <div className="opacity-0 group-hover/feature:opacity-100 transition duration-200 absolute inset-0 h-full w-full bg-gradient-to-t from-neutral-100 dark:from-neutral-800 to-transparent pointer-events-none" />
      )}
      {index >= 4 && (
        <div className="opacity-0 group-hover/feature:opacity-100 transition duration-200 absolute inset-0 h-full w-full bg-gradient-to-b from-neutral-100 dark:from-neutral-800 to-transparent pointer-events-none" />
      )}
      <div className="mb-4 relative z-10 px-10 text-neutral-600 dark:text-neutral-400">
        {icon}
      </div>
      <div className="text-lg font-bold mb-2 relative z-10 px-10">
        <div className="absolute left-0 inset-y-0 h-6 group-hover/feature:h-8 w-1 rounded-tr-full rounded-br-full bg-neutral-300 dark:bg-neutral-700 group-hover/feature:bg-blue-500 transition-all duration-200 origin-center" />
        <span className="group-hover/feature:translate-x-2 transition duration-200 inline-block text-neutral-800 dark:text-neutral-100">
          {title}
        </span>
      </div>
      <p className="text-sm text-neutral-600 dark:text-neutral-300 max-w-xs relative z-10 px-10">
        {description}
      </p>
    </div>
  );
};

export default FeaturesSectionWithHoverEffects;
