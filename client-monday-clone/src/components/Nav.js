import { useNavigate } from 'react-router-dom'
import logo from '../images/crm-logo.png'

const Nav = () => {

    const navigate = useNavigate()

    return (
        <nav className='navStyle'>
            <div className="logo-container">
                <img src={logo} alt="Monday-clone logo" />
            </div>
            <div>
                <div className="icon" onClick={() => navigate('/ticket')}>Ticket</div>
                <div className="icon" onClick={() => navigate("/")}>Dashboard</div>
            </div>
        </nav>
    )
}

export default Nav