import { useState } from "react";
import DashboardBoxes from "../components/DashboardBoxes";

export default function Dashboard() {
    const[count, setCount] = useState(123)
    return (
        <div>
            <h1>Dashboard</h1>
            <DashboardBoxes
                quantidadeSenhas={count}
            />
        </div>
    )
}