import * as React from 'react';
import PortfolioCard from '../components/PortfolioCard'

const Portfolio = () => {
    return (

        <div className="container my-5">
            
            <PortfolioCard thumbnail="images/mern-react-admin-dashboard.png" cardTitle="Fullstack Admin Dashboard Using React, Node.js and MongoDB" description="The link below is to an example of a fullstack admin dashboard I created using the MERN stack. This was a good project for me to get experience building because it gave me an opportunity to build a realistic a fullstack site with realistic data, and using the Redux library.  Website was deployed from using Render." skills="MongoDB, React, Redux, Express, Node.js, JavaScript, CSS, HTML" website="https://mern-fullstack-admin-dashboard.onrender.com" />
            <PortfolioCard thumbnail="images/typescript-react-fitness-application.png" cardTitle="Gym Website Using React and Typescript" description="The link below is to an example of a gym's website I created using React and Typescript. This was a good project for me to get experience building because it gave me an opportunity to build a realistic company website, incorporating animations, typescript, and tailwindcss.  Also gained experience using react-hook-form, and with deploying the website from cloudflare." skills="React, Typescript, JavaScript, CSS, HTML" website="https://32cf7530.typescript-react-fitness-application.pages.dev/" />
            <PortfolioCard thumbnail="images/react-portfolio-app.png" cardTitle="Portfolio Example Website Using React" description="The link below is to an example of a portfolio website I created using the MERN stack. In this project, I got to continue to practice using React while gaining more experience using darker styling choices and animations to build a pretty cool looking example portfolio website." skills="React, JavaScript, CSS, HTML" website="https://react-portfolio-app-mv.netlify.app/" />
            <PortfolioCard thumbnail="images/mern-fullstack-social-media-app.png" cardTitle="MERN Fullstack Social Media App" description="The link below is to an example of a social media website I created using the MERN stack. In this project, I got experience using Mongo as well as deploying the site using Render. I also continued to increase my experience with Authentication/Authorization, React, Node.js and Tailwind stylings." skills="Mongo, Express, React, Node.js, JavaScript, CSS, HTML" website="https://fullstack-social-media-website.onrender.com/" />
            <PortfolioCard thumbnail="images/React-Admin-Dashboard.png" cardTitle="Admin Dashboard Using React" description="The link below is to an example of an admin dashboard I created using React. This project was a lot of fun to create because it really helped me to gain understanding on higher level usage of React library, as well as give me experience incorporating light and dark modes, as well as with using Material UI, Nivo Charts, Formik, Yup, Full Calendar, and Data Grid." skills="React, JavaScript, CSS, HTML" website="https://react-admin-dashboard-mv.netlify.app/" />
            <PortfolioCard thumbnail="images/React-Tetris-Thumbnail.png" cardTitle="Tetris Game Using React" description="The link below is to a version of the Tetris game that I created using React. This project was a lot of fun to create because it really helped me to gain understanding on how to better utilize React components to create a relatively complex program. Use up arrow to rotate!" skills="React, Node.js/Express, JavaScript, CSS, HTML" website="https://react-tetris-mv.herokuapp.com/" />
            <PortfolioCard thumbnail="images/Javascript-Tetris-Thumbnail.png" cardTitle="Tetris Game Using Javascript" description="The link below is to a version of the Tetris game that I created using React. This project was a good one for me to experience, because it helped develop my sense of what can be achieved with only using some javascript and CSS. While seemingly a basic looking game, it was great to learn how to rotate the blocks through array/matrix manipulation! Use up q & w to rotate!" skills="JavaScript, Node.js/Express, CSS, HTML" website="https://javascript-tetris-mv.herokuapp.com/" />                       
        </div>
    )
}

export default Portfolio; 



