import { SVGAttributes } from "react"
function Icon(props: SVGAttributes<{}>): JSX.Element {
    return (
        <svg {...props} fill="currentColor" viewBox="0 0 640 512" xmlns="http://www.w3.org/2000/svg">
        	<path d="M624 32H272a16 16 0 0 0-16 16v80a16 16 0 0 0 16 16h16a16 16 0 0 0 16-16V96h112v336h-48a16 16 0 0 0-16 16v16a16 16 0 0 0 16 16h160a16 16 0 0 0 16-16v-16a16 16 0 0 0-16-16h-48V96h112v32a16 16 0 0 0 16 16h16a16 16 0 0 0 16-16V48a16 16 0 0 0-16-16zM304 224H16a16 16 0 0 0-16 16v64a16 16 0 0 0 16 16h16a16 16 0 0 0 16-16v-32h80v160H96a16 16 0 0 0-16 16v16a16 16 0 0 0 16 16h128a16 16 0 0 0 16-16v-16a16 16 0 0 0-16-16h-32V272h80v32a16 16 0 0 0 16 16h16a16 16 0 0 0 16-16v-64a16 16 0 0 0-16-16z"/>
        </svg>
    )
}

export default Icon
