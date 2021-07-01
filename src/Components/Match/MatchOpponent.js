import React, { useEffect } from 'react';
import { OptionOverlay } from './style';
import Option from '../Option/Option';

const options = ["scissors", "paper", "spock", "lizard", "rock"];

const sizes = { width: "200px", height: "200px", widthM: "100px", heightM: "100px" };

const MatchOpponent = ({ opponent, winner, setOpponent }) => {

    useEffect(() => {
        setTimeout(() => {
            setOpponent(options[Math.round(Math.random() * 4)]);
        }, 1500)
    }, [setOpponent])

    return (
        <>
            {
                opponent ?
                    <Option
                        width={sizes.width}
                        height={sizes.height}
                        widthM={sizes.widthM}
                        heightM={sizes.heightM}
                        padding="2.25em"
                        name={opponent}
                        winner={winner}>
                    </Option> :
                    <OptionOverlay
                        width={sizes.width}
                        height={sizes.height}
                        widthM={sizes.widthM}
                        heightM={sizes.heightM}>
                        <div />
                    </OptionOverlay>
            }
        </>
    )
}

export default MatchOpponent;
