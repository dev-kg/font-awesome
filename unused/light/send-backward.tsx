import { SVGAttributes } from "react"
function Icon(props: SVGAttributes<{}>): JSX.Element {
    return (
        <svg {...props} fill="currentColor" viewBox="0 0 514 512" xmlns="http://www.w3.org/2000/svg">
        	<path d="M464 160H208a48 48 0 0 0-48 48v256a48 48 0 0 0 48 48h256a48 48 0 0 0 48-48V208a48 48 0 0 0-48-48zm16 304a16 16 0 0 1-16 16H208a16 16 0 0 1-16-16V208a16 16 0 0 1 16-16h256a16 16 0 0 1 16 16zM32 304V48a16 16 0 0 1 16-16h256a16 16 0 0 1 16 16v80h32V48a48 48 0 0 0-48-48H48A48 48 0 0 0 0 48v256a48 48 0 0 0 48 48h80v-32H48a16 16 0 0 1-16-16zM96 96h160v32h32V80a16 16 0 0 0-16-16H80a16 16 0 0 0-16 16v192a16 16 0 0 0 16 16h48v-32H96z"/>
        </svg>
    )
}

export default Icon
