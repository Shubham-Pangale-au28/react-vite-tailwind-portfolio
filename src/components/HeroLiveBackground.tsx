import { useId } from 'react'

type Streak = {
  top: string
  left: string
  rotate: string
  duration: number
  delay: number
  widthVw: number
  variant: 'emerald' | 'cyan' | 'amber'
}

type Node = {
  top: string
  left: string
  delay: number
  size: number
  variant: 'emerald' | 'cyan' | 'amber' | 'white'
}

const STREAKS: Streak[] = [
  { top: '8%', left: '-5%', rotate: '-38deg', duration: 5.2, delay: 0, widthVw: 42, variant: 'emerald' },
  { top: '22%', left: '12%', rotate: '-34deg', duration: 6.1, delay: 0.8, widthVw: 38, variant: 'cyan' },
  { top: '15%', left: '55%', rotate: '-40deg', duration: 4.8, delay: 1.4, widthVw: 36, variant: 'amber' },
  { top: '38%', left: '-8%', rotate: '-36deg', duration: 5.6, delay: 2.1, widthVw: 44, variant: 'cyan' },
  { top: '48%', left: '30%', rotate: '-32deg', duration: 7, delay: 0.3, widthVw: 40, variant: 'emerald' },
  { top: '42%', left: '70%', rotate: '-39deg', duration: 5.4, delay: 2.8, widthVw: 35, variant: 'amber' },
  { top: '62%', left: '5%', rotate: '-35deg', duration: 6.4, delay: 1.1, widthVw: 48, variant: 'emerald' },
  { top: '58%', left: '48%', rotate: '-37deg', duration: 5.9, delay: 3.5, widthVw: 37, variant: 'cyan' },
  { top: '72%', left: '20%', rotate: '-33deg', duration: 6.8, delay: 0.6, widthVw: 41, variant: 'amber' },
  { top: '78%', left: '65%', rotate: '-41deg', duration: 5.1, delay: 2.4, widthVw: 34, variant: 'emerald' },
  { top: '88%', left: '8%', rotate: '-36deg', duration: 6.2, delay: 4, widthVw: 45, variant: 'cyan' },
  { top: '28%', left: '78%', rotate: '-34deg', duration: 5.5, delay: 1.7, widthVw: 32, variant: 'emerald' },
  { top: '5%', left: '40%', rotate: '-39deg', duration: 7.2, delay: 3.2, widthVw: 30, variant: 'amber' },
  { top: '92%', left: '42%', rotate: '-35deg', duration: 5.8, delay: 0.9, widthVw: 39, variant: 'cyan' },
]

const NODES: Node[] = [
  { top: '12%', left: '18%', delay: 0, size: 3, variant: 'emerald' },
  { top: '25%', left: '82%', delay: 0.4, size: 2, variant: 'cyan' },
  { top: '44%', left: '8%', delay: 1.1, size: 2, variant: 'white' },
  { top: '55%', left: '92%', delay: 0.2, size: 3, variant: 'amber' },
  { top: '68%', left: '14%', delay: 1.8, size: 2, variant: 'cyan' },
  { top: '18%', left: '62%', delay: 2.2, size: 2, variant: 'emerald' },
  { top: '80%', left: '88%', delay: 0.7, size: 3, variant: 'white' },
  { top: '33%', left: '44%', delay: 1.4, size: 2, variant: 'emerald' },
  { top: '7%', left: '90%', delay: 2.6, size: 2, variant: 'cyan' },
]

function streakGradient(variant: Streak['variant']): string {
  switch (variant) {
    case 'cyan':
      return 'linear-gradient(90deg, transparent 0%, rgba(34,211,238,0) 6%, rgba(34,211,238,0.95) 20%, rgba(45,212,191,0.45) 42%, transparent 100%)'
    case 'amber':
      return 'linear-gradient(90deg, transparent 0%, rgba(251,191,36,0) 8%, rgba(251,191,36,0.92) 22%, rgba(245,158,11,0.35) 44%, transparent 100%)'
    default:
      return 'linear-gradient(90deg, transparent 0%, rgba(16,185,129,0) 6%, rgba(52,211,153,0.95) 18%, rgba(16,185,129,0.38) 40%, transparent 100%)'
  }
}

