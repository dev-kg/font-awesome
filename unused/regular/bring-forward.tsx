import { SVGAttributes } from "react"
function Icon(props: SVGAttributes<{}>): JSX.Element {
    return (
        <svg {...props} fill="currentColor" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg">
        	<path d="M352 304V48a48 48 0 0 0-48-48H48A48 48 0 0 0 0 48v256a48 48 0 0 0 48 48h256a48 48 0 0 0 48-48zM48 48h256v256H48zm416 112h-80v48h80v256H208v-80h-48v80a48 48 0 0 0 48 48h256a48 48 0 0 0 48-48V208a48 48 0 0 0-48-48zM240 416a16 16 0 0 0 16 16h160a16 16 0 0 0 16-16V256a16 16 0 0 0-16-16h-32v144H240z"/>
        </svg>
    )
}

export default Icon
