import type { LinksFunction, MetaFunction } from '@remix-run/node'
import {
    Links,
    LiveReload,
    Meta,
    Outlet,
    Scripts,
    ScrollRestoration,
} from '@remix-run/react'
import styles from './assets/app.css'

export const meta: MetaFunction = () => ({
    charset: 'utf-8',
    title: 'Eliza',
    viewport: 'width=device-width,initial-scale=1',
})

export const links: LinksFunction = () => {
    return [
        {
            rel: 'stylesheet',
            href: styles,
        },
    ]
}

export default function App() {
    return (
        <html lang="en">
            <head>
                <Meta />
                <Links />
            </head>
            <body>
                <Outlet />
                <ScrollRestoration />
                <Scripts />
                <LiveReload />
            </body>
        </html>
    )
}
