import { SVGAttributes } from "react"
function Icon(props: SVGAttributes<{}>): JSX.Element {
    return (
        <svg {...props} fill="currentColor" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg">
        	<path d="M484 32H251a28 28 0 0 0-28 28v168a28 28 0 0 0 28 28h233a28 28 0 0 0 28-28V60a28 28 0 0 0-28-28zm-20 176H271V80h193zm-35 112H244a20 20 0 0 0-20 20v120a20 20 0 0 0 20 20h185a20 20 0 0 0 20-20V340a20 20 0 0 0-20-20zm-28 112H272v-64h129zm-237-48h-44V48a16 16 0 0 0-16-16H88a16 16 0 0 0-16 16v336H28a12 12 0 0 0-8.73 20.24l68 72a12 12 0 0 0 17.44 0l68-72A12 12 0 0 0 164 384z"/>
        </svg>
    )
}

export default Icon
