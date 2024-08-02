import { Outlet } from 'react-router-dom'
import { FooterComponent } from '../components/Footer'
import Nav from '../components/Nav'

function UserLayout() {
    return (
        <div>
            < Nav />
            <Outlet />
            <FooterComponent />
        </div >
    )
}

export default UserLayout