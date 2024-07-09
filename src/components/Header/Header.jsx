import React, {useState, useEffect, useRef} from 'react'
import Sun from '../../assets/images/sun.png'
import Moon from '../../assets/images/moon.png'
import { scroller } from 'react-scroll'
import { useNavigate, useLocation } from 'react-router-dom'

const Nav = ({children, ...props}) => {
    const navigate= useNavigate();

    const scrollTo = (name) => {
        scroller.scrollTo(name, {
            duration: 800,
            delay: 0,
            smooth: 'easeInOutQuart',
        }); 
    };

   return (
    // Burder menu at break point sm
    <ul className="flex-col md:flex-row md:flex gap-4 md:gap-10">
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

                    // handle burger menu
                    props.handleBurgerClick();
                    
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
    const burgerRef = useRef(null);

    const [isBurgerOpen, setIsBurgerOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const currentScroll = window.scrollY;
            const header = headerRef.current;
            const burger = burgerRef.current;

            if(prevScrollPos > currentScroll) {
                header.style.transform = 'translate(-50%,0)';
                burger.style.transform = 'translate(0,0)';
            }
            else {
                header.style.transform = 'translate(-50%,-200%)';
                burger.style.transform = 'translate(0,-300%)';
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

    const handleBurgerClick = () => {
        setIsBurgerOpen(!isBurgerOpen);
        if (isBurgerOpen) {document.body.classList.remove('overflow-hidden');}
        else {document.body.classList.add('overflow-hidden');}
    };

  return (
    <>
        {/* Burger Menu */}
        <div ref={burgerRef} 
            onClick={handleBurgerClick} // before setIsburger rerender the component, value is false -> add class
            className="w-10 h-10 py-2 flex flex-col items-center justify-around fixed top-10 transition-all duration-200 right-5 z-30 sm:hidden bg-bg_primary rounded-full shadow-lg">
                <div className={`w-5 h-1 rounded-md bg-black dark:bg-white text-center transition-all duration-400 ${isBurgerOpen ? 'transform rotate-45 absolute top-1/2' : ''}`}>{'\u00A0'}</div>
                <div className={`w-5 h-1 rounded-md bg-black dark:bg-white text-center ${isBurgerOpen ? 'animate-burger_hide' : 'animate-burger_show'}`}>{'\u00A0'}</div>
                <div className={`w-5 h-1 rounded-md bg-black dark:bg-white text-center transition-all duration-400 ${isBurgerOpen ? 'transform -rotate-45 absolute top-1/2' : ''}`}>{'\u00A0'}</div>
        </div>

        <div className={`z-20 fixed top-0 left-0 w-full h-dvh bg-white/90 dark:bg-black/60 ${isBurgerOpen ? 'block' : 'hidden'}
                        flex flex-col justify-center items-center gap-10 dark:text-white`}>
            <span className="animate-fadein opacity-0 shadow_lg bg-blue-600/80 dark:bg-blue-800 text-white p-2 rounded-xl shadow-md" style={{
                fontWeight:700,
                }}>Felix Nguyen</span>

            <Nav handleBurgerClick={handleBurgerClick}> 
                <li>Home</li>
                <li>About</li>
                <li>Projects</li>
                <li>Contact</li>
            </Nav>

            <img src={!darkMode ? Sun : Moon} className='animate-fadein opacity-0 w-10 cursor-pointer hover-scale' onClick={handleThemeToggle}/>
        </div>
    
        {/* Header Nav */}
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
    </>
  )
}

export default Header
