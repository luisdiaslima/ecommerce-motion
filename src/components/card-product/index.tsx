import { Card, ButtonsContainer } from './styles'
import NearMeSharpIcon from '@material-ui/icons/NearMeSharp'
import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket'
import VisibilityIcon from '@material-ui/icons/Visibility'

import { motion } from 'framer-motion'
import { useState } from 'react'
import ProductModal from '../product-modal'

interface CardProductsProps {
  product: {
    image: string
    title: string
    subtitle: string
  }
}

export const CardProduct = ({ product }: CardProductsProps) => {
  const [open, setOpen] = useState(false)
  return (
    <>
      <Card>
        <motion.img
          key={product.image}
          id={product.image}
          initial={{ x: 300, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          exit={{ x: -300, opacity: 0 }}
          width={250}
          height={250}
          alt={product.image}
          src={product.image}
        ></motion.img>
        <h1>{product.title}</h1>
        <h3>{product.subtitle}</h3>
        <ButtonsContainer>
          <motion.span whileHover={{ scale: 1.8 }} whileTap={{ scale: 0.9 }}>
            <VisibilityIcon onClick={() => setOpen(!open)} />
          </motion.span>
          <motion.span whileHover={{ scale: 1.8 }} whileTap={{ scale: 0.9 }}>
            <NearMeSharpIcon />
          </motion.span>
          <motion.span whileHover={{ scale: 1.8 }} whileTap={{ scale: 0.9 }}>
            <ShoppingBasketIcon />
          </motion.span>
        </ButtonsContainer>
      </Card>

      <ProductModal open={open} setOpen={setOpen} product={product} />
    </>
  )
}
