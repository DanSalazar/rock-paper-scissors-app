import { useContext } from 'react'
import { HeaderLogo, HeaderRoomState, HeaderStyled, HeaderScore, HeaderScoreTitle } from './style'
import Logo from '../../images/logo-bonus.svg'
import { RoomContext } from '../../contexts/RoomContext'

const HeaderRoom = () => {
  const { score, room: { players } } = useContext(RoomContext)

  return (
    <HeaderStyled>
      <HeaderLogo alt='logo' src={Logo} />
      <HeaderRoomState>
        <div>
          <HeaderScoreTitle>You</HeaderScoreTitle>
          <HeaderScore>{score.host}</HeaderScore>
          <HeaderScoreTitle>{players[0]}</HeaderScoreTitle>
        </div>
        <div>
          <HeaderScoreTitle>Guest</HeaderScoreTitle>
          <HeaderScore>{score.guest || 0}</HeaderScore>
          <HeaderScoreTitle>{players[1] || ''}</HeaderScoreTitle>
        </div>
      </HeaderRoomState>
    </HeaderStyled>
  )
}

export default HeaderRoom
