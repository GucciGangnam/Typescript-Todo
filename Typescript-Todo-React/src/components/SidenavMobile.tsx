// IMPORTS 
// Styles 
import "./SidenavMobile.css"

// TYPES 

// COMPONENTS 
export const SidenavMobile = () => {
    return (
        <div className="SidenavMobile">
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


                <input
                    className="New-List-Container"
                    placeholder="Add New List">
                </input>

                
                <div className="List-Container">
                    <div className="List-Name">
                        All
                    </div>
                    <div className="List-Count">
                        9
                    </div>
                </div>
                <div className="List-Container">
                    <div className="List-Name">
                        List Name
                    </div>
                    <div className="List-Count">
                        9
                    </div>
                </div>
                <div className="List-Container">
                    <div className="List-Name">
                        List Name
                    </div>
                    <div className="List-Count">
                        9
                    </div>
                </div>
                <div className="List-Container">
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