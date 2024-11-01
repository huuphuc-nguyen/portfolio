// Mangata & Gallo
import project1_1 from '../images/mangata_gallo/1.png'
import project1_2 from '../images/mangata_gallo/2.png'
import project1_3 from '../images/mangata_gallo/3.png'
import project1_4 from '../images/mangata_gallo/4.png'
import project1_5 from '../images/mangata_gallo/5.png'
import project1_6 from '../images/mangata_gallo/6.png'
import project1_7 from '../images/mangata_gallo/7.png'

// Movie App
import project2 from '../images/movieapp/project2.png'
import project2_1 from '../images/movieapp/1.png'

// WPF Music Player
import project3 from '../images/musicPlayer/project3.png'
import project3_1 from '../images/musicPlayer/1.png'
import project3_2 from '../images/musicPlayer/2.png'
import project3_3 from '../images/musicPlayer/3.png'
import project3_4 from '../images/musicPlayer/4.png'
import project3_5 from '../images/musicPlayer/5.png'
import project3_6 from '../images/musicPlayer/6.png'
import project3_7 from '../images/musicPlayer/7.png'

// C++ Console Game
import project4 from '../images/crossTheRoad/project4.png'
import project4_1 from '../images/crossTheRoad/1.png'
import project4_2 from '../images/crossTheRoad/2.png'
import project4_3 from '../images/crossTheRoad/3.png'

// Java Socket App
import project5 from '../images/javaSocket/project5.png'

// .NET API for a Jewelry Store
import project6 from '../images/webApi/project6.png'

// FutureSelf - Time Capsule
import project7 from '../images/futureself/project7_1.png'
import project7_1 from '../images/futureself/project7_2.png'
import project7_2 from '../images/futureself/project7_3.png'

export const projectData = [  
    {
        id: 7,
        title: 'FutureSelf - Time Capsule',
        description: '🏆First place - Beginner Track RowdyHacks X🏆Back to the Future shows we can shape the future. Created for RowdyHackX, FutureSelf lets you send messages to your future self, keeping you motivated and focused on your goals with AI-powered Goal Tracking System.',  
        img: [project7, project7_1, project7_2],
        thumbnail: project7,
        platform: 'Website',
        techStack: "ReactJS, TailwindCSS, Supabase, NodeJS, Express, Vercel, Groq-api",
        github: 'https://github.com/huuphuc-nguyen/FutureSelf',
        demo:'https://sendtofutureself.vercel.app/'
    },
    {
        id: 6,
        title: '.NET API for a Jewelry Store',
        description: 'A Back-End project built with .NET Core that provides CRUD APIs, admin authentication, and database management for a local jewelry store.',  
        img: [project6],
        thumbnail: project6,
        platform: 'Web API',
        techStack: ".NET 6, C#, Entity Framework, SQL Server, Swagger, JWT, AutoMapper, Docker, Azure",
        github: 'https://github.com/huuphuc-nguyen/ASP.NET-CORE-TiemVangKimCuc-SER/',
        demo:'https://webtiemvangkimcucser.azurewebsites.net/'
    },
    {
        id: 1,
        title: 'Mangata & Gallo Website',
        description: 'A landing page for a local jelwery store. This project is a part of Meta Front-End course.',
        img: [
            'https://huuphuc-nguyen.github.io/HTML-CSS-JS-Mangata-Gallo-Webpage/assets/Designer.png',
            project1_1,
            project1_7,
            project1_2,
            project1_4,
            project1_3,
            project1_5,
            project1_6
        ],
        thumbnail: 'https://huuphuc-nguyen.github.io/HTML-CSS-JS-Mangata-Gallo-Webpage/assets/Designer.png',
        platform: 'Web',
        techStack: 'HTML, CSS, Javascript',
        github: 'https://github.com/huuphuc-nguyen/HTML-CSS-JS-Mangata-Gallo-Webpage/',
        demo:'https://huuphuc-nguyen.github.io/HTML-CSS-JS-Mangata-Gallo-Webpage/'
    },
    {
        id: 2,
        title: 'Movie App',
        description: 'A ReactJS project that uses Redux Toolkit to manage states and fetches movie data from OMDB API.',
        img: [
            project2,
            project2_1
        ],
        thumbnail: project2,
        platform: 'Web',
        techStack: "ReactJS, Redux Toolkit, CSS, Vercel, OMDB API",
        github: 'https://github.com/huuphuc-nguyen/ReactJs-Movie-App/',
        demo:'https://movieapp-felixnguyen.vercel.app/'
    },
    {
        id: 3,
        title: 'WPF Music Player',
        description: 'An application built for Windows OS that allows users to play music files, create playlist of favorite songs, save and load playlist.',
        img: [
            project3,
            project3_1,
            project3_2,
            project3_3,
            project3_4,
            project3_5, 
            project3_6,
            project3_7
        ],
        thumbnail: project3,
        platform: 'Windows OS',
        techStack: ".NET Framework, C#, WPF, XAML, File I/O",
        github: 'https://github.com/huuphuc-nguyen/WPF-Media-Player',
        demo:'https://www.youtube.com/watch?v=XAD-nnFs7Qg'
    },
    {
        id: 4,
        title: 'C++ Console Game',
        description: 'Console game project built in C++ allows user to store and load game data and play the game with different levels.',
        img: [
            project4,
            project4_1,
            project4_2,
            project4_3
        ],
        thumbnail: project4,
        platform: 'Desktop',
        techStack: "C++, Data Structures, File I/O, .wav file handling, multi-threading",
        github: 'https://github.com/huuphuc-nguyen/HCMUS-Cross-The-Road',
        demo:'https://www.youtube.com/watch?v=Z6GpKiO4j0Y'
    },
    {
        id: 5,
        title: 'Java Socket App',
        description: 'Server-Client application built in Java that allows admin to spy on client activities on folder and file.',
        img: [project5],
        thumbnail: project5,
        platform: 'Desktop',
        techStack: "Java, JavaSwing, Socket Programming, Multi-threading",
        github: 'https://github.com/huuphuc-nguyen/HCMUS-Java-Socket-Client/',
        demo:'https://youtu.be/FlDzRMk0pAM'
    },
]
