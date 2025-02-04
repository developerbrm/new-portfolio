import { buildThresholdList } from '@/utilities'
import { useEffect } from 'react'

interface ObserverCommonProps {
  onIntersection?: (
    observer: IntersectionObserver,
    entry: IntersectionObserverEntry,
    entries: IntersectionObserverEntry[]
  ) => Promise<void> | void
  onObservationChange?: (
    observer: IntersectionObserver,
    entry: IntersectionObserverEntry,
    entries: IntersectionObserverEntry[]
  ) => void
}

interface ObserverProps extends ObserverCommonProps {
  obeserverRef: React.RefObject<HTMLElement | HTMLDivElement | null>
  rootMargin?: string
}

interface ObserverCallbackProps extends ObserverCommonProps {
  entries: IntersectionObserverEntry[]
  observer: IntersectionObserver
}

const observerCallback = (props: ObserverCallbackProps) => {
  const { entries, observer, onIntersection, onObservationChange } = props

  entries.forEach((entry) => {
    onObservationChange?.(observer, entry, entries)

    if (entry.isIntersecting) {
      onIntersection?.(observer, entry, entries)
    }
  })
}

const useIntersectionObserver = (props: ObserverProps) => {
  const {
    obeserverRef,
    onIntersection,
    onObservationChange,
    rootMargin = '0px 0px 0px 0px',
  } = props

  useEffect(() => {
    const obeserverContainer = obeserverRef?.current
    if (!obeserverContainer) return

    const observer = new IntersectionObserver(
      (entries, observer) =>
        observerCallback({
          entries,
          observer,
          onIntersection,
          onObservationChange,
        }),
      {
        root: null,
        threshold: buildThresholdList(20),
        rootMargin,
      }
    )

    if (obeserverContainer) {
      observer.observe(obeserverContainer)
    }

    return () => {
      observer.disconnect() // Disconnect observer on unmount
    }
  }, [obeserverRef, onIntersection, rootMargin, onObservationChange])
}

export default useIntersectionObserver
