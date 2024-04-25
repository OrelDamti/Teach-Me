import { NavLink } from 'react-router-dom'
import { Wrapper } from './styles'

const LinkButton = ({ title, link }) => {
  return (
    <Wrapper>
      <NavLink to={link}>{title}</NavLink>
    </Wrapper>
  )
}

export default LinkButton
