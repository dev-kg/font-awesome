import { SVGAttributes } from "react"
function Icon(props: SVGAttributes<{}>): JSX.Element {
    return (
        <svg {...props} fill="currentColor" viewBox="0 0 448 512" xmlns="http://www.w3.org/2000/svg">
        	<path d="M432 80h-82.41l-34-56.7A48 48 0 0 0 274.41 0H173.59a48 48 0 0 0-41.16 23.3L98.41 80H16A16 16 0 0 0 0 96v16a16 16 0 0 0 16 16h16v336a48 48 0 0 0 48 48h288a48 48 0 0 0 48-48V128h16a16 16 0 0 0 16-16V96a16 16 0 0 0-16-16zM171.84 50.91A6 6 0 0 1 177 48h94a6 6 0 0 1 5.15 2.91L293.61 80H154.39zM368 464H80V128h288zM142 288h50v96a16 16 0 0 0 16 16h32a16 16 0 0 0 16-16v-96h50c12.48 0 18.72-15.9 9.9-25.2l-80.26-81.75a15.88 15.88 0 0 0-23.22 0l-80.29 81.75c-8.82 9.3-2.58 25.2 9.87 25.2z"/>
        </svg>
    )
}

export default Icon
