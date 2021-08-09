import React from 'react';
import { PentagonWrapper, Pentagon } from './style';
import PentagonImage from '../../images/bg-pentagon.svg';
import Option from '../Option/Option';

const OptionPentagon = ({ handleElection }) => {
    return (
        <PentagonWrapper>
            <Pentagon src={PentagonImage} />
            <Option
                handler={handleElection}
                gridRow="1"
                gridCol="1/3"
                optionName="scissors" />
            <Option handler={handleElection}
                gridRow="2"
                gridCol="1/1"
                place="flex-start"
                optionName="spock" />
            <Option
                handler={handleElection}
                gridRow="2"
                gridCol="2/3"
                place="flex-end"
                optionName="paper" />
            <Option
                handler={handleElection}
                gridRow="3"
                gridCol="1/1"
                place="flex-end"
                optionName="lizard" />
            <Option
                handler={handleElection}
                gridRow="3"
                gridCol="2/3"
                place="flex-start"
                optionName="rock" />
        </PentagonWrapper>
    );
}

export default OptionPentagon;
