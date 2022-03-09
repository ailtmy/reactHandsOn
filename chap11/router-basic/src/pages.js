import React from "react";
import { Link, useLocation, Outlet } from "react-router-dom";

export function Home() {
    return (
        <div>
            <h1>[Company Website]</h1>
            <nav>
                <Link to="about">About</Link>
                <Link to="events">Events</Link>
                <Link to="products">Products</Link>
                <Link to="contact">Contact Us</Link>
            </nav>
        </div>
    );
}

export function About() {
    return (
        <div>
            <h1>[About]</h1>
            <Outlet />
        </div>
    );
}

export function History() {
    return (
        <section>
            <h2>Our History</h2>
            <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ea
                ipsam quasi quis veritatis expedita voluptate hic a alias! Quos
                aperiam reiciendis fugiat nobis blanditiis, sit quod sapiente
                tempora minus. Similique.
            </p>
        </section>
    );
}

export function Services() {
    return (
        <section>
            <h2>Our Service</h2>
            <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Asperiores dolorum delectus maxime similique incidunt! Dolores,
                suscipit? Consectetur illo, ad autem nesciunt laboriosam quas
                sunt! Modi corporis iste obcaecati rerum blanditiis.
            </p>
        </section>
    );
}

export function Location() {
    return (
        <section>
            <h2>Our Location</h2>
            <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Impedit asperiores harum quibusdam iste, voluptate itaque
                sapiente voluptates incidunt maxime, expedita, fugiat quam animi
                sunt atque soluta? Recusandae quae reiciendis reprehenderit.
            </p>
        </section>
    );
}

export function Events() {
    return (
        <div>
            <h1>[Events]</h1>
        </div>
    );
}

export function Products() {
    return (
        <div>
            <h1>[Products]</h1>
        </div>
    );
}

export function Contact() {
    return (
        <div>
            <h1>[Contact]</h1>
        </div>
    );
}

export function Whoops404() {
    let location = useLocation();
    console.log(location);
    return (
        <div>
            <h1>Resource not found at {location.pathname}</h1>
        </div>
    );
}
