import React from 'react';
import { ResultContainer, ResultTitle, ButtonResult } from './style';

const Result = ({ win, draw, returnGame }) => {
    return (
        <ResultContainer>
            <ResultTitle>
                {draw ? 'Draw': win ? 'You Win': 'You lose'}
            </ResultTitle> 
            <ButtonResult width="100%" onClick={returnGame}>
                Play Again
            </ButtonResult>
        </ResultContainer>
    );
}

export default Result
