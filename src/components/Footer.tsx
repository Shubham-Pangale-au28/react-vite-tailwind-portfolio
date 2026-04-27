import { motion } from 'framer-motion'
import { Code2, MapPinned } from 'lucide-react'
import { personal } from '../data/content'
import { ease } from './Reveal'

export function Footer() {
  const year = new Date().getFullYear()
  return (
    <motion.footer
      className="border-t border-slate-200 py-6 dark:border-white/5"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, ease }}
    >
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-3 px-4 text-center text-sm text-slate-600 dark:text-slate-500 sm:flex-row sm:px-6 sm:text-left lg:px-8">
        <p className="inline-flex items-center justify-center gap-2 sm:justify-start">
          <Code2 className="size-4 shrink-0 text-emerald-600/60 dark:text-emerald-500/50" aria-hidden />
          <span>
            © {year} {personal.name.split(' ')[0]} Pangale.
          </span>
        </p>
        <p className="inline-flex items-center justify-center gap-1.5 font-mono text-xs sm:justify-end">
          <MapPinned className="size-3.5 text-emerald-600/55 dark:text-emerald-500/45" aria-hidden />
          Mumbai · Ratnagiri roots
        </p>
      </div>
    </motion.footer>
  )
}
