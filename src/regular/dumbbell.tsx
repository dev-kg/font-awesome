import React, { SVGAttributes } from "react"
function Icon(props: SVGAttributes<{}>): JSX.Element {
    return (
        <svg {...props} fill="currentColor" viewBox="0 0 640 512" xmlns="http://www.w3.org/2000/svg">
        	<path d="M632 224h-24v-72c0-30.9-25.1-56-56-56h-32c-2.7 0-5.4.4-8 .8V88c0-30.9-25.1-56-56-56h-32c-30.9 0-56 25.1-56 56v136h-96V88c0-30.9-25.1-56-56-56h-32c-30.9 0-56 25.1-56 56v8.8c-2.6-.4-5.3-.8-8-.8H88c-30.9 0-56 25.1-56 56v72H8c-4.4 0-8 3.6-8 8v48c0 4.4 3.6 8 8 8h24v72c0 30.9 25.1 56 56 56h32c2.7 0 5.4-.4 8-.8v8.8c0 30.9 25.1 56 56 56h32c30.9 0 56-25.1 56-56V288h96v136c0 30.9 25.1 56 56 56h32c30.9 0 56-25.1 56-56v-8.8c2.6.4 5.3.8 8 .8h32c30.9 0 56-25.1 56-56v-72h24c4.4 0 8-3.6 8-8v-48c0-4.4-3.6-8-8-8zM120 368H88c-4.4 0-8-3.6-8-8V152c0-4.4 3.6-8 8-8h32c4.4 0 8 3.6 8 8v208c0 4.4-3.6 8-8 8zm104 56c0 4.4-3.6 8-8 8h-32c-4.4 0-8-3.6-8-8V88c0-4.4 3.6-8 8-8h32c4.4 0 8 3.6 8 8v336zm240 0c0 4.4-3.6 8-8 8h-32c-4.4 0-8-3.6-8-8V88c0-4.4 3.6-8 8-8h32c4.4 0 8 3.6 8 8v336zm96-64c0 4.4-3.6 8-8 8h-32c-4.4 0-8-3.6-8-8V152c0-4.4 3.6-8 8-8h32c4.4 0 8 3.6 8 8v208z"/>
        </svg>
    )
}

export default Icon
