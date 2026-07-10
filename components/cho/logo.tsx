import { cn } from "@/lib/utils"

type LogoProps = {
  className?: string
  onLight?: boolean
}

export function Logo({ className, onLight = true }: LogoProps) {
  return (
    <a
      href="#home"
      aria-label="The CHO Collective — home"
      className={cn("group flex items-center gap-2.5", className)}
    >
      <span
        aria-hidden="true"
        className="flex size-10 items-center justify-center rounded-2xl bg-primary font-serif text-lg font-semibold text-primary-foreground shadow-sm ring-1 ring-black/5"
      >
        CHO
      </span>
      <span className="flex flex-col leading-none">
        <span
          className={cn(
            "font-serif text-base font-semibold tracking-tight",
            onLight ? "text-foreground" : "text-background",
          )}
        >
          THE CHO COLLECTIVE
        </span>
        <span
          className={cn(
            "mt-1 text-[9px] font-semibold uppercase tracking-[0.2em]",
            onLight ? "text-muted-foreground" : "text-background/70",
          )}
        >
          Happiness as a business asset
        </span>
      </span>
    </a>
  )
}
