import { SVGAttributes } from "react"
function Icon(props: SVGAttributes<{}>): JSX.Element {
    return (
        <svg {...props} fill="currentColor" viewBox="0 0 384 512" xmlns="http://www.w3.org/2000/svg">
        	<path d="M344 104h-64V40c0-22.06-17.94-40-40-40h-96c-22.06 0-40 17.94-40 40v64H40c-22.06 0-40 17.94-40 40v96c0 22.06 17.94 40 40 40h64v192c0 22.06 17.94 40 40 40h96c22.06 0 40-17.94 40-40V280h64c22.06 0 40-17.94 40-40v-96c0-22.06-17.94-40-40-40zm-8 128H232v232h-80V232H48v-80h104V48h80v104h104v80z"/>
        </svg>
    )
}

export default Icon
