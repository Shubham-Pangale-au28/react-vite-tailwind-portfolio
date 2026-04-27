import { motion } from 'framer-motion'
import { BookMarked, GraduationCap } from 'lucide-react'
import { education } from '../data/content'
import { Reveal, ease } from './Reveal'

export function Education() {
  return (
    <section
      id="education"
      className="scroll-mt-20 border-b border-slate-200 py-8 dark:border-white/5 sm:py-10 lg:py-12"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <Reveal className="max-w-2xl">
          <h2 className="font-mono text-xs uppercase tracking-[0.2em] text-emerald-600 dark:text-emerald-400/90">
            Education
          </h2>
          <p className="mt-2 text-2xl font-semibold tracking-tight text-slate-900 dark:text-white sm:text-3xl">
            Learning path
          </p>
        </Reveal>

        <ul className="mt-6 grid gap-4 md:grid-cols-2 md:gap-5">
          {education.map((item, i) => {
            const Icon = i === 0 ? BookMarked : GraduationCap
            return (
              <motion.li
                key={item.title}
                className="flex gap-4 rounded-2xl border border-slate-200 bg-white p-5 shadow-sm dark:border-white/10 dark:bg-slate-900/40 dark:shadow-none sm:p-6"
                initial={{ opacity: 0, y: 22 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-32px' }}
                transition={{ duration: 0.5, delay: i * 0.1, ease }}
                whileHover={{ y: -4 }}
              >
                <div className="flex size-11 shrink-0 items-center justify-center rounded-xl bg-emerald-500/15 text-emerald-600 dark:text-emerald-400">
                  <Icon className="size-5" aria-hidden />
                </div>
                <div className="min-w-0">
                  <p className="font-mono text-xs text-slate-500 dark:text-slate-500">{item.period}</p>
                  <h3 className="mt-1 font-semibold text-slate-900 dark:text-white">{item.title}</h3>
                  <p className="mt-1 text-sm text-slate-600 dark:text-slate-400">{item.org}</p>
                  <p className="mt-2 text-sm text-emerald-800/90 dark:text-emerald-200/80">{item.detail}</p>
                </div>
              </motion.li>
            )
          })}
        </ul>
      </div>
    </section>
  )
}
