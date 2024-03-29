import { SVGAttributes } from "react"
function Icon(props: SVGAttributes<{}>): JSX.Element {
    return (
        <svg {...props} fill="currentColor" viewBox="0 0 256 512" xmlns="http://www.w3.org/2000/svg">
        	<path d="M249.6 435.2L224 416v-24a24 24 0 0 0-24-24h2.61c-1.54-16-2.61-32-2.61-48v-32h8a16 16 0 0 0 16-16v-16a15.76 15.76 0 0 0-13.61-15.46A95 95 0 0 0 224 192a96 96 0 1 0-178.42 48.49A15.79 15.79 0 0 0 32 256v16a16 16 0 0 0 16 16h8v32c0 16-1.07 32-2.61 48H56a24 24 0 0 0-24 24v24L6.4 435.2A16 16 0 0 0 0 448v48a16 16 0 0 0 16 16h224a16 16 0 0 0 16-16v-48a16 16 0 0 0-6.4-12.8zM152 288v30c0 16.69 1 33.35 2.54 50h-53.08c1.54-16.62 2.54-33.28 2.54-50v-30zm-24-144a48 48 0 1 1-48 48 48.05 48.05 0 0 1 48-48zM48 464l32-24v-24h96v24l32 24z"/>
        </svg>
    )
}

export default Icon
