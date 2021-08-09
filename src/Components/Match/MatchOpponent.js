import React, { useEffect } from 'react';
import { OptionOverlay } from './style';
import Option from '../Option/Option';

const OPTIONS = ["scissors", "paper", "spock", "lizard", "rock"];

const SIZES = { D: "200px",  M: "100px" };

const MatchOpponent = ({ optionName, win, setOpponent }) => {

    useEffect(() => {
        setTimeout(() => {
            setOpponent(OPTIONS[Math.round(Math.random() * 4)]);
        }, 1500)
    }, [setOpponent])

    return (
        <>
            {
                optionName ?
                    <Option
                        sizeD={SIZES.D}
                        sizeM={SIZES.M}
                        padding="2.25em"
                        optionName={optionName}
                        win={win}>
                    </Option> :
                    <OptionOverlay>
                        <div/>
                    </OptionOverlay>
            }
        </>
    )
}

export default MatchOpponent;
