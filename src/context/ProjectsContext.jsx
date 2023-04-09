import React, { createContext, useState } from 'react'
import ecommerce2 from '../images/ecommerce2.PNG'
import cvmaker from '../images/cvmaker.PNG'
import unsplashapi from '../images/unsplashapi.PNG'
import figmaloginpage from '../images/loginpage.PNG'
import twitterclone from '../images/twitter2.PNG'
import cargame from '../images/cargame.PNG'
import MusicPlayer from '../images/MusicPlayer.PNG'
import onePageGrid4 from '../images/onePageGrid4.PNG'
import countryApi from '../images/countryApi.PNG'
import quizappupdated from '../images/quizappupdated.PNG'
import weatherApp from '../images/weatherApp.PNG'
import creditCard from '../images/creditCard.PNG'
import Planti from '../images/Planti.PNG'
import FirebaseNotes from '../images/FirebaseNotes.PNG'
import gymapp from '../images/gymapp.PNG'
import rastaurant from '../images/restaurant.PNG'
import coinsite from '../images/coinsite.PNG'
import architecturewebsite from '../images/architecturewebsite.PNG'


export const ProjectsContext = createContext();

const projects = [
    {
        id: 18,
        title: "Architecture Site Landing Page",
        img: architecturewebsite,
        subtitles: ['Figma', 'Design Based Project'],
        text:
            <div>
                I wrote a nice looking landing page from Figma.
                <br /><br />
                Although the design is responsive, the real beauty of the site is
                that it looks better on the computer.
            </div>,
        date: "07/04/2023",
        link: "https://2x031s.csb.app/",
        responsive: true,
        stars: ['star', 'star', 'star']
    },
    {
        id: 17,
        title: "Cryptocurrency Website (API)",
        img: coinsite,
        subtitles: ['react-router-dom v6 / useParams', 'CoinGecko API', 'Chart.js'],
        text:
            <div>
                In this project, I pulled the data of cryptocurrencies using the CoinGecko API.
                Using 3 different APIs, I used the relevant information in the fields I wanted.I also had the opportunity to use the Chart.js library for the first time. <br /><br />
                - You can go to the page where you will see the graphics by clicking on the coins on the Market page.<br /><br />
                - You can add the coins in the Market section to the watch list with the star button on the left.<br /><br />
                I plan to add multi-page, search button and other small plugins in the future.<br /><br />
                Although the site is not yet responsive, it will be made responsive.
            </div>,
        date: "02/04/2023",
        link: "https://mxn1vr.csb.app/",
        responsive: false,
        stars: ['star', 'star', 'star']
    },
    {
        id: 16,
        title: "Rastaurant Website",
        img: rastaurant,
        subtitles: ['React-Swiper', 'Figma', 'Design Based Project'],
        text:
            <div>
                A full-scale design-oriented website.
            </div>,
        date: "21/03/2023",
        link: "https://rbhynv.csb.app/",
        responsive: true,
        stars: ['star', 'star', 'star', 'star', 'star']
    },
    {
        id: 15,
        title: "GYM APP",
        img: gymapp,
        subtitles: ['React', 'Firebase', 'Firebase Database', 'Firebase Auth'],
        text:
            <div>
                Using firebase, which I continue to learn, I developed this application,
                at the same time I tried to focus on the use and features of firebase rather than design.
                This application, which consists of 3 pages for now, has a structure that is open to development
                both in terms of design and in terms of features.<br /><br />
                The application is basically an agenda where you enter your information and save the sport you do.
                It calculates the calories you burn using your information and stores this information so that you can access
                it later. You can see the status of the end users on the main page and there is a small blog section.<br /><br />
                Features such as diversifying user information, tracking meals and adding weekly sports program can be added
                to the application. In addition, in the future, I aim to develop it in terms of design.
            </div>,
        date: "08/03/2023",
        link: "https://kfl64t.csb.app/",
        responsive: true,
        stars: ['star', 'star', 'star', 'star']
    },
    {
        id: 14,
        title: "Firebase Note App",
        img: FirebaseNotes,
        subtitles: ['React', 'Firebase', 'Firebase Database', 'Firebase Auth'],
        text: <div>In this work, I used Firebase for the first time and included
            both the Authentication feature and the Database feature in my
            project. <br /><br /> Users can create in-app notes by logging into the app
            through their google accounts. These notes are stored in the
            database and are taken from there and reflected on the screen
            to be seen by everyone. Some bugs and design issues for the
            application are among the problems that can be resolved in
            the future. But for now the app is available.
        </div>,
        date: "28/02/2023",
        link: "https://jm4h9o.csb.app/",
        responsive: true,
        stars: ['star', 'star', 'star', 'star', 'star']
    },
    {
        id: 13,
        title: "Planti Dashboard",
        img: Planti,
        subtitles: ['React', 'Design Based Project'],
        text: <div>This is a design-oriented responsive dashboard work.
            In this work, I tried to implement a design that I saw on the internet.
            This project, which I created using React, took about 1 day.
            Although I work as responsively as I can during this process,
            the design features can be perfected by spending more time on the project.
        </div>,
        date: "25/02/2023",
        link: "https://jwn62u.csb.app/",
        responsive: true,
        stars: ['star', 'star', 'star', 'star', 'star']
    },
    {
        id: 12,
        title: "Credit Card Design",
        img: creditCard,
        subtitles: ['Bootstrap', 'React', 'Figma Design'],
        text: <div>In this application, I tried to create a
            simulation where users enter credit card information.
            Necessary restrictions can be added to the relevant fields
            to make the application better.
        </div>,
        date: "21/02/2023",
        link: "https://gbys2z.csb.app/",
        responsive: true,
        stars: ['star', 'star', 'star']
    },
    {
        id: 11,
        title: "Weather App (API)",
        img: weatherApp,
        subtitles: ['Open Weather API', 'React', 'Axios'],
        text: <div>In this application, I made a weather application using the API that the
            openweathermap site offers free of charge. This application, which I wrote using React,
            is also mobile responsive.
        </div>,
        date: "19/02/2023",
        link: "https://1zc1t2.csb.app/",
        responsive: true,
        stars: ['star', 'star', 'star', 'star']
    },
    {
        id: 10,
        title: "E-Commerce Website ****",
        img: ecommerce2,
        subtitles: ['Context API', 'Router', 'Figma Design'],
        text: <div>(After clicking on the link, click on the home page from the navigation bar. There is an
            error due to page redirection.) <br /> <br /><p>
                In this project, I tried to create an e-commerce site both visually and as a feature. I used
                an open source design from figma for the homepage design. <br /><br />
                In general, the project:<br /><br />
                - The first 4 items in the product list are presented to the users on the homepage.<br />
                - Products can be added to the cart, removed from the cart or reduced in quantity.<br />
                - If the products have a discount rate, the discounted price is automatically displayed in
                the basket.<br />
                - The desired category can be filtered thanks to the left filtering buttons in the section
                where the products are located.<br />
                - Thanks to the admin panel, new products can be added and purchased, but they cannot be
                filtered for now.<br /><br />
                In the continuation of the project, improvements can be made such as the blog page, fixing
                minor bugs, correcting the shifts in the basket section, activating the membership system,
                and creating a member registration screen with a page with member information.
            </p>
        </div>,
        date: "04/02/2023",
        link: "https://alkm-cet.github.io/Ecommerce/",
        responsive: true,
        stars: ['star', 'star', 'star', 'star']
    },
    {
        id: 9,
        title: "CV Maker",
        img: cvmaker,
        subtitles: ['Context API', 'Router', 'Bootstrap'],
        text: <div>
            This work of mine allows people to create their own CVs. I developed this project on React
            using structures such as Context API and Router. I created almost all of the design using
            Bootstrap. <br /><br />
            About the application:<br /><br />
            - All required fields within the application need to be filled.<br />
            - There is also a field where you can select your photo and needs to be filled.<br />
            - After all the fields are filled, the relevant information is transferred to the template
            on the last page and as a result, your CV is ready.<br /><br />
            In order to improve and diversify the application, I would like to add in the next
            updates:<br /><br />
            -Users will be able to choose several different designs.<br />
            - After the information is filled, they can be deleted or edited instantly.<br />
            - CV can be downloaded.
        </div>,
        date: "28/01/2023",
        link: "https://2slfcz.csb.app/",
        responsive: true,
        stars: ['star', 'star', 'star']
    },
    {
        id: 8,
        title: "Photo Search App (API)",
        img: unsplashapi,
        subtitles: ['Unsplash API', 'React', 'Axios', 'API Search'],
        text: <div>In this application, I used the API provided by the unsplash site. In this 'Photo Search
            Application' I created on React, I used axios to pull data from the API. Using the API
            documentation, I added the codes to switch between pages and the search bar necessary to
            find the desired photo. In addition, by using the titles at the top, I provided quick access
            to the photos in the desired content.</div>,
        date: "27/01/2023",
        link: "https://26bgdg.csb.app/",
        responsive: true,
        stars: ['star', 'star', 'star']
    },
    {
        id: 6,
        title: "Twitter Clone",
        img: twitterclone,
        subtitles: ['React', 'Lifting State Up', 'Prop Drilling'],
        text: <div>In this demo project,
            I developed this whole project using react. I created the components that I will use in the
            application and created the structures I wanted by importing these components where
            necessary in accordance with the structure of React. I worked with concepts such as Lifting
            State Up, which allowed me to understand state and props much better.
            <br /><br />
            I'll summarize what can be done in-app:<br />
            - On the first screen, you can register on the site and delete the registration.<br />
            - You can log in with the information you created on the login screen.<br />
            - The username will be dynamically added to the relevant parts of the page.<br />
            - You can tweet/like and delete<br />
            - You can log out from the user section at the bottom left<br />
            <br /><br />
            Additional features will be included in the project in the future.</div>,
        date: "19/01/2023",
        link: "https://seuslr.csb.app/#",
        responsive: false,
        stars: ['star', 'star']
    },
    {
        id: 5,
        title: "Car Game",
        img: cargame,
        subtitles: ['Target events', 'If/Else conditions', 'DOM Manipulation'],
        text: <div>In this demo project,
            I worked with many nested if/else structures.
            I enabled each of the buttons on the screen to
            detect the values of its parent element and perform
            the necessary mathematical operations. This project
            will be developed by adding more cars, possibilities
            and features. <br /><br />
            - When we first start the game, we have a certain amount of money and the aim is to increase
            this money and buy all the cars.<br /><br />

            - Each car is salable as much as the probability it has written on it, and when sold, it
            generates revenue of 1.5 times its price.<br /><br />

            - The cars you buy go to your garage first, it's up to your game strategy to put them on
            sale or keep them in your garage.<br /><br />

            In the next update, the cars will have to wait until the time written on them before they
            are sold, and more cars will be added.</div>,
        date: "11/01/2023",
        link: "https://codepen.io/alkm181716/full/mdjmeJY",
        responsive: false,
        stars: ['star', 'star', 'star']
    },
    {
        id: 4,
        title: "Music Player",
        img: MusicPlayer,
        subtitles: ['Construction functions', 'Arrays', 'DOM Manipulation', 'Audio events'],
        text: <div>In this project, Javascript is mainly used. Arrays are created using the
            constructor function and the elements of these arrays are communicated with the relevant
            html tags. In this study, which dome manipulation is frequently used, the project was
            concluded by using if-else structures abundantly.</div>,
        date: "21/12/2022",
        link: "https://codepen.io/alkm181716/full/abjzPBo",
        responsive: false,
        stars: ['star', 'star', 'star', 'star']
    },
    {
        id: 3,
        title: "One Page Grid",
        img: onePageGrid4,
        subtitles: ['Grid'],
        text: <div>This page is a very similar copy of a design on the internet. The goal is
            to create a blog's homepage using the "grid". Photos and texts are placed using the data of
            the copied page. It is one of the first examples I made while learning the grid concept.</div>,
        date: "19/11/2022",
        link: "https://codepen.io/alkm181716/full/WNydjZN",
        responsive: false,
        stars: ['star', 'star']
    },
    {
        id: 2,
        title: "Country Info (API)",
        img: countryApi,
        subtitles: ['API', 'Async Await', 'DOM Manipulation', 'Json', 'Creating Html elements'],
        text: <div>In this study, I had the chance to use the API for the first time. I pulled
            the data I wanted from the database in the desired format and assigned it to the relevant
            html tags. It was a very productive study to understand the working logic of APIs and to
            understand how to get the desired data. <br /><br />
            On 14/02/2023 i updated this project using React.<br /><br />
            JS Version : https://codepen.io/alkm181716/pen/jOpbNeN</div>,
        date: "23/12/2022",
        link: "https://24hqln.csb.app/",
        responsive: true,
        stars: ['star', 'star']
    },
    {
        id: 1,
        title: "Quiz App ***",
        img: quizappupdated,
        subtitles: ['React', "Re-create the old one"],
        text: <div>I redesigned the quiz application I used to make
            using javascript, using React. I made both visual improvements
            and updated my codes. Thanks to the advantages of React, I was able
            to re-code the application much more easily. <br /><br />
            I updated my old application and I had the opportunity to better u
            nderstand the differences between the application I made using only
            javascript and this version using react. <br /><br />
            Previous version: https://codepen.io/alkm181716/pen/poZoawE</div>,
        date: "12/02/2023",
        link: "https://j9rf1r.csb.app/",
        responsive: true,
        stars: ['star', 'star', 'star']
    },
]

function ProjectsContextProvider({ children }) {

    const [portfolio, setProjects] = useState(projects)

    return (
        <ProjectsContext.Provider value={{ portfolio, setProjects }}>
            {children}
        </ProjectsContext.Provider>
    )
}

export default ProjectsContextProvider