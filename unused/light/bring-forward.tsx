import { SVGAttributes } from "react"
function Icon(props: SVGAttributes<{}>): JSX.Element {
    return (
        <svg {...props} fill="currentColor" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg">
        	<path d="M352 304V48a48 48 0 0 0-48-48H48A48 48 0 0 0 0 48v256a48 48 0 0 0 48 48h256a48 48 0 0 0 48-48zm-320 0V48a16 16 0 0 1 16-16h256a16 16 0 0 1 16 16v256a16 16 0 0 1-16 16H48a16 16 0 0 1-16-16zm432-144h-80v32h80a16 16 0 0 1 16 16v256a16 16 0 0 1-16 16H208a16 16 0 0 1-16-16v-80h-32v80a48 48 0 0 0 48 48h256a48 48 0 0 0 48-48V208a48 48 0 0 0-48-48zm-48 256H256v-32h-32v48a16 16 0 0 0 16 16h192a16 16 0 0 0 16-16V240a16 16 0 0 0-16-16h-48v32h32z"/>
        </svg>
    )
}

export default Icon
