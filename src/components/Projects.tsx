import { motion } from 'framer-motion'
import { ExternalLink, FolderKanban, Tag } from 'lucide-react'
import { projects } from '../data/content'
import { IconGithub } from './BrandIcons'
import { Reveal, ease } from './Reveal'

export function Projects() {
  return (
    <section
      id="projects"
      className="scroll-mt-20 border-b border-slate-200 py-8 dark:border-white/5 sm:py-10 lg:py-12"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <Reveal className="max-w-2xl">
          <h2 className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-[0.2em] text-emerald-600 dark:text-emerald-400/90">
            <FolderKanban className="size-4 text-emerald-600 dark:text-emerald-400/80" aria-hidden />
            Projects
          </h2>
          <p className="mt-2 text-2xl font-semibold tracking-tight text-slate-900 dark:text-white sm:text-3xl">
            Selected work
          </p>
          <p className="mt-2 text-sm text-slate-600 dark:text-slate-400 sm:text-base">
            Personal builds with source and live demos where available.
          </p>
        </Reveal>

        <ul className="mt-6 grid gap-4 md:grid-cols-2 md:gap-5 lg:grid-cols-3">
          {projects.map((p, index) => (
            <motion.li
              key={p.name}
              className="group flex flex-col rounded-2xl border border-slate-200 bg-gradient-to-b from-white to-slate-50/90 p-5 shadow-md dark:border-white/10 dark:from-slate-900/80 dark:to-slate-950/80 dark:shadow-lg dark:shadow-black/20 sm:p-6"
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-24px' }}
              transition={{ duration: 0.55, delay: index * 0.1, ease }}
              whileHover={{ y: -6, transition: { type: 'spring', stiffness: 360, damping: 22 } }}
            >
              <div className="flex items-center justify-between gap-2">
                <span className="inline-flex items-center gap-1 rounded-md bg-emerald-500/15 px-2 py-0.5 font-mono text-[10px] uppercase tracking-wider text-emerald-800 dark:text-emerald-300">
                  <Tag className="size-3 opacity-80" aria-hidden />
                  {p.type}
                </span>
                <span className="font-mono text-xs text-slate-500 dark:text-slate-500">{p.period}</span>
              </div>
              <h3 className="mt-3 text-lg font-semibold text-slate-900 group-hover:text-emerald-800 dark:text-white dark:group-hover:text-emerald-200">
                {p.name}
              </h3>
              <p className="mt-2 flex-1 text-sm leading-relaxed text-slate-600 dark:text-slate-400">
                {p.description}
              </p>
              <div className="mt-3 flex flex-wrap gap-2">
                {p.tags.map((t) => (
                  <span
                    key={t}
                    className="inline-flex items-center gap-1 rounded-md border border-slate-200 bg-slate-50 px-2 py-0.5 text-xs text-slate-600 dark:border-white/5 dark:bg-white/[0.03] dark:text-slate-500"
                  >
                    <Tag className="size-2.5 text-emerald-600/50 dark:text-emerald-500/40" aria-hidden />
                    {t}
                  </span>
                ))}
              </div>
              <div className="mt-5 flex flex-wrap gap-3 border-t border-slate-200 pt-4 dark:border-white/5">
                <motion.a
                  href={p.github}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-1.5 text-sm font-medium text-emerald-700 hover:text-emerald-800 dark:text-emerald-400 dark:hover:text-emerald-300"
                  whileTap={{ scale: 0.97 }}
                >
                  <IconGithub />
                  Code
                </motion.a>
                {p.live ? (
                  <motion.a
                    href={p.live}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-1.5 text-sm font-medium text-slate-700 hover:text-slate-900 dark:text-slate-300 dark:hover:text-white"
                    whileTap={{ scale: 0.97 }}
                  >
                    <ExternalLink className="size-4" aria-hidden />
                    Live site
                  </motion.a>
                ) : null}
              </div>
            </motion.li>
          ))}
        </ul>
      </div>
    </section>
  )
}
