import { motion } from 'framer-motion'
import type { ReactNode } from 'react'

const ease = [0.22, 1, 0.36, 1] as const

type Props = {
  children: ReactNode
  className?: string
  /** Seconds */
  delay?: number
  y?: number
  once?: boolean
}

export function Reveal({ children, className, delay = 0, y = 26, once = true }: Props) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once, margin: '-36px 0px -64px 0px' }}
      transition={{ duration: 0.55, delay, ease }}
    >
      {children}
    </motion.div>
  )
}

export { ease }
