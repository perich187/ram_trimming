'use client'
import { motion, useInView } from 'motion/react'
import { useRef } from 'react'
import type { CSSProperties } from 'react'

type Props = {
  children: string
  className?: string
  style?: CSSProperties
  as?: 'h1' | 'h2' | 'h3' | 'h4'
  delay?: number
}

export function AnimatedHeading({ children, className, style, as: Tag = 'h2', delay = 0 }: Props) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.3 })
  const words = children.split(' ')

  return (
    <Tag
      ref={ref}
      className={className}
      style={{
        display: 'flex',
        flexWrap: 'wrap',
        columnGap: '0.28em',
        rowGap: 0,
        ...style,
      }}
    >
      {words.map((word, i) => (
        <span
          key={i}
          style={{ overflow: 'hidden', display: 'inline-block', lineHeight: 'inherit' }}
        >
          <motion.span
            style={{ display: 'inline-block' }}
            initial={{ y: '110%' }}
            animate={isInView ? { y: 0 } : { y: '110%' }}
            transition={{
              duration: 0.65,
              ease: [0.16, 1, 0.3, 1],
              delay: delay + i * 0.07,
            }}
          >
            {word}
          </motion.span>
        </span>
      ))}
    </Tag>
  )
}
