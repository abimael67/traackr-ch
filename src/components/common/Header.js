import "./Header.css"
import logo from '../../assets/logo.png'
const Header = () => {
    return (
        <nav className="navbar">
            <div className="navbar-brand">
                <a className="navbar-item">
                    <img src={logo} alt="Logo"  />
                </a>
            </div>
            <div className="navbar-menu">
                <div className="navbar-end">
                    <div className="navbar-item">
                        <div className="field is-grouped">
                            <p className="control dash">
                                Dashboard
                            </p>
                            <p className="control">
                                <a className="button influencer-list-button">
                                    <span>Influencer List</span>
                                </a>
                            </p>
                            <a>
                                <ion-icon name="person-circle-outline" size="large"></ion-icon>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default Header