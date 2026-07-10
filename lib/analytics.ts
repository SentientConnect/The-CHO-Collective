type EventPayload = Record<string, string | number | boolean | undefined>

export function trackEvent(eventName: string, payload: EventPayload = {}) {
  if (typeof window === "undefined") return

  const w = window as unknown as {
    dataLayer?: EventPayload[]
    gtag?: (...args: unknown[]) => void
  }

  w.dataLayer?.push({ event: eventName, ...payload })
  w.gtag?.("event", eventName, payload)
}
