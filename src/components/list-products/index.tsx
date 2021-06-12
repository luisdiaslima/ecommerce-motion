import { Grid } from '@material-ui/core'
import { Container, Card, ButtonsContainer } from './styles'
import NearMeSharpIcon from '@material-ui/icons/NearMeSharp'
import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket'
import VisibilityIcon from '@material-ui/icons/Visibility'

import { motion } from 'framer-motion'

export const ListProducts = () => {
  return (
    <Container>
      <Grid
        container
        alignItems="center"
        justify="center"
        alignContent="center"
        md={12}
        spacing={2}
      >
        <Grid item md={6} sm={12}>
          <Card>
            <motion.img
              key="/tshirt.png"
              initial={{ x: 300, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: -300, opacity: 0 }}
              width={250}
              height={250}
              alt="tshirt"
              src="/tshirt.png"
            ></motion.img>
            <h1>T-Shirts</h1>
            <h3>Beutiful and elegant T-Shirts</h3>
            <ButtonsContainer>
              <motion.span whileHover={{ scale: 1.8 }} whileTap={{ scale: 0.9 }}>
                <VisibilityIcon />
              </motion.span>
              <motion.span whileHover={{ scale: 1.8 }} whileTap={{ scale: 0.9 }}>
                <NearMeSharpIcon />
              </motion.span>
              <motion.span whileHover={{ scale: 1.8 }} whileTap={{ scale: 0.9 }}>
                <ShoppingBasketIcon />
              </motion.span>
            </ButtonsContainer>
          </Card>
        </Grid>
        <Grid item md={3}>
          <Card>
            <motion.img
              key="/beanies.png"
              initial={{ x: 300, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: -300, opacity: 0 }}
              width={250}
              height={250}
              alt="beanies"
              src="/beanies.png"
            ></motion.img>
            <h1>Beanies</h1>
            <h3>Comfortable and warm Hats</h3>
            <ButtonsContainer>
              <motion.span whileHover={{ scale: 1.8 }} whileTap={{ scale: 0.9 }}>
                <VisibilityIcon />
              </motion.span>
              <motion.span whileHover={{ scale: 1.8 }} whileTap={{ scale: 0.9 }}>
                <NearMeSharpIcon />
              </motion.span>
              <motion.span whileHover={{ scale: 1.8 }} whileTap={{ scale: 0.9 }}>
                <ShoppingBasketIcon />
              </motion.span>
            </ButtonsContainer>
          </Card>
        </Grid>
        <Grid item md={3}>
          <Card>
            <motion.img
              key="/jacket.png"
              initial={{ x: 300, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: -300, opacity: 0 }}
              width={250}
              height={250}
              alt="jacket"
              src="/jacket.png"
            ></motion.img>
            <h1>Jackets</h1>
            <h3>Big and Small Jackets</h3>
            <ButtonsContainer>
              <motion.span whileHover={{ scale: 1.8 }} whileTap={{ scale: 0.9 }}>
                <VisibilityIcon />
              </motion.span>
              <motion.span whileHover={{ scale: 1.8 }} whileTap={{ scale: 0.9 }}>
                <NearMeSharpIcon />
              </motion.span>
              <motion.span whileHover={{ scale: 1.8 }} whileTap={{ scale: 0.9 }}>
                <ShoppingBasketIcon />
              </motion.span>
            </ButtonsContainer>
          </Card>
        </Grid>
        <Grid item md={6}>
          <Card>Produto</Card>
        </Grid>
        <Grid item md={6}>
          <Card>Produto</Card>
        </Grid>
        <Grid item md={3}>
          <Card>Produto</Card>
        </Grid>
        <Grid item md={3}>
          <Card>Produto</Card>
        </Grid>
        <Grid item md={6}>
          <Card>Produto</Card>
        </Grid>
        <Grid item md={6}>
          <Card>Produto</Card>
        </Grid>
        <Grid item md={3}>
          <Card>Produto</Card>
        </Grid>
        <Grid item md={3}>
          <Card>Produto</Card>
        </Grid>
      </Grid>
    </Container>
  )
}
