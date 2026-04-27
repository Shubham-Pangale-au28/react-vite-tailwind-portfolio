import { useEffect, useState } from 'react'
import { sectionIds } from '../data/content'

export function useActiveSection() {
  const [active, setActive] = useState<string>('home')

  useEffect(() => {
    const elements = sectionIds
      .map((id) => document.getElementById(id))
      .filter((el): el is HTMLElement => Boolean(el))

    if (elements.length === 0) return

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => (b.intersectionRatio ?? 0) - (a.intersectionRatio ?? 0))[0]
        if (visible?.target.id) setActive(visible.target.id)
      },
      { rootMargin: '-72px 0px -45% 0px', threshold: [0, 0.1, 0.25, 0.5] }
    )

    for (const el of elements) observer.observe(el)
    return () => observer.disconnect()
  }, [])

  return active
}
