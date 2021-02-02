import React, { SVGAttributes } from "react"
function Icon(props: SVGAttributes<{}>): JSX.Element {
    return (
        <svg {...props} fill="currentColor" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg">
        	<path d="M416 64v384h56a8 8 0 0 1 8 8v16a8 8 0 0 1-8 8H328a8 8 0 0 1-8-8v-16a8 8 0 0 1 8-8h56V272H128v176h56a8 8 0 0 1 8 8v16a8 8 0 0 1-8 8H40a8 8 0 0 1-8-8v-16a8 8 0 0 1 8-8h56V64H40a8 8 0 0 1-8-8V40a8 8 0 0 1 8-8h144a8 8 0 0 1 8 8v16a8 8 0 0 1-8 8h-56v176h256V64h-56a8 8 0 0 1-8-8V40a8 8 0 0 1 8-8h144a8 8 0 0 1 8 8v16a8 8 0 0 1-8 8z"/>
        </svg>
    )
}

export default Icon