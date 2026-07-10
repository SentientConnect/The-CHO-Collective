import Image from "next/image"
import {
  ArrowRight,
  Check,
  ChevronRight,
  CircleCheck,
  Quote,
  Sparkles,
} from "lucide-react"
import { Navbar } from "@/components/cho/navbar"
import { Hero } from "@/components/cho/hero"
import { CtaButton } from "@/components/cho/cta-button"
import { Logo } from "@/components/cho/logo"
import { Reveal } from "@/components/cho/reveal"
import {
  audiences,
  benefits,
  credibilityStats,
  faqs,
  programWeeks,
  transformation,
} from "@/components/cho/site-data"

const skoolUrl = "https://www.skool.com/the-cho-collective-8979/about"

function SectionHeading({
  eyebrow,
  title,
  description,
  centered = false,
}: {
  eyebrow: string
  title: string
  description?: string
  centered?: boolean
}) {
  return (
    <div className={centered ? "mx-auto max-w-3xl text-center" : "max-w-3xl"}>
      <p className="text-sm font-semibold uppercase tracking-[0.18em] text-primary">
        {eyebrow}
      </p>
      <h2 className="mt-3 text-balance font-serif text-3xl font-semibold tracking-tight text-foreground sm:text-4xl lg:text-5xl">
        {title}
      </h2>
      {description ? (
        <p className="mt-5 text-pretty text-base leading-relaxed text-muted-foreground sm:text-lg">
          {description}
        </p>
      ) : null}
    </div>
  )
}

