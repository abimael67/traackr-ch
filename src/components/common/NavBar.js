import './NavBar.css'

const NavBar = ({handleChange}) => {
    return (
        <nav className="level">
            <div className="level-left">
                <div className="level-item">
                    <div className="title">
                        <h1 className="title is-1">Influencers</h1>
                    </div>
                </div>
            </div>
            <div className="level-right">
                <div className="field">
                    <p className="control has-icons-left has-icons-right">
                        <input className="input search-input" type="text" aria-label="search-input" onChange={handleChange} placeholder="Search for an influencer" />
                        <span className="icon is-small is-left">
                            <ion-icon name="search-outline"></ion-icon>
                        </span>
                    </p>
                </div>
            </div>
        </nav>
    )
}

export default NavBar