function nodeColor(v: Node['variant']): string | undefined {
  switch (v) {
    case 'cyan':
      return 'rgb(34 211 238)'
    case 'amber':
      return 'rgb(251 191 36)'
    case 'white':
      return undefined
    default:
      return 'rgb(52 211 153)'
  }
}

export function HeroLiveBackground() {
  const rawId = useId().replace(/:/g, '')
  const meshId = `hero-mesh-${rawId}`

  return (
    <div className="pointer-events-none absolute inset-0 z-0 overflow-hidden" aria-hidden>
      <div className="absolute inset-0 bg-gradient-to-br from-slate-100/90 via-white to-emerald-50/30 dark:from-slate-950 dark:via-slate-950 dark:to-emerald-950/25" />

      <svg className="absolute inset-0 h-full w-full opacity-[0.35] dark:opacity-[0.5]" preserveAspectRatio="xMidYMid slice">
        <defs>
          <pattern
            id={meshId}
            width="72"
            height="72"
            patternUnits="userSpaceOnUse"
            patternTransform="rotate(45)"
          >
            <path
              d="M36 4 L68 36 L36 68 L4 36 Z"
              fill="none"
              stroke="currentColor"
              strokeWidth="0.55"
              className="text-slate-400/30 dark:text-emerald-400/15"
            />
            <path
              d="M36 18 L54 36 L36 54 L18 36 Z"
              fill="none"
              stroke="currentColor"
              strokeWidth="0.35"
              className="text-slate-300/25 dark:text-cyan-400/12"
            />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill={`url(#${meshId})`} />
      </svg>

      <div className="absolute -right-1/4 top-0 h-[70%] w-[70%] rounded-full bg-emerald-400/10 blur-[100px] dark:bg-emerald-500/18" />
      <div className="absolute -left-1/4 bottom-0 h-[55%] w-[55%] rounded-full bg-cyan-400/10 blur-[90px] dark:bg-cyan-500/14" />
      <div className="absolute left-1/3 top-1/4 h-44 w-44 rounded-full bg-amber-400/6 blur-3xl dark:bg-amber-400/12" />

      {STREAKS.map((s, i) => (
        <div
          key={i}
          className="absolute"
          style={{
            top: s.top,
            left: s.left,
            transform: `rotate(${s.rotate})`,
            transformOrigin: 'left center',
          }}
        >
          <div
            className="hero-fx-streak-bar h-[2px] rounded-full dark:h-[2.5px]"
            style={{
              width: `min(${s.widthVw}vw, 420px)`,
              backgroundImage: streakGradient(s.variant),
              ['--hero-streak-dur' as string]: `${s.duration}s`,
              ['--hero-streak-delay' as string]: `${s.delay}s`,
            }}
          />
        </div>
      ))}

      {NODES.map((n, i) => {
        const fill = nodeColor(n.variant)
        return (
          <span
            key={i}
            className={[
              'hero-fx-node absolute rounded-full shadow-[0_0_10px_currentColor] dark:shadow-[0_0_14px_currentColor]',
              n.variant === 'white'
                ? 'bg-slate-400 text-slate-400 dark:bg-slate-100 dark:text-slate-100'
                : '',
            ].join(' ')}
            style={{
              top: n.top,
              left: n.left,
              width: n.size,
              height: n.size,
              ...(fill ? { backgroundColor: fill, color: fill } : {}),
              ['--hero-node-delay' as string]: `${n.delay}s`,
            }}
          />
        )
      })}

      <div className="absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-slate-50 via-slate-50/80 dark:from-slate-950 dark:via-slate-950/90 to-transparent" />
    </div>
  )
}
