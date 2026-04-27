import { useState } from 'react'
import { motion } from 'framer-motion'
import type { LucideIcon } from 'lucide-react'
import {
  Briefcase,
  FolderKanban,
  GraduationCap,
  Home,
  Layers,
  Menu,
  MessageCircle,
  Moon,
  Sun,
  User,
  X,
} from 'lucide-react'
import { navItems } from '../data/content'
import { useTheme } from '../context/ThemeContext'
import { SiteLogo } from './SiteLogo'
import { ease } from './Reveal'

type Props = {
  activeId: string
}

const NAV_ICONS: Record<(typeof navItems)[number]['id'], LucideIcon> = {
  home: Home,
  about: User,
  experience: Briefcase,
  education: GraduationCap,
  skills: Layers,
  projects: FolderKanban,
  contact: MessageCircle,
}

function scrollToId(id: string) {
  const el = document.getElementById(id)
  el?.scrollIntoView({ behavior: 'smooth', block: 'start' })
}

export function Navbar({ activeId }: Props) {
  const [open, setOpen] = useState(false)
  const { theme, toggleTheme } = useTheme()

  const linkClass = (id: string) =>
    [
      'inline-flex items-center gap-2 rounded-lg px-3 py-2 text-sm font-medium transition-colors',
      activeId === id
        ? 'bg-emerald-500/15 text-emerald-700 dark:text-emerald-300'
        : 'text-slate-600 hover:bg-slate-200/80 hover:text-slate-900 dark:text-slate-400 dark:hover:bg-white/5 dark:hover:text-white',
    ].join(' ')

  const iconClass = (id: string) =>
    activeId === id
      ? 'size-4 shrink-0 text-emerald-600 dark:text-emerald-400/95'
      : 'size-4 shrink-0 text-slate-500 dark:text-slate-500'

  return (
    <motion.header
      className="fixed top-0 z-50 w-full border-b border-slate-200/90 bg-white/85 backdrop-blur-md dark:border-white/5 dark:bg-slate-950/80"
      initial={{ y: -16, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease }}
    >
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between gap-3 px-4 sm:gap-4 sm:px-6 lg:px-8">
        <motion.a
          href="#home"
          className="shrink-0 inline-flex items-center rounded-lg outline-none ring-emerald-500/40 focus-visible:ring-2"
          onClick={(e) => {
            e.preventDefault()
            scrollToId('home')
            setOpen(false)
          }}
          whileHover={{ scale: 1.03 }}
          whileTap={{ scale: 0.97 }}
          transition={{ type: 'spring', stiffness: 400, damping: 22 }}
        >
          <SiteLogo />
          <span className="sr-only">Shubham Pangale — Home</span>
        </motion.a>

        <div className="flex items-center gap-1 sm:gap-2">
          <nav className="hidden items-center gap-0.5 md:flex" aria-label="Primary">
            {navItems.map(({ id, label }) => {
              const Icon = NAV_ICONS[id]
              return (
                <motion.a
                  key={id}
                  href={`#${id}`}
                  className={linkClass(id)}
                  onClick={(e) => {
                    e.preventDefault()
                    scrollToId(id)
                  }}
                  whileHover={{ y: -1 }}
                  whileTap={{ scale: 0.97 }}
                  transition={{ type: 'spring', stiffness: 450, damping: 28 }}
                >
                  <Icon className={iconClass(id)} aria-hidden />
                  {label}
                </motion.a>
              )
            })}
          </nav>

          <motion.button
            type="button"
            onClick={toggleTheme}
            className="inline-flex rounded-lg p-2 text-slate-600 transition hover:bg-slate-200/80 hover:text-slate-900 dark:text-slate-300 dark:hover:bg-white/10 dark:hover:text-white"
            aria-label={theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'}
            whileTap={{ scale: 0.92 }}
            whileHover={{ rotate: 12 }}
            transition={{ type: 'spring', stiffness: 400, damping: 18 }}
          >
            {theme === 'dark' ? <Sun className="size-5" /> : <Moon className="size-5" />}
          </motion.button>

          <motion.button
            type="button"
            className="inline-flex rounded-lg p-2 text-slate-700 hover:bg-slate-200/80 dark:text-slate-300 dark:hover:bg-white/10 md:hidden"
            aria-expanded={open}
            aria-controls="mobile-nav"
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <X className="size-6" /> : <Menu className="size-6" />}
            <span className="sr-only">Toggle menu</span>
          </motion.button>
        </div>
      </div>

      <div
        id="mobile-nav"
        className={[
          'border-t border-slate-200 bg-white/95 backdrop-blur-md dark:border-white/5 dark:bg-slate-950/95 md:hidden',
          open ? 'max-h-[min(70vh,28rem)] overflow-y-auto opacity-100' : 'max-h-0 overflow-hidden opacity-0',
          'transition-all duration-200 ease-out',
        ].join(' ')}
      >
        <nav className="flex flex-col gap-1 px-4 py-3" aria-label="Mobile">
          {navItems.map(({ id, label }) => {
            const Icon = NAV_ICONS[id]
            return (
              <motion.a
                key={id}
                href={`#${id}`}
                className={linkClass(id)}
                onClick={(e) => {
                  e.preventDefault()
                  scrollToId(id)
                  setOpen(false)
                }}
                initial={{ opacity: 0, x: -8 }}
                animate={open ? { opacity: 1, x: 0 } : { opacity: 0, x: -8 }}
                transition={{ type: 'spring', stiffness: 380, damping: 28 }}
              >
                <Icon className={iconClass(id)} aria-hidden />
                {label}
              </motion.a>
            )
          })}
        </nav>
      </div>
    </motion.header>
  )
}
