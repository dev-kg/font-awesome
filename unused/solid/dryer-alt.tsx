import { SVGAttributes } from "react"
function Icon(props: SVGAttributes<{}>): JSX.Element {
    return (
        <svg {...props} fill="currentColor" viewBox="0 0 448 512" xmlns="http://www.w3.org/2000/svg">
        	<path d="M384 0H64A64 64 0 0 0 0 64v416a32 32 0 0 0 32 32h384a32 32 0 0 0 32-32V64a64 64 0 0 0-64-64zM184 64a24 24 0 1 1-24 24 24 24 0 0 1 24-24zM64 88a24 24 0 1 1 24 24 24 24 0 0 1-24-24zm160 360a144 144 0 1 1 144-144 144 144 0 0 1-144 144zm0-256a112 112 0 1 0 112 112 112 112 0 0 0-112-112zm0 192a80 80 0 0 1-78.39-64H184a8 8 0 0 0 8-8v-16a8 8 0 0 0-8-8h-38.39A80 80 0 1 1 224 384z"/>
        </svg>
    )
}

export default Icon
