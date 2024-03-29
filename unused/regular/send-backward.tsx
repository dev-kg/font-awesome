import { SVGAttributes } from "react"
function Icon(props: SVGAttributes<{}>): JSX.Element {
    return (
        <svg {...props} fill="currentColor" viewBox="0 0 514 512" xmlns="http://www.w3.org/2000/svg">
        	<path d="M48 48h256v80h48V48a48 48 0 0 0-48-48H48A48 48 0 0 0 0 48v256a48 48 0 0 0 48 48h80v-48H48zm416 112H208a48 48 0 0 0-48 48v256a48 48 0 0 0 48 48h256a48 48 0 0 0 48-48V208a48 48 0 0 0-48-48zm0 304H208V208h256zM272 96a16 16 0 0 0-16-16H96a16 16 0 0 0-16 16v160a16 16 0 0 0 16 16h32V128h144z"/>
        </svg>
    )
}

export default Icon
