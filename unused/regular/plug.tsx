import { SVGAttributes } from "react"
function Icon(props: SVGAttributes<{}>): JSX.Element {
    return (
        <svg {...props} fill="currentColor" viewBox="0 0 384 512" xmlns="http://www.w3.org/2000/svg">
        	<path d="M360 144H24c-13.255 0-24 10.745-24 24v80c0 13.255 10.745 24 24 24h8c0 80.208 59.02 146.628 136 158.208V512h48v-81.792c76.979-11.58 136-78 136-158.208h8c13.255 0 24-10.745 24-24v-80c0-13.255-10.745-24-24-24zm-24 80h-32v48c0 61.898-50.092 112-112 112-61.898 0-112-50.092-112-112v-48H48v-32h288v32zm-72-96V24c0-13.255 10.745-24 24-24s24 10.745 24 24v104h-48zm-192 0V24C72 10.745 82.745 0 96 0s24 10.745 24 24v104H72z"/>
        </svg>
    )
}

export default Icon
