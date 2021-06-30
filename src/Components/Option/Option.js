import React from 'react'
import { OptionStyled, OptionBorder, Svg } from './style';
import Spock from '../../images/icon-spock.svg';
import Rock from '../../images/icon-rock.svg';
import Paper from '../../images/icon-paper.svg';
import Lizard from '../../images/icon-lizard.svg';
import Scissors from '../../images/icon-scissors.svg';

const gradientOptions = {
    lizard: "hsl(261, 73%, 60%), hsl(261, 72%, 63%)",
    rock: "hsl(349, 71%, 52%), hsl(349, 70%, 56%)",
    paper: "hsl(230, 89%, 62%), hsl(230, 89%, 65%)",
    scissors: "hsl(39, 89%, 49%), hsl(40, 84%, 53%)",
    spock: "hsl(189, 59%, 53%), hsl(189, 58%, 57%)",
}

const imageOfOption = {
    lizard: Lizard,
    paper: Paper,
    scissors: Scissors,
    rock: Rock,
    spock: Spock
}

const Option = ({ handler, width, height, gridCol, gridRow, place, heightM, widthM,
    winner, name, svg, padding }) => {

    const handleOption = (e) => {
        return handler ? handler(e.target.dataset.value) : null;
    }

    return (
        <OptionBorder
            onClick={handleOption}
            name={name}
            data-value={name}
            winner={winner}
            place={place}
            gridRow={gridRow}
            gridCol={gridCol}
            gradient={gradientOptions[name]}
            padding={padding} >
            <OptionStyled
                data-value={name}
                width={width}
                height={height}
                widthM={widthM}
                heightM={heightM}>
                <Svg src={imageOfOption[name]} alt="icon-option" data-value={name} />
            </OptionStyled>
        </OptionBorder>
    );
}

export default Option
