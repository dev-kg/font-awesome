import { SVGAttributes } from "react"
function Icon(props: SVGAttributes<{}>): JSX.Element {
    return (
        <svg {...props} fill="currentColor" viewBox="0 0 640 512" xmlns="http://www.w3.org/2000/svg">
        	<path d="M208 352h384c8.8 0 16-7.2 16-16V80c0-8.8-7.2-16-16-16H208c-8.8 0-16 7.2-16 16v256c0 8.8 7.2 16 16 16zM352 96h96v80.7l-36.1-14.4-11.9-4.8-11.9 4.8-36.1 14.4V96zm-128 0h96v128l80-32 80 32V96h96v224H224V96zm408 320H128V8c0-4.4-3.6-8-8-8H8C3.6 0 0 3.6 0 8v16c0 4.4 3.6 8 8 8h88v408c0 4.4 3.6 8 8 8h58.9c-1.8 5-2.9 10.4-2.9 16 0 26.5 21.5 48 48 48s48-21.5 48-48c0-5.6-1.2-11-2.9-16H451c-1.8 5-2.9 10.4-2.9 16 0 26.5 21.5 48 48 48s48-21.5 48-48c0-5.6-1.2-11-2.9-16H632c4.4 0 8-3.6 8-8v-16c0-4.4-3.6-8-8-8zm-424 64c-8.8 0-16-7.2-16-16s7.2-16 16-16 16 7.2 16 16-7.2 16-16 16zm288 0c-8.8 0-16-7.2-16-16s7.2-16 16-16 16 7.2 16 16-7.2 16-16 16z"/>
        </svg>
    )
}

export default Icon
