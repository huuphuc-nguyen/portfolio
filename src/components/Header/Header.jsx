import React, {useState, useEffect, useRef} from 'react'
import Sun from '../../assets/images/sun.png'
import Moon from '../../assets/images/moon.png'
import { scroller } from 'react-scroll'
import { useNavigate, useLocation } from 'react-router-dom'

const Nav = ({children}) => {
    const navigate= useNavigate();

    const scrollTo = (name) => {
        scroller.scrollTo(name, {
            duration: 800,
            delay: 0,
            smooth: 'easeInOutQuart',
        }); 
    };

   return (
    <ul className="flex gap-4 md:gap-10">
        {React.Children.map(children, (child) => {
            return React.cloneElement(child, {
                className: "animate-fadein opacity-0 cursor-pointer w-20 text-center dark:hover:bg-blue-800 hover:bg-blue-600 hover:text-white rounded-lg p-2",
                onClick: () => {
                    // Check if the current url has #section or not
                    // If yes -> use scrollTo to scroll to the section
                    // If not -> use navigate to navigate to the section
                    // use Navigate instead of scrollTo directy to handle click from differnt pages
                    if(window.location.href.includes('#')) {
                        scrollTo(`${child.props.children.toLowerCase()}`);
                    }
                    else{
                        navigate(`/#${child.props.children.toLowerCase()}`, {replace: true});
                    }
                    }
                });
        })}
    </ul>
   );
}

const Header = () => {
    const [darkMode, setDarkMode] = useState(() => {
        const savedMode = localStorage.getItem('darkMode');
        return savedMode ? JSON.parse(savedMode) : false;
    });

    const [prevScrollPos, setPrevScrollPos] = useState(0);

    const location = useLocation();

    const headerRef = useRef(null);

    useEffect(() => {
        const handleScroll = () => {
            const currentScroll = window.scrollY;
            const header = headerRef.current;

            if(prevScrollPos > currentScroll) {
                header.style.transform = 'translate(-50%,0)';
            }
            else {
                header.style.transform = 'translate(-50%,-200%)';
            }

            setPrevScrollPos(currentScroll);
        }

        window.addEventListener('scroll', handleScroll);

        return () => {window.removeEventListener('scroll', handleScroll)};
    });

    useEffect(() => {
        if (darkMode) {
            document.documentElement.classList.add('dark');
            
        } else {
            document.documentElement.classList.remove('dark');
        }
        
        localStorage.setItem('darkMode', JSON.stringify(darkMode));
    }, [darkMode]);

    const handleThemeToggle = () => {
        setDarkMode(!darkMode);
    }

    // This is used to handle when user click nav bar in Project Page
    useEffect(() => {
        const fragment = location.hash.replace('#', ''); // Extract fragment identifier
        
        // Check if fragment is not empty
        if (fragment) {
            scroller.scrollTo(fragment, {
                duration: 800,
                delay: 0,
                smooth: 'easeInOutQuart',
            });
        }
    }, [location.hash]); // Include location.hash in dependency array

  return (
    <div ref={headerRef} className="rounded-2xl z-20 sm:bg-white/60 sm:fixed top-4 left-1/2 transform -translate-x-1/2 dark:bg-black/40 dark:text-white text-black bg-white 
        sm:max-w-full sm:w-4/5 sm:h-16 overflow-hidden animate-spread transition-transform duration-500
        hidden sm:flex sm:items-center sm:justify-between px-10 md:px-20"
        style={{ backdropFilter: 'blur(20px)' }}>
      
      <span className="animate-fadein opacity-0 shadow_lg bg-blue-600/80 dark:bg-blue-800 text-white p-2 rounded-xl shadow-md" style={{
        fontWeight:700,
        }}>Felix Nguyen</span>

        <Nav> 
            <li>Home</li>
            <li>About</li>
            <li>Projects</li>
            <li>Contact</li>
        </Nav>

      <img src={!darkMode ? Sun : Moon} className='animate-fadein opacity-0 w-10 cursor-pointer hover-scale' onClick={handleThemeToggle}/>
    </div>
  )
}

export default Header
