import { SVGAttributes } from "react"
function Icon(props: SVGAttributes<{}>): JSX.Element {
    return (
        <svg {...props} fill="currentColor" viewBox="0 0 448 512" xmlns="http://www.w3.org/2000/svg">
        	<path d="M96 392V96H24a24 24 0 0 0-24 24v368a24 24 0 0 0 24 24h272a24 24 0 0 0 24-24v-40H152a56.06 56.06 0 0 1-56-56zm224-288V0H152a24 24 0 0 0-24 24v368a24 24 0 0 0 24 24h272a24 24 0 0 0 24-24V128H344a24.07 24.07 0 0 1-24-24zm64 128v48a8 8 0 0 1-8 8h-56v56a8 8 0 0 1-8 8h-48a8 8 0 0 1-8-8v-56h-56a8 8 0 0 1-8-8v-48a8 8 0 0 1 8-8h56v-56a8 8 0 0 1 8-8h48a8 8 0 0 1 8 8v56h56a8 8 0 0 1 8 8zm57-159L375 7a24 24 0 0 0-17-7h-6v96h96v-6.06A24 24 0 0 0 441 73z"/>
        </svg>
    )
}

export default Icon
