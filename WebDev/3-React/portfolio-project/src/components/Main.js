import CardContainer from '../cards/CardContainer';
import InputCard from '../cards/input/InputCard';
import OutputCard from '../cards/output/outputCard';
import { useState } from 'react';

const Main = () => {

    const [previouslySelected, setPreviouslySelected] = useState([]);

    return (
        <div className='cards-container'>
            <CardContainer>
                <InputCard setPreviouslySelected={setPreviouslySelected} />
            </CardContainer>
            <CardContainer>
                <OutputCard previouslySelected={previouslySelected} />
            </CardContainer>
        </div>
    )
}

export default Main;