export default function Page() {
  return (
    <main className="overflow-hidden">
      <Navbar />
      <Hero />

      <section className="border-y border-border bg-card py-12 sm:py-16">
        <div className="mx-auto grid max-w-7xl gap-5 px-4 sm:grid-cols-2 sm:px-6 lg:grid-cols-4 lg:px-8">
          {credibilityStats.map((stat, index) => {
            const Icon = stat.icon
            return (
              <Reveal key={stat.title} delay={index * 70}>
                <article className="h-full rounded-3xl border border-border bg-background p-6 shadow-sm">
                  <span className="flex size-11 items-center justify-center rounded-2xl bg-primary/15 text-primary">
                    <Icon className="size-5" />
                  </span>
                  <h3 className="mt-5 font-serif text-xl font-semibold text-foreground">
                    {stat.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                    {stat.description}
                  </p>
                </article>
              </Reveal>
            )
          })}
        </div>
      </section>

      <section id="about" className="py-20 sm:py-24 lg:py-32">
        <div className="mx-auto grid max-w-7xl items-center gap-12 px-4 sm:px-6 lg:grid-cols-2 lg:gap-20 lg:px-8">
          <Reveal className="relative">
            <div className="overflow-hidden rounded-[2rem] border border-border bg-card shadow-xl">
              <Image
                src="/images/edwin-portrait.png"
                alt="Edwin Edebiri, Global Chief Happiness Officer"
                width={900}
                height={1000}
                className="h-full w-full object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -right-3 max-w-[17rem] rounded-3xl border border-border bg-card p-5 shadow-xl sm:-right-8">
              <Quote className="size-6 text-primary" />
              <p className="mt-3 font-serif text-lg font-semibold leading-snug text-foreground">
                Happiness is not a side effect of success. It is a strategy for creating it.
              </p>
            </div>
          </Reveal>

          <Reveal delay={120}>
            <SectionHeading
              eyebrow="Meet your guide"
              title="Learn with Edwin Edebiri"
              description="Edwin Edebiri is a Global Chief Happiness Officer, TEDx speaker, author, and business leader who helps people and organizations turn happiness into stronger leadership, deeper relationships, and sustainable results."
            />
            <div className="mt-8 space-y-4">
              {[
                "Practical guidance grounded in real leadership and business experience",
                "A positive, human approach to referrals, culture, and growth",
                "Weekly direction that turns insight into meaningful action",
              ].map((item) => (
                <div key={item} className="flex gap-3">
                  <CircleCheck className="mt-0.5 size-5 shrink-0 text-primary" />
                  <p className="text-sm leading-relaxed text-foreground sm:text-base">{item}</p>
                </div>
              ))}
            </div>
            <CtaButton href={skoolUrl} analyticsId="about_join" size="lg" className="mt-9">
              Explore The CHO Collective
              <ArrowRight className="size-4" />
            </CtaButton>
          </Reveal>
        </div>
      </section>

      <section id="program" className="bg-secondary/60 py-20 sm:py-24 lg:py-32">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Reveal>
            <SectionHeading
              eyebrow="The flagship experience"
              title="Happiness as a Business Asset"
              description="A 10-week journey showing entrepreneurs and leaders how to turn positive energy into referrals, revenue, resilient leadership, and sustainable growth."
              centered
            />
          </Reveal>

          <div className="mt-12 grid gap-5 md:grid-cols-2 lg:mt-16">
            {programWeeks.map((item, index) => {
              const Icon = item.icon
              return (
                <Reveal key={item.week} delay={(index % 2) * 80}>
                  <article className="group flex h-full gap-5 rounded-3xl border border-border bg-card p-6 shadow-sm transition-all duration-200 hover:-translate-y-1 hover:shadow-lg sm:p-7">
                    <span className="flex size-12 shrink-0 items-center justify-center rounded-2xl bg-primary/15 text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                      <Icon className="size-5" />
                    </span>
                    <div>
                      <p className="text-xs font-semibold uppercase tracking-[0.18em] text-primary">
                        Week {item.week}
                      </p>
                      <h3 className="mt-2 font-serif text-xl font-semibold text-foreground sm:text-2xl">
                        {item.title}
                      </h3>
                      <p className="mt-2 text-sm leading-relaxed text-muted-foreground sm:text-base">
                        {item.description}
                      </p>
                    </div>
                  </article>
                </Reveal>
              )
            })}
          </div>
        </div>
      </section>

      <section id="community" className="py-20 sm:py-24 lg:py-32">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:items-start lg:gap-20">
            <Reveal>
              <SectionHeading
                eyebrow="More than a course"
                title="A community built around purposeful growth"
                description="The CHO Collective combines structured learning with connection, implementation, and encouragement so the ideas become part of how you lead and grow."
              />
              <div className="mt-8 rounded-3xl border border-primary/25 bg-primary/10 p-6">
                <Sparkles className="size-6 text-primary" />
                <p className="mt-4 font-serif text-xl font-semibold text-foreground">
                  The goal is not forced positivity.
                </p>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  It is learning how to create real energy, trusted relationships, healthier cultures, and business momentum that lasts.
                </p>
              </div>
            </Reveal>

            <div className="grid gap-4 sm:grid-cols-2">
              {benefits.map((benefit, index) => {
                const Icon = benefit.icon
                return (
                  <Reveal key={benefit.title} delay={(index % 2) * 70}>
                    <div className="flex h-full items-start gap-4 rounded-2xl border border-border bg-card p-5 shadow-sm">
                      <span className="flex size-10 shrink-0 items-center justify-center rounded-xl bg-brand-blue/10 text-brand-blue">
                        <Icon className="size-5" />
                      </span>
                      <p className="pt-1 text-sm font-medium leading-relaxed text-foreground">
                        {benefit.title}
                      </p>
                    </div>
                  </Reveal>
                )
              })}
            </div>
          </div>
        </div>
      </section>

      <section id="happy-monday" className="relative overflow-hidden bg-foreground py-20 text-background sm:py-24 lg:py-28">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 opacity-40"
          style={{
            background:
              "radial-gradient(45rem 30rem at 10% 10%, oklch(0.74 0.15 66 / 0.38), transparent 65%), radial-gradient(42rem 28rem at 95% 90%, oklch(0.58 0.1 240 / 0.26), transparent 65%)",
          }}
        />
        <div className="relative mx-auto grid max-w-7xl items-center gap-12 px-4 sm:px-6 lg:grid-cols-2 lg:gap-20 lg:px-8">
          <Reveal>
            <div className="overflow-hidden rounded-[2rem] border border-white/10 shadow-2xl">
              <Image
                src="/images/happy-monday.png"
                alt="Happy Monday Message with Edwin Edebiri"
                width={1000}
                height={900}
                className="h-full w-full object-cover"
              />
            </div>
          </Reveal>
          <Reveal delay={120}>
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-primary">
              Start the week with intention
            </p>
            <h2 className="mt-3 text-balance font-serif text-3xl font-semibold tracking-tight sm:text-4xl lg:text-5xl">
              The Happy Monday Message
            </h2>
            <p className="mt-5 text-pretty text-base leading-relaxed text-background/75 sm:text-lg">
              Edwin&apos;s weekly message helps members invest a few focused minutes in their mindset, happiness, leadership, and success—then carry that energy into the week ahead.
            </p>
            <ul className="mt-7 space-y-3 text-sm text-background/90 sm:text-base">
              {[
                "Clear weekly mindset and leadership focus",
                "Simple actions you can put into practice immediately",
                "Access to the growing Happy Monday Message archive",
              ].map((item) => (
                <li key={item} className="flex gap-3">
                  <Check className="mt-0.5 size-5 shrink-0 text-primary" />
                  {item}
                </li>
              ))}
            </ul>
            <CtaButton href={skoolUrl} analyticsId="happy_monday_join" variant="light" size="lg" className="mt-9">
              Access the Community
              <ArrowRight className="size-4" />
            </CtaButton>
          </Reveal>
        </div>
      </section>

      <section className="py-20 sm:py-24 lg:py-32">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Reveal>
            <SectionHeading
              eyebrow="The transformation"
              title="Move from pressure-driven growth to aligned momentum"
              description="The journey helps you shift the way you lead, connect, sell, and build—without losing the human energy that makes the work meaningful."
              centered
            />
          </Reveal>
          <div className="mx-auto mt-12 grid max-w-5xl gap-6 md:grid-cols-2">
            <Reveal>
              <div className="h-full rounded-3xl border border-border bg-secondary/60 p-7 sm:p-8">
                <p className="text-sm font-semibold uppercase tracking-[0.18em] text-muted-foreground">
                  Move away from
                </p>
                <ul className="mt-6 space-y-4">
                  {transformation.before.map((item) => (
                    <li key={item} className="flex items-center gap-3 text-foreground">
                      <span className="size-2 rounded-full bg-muted-foreground/50" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
            <Reveal delay={100}>
              <div className="h-full rounded-3xl border border-primary/30 bg-primary/10 p-7 sm:p-8">
                <p className="text-sm font-semibold uppercase tracking-[0.18em] text-primary">
                  Build toward
                </p>
                <ul className="mt-6 space-y-4">
                  {transformation.after.map((item) => (
                    <li key={item} className="flex items-center gap-3 font-medium text-foreground">
                      <CircleCheck className="size-5 text-primary" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="border-y border-border bg-card py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Reveal>
            <SectionHeading
              eyebrow="Who belongs here"
              title="For leaders who want success to feel as good as it looks"
              centered
            />
          </Reveal>
          <div className="mt-10 flex flex-wrap justify-center gap-3">
            {audiences.map((audience, index) => {
              const Icon = audience.icon
              return (
                <Reveal key={audience.label} delay={(index % 4) * 50}>
                  <div className="flex items-center gap-2.5 rounded-full border border-border bg-background px-4 py-3 text-sm font-medium text-foreground shadow-sm">
                    <Icon className="size-4 text-primary" />
                    {audience.label}
                  </div>
                </Reveal>
              )
            })}
          </div>
        </div>
      </section>

      <section className="py-20 sm:py-24 lg:py-32">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <Reveal>
            <SectionHeading
              eyebrow="Frequently asked questions"
              title="What to know before joining"
              centered
            />
          </Reveal>
          <div className="mt-10 space-y-3">
            {faqs.map((faq, index) => (
              <Reveal key={faq.question} delay={(index % 3) * 50}>
                <details className="group rounded-2xl border border-border bg-card p-5 shadow-sm open:shadow-md sm:p-6">
                  <summary className="flex cursor-pointer list-none items-center justify-between gap-4 font-semibold text-foreground">
                    {faq.question}
                    <ChevronRight className="size-5 shrink-0 text-primary transition-transform group-open:rotate-90" />
                  </summary>
                  <p className="mt-4 max-w-3xl text-sm leading-relaxed text-muted-foreground sm:text-base">
                    {faq.answer}
                  </p>
                </details>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section id="join" className="px-4 pb-20 sm:px-6 sm:pb-24 lg:px-8 lg:pb-32">
        <Reveal className="mx-auto max-w-7xl">
          <div className="relative overflow-hidden rounded-[2rem] bg-primary px-6 py-14 text-center shadow-2xl sm:px-12 sm:py-16 lg:px-20 lg:py-20">
            <div
              aria-hidden="true"
              className="pointer-events-none absolute inset-0"
              style={{
                background:
                  "radial-gradient(35rem 24rem at 15% 20%, oklch(1 0 0 / 0.24), transparent 65%), radial-gradient(30rem 20rem at 90% 85%, oklch(0.58 0.1 240 / 0.22), transparent 65%)",
              }}
            />
            <div className="relative mx-auto max-w-3xl">
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-primary-foreground/75">
                Your next chapter can feel different
              </p>
              <h2 className="mt-4 text-balance font-serif text-3xl font-semibold tracking-tight text-primary-foreground sm:text-4xl lg:text-5xl">
                Build a happier business that people want to support
              </h2>
              <p className="mx-auto mt-5 max-w-2xl text-pretty text-base leading-relaxed text-primary-foreground/80 sm:text-lg">
                Join Edwin Edebiri and a community of purpose-driven leaders turning happiness into stronger relationships, better leadership, and sustainable growth.
              </p>
              <CtaButton href={skoolUrl} analyticsId="final_join" variant="light" size="lg" className="mt-9">
                Join The CHO Collective
                <ArrowRight className="size-4" />
              </CtaButton>
            </div>
          </div>
        </Reveal>
      </section>

      <footer className="border-t border-border bg-card py-10">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-6 px-4 text-center sm:px-6 md:flex-row md:text-left lg:px-8">
          <Logo />
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} The CHO Collective. All rights reserved.
          </p>
        </div>
      </footer>
    </main>
  )
}
