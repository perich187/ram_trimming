'use client'
import { motion, useInView } from 'motion/react'
import { useRef } from 'react'
import type { CSSProperties, ReactNode } from 'react'

type Props = {
  children: ReactNode
  className?: string
  style?: CSSProperties
  delay?: number
}

export function AnimatedText({ children, className, style, delay = 0 }: Props) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })

  return (
    <motion.p
      ref={ref}
      className={className}
      style={style}
      initial={{ opacity: 0, y: 22 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 22 }}
      transition={{
        duration: 0.9,
        ease: [0.25, 0.1, 0.25, 1],
        delay: delay + 0.1,
      }}
    >
      {children}
    </motion.p>
  )
}
