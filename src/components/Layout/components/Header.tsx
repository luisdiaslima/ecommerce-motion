import { motion, useViewportScroll, useTransform } from 'framer-motion'
import { useState, useEffect } from 'react'
import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket'
import Badge from '@material-ui/core/Badge'
import InputIcon from '@material-ui/icons/Input'
import LanguageIcon from '@material-ui/icons/Language'

import SimpleGrow from './SlideCart'
import { IconsHeader, Title } from '../styles'
import { useCart } from '../../../hooks/cart'

export const Header = () => {
  const { cart } = useCart()
  const bearIcons = ['🐻', '🐼', '🐻‍❄️']

  const { scrollYProgress } = useViewportScroll()

  const headerY = useTransform(scrollYProgress, [0, 0.2, 0.3], ['0%', '0%', '-100%'])

  const [bear] = useState(bearIcons[0])
  const [checked, setChecked] = useState(false)

  function handle() {
    setChecked(false)
  }

  useEffect(() => {
    if (window.scrollY >= 350) {
      setChecked(false)
    }
  }, [headerY, handle])

  // const shuffle = useCallback(() => {
  //   const index = Math.floor(Math.random() * bearIcons.length)
  //   setBear(bearIcons[index])
  // }, [bearIcons])

  // useEffect(() => {
  //   const intervalID = setInterval(shuffle, 1000)
  //   return () => clearInterval(intervalID)
  // }, [shuffle])

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
          className="blur"
          style={{ marginRight: 50, cursor: 'pointer' }}
          whileHover={{ scale: 1.2 }}
          whileTap={{ scale: 0.9 }}
        >
          <Badge badgeContent={cart?.length}>
            <ShoppingBasketIcon
              onClick={() => setChecked(!checked)}
              style={{ fontSize: '2.5rem', color: '#757f9a' }}
            />
          </Badge>
        </motion.span>
        <SimpleGrow checked={checked} setChecked={setChecked} />
        <motion.span
          style={{ marginRight: 50, cursor: 'pointer' }}
          whileHover={{ scale: 1.2 }}
          whileTap={{ scale: 0.9 }}
        >
          <LanguageIcon style={{ fontSize: '2.5rem', color: '#757f9a' }} />
        </motion.span>
        <motion.span
          style={{ cursor: 'pointer' }}
          whileHover={{ scale: 1.2 }}
          whileTap={{ scale: 0.9 }}
        >
          <InputIcon style={{ fontSize: '2.5rem', color: '#757f9a' }} />
        </motion.span>
      </IconsHeader>
    </motion.header>
  )
}
