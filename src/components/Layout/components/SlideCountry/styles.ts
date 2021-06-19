import styled from '@emotion/styled'
import { motion } from 'framer-motion'

export const Container = styled.div`
  right: 21.8%;
`

export const Title = styled(motion.text)`
  font-size: 2rem;
  font-weight: 400;
  color: #757f9a;
`
export const IconsHeader = styled.div`
  display: flex;
  justify-content: space-between;

  @media (max-width: 411px) {
    display: none;
  }
`
export const ProductCardToSlideCart = styled.div`
  display: 'flex';

  flex-direction: row;
  align-items: flex-end;
  align-content: center;

  width: 100%;
  height: 110px;
  padding: 10px;
  margin-bottom: 22px;

  background: #fafafa;
  border-radius: 8px;
  box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;

  span {
    font-weight: 600;
    font-size: 17px;
  }

  text {
    font-weight: 500;
    font-size: 12px;
    color: gray;
  }
`
