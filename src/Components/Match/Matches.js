import React, { useContext, useEffect, useState } from 'react';
import { OptionsMatch, OptionMatchWrapper } from './style';
import Option from '../Option/Option';
import checkWinner from '../../checkWinner';
import Result from '../Result/Result';
import ScoreContext from '../../ScoreContext/ScoreContext';
import MatchOpponent from './MatchOpponent';

const SIZES = { D: "200px",  M: "100px" };

const Matches = ({ election, returnGame }) => {
    const { setScore } = useContext(ScoreContext);

    const [finishMatch, setfinishMatch] = useState(false);
    const [win, setWin] = useState(false);
    const [draw, setDraw] = useState(false)
    const [winOpponent, setWinOpponent] = useState(false);
    const [opponent, setOpponent] = useState('');

    useEffect(() => {
        // Return winner game
        const winnerGame = checkWinner.filter(item => item.name === election)[0];

        if (winnerGame.beats.includes(opponent)) {
            setWin(true);
            setScore(score => score + 1);
        } else if (opponent === election) {
            setDraw(true);
        } else if (winnerGame.defeat.includes(opponent)) {
            setWinOpponent(true);
            setScore(score => score === 0 ? 0: score - 1);
        }

        return setTimeout(() => {
            setfinishMatch(true)
        }, 2500);

    }, [election, opponent, setScore]);


    return (
        <>
            <OptionsMatch>
                <OptionMatchWrapper>
                    {election && 
                        <Option 
                            padding="2.25em" win={win} 
                            optionName={election}
                            sizeD={SIZES.D}
                            sizeM={SIZES.M} 
                        />
                    }
                    <span>You Picked</span>
                </OptionMatchWrapper>
                <OptionMatchWrapper>
                    <MatchOpponent 
                        optionName={opponent} 
                        win={winOpponent}
                        setOpponent={setOpponent} />
                    <span> The House Picked </span>
                </OptionMatchWrapper>
                {finishMatch && <Result win={win} draw={draw} returnGame={returnGame} />}
            </OptionsMatch>
        </>
    );
}

export default Matches;