import { SVGAttributes } from "react"
function Icon(props: SVGAttributes<{}>): JSX.Element {
    return (
        <svg {...props} fill="currentColor" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg">
        	<path d="M304 304h-80v48h80a16 16 0 0 0 16-16v-16a16 16 0 0 0-16-16zM96 320v16a16 16 0 0 0 16 16h80v-48h-80a16 16 0 0 0-16 16zm296-160H120a24 24 0 0 0-24 24v48a24 24 0 0 0 24 24h272a24 24 0 0 0 24-24v-48a24 24 0 0 0-24-24zm56-96H64a64 64 0 0 0-64 64v256a64 64 0 0 0 64 64h384a64 64 0 0 0 64-64V128a64 64 0 0 0-64-64zm16 320a16 16 0 0 1-16 16H64a16 16 0 0 1-16-16V128a16 16 0 0 1 16-16h384a16 16 0 0 1 16 16z"/>
        </svg>
    )
}

export default Icon
