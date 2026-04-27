import { motion } from 'framer-motion'
import { Cake, Heart, MapPin, User } from 'lucide-react'
import { personal } from '../data/content'
import profilePhoto from '../assets/profile.png'
import { Reveal, ease } from './Reveal'

export function About() {
  const rows = [
    { label: 'Date of birth', value: personal.dob, icon: Cake },
    { label: 'Gender', value: personal.gender, icon: User },
    { label: 'Marital status', value: personal.maritalStatus, icon: Heart },
    { label: 'Current location', value: personal.locationCurrent, icon: MapPin },
    { label: 'Native place', value: personal.locationNative, icon: MapPin },
  ]

  return (
    <section
      id="about"
      className="scroll-mt-20 border-b border-slate-200 py-8 dark:border-white/5 sm:py-10 lg:py-12"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <Reveal className="flex flex-col gap-3 sm:flex-row sm:items-center sm:gap-4">
          <motion.img
            src={profilePhoto}
            alt={`${personal.name} — portrait`}
            width={128}
            height={128}
            className="size-16 shrink-0 rounded-full border-2 border-slate-200 object-cover object-top shadow-md ring-2 ring-emerald-500/20 dark:border-white/10 dark:shadow-lg dark:ring-emerald-500/20 sm:size-20"
            whileHover={{ scale: 1.06 }}
            transition={{ type: 'spring', stiffness: 360, damping: 20 }}
          />
          <div className="min-w-0">
            <h2 className="font-mono text-xs uppercase tracking-[0.2em] text-emerald-600 dark:text-emerald-400/90">
              About
            </h2>
            <p className="mt-1 text-2xl font-semibold tracking-tight text-slate-900 dark:text-white sm:text-3xl">
              Who I am
            </p>
          </div>
        </Reveal>

        <Reveal className="mt-6 grid gap-6 lg:grid-cols-5 lg:gap-8" delay={0.08}>
          <div className="lg:col-span-3">
            <p className="text-base leading-relaxed text-slate-600 dark:text-slate-400 sm:text-lg">
              {personal.profile}
            </p>
            <div className="mt-5 flex flex-wrap gap-2 text-sm text-slate-600 dark:text-slate-500 sm:gap-3">
              <motion.span
                className="inline-flex items-center gap-2 rounded-lg border border-slate-200 bg-slate-50 px-3 py-2 dark:border-white/10 dark:bg-white/[0.03]"
                whileHover={{ y: -2 }}
                transition={{ type: 'spring', stiffness: 400, damping: 22 }}
              >
                <MapPin className="size-4 shrink-0 text-emerald-600 dark:text-emerald-400/80" aria-hidden />
                Based in Mumbai
              </motion.span>
              <motion.span
                className="inline-flex items-center gap-2 rounded-lg border border-slate-200 bg-slate-50 px-3 py-2 dark:border-white/10 dark:bg-white/[0.03]"
                whileHover={{ y: -2 }}
                transition={{ type: 'spring', stiffness: 400, damping: 22 }}
              >
                <User className="size-4 shrink-0 text-emerald-600 dark:text-emerald-400/80" aria-hidden />
                Open to meaningful roles
              </motion.span>
            </div>
          </div>

          <aside className="lg:col-span-2">
            <motion.div
              className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm dark:border-white/10 dark:bg-slate-900/50 dark:shadow-xl dark:shadow-black/20 sm:p-6"
              whileHover={{ y: -3 }}
              transition={{ type: 'spring', stiffness: 300, damping: 22 }}
            >
              <p className="text-xs font-medium uppercase tracking-wider text-slate-500 dark:text-slate-500">
                Personal
              </p>
              <dl className="mt-3 space-y-3">
                {rows.map(({ label, value, icon: Icon }, i) => (
                  <motion.div
                    key={label}
                    className="flex gap-3 border-b border-slate-100 pb-3 last:border-0 last:pb-0 dark:border-white/5"
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.05, duration: 0.4, ease }}
                  >
                    <span className="flex size-9 shrink-0 items-center justify-center rounded-lg bg-emerald-500/12 text-emerald-600 dark:text-emerald-400/95">
                      <Icon className="size-4" aria-hidden />
                    </span>
                    <div className="min-w-0">
                      <dt className="text-xs text-slate-500 dark:text-slate-500">{label}</dt>
                      <dd className="text-sm font-medium text-slate-800 dark:text-slate-200">{value}</dd>
                    </div>
                  </motion.div>
                ))}
              </dl>
            </motion.div>
          </aside>
        </Reveal>
      </div>
    </section>
  )
}
