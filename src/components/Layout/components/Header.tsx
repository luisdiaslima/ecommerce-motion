import { motion, useViewportScroll, useTransform } from 'framer-motion'
import { useState, useEffect, useCallback } from 'react'
import { Title } from '../styles'

export const Header = () => {
  const bearIcons = ['🐻', '🐼', '🐻‍❄️']

  const { scrollYProgress } = useViewportScroll()

  const headerY = useTransform(scrollYProgress, [0, 0.2, 0.3], ['0%', '0%', '-100%'])

  const [bear, setBear] = useState(bearIcons[0])

  const shuffle = useCallback(() => {
    const index = Math.floor(Math.random() * bearIcons.length)
    setBear(bearIcons[index])
  }, [bearIcons])

  useEffect(() => {
    const intervalID = setInterval(shuffle, 1000)
    return () => clearInterval(intervalID)
  }, [shuffle])

  return (
    <motion.header
      style={{
        position: 'fixed',
        top: 0,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#fff',
        borderBottom: '1px solid #a3a3a373',
        width: '100%',
        height: '150px',
        y: headerY,
      }}
    >
      <Title
        initial={{ y: -300, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        exit={{ y: -300, opacity: 0 }}
      >
        <span>Mini Shop </span>
      </Title>
      <span style={{ fontSize: '3rem' }}>{bear}</span>
    </motion.header>
  )
}
