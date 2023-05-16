import { SVGAttributes } from "react"
function Icon(props: SVGAttributes<{}>): JSX.Element {
    return (
        <svg {...props} fill="currentColor" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg">
        	<path d="M0 80v352c0 26.51 21.49 48 48 48h416c26.51 0 48-21.49 48-48V80c0-26.51-21.49-48-48-48H48C21.49 32 0 53.49 0 80zm240-16v176H32V80c0-8.837 7.163-16 16-16h192zM32 432V272h208v176H48c-8.837 0-16-7.163-16-16zm240 16V272h208v160c0 8.837-7.163 16-16 16H272zm208-208H272V64h192c8.837 0 16 7.163 16 16v160z"/>
        </svg>
    )
}

export default Icon
