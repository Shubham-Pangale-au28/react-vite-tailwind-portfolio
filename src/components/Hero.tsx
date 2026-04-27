import { motion } from 'framer-motion'
import { ArrowDownRight, Mail } from 'lucide-react'
import { personal } from '../data/content'
import { IconGithub, IconLinkedin } from './BrandIcons'
import { HeroLiveBackground } from './HeroLiveBackground'
import profilePhoto from '../assets/profile.png'
import { ease } from './Reveal'

function scrollToId(id: string) {
  document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' })
}

const linkMotion = {
  whileHover: { scale: 1.03, y: -1 },
  whileTap: { scale: 0.98 },
  transition: { type: 'spring' as const, stiffness: 400, damping: 22 },
}

export function Hero() {
  return (
    <section
      id="home"
      className="relative scroll-mt-20 overflow-hidden border-b border-slate-200 pt-20 pb-12 dark:border-white/5 sm:pt-24 sm:pb-14 lg:pt-28 lg:pb-16"
    >
      <HeroLiveBackground />

      <div className="relative z-10 mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center gap-8 lg:flex-row lg:items-center lg:justify-between lg:gap-10">
          <motion.div
            className="w-full min-w-0 flex-1 text-center lg:text-left"
            initial={{ opacity: 0, y: 36 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease }}
          >
            <h1 className="text-3xl font-semibold tracking-tight text-slate-900 dark:text-white sm:text-4xl md:text-5xl lg:text-6xl">
              {personal.name}
            </h1>
            <motion.p
              className="mx-auto mt-3 max-w-2xl text-lg text-slate-600 dark:text-slate-400 sm:text-xl lg:mx-0"
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, delay: 0.08, ease }}
            >
              {personal.title}
            </motion.p>

            <motion.div
              className="mt-6 flex flex-wrap justify-center gap-2 sm:gap-3 lg:justify-start"
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.16, ease }}
            >
              <motion.a
                href={personal.github}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-xl border border-slate-200 bg-white px-4 py-2.5 text-sm font-medium text-slate-800 shadow-sm transition-colors hover:border-emerald-400/60 hover:bg-emerald-50 dark:border-white/10 dark:bg-white/5 dark:text-white dark:shadow-none dark:hover:border-emerald-500/40 dark:hover:bg-emerald-500/10"
                {...linkMotion}
              >
                <IconGithub />
                GitHub
              </motion.a>
              <motion.a
                href={personal.linkedin}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-xl border border-slate-200 bg-white px-4 py-2.5 text-sm font-medium text-slate-800 shadow-sm transition-colors hover:border-emerald-400/60 hover:bg-emerald-50 dark:border-white/10 dark:bg-white/5 dark:text-white dark:shadow-none dark:hover:border-emerald-500/40 dark:hover:bg-emerald-500/10"
                {...linkMotion}
              >
                <IconLinkedin />
                LinkedIn
              </motion.a>
              <motion.a
                href={`mailto:${personal.email}`}
                className="inline-flex items-center gap-2 rounded-xl border border-slate-200 bg-white px-4 py-2.5 text-sm font-medium text-slate-800 shadow-sm transition-colors hover:border-emerald-400/60 hover:bg-emerald-50 dark:border-white/10 dark:bg-white/5 dark:text-white dark:shadow-none dark:hover:border-emerald-500/40 dark:hover:bg-emerald-500/10"
                {...linkMotion}
              >
                <Mail className="size-4 shrink-0" aria-hidden />
                Email
              </motion.a>
            </motion.div>

            <motion.div
              className="mt-8 flex flex-col items-center gap-3 sm:flex-row sm:items-center sm:gap-6 lg:justify-start"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.28, duration: 0.45 }}
            >
              <motion.button
                type="button"
                onClick={() => scrollToId('projects')}
                className="group inline-flex w-fit items-center gap-2 rounded-full bg-emerald-600 px-5 py-3 text-sm font-semibold text-white shadow-lg shadow-emerald-600/25 transition-colors hover:bg-emerald-500 dark:bg-emerald-500 dark:text-slate-950 dark:shadow-emerald-500/25 dark:hover:bg-emerald-400"
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.97 }}
                transition={{ type: 'spring', stiffness: 420, damping: 20 }}
              >
                View projects
                <ArrowDownRight className="size-4 transition group-hover:translate-x-0.5 group-hover:translate-y-0.5" />
              </motion.button>
              <motion.button
                type="button"
                onClick={() => scrollToId('about')}
                className="text-sm text-slate-600 underline-offset-4 hover:text-slate-900 hover:underline dark:text-slate-500 dark:hover:text-slate-300"
                whileHover={{ x: 3 }}
                transition={{ type: 'spring', stiffness: 380, damping: 24 }}
              >
                About me →
              </motion.button>
            </motion.div>
          </motion.div>

          <motion.div
            className="shrink-0"
            initial={{ opacity: 0, scale: 0.88 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.65, delay: 0.1, ease }}
          >
            <div className="relative mx-auto w-fit">
              <motion.div
                className="absolute -inset-2 rounded-full bg-gradient-to-br from-emerald-400/50 to-cyan-400/30 blur-lg dark:from-emerald-500/40 dark:to-cyan-500/20"
                aria-hidden
                animate={{ opacity: [0.75, 1, 0.75], scale: [1, 1.04, 1] }}
                transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
              />
              <motion.img
                src={profilePhoto}
                alt={`${personal.name} — portrait`}
                width={320}
                height={320}
                className="relative mx-auto block size-52 rounded-full border-4 border-white object-cover object-top shadow-xl ring-2 ring-emerald-500/25 dark:border-slate-900/80 dark:ring-emerald-400/20 sm:size-60 md:size-64 lg:size-72"
                whileHover={{ scale: 1.04 }}
                transition={{ type: 'spring', stiffness: 320, damping: 18 }}
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
