import { Grid } from '@material-ui/core'
import { Container } from './styles'

import { CardProduct } from '../card-product'

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
          <CardProduct
            product={{
              image: '/tshirt.png',
              title: 'T-Shirts',
              subtitle: 'Beutiful and elegant T-Shirts',
            }}
          />
        </Grid>
        <Grid item md={3}>
          <CardProduct
            product={{
              image: '/beanies.png',
              title: 'Beanies',
              subtitle: 'Comfortable and warm Hats',
            }}
          />
        </Grid>
        <Grid item md={3}>
          <CardProduct
            product={{
              image: '/jacket.png',
              title: 'Jackets',
              subtitle: 'Big and Small Jackets',
            }}
          />
        </Grid>
        <Grid item md={6}>
          <CardProduct
            product={{
              image: '/tshirt.png',
              title: 'T-Shirts',
              subtitle: 'Beutiful and elegant T-Shirts',
            }}
          />
        </Grid>
        <Grid item md={6}>
          <CardProduct
            product={{
              image: '/tshirt.png',
              title: 'T-Shirts',
              subtitle: 'Beutiful and elegant T-Shirts',
            }}
          />
        </Grid>
        <Grid item md={3}>
          <CardProduct
            product={{
              image: '/tshirt.png',
              title: 'T-Shirts',
              subtitle: 'Beutiful and elegant T-Shirts',
            }}
          />
        </Grid>
        <Grid item md={3}>
          <CardProduct
            product={{
              image: '/tshirt.png',
              title: 'T-Shirts',
              subtitle: 'Beutiful and elegant T-Shirts',
            }}
          />
        </Grid>
        <Grid item md={6}>
          <CardProduct
            product={{
              image: '/tshirt.png',
              title: 'T-Shirts',
              subtitle: 'Beutiful and elegant T-Shirts',
            }}
          />
        </Grid>
        <Grid item md={6}>
          <CardProduct
            product={{
              image: '/tshirt.png',
              title: 'T-Shirts',
              subtitle: 'Beutiful and elegant T-Shirts',
            }}
          />
        </Grid>
        <Grid item md={3}>
          <CardProduct
            product={{
              image: '/tshirt.png',
              title: 'T-Shirts',
              subtitle: 'Beutiful and elegant T-Shirts',
            }}
          />
        </Grid>
        <Grid item md={3}>
          <CardProduct
            product={{
              image: '/tshirt.png',
              title: 'T-Shirts',
              subtitle: 'Beutiful and elegant T-Shirts',
            }}
          />
        </Grid>
      </Grid>
    </Container>
  )
}
