// IMPORTS 
import "./Sidenav.css"

// TYPES
interface SidenavProps {
    toggleTheme: () => void;
    isDarkMode: boolean;
}

// COMPONENT
export const Sidenav = ({ toggleTheme, isDarkMode }: SidenavProps) => {
    return (
        <div className="Sidenav">



            <div className="S1">
                <div className="Avatar-Container">
                    PP
                </div>
                <div className="User-Name">
                    Name Here
                </div>
                <div className="Action-Buttons">
                    {isDarkMode ? (
                        <svg onClick={toggleTheme} width="30px" height="30px" cursor="pointer" viewBox="0 0 24 24" fill="white" xmlns="http://www.w3.org/2000/svg">
                            <g id="SVGRepo_bgCarrier" stroke-width="0" />
                            <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round" />
                            <g id="SVGRepo_iconCarrier"> <path d="M17 12C17 14.7614 14.7614 17 12 17C9.23858 17 7 14.7614 7 12C7 9.23858 9.23858 7 12 7C14.7614 7 17 9.23858 17 12Z" fill="white" /> <path fill-rule="evenodd" clip-rule="evenodd" d="M12 1.25C12.4142 1.25 12.75 1.58579 12.75 2V4C12.75 4.41421 12.4142 4.75 12 4.75C11.5858 4.75 11.25 4.41421 11.25 4V2C11.25 1.58579 11.5858 1.25 12 1.25ZM3.66865 3.71609C3.94815 3.41039 4.42255 3.38915 4.72825 3.66865L6.95026 5.70024C7.25596 5.97974 7.2772 6.45413 6.9977 6.75983C6.7182 7.06553 6.2438 7.08677 5.9381 6.80727L3.71609 4.77569C3.41039 4.49619 3.38915 4.02179 3.66865 3.71609ZM20.3314 3.71609C20.6109 4.02179 20.5896 4.49619 20.2839 4.77569L18.0619 6.80727C17.7562 7.08677 17.2818 7.06553 17.0023 6.75983C16.7228 6.45413 16.744 5.97974 17.0497 5.70024L19.2718 3.66865C19.5775 3.38915 20.0518 3.41039 20.3314 3.71609ZM1.25 12C1.25 11.5858 1.58579 11.25 2 11.25H4C4.41421 11.25 4.75 11.5858 4.75 12C4.75 12.4142 4.41421 12.75 4 12.75H2C1.58579 12.75 1.25 12.4142 1.25 12ZM19.25 12C19.25 11.5858 19.5858 11.25 20 11.25H22C22.4142 11.25 22.75 11.5858 22.75 12C22.75 12.4142 22.4142 12.75 22 12.75H20C19.5858 12.75 19.25 12.4142 19.25 12ZM17.0255 17.0252C17.3184 16.7323 17.7933 16.7323 18.0862 17.0252L20.3082 19.2475C20.6011 19.5404 20.601 20.0153 20.3081 20.3082C20.0152 20.6011 19.5403 20.601 19.2475 20.3081L17.0255 18.0858C16.7326 17.7929 16.7326 17.3181 17.0255 17.0252ZM6.97467 17.0253C7.26756 17.3182 7.26756 17.7931 6.97467 18.086L4.75244 20.3082C4.45955 20.6011 3.98468 20.6011 3.69178 20.3082C3.39889 20.0153 3.39889 19.5404 3.69178 19.2476L5.91401 17.0253C6.2069 16.7324 6.68177 16.7324 6.97467 17.0253ZM12 19.25C12.4142 19.25 12.75 19.5858 12.75 20V22C12.75 22.4142 12.4142 22.75 12 22.75C11.5858 22.75 11.25 22.4142 11.25 22V20C11.25 19.5858 11.5858 19.25 12 19.25Z" fill="white" /> </g>
                        </svg>
                    ) : (
                        <svg
                            onClick={toggleTheme}
                            width="30px"
                            height="30px"
                            viewBox="0 0 24 24"
                            fill="black"
                            cursor="pointer"
                            xmlns="http://www.w3.org/2000/svg">
                            <g id="SVGRepo_bgCarrier"
                                stroke-width="0" />
                            <g id="SVGRepo_tracerCarrier"
                                stroke-linecap="round"
                                stroke-linejoin="round" />
                            <g id="SVGRepo_iconCarrier">
                                <path d="M3.32031 11.6835C3.32031 16.6541 7.34975 20.6835 12.3203 20.6835C16.1075 20.6835 19.3483 18.3443 20.6768 15.032C19.6402 15.4486 18.5059 15.6834 17.3203 15.6834C12.3497 15.6834 8.32031 11.654 8.32031 6.68342C8.32031 5.50338 8.55165 4.36259 8.96453 3.32996C5.65605 4.66028 3.32031 7.89912 3.32031 11.6835Z"
                                    stroke="#000000"
                                    stroke-width="2"
                                    stroke-linecap="round"
                                    stroke-linejoin="round" /> </g>
                        </svg>
                    )}
                    <svg
                        cursor="pointer"
                        xmlns="http://www.w3.org/2000/svg" fill={isDarkMode ? "#FFFFFF" : "#000000"} width="30px" height="30px" viewBox="0 0 24 24">
                        <g id="SVGRepo_bgCarrier" stroke-width="0" />
                        <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round" />
                        <g id="SVGRepo_iconCarrier">
                            <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 3c1.66 0 3 1.34 3 3s-1.34 3-3 3-3-1.34-3-3 1.34-3 3-3zm0 14.2c-2.5 0-4.71-1.28-6-3.22.03-1.99 4-3.08 6-3.08 1.99 0 5.97 1.09 6 3.08-1.29 1.94-3.5 3.22-6 3.22z" />
                        </g>
                    </svg>
                </div>
            </div>


            <div className="S2">
                <div className="Indicator-Container">
                    <div className="Name">
                        All
                    </div>
                    <div className="Count">
                        9
                    </div>
                </div>
                <div className="Indicator-Container">
                    <div className="Name">
                        Due today
                    </div>
                    <div className="Count">
                        9
                    </div>
                </div>
                <div className="Indicator-Container">
                    <div className="Name">
                        Overdue
                    </div>
                    <div className="Count">
                        9
                    </div>
                </div>
                <div className="Indicator-Container">
                    <div className="Name">
                        Complete
                    </div>
                    <div className="Count">
                        9
                    </div>
                </div>
            </div>

            <div className="S3">
                <input placeholder="New List" />
                <svg width="30px" height="30px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g id="SVGRepo_bgCarrier" stroke-width="0" />
                    <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round" />
                    <g id="SVGRepo_iconCarrier"> <path d="M6 12H18M12 6V18"
                        stroke={isDarkMode ? "#FFFFFF" : "#000000"}
                        stroke-width="2" stroke-linecap="round" stroke-linejoin="round" /> </g>
                </svg>
            </div>

            <div className="S4">
                <div className="List-Conatiner">
                    <div className="List-Name">
                        List Name
                    </div>
                    <div className="List-Count">
                        9
                    </div>
                </div>
                <div className="List-Conatiner">
                    <div className="List-Name">
                        List Name
                    </div>
                    <div className="List-Count">
                        9
                    </div>
                </div>
                <div className="List-Conatiner">
                    <div className="List-Name">
                        List Name
                    </div>
                    <div className="List-Count">
                        9
                    </div>
                </div>
                <div className="List-Conatiner">
                    <div className="List-Name">
                        List Name
                    </div>
                    <div className="List-Count">
                        9
                    </div>
                </div>
            </div>
        </div>
    )
}