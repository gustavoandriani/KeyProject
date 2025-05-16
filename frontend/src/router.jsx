import { createBrowserRouter } from "react-router-dom"
import App from "./App"
import Dashboard from "./pages/Dashboard"
import RootLayout from "./pages/RootLayout"
import GerarSenha from "./pages/GerarSenha"

const router = createBrowserRouter([
    {
        path: "/",
        element: <RootLayout />,
        children: [{
            index: true,
            element: <GerarSenha />
        }, {
            path: "dashboard",
            element: <Dashboard />
        }]
    }
])

export default router