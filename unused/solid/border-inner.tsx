import { SVGAttributes } from "react"
function Icon(props: SVGAttributes<{}>): JSX.Element {
    return (
        <svg {...props} fill="currentColor" viewBox="0 0 448 512" xmlns="http://www.w3.org/2000/svg">
        	<path d="M48 416H16a16 16 0 0 0-16 16v32a16 16 0 0 0 16 16h32a16 16 0 0 0 16-16v-32a16 16 0 0 0-16-16zM16 192h32a16 16 0 0 0 16-16v-32a16 16 0 0 0-16-16H16a16 16 0 0 0-16 16v32a16 16 0 0 0 16 16zm288-96h32a16 16 0 0 0 16-16V48a16 16 0 0 0-16-16h-32a16 16 0 0 0-16 16v32a16 16 0 0 0 16 16zM48 320H16a16 16 0 0 0-16 16v32a16 16 0 0 0 16 16h32a16 16 0 0 0 16-16v-32a16 16 0 0 0-16-16zm64-224h32a16 16 0 0 0 16-16V48a16 16 0 0 0-16-16h-32a16 16 0 0 0-16 16v32a16 16 0 0 0 16 16zm-96 0h32a16 16 0 0 0 16-16V48a16 16 0 0 0-16-16H16A16 16 0 0 0 0 48v32a16 16 0 0 0 16 16zm320 320h-32a16 16 0 0 0-16 16v32a16 16 0 0 0 16 16h32a16 16 0 0 0 16-16v-32a16 16 0 0 0-16-16zm96-288h-32a16 16 0 0 0-16 16v32a16 16 0 0 0 16 16h32a16 16 0 0 0 16-16v-32a16 16 0 0 0-16-16zm0-96h-32a16 16 0 0 0-16 16v32a16 16 0 0 0 16 16h32a16 16 0 0 0 16-16V48a16 16 0 0 0-16-16zm0 192H256V48a16 16 0 0 0-16-16h-32a16 16 0 0 0-16 16v176H16a16 16 0 0 0-16 16v32a16 16 0 0 0 16 16h176v176a16 16 0 0 0 16 16h32a16 16 0 0 0 16-16V288h176a16 16 0 0 0 16-16v-32a16 16 0 0 0-16-16zM144 416h-32a16 16 0 0 0-16 16v32a16 16 0 0 0 16 16h32a16 16 0 0 0 16-16v-32a16 16 0 0 0-16-16zm288-96h-32a16 16 0 0 0-16 16v32a16 16 0 0 0 16 16h32a16 16 0 0 0 16-16v-32a16 16 0 0 0-16-16zm0 96h-32a16 16 0 0 0-16 16v32a16 16 0 0 0 16 16h32a16 16 0 0 0 16-16v-32a16 16 0 0 0-16-16z"/>
        </svg>
    )
}

export default Icon
