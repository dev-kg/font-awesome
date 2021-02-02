import React, { SVGAttributes } from "react"
function Icon(props: SVGAttributes<{}>): JSX.Element {
    return (
        <svg {...props} fill="currentColor" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg">
        	<path d="M480 160c17.67 0 32-14.33 32-32V0a303.17 303.17 0 0 1-135.55 32h-240.9A303.17 303.17 0 0 1 0 0v128c0 17.67 14.33 32 32 32h32v96H8c-4.42 0-8 3.58-8 8v16c0 4.42 3.58 8 8 8h56v216c0 4.42 3.58 8 8 8h16c4.42 0 8-3.58 8-8V288h320v216c0 4.42 3.58 8 8 8h16c4.42 0 8-3.58 8-8V288h56c4.42 0 8-3.58 8-8v-16c0-4.42-3.58-8-8-8h-56v-96h32zM32 128V47.56C65.39 58.38 100.49 64 135.55 64h240.89c35.07 0 70.17-5.62 103.55-16.44V128H32zm64 32h144v96H96v-96zm320 96H272v-96h144v96z"/>
        </svg>
    )
}

export default Icon
