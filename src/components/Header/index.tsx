import img1 from '../../assets/effect-left.svg'
import img2 from '../../assets/effect-rigth.svg'
import img3 from '../../assets/logo.svg'
import { HeaderContainer } from './styled'

export function Header() {
  return (
    <HeaderContainer>
      <img src={img1} alt="" />
      <img src={img3} alt="" />
      <img src={img2} alt="" />
    </HeaderContainer>
  )
}
