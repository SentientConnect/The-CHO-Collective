import type { LucideIcon } from "lucide-react"
import {
  Crown,
  Users,
  Repeat,
  TrendingUp,
  Sparkles,
  Zap,
  DollarSign,
  Leaf,
  Eye,
  HeartHandshake,
  Compass,
  BarChart3,
  Shield,
  Infinity as InfinityIcon,
  Briefcase,
  Building2,
  UserRound,
  Handshake,
  Megaphone,
  GraduationCap,
  UsersRound,
  Star,
  BookOpen,
  MessageCircle,
  Wrench,
  Network,
  Trophy,
  Layers,
} from "lucide-react"

export type Stat = {
  icon: LucideIcon
  title: string
  description: string
}

export const credibilityStats: Stat[] = [
  {
    icon: Crown,
    title: "Stronger Leadership",
    description:
      "Lead with clarity and presence. Happier leaders make sharper decisions and inspire trust.",
  },
  {
    icon: Users,
    title: "More Engaged Teams",
    description:
      "Positive cultures keep people motivated, loyal, and genuinely invested in the mission.",
  },
  {
    icon: Repeat,
    title: "Increased Referrals",
    description:
      "People refer businesses they feel good about. Happiness turns clients into advocates.",
  },
  {
    icon: TrendingUp,
    title: "Sustainable Business Growth",
    description:
      "Momentum built on energy and meaning lasts longer than growth built on pressure.",
  },
]

export type ProgramWeek = {
  week: number
  title: string
  description: string
  icon: LucideIcon
}

export const programWeeks: ProgramWeek[] = [
  {
    week: 1,
    title: "The Strategic Power of Happiness",
    description: "Reframe happiness as a measurable driver of performance and results.",
    icon: Sparkles,
  },
  {
    week: 2,
    title: "Turning Positive Energy Into Referral Engines",
    description: "Build relationships that naturally generate word-of-mouth growth.",
    icon: Repeat,
  },
  {
    week: 3,
    title: "Monetizing Joy Without Pressure",
    description: "Create offers and sales rhythms that feel authentic, not forced.",
    icon: DollarSign,
  },
  {
    week: 4,
    title: "Sustainable Growth Without Burnout",
    description: "Design a pace of work that protects your energy and your business.",
    icon: Leaf,
  },
  {
    week: 5,
    title: "Visibility Powered by Positive Energy",
    description: "Show up consistently and magnetically without exhausting yourself.",
    icon: Eye,
  },
  {
    week: 6,
    title: "Building a Culture of Happiness",
    description: "Embed happiness into your team, systems, and customer experience.",
    icon: HeartHandshake,
  },
  {
    week: 7,
    title: "The Happiness Leadership Advantage",
    description: "Lead people in a way that multiplies engagement and loyalty.",
    icon: Compass,
  },
  {
    week: 8,
    title: "The Business Case for Happiness",
    description: "Connect happiness to concrete metrics, revenue, and retention.",
    icon: BarChart3,
  },
  {
    week: 9,
    title: "Resilience and Entrepreneurial Joy",
    description: "Stay grounded and optimistic through the inevitable hard seasons.",
    icon: Shield,
  },
  {
    week: 10,
    title: "Happiness as a Lifelong Business Practice",
    description: "Turn everything you've learned into a sustainable daily practice.",
    icon: InfinityIcon,
  },
]

export type Audience = {
  icon: LucideIcon
  label: string
}

export const audiences: Audience[] = [
  { icon: Briefcase, label: "Entrepreneurs" },
  { icon: Building2, label: "Business Owners" },
  { icon: UserRound, label: "Executives" },
  { icon: Handshake, label: "Sales Professionals" },
  { icon: Megaphone, label: "Community Leaders" },
  { icon: GraduationCap, label: "Coaches & Consultants" },
  { icon: UsersRound, label: "HR & Culture Leaders" },
  { icon: Sparkles, label: "Emerging Chief Happiness Officers" },
]

export type Benefit = {
  icon: LucideIcon
  title: string
}

export const benefits: Benefit[] = [
  { icon: BookOpen, title: "Weekly lessons and implementation guidance" },
  { icon: Sparkles, title: "Happy Monday Messages from Edwin" },
  { icon: Wrench, title: "Tools, worksheets and practical exercises" },
  { icon: MessageCircle, title: "Community discussions and accountability" },
  { icon: Network, title: "Networking with purpose-driven professionals" },
  { icon: Trophy, title: "Member wins and success stories" },
  { icon: Layers, title: "Leadership and culture-building resources" },
  { icon: Handshake, title: "Opportunities to collaborate and grow" },
]

export const transformation = {
  before: [
    "Reactive leadership",
    "Burnout",
    "Forced networking",
    "Inconsistent referrals",
    "Disconnected teams",
    "Growth without fulfillment",
  ],
  after: [
    "Intentional leadership",
    "Sustainable energy",
    "Genuine relationships",
    "Referral-driven growth",
    "Engaged teams",
    "Success with meaning",
  ],
}

export type Faq = {
  question: string
  answer: string
}

export const faqs: Faq[] = [
  {
    question: "Who is The CHO Collective for?",
    answer:
      "It's built for entrepreneurs, business owners, executives, sales professionals, community leaders, coaches, and culture builders who want to use happiness as a strategic advantage — not just a feel-good idea.",
  },
  {
    question: "How does the 10-week journey work?",
    answer:
      "Each week combines a practical lesson, reflection prompts, community engagement, worksheets, and real-world application, with guidance from Edwin. You move through it alongside a supportive community.",
  },
  {
    question: "How much time should I commit each week?",
    answer:
      "Most members spend a few focused hours per week. The lessons are designed to fit around a busy leadership schedule, and everything is applicable to your business right away.",
  },
  {
    question: "What is the Happy Monday Message?",
    answer:
      "It's Edwin's weekly mindset and leadership message to help you start the week with clarity, optimism, gratitude, purpose, and focused action. Members get access to the full archive.",
  },
  {
    question: "Is this only for people with a Chief Happiness Officer title?",
    answer:
      "Not at all. Many members are emerging Chief Happiness Officers or leaders who simply want happier, higher-performing teams and businesses. The principles apply to any role that leads or influences others.",
  },
  {
    question: "When can I join?",
    answer:
      "You can join The CHO Collective at any time. Enter your details above and our team will follow up with enrollment information for the next cohort of the 10-week experience.",
  },
]
