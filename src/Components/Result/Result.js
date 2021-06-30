import React from 'react';
import { ResultContainer, ResultTitle, ButtonResult } from './style';

const Result = ({ win, returnGame }) => {
    return (
        <ResultContainer>
            <ResultTitle>
                { win === "Draw" ? win: win ? "You Win": "You Lose" }
            </ResultTitle> 
            <ButtonResult width="100%" onClick={returnGame}>
                Play Again
            </ButtonResult>
        </ResultContainer>
    );
}

export default Result
