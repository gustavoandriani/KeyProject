import { useState } from "react"

export default function DashboardBoxes({ quantidadeSenhas }) {
    return (
        <div>
            <p>Quantidade de senhas: {quantidadeSenhas}</p>
        </div>
    )
}