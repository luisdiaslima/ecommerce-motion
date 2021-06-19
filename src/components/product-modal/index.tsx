import React, { useCallback } from 'react'

import { makeStyles } from '@material-ui/core/styles'
import Modal from '@material-ui/core/Modal'
import Backdrop from '@material-ui/core/Backdrop'

import { CardModal } from './styles'
import { motion } from 'framer-motion'
import { Fade } from '@material-ui/core'
import { useCart } from '../../hooks/cart'
import { toast } from 'react-toastify'

const useStyles = makeStyles(() => ({
  modal: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    border: 'none',
  },
}))

export default function ProductModal({ open, setOpen, product }) {
  const classes = useStyles()
  const { addToCart } = useCart()

  const handleClose = () => {
    setOpen(false)
  }

  const handleAddToCart = useCallback(() => {
    addToCart(product)
    toast.dark(`🐻 ${product.title} has been added in you cart!`)
    setOpen(false)
  }, [product, addToCart, setOpen])

  return (
    <Modal
      aria-labelledby="transition-modal-title"
      aria-describedby="transition-modal-description"
      className={classes.modal}
      open={open}
      onClose={handleClose}
      closeAfterTransition
      BackdropComponent={Backdrop}
      BackdropProps={{
        timeout: 500,
      }}
    >
      <Fade style={{ outline: 'none' }} in={open}>
        <CardModal>
          <motion.img
            key={product.image}
            initial={{ y: 300, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -300, opacity: 0 }}
            width={250}
            height={250}
            alt={product.image}
            src={product.image}
          ></motion.img>

          <h2 id="transition-modal-title">{product.title}</h2>
          <p id="transition-modal-description">{product.subtitle}</p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.99 }}
            className="glow-on-hover"
            onClick={handleAddToCart}
          >
            Buy Now
          </motion.button>
        </CardModal>
      </Fade>
    </Modal>
  )
}
