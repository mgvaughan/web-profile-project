import * as React from 'react';
import PortfolioCard from '../components/PortfolioCard'

const Portfolio = () => {
    return (

        <div className="container my-5">
            <PortfolioCard thumbnail="images/React-Tetris-Thumbnail.png" cardTitle="Tetris Game Using React" description="The link below is to a version of the Tetris game that I created using React. This project was a lot of fun to create because it really really helped me to gain understanding on how to better utilize React components to create a relatively complex program." skills="React, Node.js/Express, JavaScript, CSS, HTML" website="https://react-tetris-mv.herokuapp.com/" />
            <PortfolioCard thumbnail="images/Javascript-Tetris-Thumbnail.png" cardTitle="Tetris Game Using Javascript" description="The link below is to a version of the Tetris game that I created using React. This project was a good one for me to experience, because it helped develop my sense of what can be achieved with only using some javascript and CSS. While seemingly a basic looking game, it was great to learn how to rotate the blocks through array/matrix manipulation!" skills="JavaScript, Node.js/Express, CSS, HTML" website="https://javascript-tetris-mv.herokuapp.com/" />            
        </div>
    )
}

export default Portfolio; 