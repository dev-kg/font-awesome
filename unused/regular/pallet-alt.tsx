import { SVGAttributes } from "react"
function Icon(props: SVGAttributes<{}>): JSX.Element {
    return (
        <svg {...props} fill="currentColor" viewBox="0 0 640 512" xmlns="http://www.w3.org/2000/svg">
        	<path d="M112 288h416c8.8 0 16-7.2 16-16V80c0-8.8-7.2-16-16-16H384V16c0-8.8-7.2-16-16-16H112c-8.8 0-16 7.2-16 16v256c0 8.8 7.2 16 16 16zm272-176h112v128H384V112zM144 48h192v192H144V48zm480 320c8.8 0 16-7.2 16-16v-16c0-8.8-7.2-16-16-16H16c-8.8 0-16 7.2-16 16v16c0 8.8 7.2 16 16 16h48v96H16c-8.8 0-16 7.2-16 16v16c0 8.8 7.2 16 16 16h608c8.8 0 16-7.2 16-16v-16c0-8.8-7.2-16-16-16h-48v-96h48zm-448 96h-64v-96h64v96zm240 0H224v-96h192v96zm112 0h-64v-96h64v96z"/>
        </svg>
    )
}

export default Icon
