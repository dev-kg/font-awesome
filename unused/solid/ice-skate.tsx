import { SVGAttributes } from "react"
function Icon(props: SVGAttributes<{}>): JSX.Element {
    return (
        <svg {...props} fill="currentColor" viewBox="0 0 576 512" xmlns="http://www.w3.org/2000/svg">
        	<path d="M568 416h-32c-4.4 0-8 3.6-8 8v16c0 13.3-10.7 24-24 24h-72v-48h-48v48H144v-48H96v48H8c-4.4 0-8 3.6-8 8v32c0 4.4 3.6 8 8 8h504c35.3 0 64-28.7 64-64v-24c0-4.4-3.6-8-8-8zM64 384h416c17.7 0 32-14.3 32-32v-37c0-44.1-30-82.4-72.7-93.1L320 192h-56c-4.4 0-8-3.6-8-8v-16c0-4.4 3.6-8 8-8h56v-32h-56c-4.4 0-8-3.6-8-8v-16c0-4.4 3.6-8 8-8h56V16c0-8.8-7.2-16-16-16h-32c-8.8 0-16 7.2-16 16v16L78.4 82.7c-27.5 7.9-46.4 33-46.4 61.5V352c0 17.7 14.3 32 32 32z"/>
        </svg>
    )
}

export default Icon
