import { motion } from 'framer-motion'
import { Globe2, Languages } from 'lucide-react'
import { languages, skills } from '../data/content'
import { skillIconFor } from './SkillIcon'
import { Reveal, ease } from './Reveal'

export function Skills() {
  return (
    <section
      id="skills"
      className="scroll-mt-20 border-b border-slate-200 py-8 dark:border-white/5 sm:py-10 lg:py-12"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <Reveal className="max-w-2xl">
          <h2 className="font-mono text-xs uppercase tracking-[0.2em] text-emerald-600 dark:text-emerald-400/90">
            Skills
          </h2>
          <p className="mt-2 text-2xl font-semibold tracking-tight text-slate-900 dark:text-white sm:text-3xl">
            Tech I use
          </p>
        </Reveal>

        <div className="mt-6 flex flex-wrap gap-2">
          {skills.map((s, i) => (
            <motion.span
              key={s}
              className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-slate-50 py-1.5 pl-2 pr-3 text-xs font-medium text-slate-800 dark:border-white/10 dark:bg-white/[0.04] dark:text-slate-200 sm:py-2 sm:pl-2.5 sm:pr-3.5 sm:text-sm"
              initial={{ opacity: 0, scale: 0.92 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: '-20px' }}
              transition={{ delay: i * 0.035, duration: 0.35, ease }}
              whileHover={{ y: -3, scale: 1.02 }}
            >
              <span className="flex text-emerald-600 dark:text-emerald-400/95 [&>svg]:text-current">
                {skillIconFor(s)}
              </span>
              {s}
            </motion.span>
          ))}
        </div>

        <Reveal className="mt-8" delay={0.06}>
          <h3 className="inline-flex items-center gap-2 text-sm font-semibold text-slate-900 dark:text-white">
            <Languages className="size-4 text-emerald-600 dark:text-emerald-400/90" aria-hidden />
            Languages
          </h3>
          <ul className="mt-3 grid gap-3 sm:grid-cols-3 sm:gap-4">
            {languages.map((lang, i) => (
              <motion.li
                key={lang.name}
                className="flex gap-3 rounded-xl border border-slate-200 bg-white px-4 py-3 dark:border-white/10 dark:bg-slate-900/40"
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08, duration: 0.45, ease }}
                whileHover={{ y: -3 }}
              >
                <span className="flex size-9 shrink-0 items-center justify-center rounded-lg bg-emerald-500/15 text-emerald-600 dark:text-emerald-400">
                  <Globe2 className="size-4" aria-hidden />
                </span>
                <div className="min-w-0">
                  <p className="font-medium text-slate-800 dark:text-slate-200">{lang.name}</p>
                  <p className="mt-0.5 text-xs text-slate-500 dark:text-slate-500">{lang.level}</p>
                </div>
              </motion.li>
            ))}
          </ul>
        </Reveal>
      </div>
    </section>
  )
}
