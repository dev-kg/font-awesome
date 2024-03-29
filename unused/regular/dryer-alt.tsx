import { SVGAttributes } from "react"
function Icon(props: SVGAttributes<{}>): JSX.Element {
    return (
        <svg {...props} fill="currentColor" viewBox="0 0 448 512" xmlns="http://www.w3.org/2000/svg">
        	<path d="M224 160a136 136 0 1 0 136 136 136 136 0 0 0-136-136zm0 224c-40.15 0-73.73-27.18-84.25-64H176a16 16 0 0 0 16-16v-16a16 16 0 0 0-16-16h-36.25c10.52-36.82 44.1-64 84.25-64a88 88 0 0 1 0 176zm-96-280a24 24 0 1 0-24 24 24 24 0 0 0 24-24zm56 24a24 24 0 1 0-24-24 24 24 0 0 0 24 24zM384 0H64A64 64 0 0 0 0 64v416a32 32 0 0 0 32 32h384a32 32 0 0 0 32-32V64a64 64 0 0 0-64-64zm16 464H48V64a16 16 0 0 1 16-16h320a16 16 0 0 1 16 16z"/>
        </svg>
    )
}

export default Icon
