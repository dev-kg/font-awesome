import { SVGAttributes } from "react"
function Icon(props: SVGAttributes<{}>): JSX.Element {
    return (
        <svg {...props} fill="currentColor" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg">
        	<path d="M368 0c-62.61 0-115.35 40.2-135.18 96h52.54C302 67.45 332.63 48 368 48a96.11 96.11 0 0 1 96 96c0 50.07-38.67 90.84-87.63 95.15l-4.84 48.49C449.39 285.73 512 222.32 512 144A144 144 0 0 0 368 0zm-48 128H32A32 32 0 0 0 .16 163.18l32 320A32 32 0 0 0 64 512h224a32 32 0 0 0 31.84-28.82l32-320A32 32 0 0 0 320 128zm-41.76 128H73.76l-6.4-64h217.28z"/>
        </svg>
    )
}

export default Icon
