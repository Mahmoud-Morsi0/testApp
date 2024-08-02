

import { Navbar } from "flowbite-react";
import { Link } from 'react-dom';

export function Nav() {
    return (
        <Navbar fluid rounded className="bg-gray-200">
            <Navbar.Brand as={Link} href="https://flowbite-react.com">
                <span className=" self-center whitespace-nowrap text-xl font-semibold dark:text-white">Flowbite React</span>
            </Navbar.Brand>
            <Navbar.Toggle />
            <Navbar.Collapse>
                <Navbar.Link href="#" active>
                    Home
                </Navbar.Link>
                <Navbar.Link as={Link} href="#">
                    About
                </Navbar.Link>
                <Navbar.Link href="/service">Services</Navbar.Link>
                <Navbar.Link href="/about">Pricing</Navbar.Link>
                <Navbar.Link href="/about">Contact</Navbar.Link>
            </Navbar.Collapse>
        </Navbar>
    );
}
