import { Link } from "react-router-dom"


const NavLink = ({ to, children, className = '' }) => (
    <Link to={to} className={className}>
        {children}
    </Link>
)

export default NavLink