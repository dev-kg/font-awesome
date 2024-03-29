import { SVGAttributes } from "react"
function Icon(props: SVGAttributes<{}>): JSX.Element {
    return (
        <svg {...props} fill="currentColor" viewBox="0 0 514 512" xmlns="http://www.w3.org/2000/svg">
        	<path d="M464 160H208a48 48 0 0 0-48 48v256a48 48 0 0 0 48 48h256a48 48 0 0 0 48-48V208a48 48 0 0 0-48-48zm-16 288H224V224h224zm-96-320V48a48 48 0 0 0-48-48H48A48 48 0 0 0 0 48v256a48 48 0 0 0 48 48h80V208a80.09 80.09 0 0 1 80-80z"/>
        </svg>
    )
}

export default Icon
