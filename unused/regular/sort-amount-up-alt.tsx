import { SVGAttributes } from "react"
function Icon(props: SVGAttributes<{}>): JSX.Element {
    return (
        <svg {...props} fill="currentColor" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg">
        	<path d="M240 328h192a16 16 0 0 0 16-16v-16a16 16 0 0 0-16-16H240a16 16 0 0 0-16 16v16a16 16 0 0 0 16 16zm0-192h64a16 16 0 0 0 16-16v-16a16 16 0 0 0-16-16h-64a16 16 0 0 0-16 16v16a16 16 0 0 0 16 16zm0 96h128a16 16 0 0 0 16-16v-16a16 16 0 0 0-16-16H240a16 16 0 0 0-16 16v16a16 16 0 0 0 16 16zm256 144H240a16 16 0 0 0-16 16v16a16 16 0 0 0 16 16h256a16 16 0 0 0 16-16v-16a16 16 0 0 0-16-16zM28 128h44v336a16 16 0 0 0 16 16h16a16 16 0 0 0 16-16V128h44a12 12 0 0 0 8.73-20.24l-68-72a12 12 0 0 0-17.44 0l-68 72A12 12 0 0 0 28 128z"/>
        </svg>
    )
}

export default Icon
