import { SVGAttributes } from "react"
function Icon(props: SVGAttributes<{}>): JSX.Element {
    return (
        <svg {...props} fill="currentColor" viewBox="0 0 576 512" xmlns="http://www.w3.org/2000/svg">
        	<path d="M312 96H200a8 8 0 0 0-8 8v16a8 8 0 0 0 8 8h40v112H80V128h40a8 8 0 0 0 8-8v-16a8 8 0 0 0-8-8H8a8 8 0 0 0-8 8v16a8 8 0 0 0 8 8h40v256H8a8 8 0 0 0-8 8v16a8 8 0 0 0 8 8h112a8 8 0 0 0 8-8v-16a8 8 0 0 0-8-8H80V272h160v112h-40a8 8 0 0 0-8 8v16a8 8 0 0 0 8 8h112a8 8 0 0 0 8-8v-16a8 8 0 0 0-8-8h-40V128h40a8 8 0 0 0 8-8v-16a8 8 0 0 0-8-8zm256 288h-70.34V112a16 16 0 0 0-16-16h-16a16 16 0 0 0-11.31 4.69L412 143a8 8 0 0 0 0 11.31l11.31 11.31a8 8 0 0 0 11.32 0l31-31V384H392a8 8 0 0 0-8 8v16a8 8 0 0 0 8 8h176a8 8 0 0 0 8-8v-16a8 8 0 0 0-8-8z"/>
        </svg>
    )
}

export default Icon
