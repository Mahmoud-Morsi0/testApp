import { Nav } from '../components/Nav'
import { Outlet } from 'react-router-dom'
import { FooterComponent } from '../components/Footer'

function UserLayout() {
    return (
        <div>
            <Nav />
            <Outlet />
            <FooterComponent />
        </div>
    )
}

export default UserLayout