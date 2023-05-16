import { SVGAttributes } from "react"
function Icon(props: SVGAttributes<{}>): JSX.Element {
    return (
        <svg {...props} fill="currentColor" viewBox="0 0 576 512" xmlns="http://www.w3.org/2000/svg">
        	<path d="M312 96H200a8 8 0 0 0-8 8v16a8 8 0 0 0 8 8h40v112H80V128h40a8 8 0 0 0 8-8v-16a8 8 0 0 0-8-8H8a8 8 0 0 0-8 8v16a8 8 0 0 0 8 8h40v256H8a8 8 0 0 0-8 8v16a8 8 0 0 0 8 8h112a8 8 0 0 0 8-8v-16a8 8 0 0 0-8-8H80V272h160v112h-40a8 8 0 0 0-8 8v16a8 8 0 0 0 8 8h112a8 8 0 0 0 8-8v-16a8 8 0 0 0-8-8h-40V128h40a8 8 0 0 0 8-8v-16a8 8 0 0 0-8-8zm256 144h-24V104a8 8 0 0 0-8-8h-16a8 8 0 0 0-8 8v136H384V104a8 8 0 0 0-8-8h-16a8 8 0 0 0-8 8v152a16 16 0 0 0 16 16h144v136a8 8 0 0 0 8 8h16a8 8 0 0 0 8-8V272h24a8 8 0 0 0 8-8v-16a8 8 0 0 0-8-8z"/>
        </svg>
    )
}

export default Icon
