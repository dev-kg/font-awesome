import { SVGAttributes } from "react"
function Icon(props: SVGAttributes<{}>): JSX.Element {
    return (
        <svg {...props} fill="currentColor" viewBox="0 0 448 512" xmlns="http://www.w3.org/2000/svg">
        	<path d="M0 64v384c0 35.3 28.7 64 64 64h320c35.3 0 64-28.7 64-64V128L320 0H64C28.7 0 0 28.7 0 64zm48 0c0-8.8 7.2-16 16-16h236.1l99.9 99.9V448c0 8.8-7.2 16-16 16H64c-8.8 0-16-7.2-16-16V64zm304 288h-64v64h32c17.7 0 32-14.3 32-32v-32zM192 224h64v-64h-64v64zm64 128h-64v64h64v-64zm32-128h64v-32c0-17.7-14.3-32-32-32h-32v64zM160 352H96v32c0 17.7 14.3 32 32 32h32v-64zM96 192v32h64v-64h-32c-17.7 0-32 14.3-32 32zm256 64H96v64h256v-64z"/>
        </svg>
    )
}

export default Icon
