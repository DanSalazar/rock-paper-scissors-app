import { useContext } from 'react'
import { HeaderLogo, HeaderRoomState, HeaderStyled } from './style'
import Logo from '../../images/logo-bonus.svg'
import { RoomMatch } from '../../contexts/RoomMatch'

const HeaderRoom = () => {
  const roomContext = useContext(RoomMatch)

  return (
    <HeaderStyled>
      <HeaderLogo alt='logo' src={Logo} />
      <HeaderRoomState>
        <div>
          <p>You</p>
          <span>{roomContext.score.host}</span>
        </div>
        <div>
          <p>Guest</p>
          <span>{roomContext.score.guest || 0}</span>
        </div>
      </HeaderRoomState>
    </HeaderStyled>
  )
}

export default HeaderRoom
