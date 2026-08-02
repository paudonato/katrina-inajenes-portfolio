"use client";

export default function Loading() {
  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center bg-paper dark:bg-navy-950">
      <div className="flex flex-col items-center gap-4">
        <div className="relative h-14 w-14">
          <div className="absolute inset-0 animate-spin rounded-full border-2 border-navy-950/10 border-t-softblue-500 dark:border-white/10 dark:border-t-softblue-400" />
          <div className="absolute inset-2 rounded-full bg-navy-950 dark:bg-white" />
        </div>
        <p className="text-xs font-medium uppercase tracking-[0.3em] text-navy-900/60 dark:text-white/50">
          Loading
        </p>
      </div>
    </div>
  );
}
