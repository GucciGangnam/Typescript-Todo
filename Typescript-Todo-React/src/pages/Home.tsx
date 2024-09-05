// IMPORTS 
// Styles 
import "./Home.css"
// React 
import { useState, useEffect } from "react"
// Pages 

// Components 
import { Sidenav } from "../components/Sidenav";
import { SidenavMobile } from "../components/SidenavMobile";
import { ListComp } from "../components/ListComp";


// TYPES 
type Task = { 
    name: string, 
    completed: boolean, 
    due: Date
}

type List = { 
    name: string, 
    tasks: Task[]
}

// COMPOENENT 
export const Home = () => {
    // CLIENT VIEWPORT //
    const [isMobile, setIsMobile] = useState(window.innerWidth < 600);
    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth < 600);
        };
        window.addEventListener('resize', handleResize);
        // Cleanup event listener on component unmount
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);
    // DARKMODE //
    const [isDarkMode, setIsDarkMode] = useState(false);
    const toggleTheme = () => {
        setIsDarkMode(prevMode => !prevMode);
    };
    useEffect(() => {
        if (isDarkMode) {
            document.documentElement.setAttribute('data-theme', 'dark');
        } else {
            document.documentElement.removeAttribute('data-theme');
        }
    }, [isDarkMode]);

    // APP DATA 
    const [lists, setLists] = useState<List[]>([]);
    useEffect(() => { 
        setLists([
            {
                name: "All", 
                tasks: []
            }
        ])
    }, [])

    // SELECTED LIST 
    const [selectedList, setSelectedList] = useState()





    return (
        <div className="Home">
            <div className={isMobile ? 'App-Mobile' : 'App'}>
                {isMobile ? (
                    <SidenavMobile isDarkMode={isDarkMode} toggleTheme={toggleTheme} />
                ) : (
                    <Sidenav lists={lists} setLists={setLists} isDarkMode={isDarkMode} toggleTheme={toggleTheme} />
                )}
                <ListComp />
            </div>
        </div>
    )
}