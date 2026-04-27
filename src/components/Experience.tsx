import { motion } from 'framer-motion'
import { Briefcase, Calendar, CheckCircle2 } from 'lucide-react'
import { experience } from '../data/content'
import { Reveal, ease } from './Reveal'

export function Experience() {
  return (
    <section
      id="experience"
      className="scroll-mt-20 border-b border-slate-200 py-8 dark:border-white/5 sm:py-10 lg:py-12"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <Reveal className="max-w-2xl">
          <h2 className="font-mono text-xs uppercase tracking-[0.2em] text-emerald-600 dark:text-emerald-400/90">
            Experience
          </h2>
          <p className="mt-2 text-2xl font-semibold tracking-tight text-slate-900 dark:text-white sm:text-3xl">
            Where I’ve worked
          </p>
          <p className="mt-2 text-sm text-slate-600 dark:text-slate-400 sm:text-base">
            Full stack, automation, and platform work across fintech and product teams.
          </p>
        </Reveal>

        <ol className="relative mt-6 space-y-6 before:absolute before:left-[7px] before:top-2 before:h-[calc(100%-0.75rem)] before:w-px before:bg-gradient-to-b before:from-emerald-500/40 before:to-slate-300 dark:before:from-emerald-500/50 dark:before:to-white/10 sm:before:left-[11px] md:space-y-7">
          {experience.map((job, index) => (
            <motion.li
              key={job.company + job.period}
              className="relative pl-8 sm:pl-10 md:pl-12"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.5, delay: index * 0.12, ease }}
            >
              <span
                className="absolute left-0 top-1.5 flex size-4 items-center justify-center rounded-full border border-emerald-400/50 bg-white dark:border-emerald-500/40 dark:bg-slate-950 sm:top-2 sm:size-5 md:left-1"
                aria-hidden
              >
                <span className="size-2 rounded-full bg-emerald-500 dark:bg-emerald-400 sm:size-2.5" />
              </span>
              <motion.div
                className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm dark:border-white/10 dark:bg-slate-900/40 dark:shadow-none sm:p-6 md:p-7"
                whileHover={{ y: -4 }}
                transition={{ type: 'spring', stiffness: 320, damping: 22 }}
              >
                <div className="flex flex-col gap-2 sm:flex-row sm:items-start sm:justify-between sm:gap-3">
                  <div>
                    <div className="flex items-start gap-2">
                      <Briefcase
                        className="mt-0.5 size-4 shrink-0 text-emerald-600 dark:text-emerald-400/90"
                        aria-hidden
                      />
                      <div>
                        <h3 className="text-lg font-semibold text-slate-900 dark:text-white">{job.role}</h3>
                        <p className="text-sm text-emerald-700 dark:text-emerald-300/90">
                          {job.company} · {job.location}
                        </p>
                      </div>
                    </div>
                  </div>
                  <p className="inline-flex shrink-0 items-center gap-1.5 font-mono text-xs text-slate-500 sm:justify-end">
                    <Calendar className="size-3.5 text-emerald-600/60 dark:text-emerald-500/50" aria-hidden />
                    {job.period}
                  </p>
                </div>
                <ul className="mt-4 space-y-2 text-sm leading-relaxed text-slate-600 dark:text-slate-400">
                  {job.highlights.map((h) => (
                    <li key={h.slice(0, 48)} className="flex gap-2">
                      <CheckCircle2
                        className="mt-0.5 size-4 shrink-0 text-emerald-600/70 dark:text-emerald-500/55"
                        aria-hidden
                      />
                      <span>{h}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            </motion.li>
          ))}
        </ol>
      </div>
    </section>
  )
}
