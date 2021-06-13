import { motion, useViewportScroll, useTransform } from 'framer-motion'
import { useState, useEffect, useCallback } from 'react'
import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket'
import StoreIcon from '@material-ui/icons/Store'
import InputIcon from '@material-ui/icons/Input'
import { IconsHeader, Title } from '../styles'
import SimpleGrow from './SlideCart'

export const Header = () => {
  const bearIcons = ['🐻', '🐼', '🐻‍❄️']

  const { scrollYProgress } = useViewportScroll()

  const headerY = useTransform(scrollYProgress, [0, 0.2, 0.3], ['0%', '0%', '-100%'])

  const [bear, setBear] = useState(bearIcons[0])
  const [checked, setChecked] = useState(false)

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
        flexDirection: 'row',
        justifyContent: 'space-around',
        backgroundColor: '#fff',
        borderBottom: '1px solid #a3a3a373',
        width: '100%',
        height: '150px',
        y: headerY,
      }}
    >
      <div>
        <Title
          initial={{ y: -300, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: -300, opacity: 0 }}
        >
          <span>Mini Shop </span>
        </Title>
        <span style={{ fontSize: '3rem' }}>{bear}</span>
      </div>

      <IconsHeader>
        <motion.span
          style={{ marginRight: 50, cursor: 'pointer' }}
          whileHover={{ scale: 1.5 }}
          whileTap={{ scale: 0.9 }}
        >
          <ShoppingBasketIcon
            onClick={() => setChecked(!checked)}
            style={{ fontSize: '2.5rem', color: '#757f9a' }}
          />
        </motion.span>
        <SimpleGrow checked={checked} />
        <motion.span
          style={{ marginRight: 50, cursor: 'pointer' }}
          whileHover={{ scale: 1.5 }}
          whileTap={{ scale: 0.9 }}
        >
          <StoreIcon style={{ fontSize: '2.5rem', color: '#757f9a' }} />
        </motion.span>
        <motion.span
          style={{ cursor: 'pointer' }}
          whileHover={{ scale: 1.5 }}
          whileTap={{ scale: 0.9 }}
        >
          <InputIcon style={{ fontSize: '2.5rem', color: '#757f9a' }} />
        </motion.span>
      </IconsHeader>
    </motion.header>
  )
}
