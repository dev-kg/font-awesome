import { SVGAttributes } from "react"
function Icon(props: SVGAttributes<{}>): JSX.Element {
    return (
        <svg {...props} fill="currentColor" viewBox="0 0 640 512" xmlns="http://www.w3.org/2000/svg">
        	<path d="M600 96H487.94V48h40a16 16 0 0 0 16-16V16A16 16 0 0 0 528 0H400a16 16 0 0 0-16 16v16a16 16 0 0 0 16 16h40v48H256V80a16 16 0 0 0-16-16H112a16 16 0 0 0-16 16v16H40a40 40 0 0 0-40 40v336a40 40 0 0 0 40 40h560a40 40 0 0 0 40-40V136a40 40 0 0 0-40-40zm-8 368H48V144h544zm-400-47.94A112 112 0 1 0 80 304.11a112 112 0 0 0 112 111.95zm-12.67-122.19L230.24 243a12 12 0 0 1 17 0l5.65 5.65a12 12 0 0 1 0 17L202 316.49a12 12 0 0 1-17 0l-5.66-5.66a12 12 0 0 1-.01-16.96zM448 415.91A112 112 0 1 0 336 304a112 112 0 0 0 112 111.91zM432 236a12 12 0 0 1 12-12h8a12 12 0 0 1 12 12v72a12 12 0 0 1-12 12h-8a12 12 0 0 1-12-12z"/>
        </svg>
    )
}

export default Icon
