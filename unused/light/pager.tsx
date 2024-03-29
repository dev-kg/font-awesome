import { SVGAttributes } from "react"
function Icon(props: SVGAttributes<{}>): JSX.Element {
    return (
        <svg {...props} fill="currentColor" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg">
        	<path d="M272 320h-80v32h80a16 16 0 0 0 0-32zM448 64H64a64 64 0 0 0-64 64v256a64 64 0 0 0 64 64h384a64 64 0 0 0 64-64V128a64 64 0 0 0-64-64zm32 320a32 32 0 0 1-32 32H64a32 32 0 0 1-32-32V128a32 32 0 0 1 32-32h384a32 32 0 0 1 32 32zM64 336a16 16 0 0 0 16 16h80v-32H80a16 16 0 0 0-16 16zm360-208H88a24 24 0 0 0-24 24v112a24 24 0 0 0 24 24h336a24 24 0 0 0 24-24V152a24 24 0 0 0-24-24zm-8 128H96v-96h320z"/>
        </svg>
    )
}

export default Icon
