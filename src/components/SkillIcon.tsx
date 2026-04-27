import type { ReactNode } from 'react'
import type { IconType } from 'react-icons/lib'
import {
  SiDocker,
  SiGit,
  SiOpenjdk,
  SiJenkins,
  SiMongodb,
  SiMui,
  SiMysql,
  SiNextdotjs,
  SiNginx,
  SiNodedotjs,
  SiOpenai,
  SiPostgresql,
  SiPrisma,
  SiPython,
  SiReact,
  SiSocketdotio,
  SiSpringboot,
  SiTypescript,
} from 'react-icons/si'
import { VscVscode } from 'react-icons/vsc'
import { Cpu } from 'lucide-react'

const cls = 'size-[1.125rem] shrink-0 sm:size-5'

function Si(Icon: IconType) {
  return <Icon className={cls} aria-hidden />
}

export function skillIconFor(name: string): ReactNode {
  switch (name) {
    case 'Java':
      return Si(SiOpenjdk)
    case 'Spring Boot':
      return Si(SiSpringboot)
    case 'Thread':
      return <Cpu className={cls} aria-hidden />
    case 'React.js':
      return Si(SiReact)
    case 'Next.js':
      return Si(SiNextdotjs)
    case 'TypeScript':
      return Si(SiTypescript)
    case 'Node.js':
      return Si(SiNodedotjs)
    case 'Python':
      return Si(SiPython)
    case 'MongoDB':
      return Si(SiMongodb)
    case 'MySQL':
      return Si(SiMysql)
    case 'PostgreSQL':
      return Si(SiPostgresql)
    case 'Prisma':
      return Si(SiPrisma)
    case 'Socket.io':
      return Si(SiSocketdotio)
    case 'Docker':
      return Si(SiDocker)
    case 'Nginx':
      return Si(SiNginx)
    case 'Jenkins':
      return Si(SiJenkins)
    case 'Git':
      return Si(SiGit)
    case 'MUI':
      return Si(SiMui)
    case 'Cursor':
      return <VscVscode className={cls} aria-hidden />
    case 'Codex':
      return Si(SiOpenai)
    default:
      return <span className={`inline-block rounded ${cls} bg-white/15`} aria-hidden />
  }
}
