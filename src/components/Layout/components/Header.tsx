import { motion, useViewportScroll, useTransform } from 'framer-motion'
import { Title } from '../styles'

export const Header = () => {
  const { scrollYProgress } = useViewportScroll()

  const headerY = useTransform(scrollYProgress, [0, 0.2, 0.3], ['0%', '0%', '-100%'])

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
        <span>Mini Shop</span> <span>🐻</span>
      </Title>
    </motion.header>
  )
}
