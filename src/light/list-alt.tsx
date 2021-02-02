import React, { SVGAttributes } from "react"
function Icon(props: SVGAttributes<{}>): JSX.Element {
    return (
        <svg {...props} fill="currentColor" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg">
        	<path d="M464 64c8.823 0 16 7.178 16 16v352c0 8.822-7.177 16-16 16H48c-8.823 0-16-7.178-16-16V80c0-8.822 7.177-16 16-16h416m0-32H48C21.49 32 0 53.49 0 80v352c0 26.51 21.49 48 48 48h416c26.51 0 48-21.49 48-48V80c0-26.51-21.49-48-48-48zm-336 96c-17.673 0-32 14.327-32 32s14.327 32 32 32 32-14.327 32-32-14.327-32-32-32zm0 96c-17.673 0-32 14.327-32 32s14.327 32 32 32 32-14.327 32-32-14.327-32-32-32zm0 96c-17.673 0-32 14.327-32 32s14.327 32 32 32 32-14.327 32-32-14.327-32-32-32zm288-148v-24a6 6 0 0 0-6-6H198a6 6 0 0 0-6 6v24a6 6 0 0 0 6 6h212a6 6 0 0 0 6-6zm0 96v-24a6 6 0 0 0-6-6H198a6 6 0 0 0-6 6v24a6 6 0 0 0 6 6h212a6 6 0 0 0 6-6zm0 96v-24a6 6 0 0 0-6-6H198a6 6 0 0 0-6 6v24a6 6 0 0 0 6 6h212a6 6 0 0 0 6-6z"/>
        </svg>
    )
}

export default Icon
