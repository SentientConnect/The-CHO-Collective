import { cn } from "@/lib/utils"

type LogoProps = {
  className?: string
  onLight?: boolean
}

// Placeholder brand mark. Replace with the official CHO Collective logo asset.
export function Logo({ className, onLight = true }: LogoProps) {
  return (
    <a
      href="#home"
      aria-label="The CHO Collective — home"
      className={cn("group flex items-center gap-2.5", className)}
    >
      <span
        aria-hidden="true"
        className="flex size-9 items-center justify-center rounded-xl bg-primary font-serif text-lg font-semibold text-primary-foreground shadow-sm ring-1 ring-black/5"
      >
        C
      </span>
      <span className="flex flex-col leading-none">
        <span
          className={cn(
            "font-serif text-base font-semibold tracking-tight",
            onLight ? "text-foreground" : "text-background",
          )}
        >
          CHO COLLECTIVE
        </span>
        <span
          className={cn(
            "text-[10px] font-medium uppercase tracking-[0.18em]",
            onLight ? "text-muted-foreground" : "text-background/70",
          )}
        >
          Logo Placeholder
        </span>
      </span>
    </a>
  )
}
