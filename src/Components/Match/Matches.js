import React, { useContext, useEffect, useState } from 'react';
import { OptionsMatch, OptionMatchWrapper } from './style';
import Option from '../Option/Option';
import checkWinner from '../../checkWinner';
import Result from '../Result/Result';
import ScoreContext from '../../ScoreContext/ScoreContext';

const options = ["scissors", "paper", "spock", "lizard", "rock"];

const sizes = { width: "200px", height: "200px", widthM: "100px", heightM: "100px" };

const Matches = ({ election, returnGame }) => {
    const globalScore = useContext(ScoreContext);

    const [finishMatch, setfinishMatch] = useState(false);
    const [win, setWin] = useState(false);
    const [winner, setWinner] = useState('');
    const [opponent, setOpponent] = useState(options[Math.round(Math.random()*4)]);

    useEffect(() => {
        // Return winner game
        const winnerGame = checkWinner.filter(item => item.name === election)[0];

        if (winnerGame.beats.includes(opponent)) {
            setWinner(winnerGame.name);
            setWin(true);
            globalScore.setScore(globalScore.score + 1);
        } else if (opponent === election) {
            setWinner('');
            setWin('Draw');
        } else {
            setWinner(opponent);
            globalScore.setScore(score => score === 0 ? 0: score - 1);
        }

        return setTimeout(() => {
            setfinishMatch(true);
        }, 1500);

    }, [election, globalScore, opponent]);


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
                                winner={winner}>
                            </Option> : null
                    }
                    <span>You Picked</span>
                </OptionMatchWrapper>
                <OptionMatchWrapper>
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
                            </Option> : null
                    }
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