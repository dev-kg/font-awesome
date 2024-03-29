import { SVGAttributes } from "react"
function Icon(props: SVGAttributes<{}>): JSX.Element {
    return (
        <svg {...props} fill="currentColor" viewBox="0 0 640 512" xmlns="http://www.w3.org/2000/svg">
        	<path d="M592 0H48C21.5 0 0 21.5 0 48v320c0 26.5 21.5 48 48 48h248v48H152c-13.3 0-24 10.7-24 24s10.7 24 24 24h336c13.3 0 24-10.7 24-24s-10.7-24-24-24H344v-48h248c26.5 0 48-21.5 48-48V48c0-26.5-21.5-48-48-48zm-6 368H54c-3.3 0-6-2.7-6-6V54c0-3.3 2.7-6 6-6h532c3.3 0 6 2.7 6 6v308c0 3.3-2.7 6-6 6z"/>
        </svg>
    )
}

export default Icon
