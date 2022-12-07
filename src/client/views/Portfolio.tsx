import * as React from 'react';
import PortfolioCard from './PortfolioCard/PortfolioCard';

const Portfolio = () => {
    return (

        <div className="container my-5">
            <PortfolioCard thumbnail="images/React-Tetris-Thumbnail.png" cardTitle="Tetris Using React" description="The link below is to a version of the Tetris game that I created using React" theme="Game" website="https://react-tetris-mv.herokuapp.com/" />
            <PortfolioCard thumbnail="images/Javascript-Tetris-Thumbnail.png" cardTitle="Tetris Using Javascript" description="The link below is to a version of the Tetris game that I created using React" theme="Game" website="https://javascript-tetris-mv.herokuapp.com/" />
        </div>
    )
}

export default Portfolio;