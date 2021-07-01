import React, { useContext, useEffect, useState } from 'react';
import { OptionsMatch, OptionMatchWrapper } from './style';
import Option from '../Option/Option';
import checkWinner from '../../checkWinner';
import Result from '../Result/Result';
import ScoreContext from '../../ScoreContext/ScoreContext';
import MatchOpponent from './MatchOpponent';

const sizes = { width: "200px", height: "200px", widthM: "100px", heightM: "100px" };

const Matches = ({ election, returnGame }) => {
    const { setScore } = useContext(ScoreContext);

    const [finishMatch, setfinishMatch] = useState(false);
    const [win, setWin] = useState(false);
    const [winner, setWinner] = useState('');
    const [opponent, setOpponent] = useState();

    useEffect(() => {
        // Return winner game
        const winnerGame = checkWinner.filter(item => item.name === election)[0];

        if (winnerGame.beats.includes(opponent)) {
            setWinner(winnerGame.name);
            setWin(true);
            setScore(score => score + 1);
        } else if (opponent === election) {
            setWinner('');
            setWin('Draw');
        } else if (winnerGame.defeat.includes(opponent)) {
            setWinner(opponent);
            setScore(score => score === 0 ? 0: score - 1);
        }

        return setTimeout(() => {
            setfinishMatch(true)
        }, 2500);

    }, [election, setScore, opponent]);


    return (
        <>
            <OptionsMatch>
                <OptionMatchWrapper>
                    {
                        election ?
                            <Option
                                width={sizes.width}
                                height={sizes.height}
                                widthM={sizes.widthM}
                                heightM={sizes.heightM}
                                padding="2.25em"
                                name={election}
                                winner={winner}
                                anim="true">
                            </Option> : null
                    }
                    <span>You Picked</span>
                </OptionMatchWrapper>
                <OptionMatchWrapper>
                    <MatchOpponent 
                        opponent={opponent} 
                        winner={winner}
                        setOpponent={setOpponent} />
                    <span> The House Picked </span>
                </OptionMatchWrapper>
                {
                    finishMatch ? <Result win={win} returnGame={returnGame} /> : null
                }
            </OptionsMatch>
        </>
    );
}

export default Matches;