import { SVGAttributes } from "react"
function Icon(props: SVGAttributes<{}>): JSX.Element {
    return (
        <svg {...props} fill="currentColor" viewBox="0 0 448 512" xmlns="http://www.w3.org/2000/svg">
        	<path d="M144 32H32A32 32 0 0 0 0 64v384a32 32 0 0 0 32 32h112a16 16 0 0 0 16-16v-32a16 16 0 0 0-16-16H64V96h80a16 16 0 0 0 16-16V48a16 16 0 0 0-16-16zm272 0H304a16 16 0 0 0-16 16v32a16 16 0 0 0 16 16h80v320h-80a16 16 0 0 0-16 16v32a16 16 0 0 0 16 16h112a32 32 0 0 0 32-32V64a32 32 0 0 0-32-32z"/>
        </svg>
    )
}

export default Icon
