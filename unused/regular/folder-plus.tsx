import { SVGAttributes } from "react"
function Icon(props: SVGAttributes<{}>): JSX.Element {
    return (
        <svg {...props} fill="currentColor" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg">
        	<path d="M464 128H272l-54.63-54.63c-6-6-14.14-9.37-22.63-9.37H48C21.49 64 0 85.49 0 112v288c0 26.51 21.49 48 48 48h416c26.51 0 48-21.49 48-48V176c0-26.51-21.49-48-48-48zm0 272H48V112h140.12l54.63 54.63c6 6 14.14 9.37 22.63 9.37H464v224zM248 208c-8.84 0-16 7.16-16 16v40h-40c-8.84 0-16 7.16-16 16v16c0 8.84 7.16 16 16 16h40v40c0 8.84 7.16 16 16 16h16c8.84 0 16-7.16 16-16v-40h40c8.84 0 16-7.16 16-16v-16c0-8.84-7.16-16-16-16h-40v-40c0-8.84-7.16-16-16-16h-16z"/>
        </svg>
    )
}

export default Icon
