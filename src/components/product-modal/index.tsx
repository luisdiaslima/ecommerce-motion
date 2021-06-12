import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Modal from '@material-ui/core/Modal'
import Backdrop from '@material-ui/core/Backdrop'

import { CardModal } from './styles'
import { motion } from 'framer-motion'
import { Fade } from '@material-ui/core'

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

  const handleClose = () => {
    setOpen(false)
  }

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
          <button className="glow-on-hover" type="button">
            Buy Now
          </button>
        </CardModal>
      </Fade>
    </Modal>
  )
}
