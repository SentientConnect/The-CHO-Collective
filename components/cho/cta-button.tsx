"use client"

import type { ComponentProps, ReactNode } from "react"
import { cn } from "@/lib/utils"
import { trackEvent } from "@/lib/analytics"

type Variant = "primary" | "outline" | "light"
type Size = "md" | "lg"

type CtaButtonProps = {
  children: ReactNode
  href?: string
  variant?: Variant
  size?: Size
  analyticsId: string
  className?: string
} & Omit<ComponentProps<"a">, "href">

const base =
  "group inline-flex items-center justify-center gap-2 rounded-full font-medium tracking-tight transition-all duration-200 outline-none focus-visible:ring-4 focus-visible:ring-primary/40 active:translate-y-px"

const variants: Record<Variant, string> = {
  primary:
    "bg-primary text-primary-foreground shadow-[0_8px_24px_-8px_oklch(0.74_0.15_66/0.7)] hover:-translate-y-0.5 hover:shadow-[0_14px_32px_-8px_oklch(0.74_0.15_66/0.75)] hover:brightness-105",
  outline:
    "border border-border bg-card text-foreground shadow-sm hover:-translate-y-0.5 hover:border-primary/50 hover:bg-secondary",
  light:
    "bg-background text-foreground shadow-lg hover:-translate-y-0.5 hover:brightness-95",
}

const sizes: Record<Size, string> = {
  md: "h-11 px-6 text-sm",
  lg: "h-13 px-7 text-base py-3.5",
}

export function CtaButton({
  children,
  href = "#join",
  variant = "primary",
  size = "md",
  analyticsId,
  className,
  onClick,
  ...props
}: CtaButtonProps) {
  return (
    <a
      href={href}
      className={cn(base, variants[variant], sizes[size], className)}
      onClick={(e) => {
        trackEvent("cta_click", { cta_id: analyticsId, href })
        onClick?.(e)
      }}
      {...props}
    >
      {children}
    </a>
  )
}
