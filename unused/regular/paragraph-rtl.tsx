import { SVGAttributes } from "react"
function Icon(props: SVGAttributes<{}>): JSX.Element {
    return (
        <svg {...props} fill="currentColor" viewBox="0 0 384 512" xmlns="http://www.w3.org/2000/svg">
        	<path d="M368 392H112v-56a16 16 0 0 0-16.12-16 15.65 15.65 0 0 0-11.19 4.72l-80 80a16 16 0 0 0 0 22.62l80 80A16.12 16.12 0 0 0 96.17 512c8 0 15.83-5.69 15.83-16v-56h256a16 16 0 0 0 16-16v-16a16 16 0 0 0-16-16zM144 224h32v80a16 16 0 0 0 16 16h16a16 16 0 0 0 16-16V48h32v256a16 16 0 0 0 16 16h16a16 16 0 0 0 16-16V48h32a16 16 0 0 0 16-16V16a16 16 0 0 0-16-16H144C80 0 32 48 32 112s48 112 112 112zm0-176h32v128h-32c-37.68 0-64-26.32-64-64s26.32-64 64-64z"/>
        </svg>
    )
}

export default Icon
