import { SVGAttributes } from "react"
function Icon(props: SVGAttributes<{}>): JSX.Element {
    return (
        <svg {...props} fill="currentColor" viewBox="0 0 448 512" xmlns="http://www.w3.org/2000/svg">
        	<path d="M416 32H32A32 32 0 0 0 0 64v384a32 32 0 0 0 32 32h384a32 32 0 0 0 32-32V64a32 32 0 0 0-32-32zm-16 400H48V80h352zM212 184h24a16 16 0 0 0 16-16v-24a16 16 0 0 0-16-16h-24a16 16 0 0 0-16 16v24a16 16 0 0 0 16 16zm100 100h24a16 16 0 0 0 16-16v-24a16 16 0 0 0-16-16h-24a16 16 0 0 0-16 16v24a16 16 0 0 0 16 16zm-200 0h24a16 16 0 0 0 16-16v-24a16 16 0 0 0-16-16h-24a16 16 0 0 0-16 16v24a16 16 0 0 0 16 16zm100 0h24a16 16 0 0 0 16-16v-24a16 16 0 0 0-16-16h-24a16 16 0 0 0-16 16v24a16 16 0 0 0 16 16zm0 100h24a16 16 0 0 0 16-16v-24a16 16 0 0 0-16-16h-24a16 16 0 0 0-16 16v24a16 16 0 0 0 16 16z"/>
        </svg>
    )
}

export default Icon
