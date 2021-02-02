import React, { SVGAttributes } from "react"
function Icon(props: SVGAttributes<{}>): JSX.Element {
    return (
        <svg {...props} fill="currentColor" viewBox="0 0 448 512" xmlns="http://www.w3.org/2000/svg">
        	<path d="M432 32H16A16 16 0 0 0 0 48v416a16 16 0 0 0 16 16h416a16 16 0 0 0 16-16V48a16 16 0 0 0-16-16zM32 64h176v176H32zm0 384V272h176v176zm384 0H240V272h176zm0-208H240V64h176z"/>
        </svg>
    )
}

export default Icon
