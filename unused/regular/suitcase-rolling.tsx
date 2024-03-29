import { SVGAttributes } from "react"
function Icon(props: SVGAttributes<{}>): JSX.Element {
    return (
        <svg {...props} fill="currentColor" viewBox="0 0 384 512" xmlns="http://www.w3.org/2000/svg">
        	<path d="M336 128h-48V48c0-26.51-21.49-48-48-48h-96c-26.51 0-48 21.49-48 48v80H48c-26.51 0-48 21.49-48 48v256c0 26.51 21.49 48 48 48h16v16c0 8.84 7.16 16 16 16h32c8.84 0 16-7.16 16-16v-16h128v16c0 8.84 7.16 16 16 16h32c8.84 0 16-7.16 16-16v-16h16c26.51 0 48-21.49 48-48V176c0-26.51-21.49-48-48-48zM144 48h96v80h-96V48zm192 384H48V176h288v256zm-232-48h176c4.42 0 8-3.58 8-8v-32c0-4.42-3.58-8-8-8H104c-4.42 0-8 3.58-8 8v32c0 4.42 3.58 8 8 8zm0-112h176c4.42 0 8-3.58 8-8v-32c0-4.42-3.58-8-8-8H104c-4.42 0-8 3.58-8 8v32c0 4.42 3.58 8 8 8z"/>
        </svg>
    )
}

export default Icon
