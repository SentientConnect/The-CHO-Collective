import Image from "next/image"
import { Sparkles, TrendingUp, Users } from "lucide-react"
import { CtaButton } from "./cta-button"
import { Reveal } from "./reveal"

export function Hero() {
  return (
    <section
      id="home"
      className="relative overflow-hidden pt-28 pb-16 sm:pt-32 lg:pt-36 lg:pb-24"
    >
      {/* soft warm background wash */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10"
        style={{
          background:
            "radial-gradient(60rem 40rem at 85% -10%, oklch(0.8 0.13 82 / 0.35), transparent 60%), radial-gradient(50rem 34rem at -5% 20%, oklch(0.68 0.17 47 / 0.14), transparent 55%)",
        }}
      />

      <div className="mx-auto grid max-w-7xl items-center gap-12 px-4 sm:px-6 lg:grid-cols-[1.05fr_0.95fr] lg:gap-10 lg:px-8">
        <div>
          <Reveal>
            <span className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-3.5 py-1.5 text-xs font-medium text-muted-foreground shadow-sm">
              <Sparkles className="size-3.5 text-primary" />
              Led by Edwin Edebiri · Global Chief Happiness Officer · TEDx Speaker
            </span>
          </Reveal>

          <Reveal delay={80}>
            <h1 className="mt-6 text-balance font-serif text-4xl font-semibold leading-[1.05] tracking-tight text-foreground sm:text-5xl lg:text-6xl">
              Turn Happiness Into a{" "}
              <span className="text-primary">Business Advantage</span>
            </h1>
          </Reveal>

          <Reveal delay={160}>
            <p className="mt-6 max-w-xl text-pretty text-base leading-relaxed text-muted-foreground sm:text-lg">
              Join entrepreneurs, executives, leaders, and culture builders who are
              using happiness to strengthen relationships, increase referrals, inspire
              teams, create sustainable growth, and build businesses people genuinely
              want to support.
            </p>
          </Reveal>

          <Reveal delay={240}>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <CtaButton href="#join" analyticsId="hero_join" size="lg">
                Join The CHO Collective
              </CtaButton>
              <CtaButton
                href="#program"
                analyticsId="hero_view_program"
                variant="outline"
                size="lg"
              >
                View the Program
              </CtaButton>
            </div>
          </Reveal>

          <Reveal delay={320}>
            <dl className="mt-10 grid max-w-lg grid-cols-3 gap-6 border-t border-border pt-6">
              <div>
                <dt className="sr-only">Community members</dt>
                <dd className="font-serif text-2xl font-semibold text-foreground">
                  1,200+
                </dd>
                <p className="mt-1 text-xs text-muted-foreground">Purpose-driven members</p>
              </div>
              <div>
                <dt className="sr-only">Program length</dt>
                <dd className="font-serif text-2xl font-semibold text-foreground">
                  10 Weeks
                </dd>
                <p className="mt-1 text-xs text-muted-foreground">Guided journey</p>
              </div>
              <div>
                <dt className="sr-only">Speaking reach</dt>
                <dd className="font-serif text-2xl font-semibold text-foreground">
                  Global
                </dd>
                <p className="mt-1 text-xs text-muted-foreground">TEDx stages & teams</p>
              </div>
            </dl>
          </Reveal>
        </div>

        <Reveal delay={200} className="relative">
          <div className="relative">
            <div className="relative overflow-hidden rounded-3xl border border-border bg-card shadow-xl">
              <Image
                src="/images/edwin-hero.png"
                alt="Edwin Edebiri speaking on stage to an engaged professional audience"
                width={880}
                height={1000}
                priority
                className="h-full w-full object-cover"
              />
            </div>

            {/* floating growth card */}
            <div className="absolute -left-3 bottom-8 flex items-center gap-3 rounded-2xl border border-border bg-card/95 p-3.5 shadow-lg backdrop-blur sm:-left-6">
              <span className="flex size-10 items-center justify-center rounded-xl bg-primary/15 text-primary">
                <TrendingUp className="size-5" />
              </span>
              <div>
                <p className="text-sm font-semibold text-foreground">
                  Referral-driven growth
                </p>
                <p className="text-xs text-muted-foreground">Powered by positive energy</p>
              </div>
            </div>

            {/* floating community card */}
            <div className="absolute -right-2 top-8 flex items-center gap-3 rounded-2xl border border-border bg-card/95 p-3.5 shadow-lg backdrop-blur sm:-right-5">
              <span className="flex size-10 items-center justify-center rounded-xl bg-brand-blue/15 text-brand-blue">
                <Users className="size-5" />
              </span>
              <div>
                <p className="text-sm font-semibold text-foreground">A connected community</p>
                <p className="text-xs text-muted-foreground">Leaders growing together</p>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
