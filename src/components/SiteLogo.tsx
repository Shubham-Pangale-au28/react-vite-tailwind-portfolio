type Props = {
  className?: string
}

/**
 * Inline logo (from assets/logo.svg) so the wordmark follows theme:
 * light → slate-900, dark → white. Emerald mark stays fixed.
 */
export function SiteLogo({ className }: Props) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 200 60"
      className={className ?? 'h-7 w-auto text-slate-900 dark:text-white sm:h-8'}
      aria-hidden
    >
      <path d="M10 30 L25 15 L40 30 L25 45 Z" fill="#10b981" />
      <text
        x="50"
        y="45"
        fontFamily="ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace"
        fontWeight="bold"
        fontSize="38"
        fill="currentColor"
      >
        {'<SP />'}
      </text>
    </svg>
  )
}
