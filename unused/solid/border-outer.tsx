import { SVGAttributes } from "react"
function Icon(props: SVGAttributes<{}>): JSX.Element {
    return (
        <svg {...props} fill="currentColor" viewBox="0 0 448 512" xmlns="http://www.w3.org/2000/svg">
        	<path d="M208 288h32a16 16 0 0 0 16-16v-32a16 16 0 0 0-16-16h-32a16 16 0 0 0-16 16v32a16 16 0 0 0 16 16zm96 0h32a16 16 0 0 0 16-16v-32a16 16 0 0 0-16-16h-32a16 16 0 0 0-16 16v32a16 16 0 0 0 16 16zm-192 0h32a16 16 0 0 0 16-16v-32a16 16 0 0 0-16-16h-32a16 16 0 0 0-16 16v32a16 16 0 0 0 16 16zm96 96h32a16 16 0 0 0 16-16v-32a16 16 0 0 0-16-16h-32a16 16 0 0 0-16 16v32a16 16 0 0 0 16 16zm0-192h32a16 16 0 0 0 16-16v-32a16 16 0 0 0-16-16h-32a16 16 0 0 0-16 16v32a16 16 0 0 0 16 16zM416 32H32A32 32 0 0 0 0 64v384a32 32 0 0 0 32 32h384a32 32 0 0 0 32-32V64a32 32 0 0 0-32-32zm-32 384H64V96h320z"/>
        </svg>
    )
}

export default Icon
