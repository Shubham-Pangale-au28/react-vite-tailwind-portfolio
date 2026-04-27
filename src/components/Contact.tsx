import { motion } from 'framer-motion'
import { Link2, Mail, MapPin, MessageCircle, Phone } from 'lucide-react'
import { personal } from '../data/content'
import { IconGithub, IconLinkedin } from './BrandIcons'
import { Reveal, ease } from './Reveal'

export function Contact() {
  return (
    <section id="contact" className="scroll-mt-20 py-8 sm:py-10 lg:py-12">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <Reveal className="max-w-2xl">
          <h2 className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-[0.2em] text-emerald-600 dark:text-emerald-400/90">
            <MessageCircle className="size-4 text-emerald-600 dark:text-emerald-400/80" aria-hidden />
            Contact
          </h2>
          <p className="mt-2 text-2xl font-semibold tracking-tight text-slate-900 dark:text-white sm:text-3xl">
            Let’s connect
          </p>
          <p className="mt-2 text-sm text-slate-600 dark:text-slate-400 sm:text-base">
            Reach out for opportunities or a conversation about your stack.
          </p>
        </Reveal>

        <Reveal className="mt-6 grid gap-4 lg:grid-cols-2 lg:gap-5" delay={0.06}>
          <motion.div
            className="space-y-3 rounded-2xl border border-slate-200 bg-white p-5 shadow-sm dark:border-white/10 dark:bg-slate-900/50 dark:shadow-none sm:p-6"
            whileHover={{ y: -2 }}
            transition={{ type: 'spring', stiffness: 320, damping: 24 }}
          >
            <a
              href={`mailto:${personal.email}`}
              className="flex items-start gap-3 rounded-xl p-2.5 transition hover:bg-slate-50 dark:hover:bg-white/5 sm:gap-4 sm:p-3"
            >
              <span className="flex size-10 shrink-0 items-center justify-center rounded-lg bg-emerald-500/15 text-emerald-600 dark:text-emerald-400">
                <Mail className="size-5" aria-hidden />
              </span>
              <div className="min-w-0">
                <p className="text-xs font-medium uppercase tracking-wider text-slate-500 dark:text-slate-500">
                  Email
                </p>
                <p className="mt-1 break-all text-sm font-medium text-slate-900 dark:text-white">
                  {personal.email}
                </p>
              </div>
            </a>
            <a
              href={personal.phoneHref}
              className="flex items-start gap-3 rounded-xl p-2.5 transition hover:bg-slate-50 dark:hover:bg-white/5 sm:gap-4 sm:p-3"
            >
              <span className="flex size-10 shrink-0 items-center justify-center rounded-lg bg-emerald-500/15 text-emerald-600 dark:text-emerald-400">
                <Phone className="size-5" aria-hidden />
              </span>
              <div>
                <p className="text-xs font-medium uppercase tracking-wider text-slate-500 dark:text-slate-500">
                  Phone
                </p>
                <p className="mt-1 text-sm font-medium text-slate-900 dark:text-white">{personal.phone}</p>
              </div>
            </a>
            <div className="flex items-start gap-3 rounded-xl p-2.5 sm:gap-4 sm:p-3">
              <span className="flex size-10 shrink-0 items-center justify-center rounded-lg bg-emerald-500/15 text-emerald-600 dark:text-emerald-400">
                <MapPin className="size-5" aria-hidden />
              </span>
              <div>
                <p className="text-xs font-medium uppercase tracking-wider text-slate-500 dark:text-slate-500">
                  Location
                </p>
                <p className="mt-1 text-sm font-medium text-slate-900 dark:text-white">
                  {personal.locationCurrent}
                </p>
              </div>
            </div>
          </motion.div>

          <motion.div
            className="flex flex-col justify-between rounded-2xl border border-emerald-200/80 bg-emerald-50/80 p-5 dark:border-emerald-500/20 dark:bg-emerald-500/[0.06] sm:p-6"
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.12, ease }}
            whileHover={{ y: -2 }}
          >
            <div>
              <p className="inline-flex items-center gap-2 text-sm font-medium text-emerald-900 dark:text-emerald-200/90">
                <Link2 className="size-4 text-emerald-700 dark:text-emerald-400/90" aria-hidden />
                Quick links
              </p>
              <div className="mt-3 flex flex-col gap-2">
                <motion.a
                  href={personal.linkedin}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 text-sm text-slate-900 underline-offset-4 hover:underline dark:text-white"
                  whileHover={{ x: 4 }}
                  transition={{ type: 'spring', stiffness: 380, damping: 24 }}
                >
                  <IconLinkedin />
                  LinkedIn profile
                </motion.a>
                <motion.a
                  href={personal.github}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 text-sm text-slate-900 underline-offset-4 hover:underline dark:text-white"
                  whileHover={{ x: 4 }}
                  transition={{ type: 'spring', stiffness: 380, damping: 24 }}
                >
                  <IconGithub />
                  GitHub profile
                </motion.a>
              </div>
            </div>
            <p className="mt-5 text-xs text-slate-600 dark:text-slate-500 lg:mt-4">
              Prefer email? I typically reply within one to two business days.
            </p>
          </motion.div>
        </Reveal>
      </div>
    </section>
  )
}
