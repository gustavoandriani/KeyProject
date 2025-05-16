import { Outlet } from "react-router-dom";

export default function RootLayout() {
    return (
        <>
            <nav className="">
                <h1>GERENCIADOR DE SENHAS</h1>
            </nav>
            <Outlet />
        </>
    )
}