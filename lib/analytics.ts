// Analytics event placeholder.
// Wire this to your provider (GA4, Segment, PostHog, GoHighLevel, etc.).
type EventPayload = Record<string, string | number | boolean | undefined>

export function trackEvent(eventName: string, payload: EventPayload = {}) {
  // Placeholder implementation — replace with your analytics provider.
  if (typeof window !== 'undefined') {
    // Example: window.dataLayer?.push({ event: eventName, ...payload })
    console.log("[v0] analytics event:", eventName, payload)

    const w = window as unknown as {
      dataLayer?: EventPayload[]
      gtag?: (...args: unknown[]) => void
    }
    w.dataLayer?.push({ event: eventName, ...payload })
    w.gtag?.("event", eventName, payload)
  }
}
