import { SVGAttributes } from "react"
function Icon(props: SVGAttributes<{}>): JSX.Element {
    return (
        <svg {...props} fill="currentColor" viewBox="0 0 640 512" xmlns="http://www.w3.org/2000/svg">
        	<path d="M144 288h352c8.8 0 16-7.2 16-16V16c0-8.8-7.2-16-16-16H144c-8.8 0-16 7.2-16 16v256c0 8.8 7.2 16 16 16zm32-240h80v80l64-32 64 32V48h80v192H176V48zm448 320c8.8 0 16-7.2 16-16v-16c0-8.8-7.2-16-16-16H16c-8.8 0-16 7.2-16 16v16c0 8.8 7.2 16 16 16h48v96H16c-8.8 0-16 7.2-16 16v16c0 8.8 7.2 16 16 16h608c8.8 0 16-7.2 16-16v-16c0-8.8-7.2-16-16-16h-48v-96h48zm-448 96h-64v-96h64v96zm240 0H224v-96h192v96zm112 0h-64v-96h64v96z"/>
        </svg>
    )
}

export default Icon
