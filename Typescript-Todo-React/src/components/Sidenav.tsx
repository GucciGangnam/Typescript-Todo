// IMPORTS 
import "./Sidenav.css"

// TYPES

// COMPONENT
export const Sidenav = () => {
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
                    <button>btn</button>
                    <button>btn</button>
                </div>
            </div>


            <div className="S2">
                <div className="Indicator-Container">
                    All
                    <p>9</p>
                </div>
                <div className="Indicator-Container">
                    Due Today
                    <p>9</p>
                </div>
                <div className="Indicator-Container">
                    Overdue
                    <p>9</p>
                </div>
                <div className="Indicator-Container">
                    Complete
                    <p>9</p>
                </div>
            </div>

            <div className="S3">
                <input placeholder="New List" />
                <svg width="30px" height="30px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g id="SVGRepo_bgCarrier" stroke-width="0" />
                    <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round" />
                    <g id="SVGRepo_iconCarrier"> <path d="M6 12H18M12 6V18" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" /> </g>
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