import { NavLink } from "react-router-dom"

const Navbar = () => {
    return (
        <header className="header">
            <NavLink to='/' className="blue-gradient_text font-bold text-3xl">
                KARYOLI NIEVES
            </NavLink>
            <nav className="flex text-lg gap-7 font-medium">
                <NavLink to='/about' className={({ isActive }) => isActive ? 'text-blue-500' : 'text-black'}>
                    About
                </NavLink>
                <NavLink to='/projects' className={({ isActive }) => isActive ? 'text-blue-500' : 'text-black'}>
                    Projects
                </NavLink>
            </nav>
        </header>
    )
}

export default Navbar