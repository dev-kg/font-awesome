import { SVGAttributes } from "react"
function Icon(props: SVGAttributes<{}>): JSX.Element {
    return (
        <svg {...props} fill="currentColor" viewBox="0 0 448 512" xmlns="http://www.w3.org/2000/svg">
        	<path d="M164 384h-44V48a16 16 0 0 0-16-16H88a16 16 0 0 0-16 16v336H28a12 12 0 0 0-8.73 20.24l68 72a12 12 0 0 0 17.44 0l68-72A12 12 0 0 0 164 384zm280.1-201.14L361 45.71a29.56 29.56 0 0 0-49.9 0l-83.2 137.15c-11.08 18.28 2.77 41.14 24.95 41.14h166.3c22.18 0 36.03-22.86 24.95-41.14zM288.19 176L336 97.14 383.81 176zM408 288H264a24 24 0 0 0-24 24v144a24 24 0 0 0 24 24h144a24 24 0 0 0 24-24V312a24 24 0 0 0-24-24zm-24 144h-96v-96h96z"/>
        </svg>
    )
}

export default Icon
