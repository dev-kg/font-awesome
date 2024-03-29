import { SVGAttributes } from "react"
function Icon(props: SVGAttributes<{}>): JSX.Element {
    return (
        <svg {...props} fill="currentColor" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg">
        	<path d="M488.7 133.3l-91.9-25.8 11.1-5.6c12.4-6.2 23-15.6 30.7-27.1l18.1-27.2c2.5-3.7 1.5-8.6-2.2-11.1l-13.3-8.9c-3.7-2.5-8.6-1.5-11.1 2.2l-18 27.2c-4.6 7-11 12.6-18.5 16.3L351 94.6l-33.8-9.5 8.3-10.3c6.8-8.5 10.5-19.1 10.5-30V8c0-4.4-3.6-8-8-8h-16c-4.4 0-8 3.6-8 8v36.8c0 3.6-1.2 7.1-3.5 10l-16.8 20.9-16.1-4.5c-6.9-1.9-11.7-8.2-11.7-15.4V8c0-4.4-3.6-8-8-8h-16c-4.4 0-8 3.6-8 8v47.8c0 21.5 14.3 40.4 35 46.2l78.9 22.2L304 192H64c-35.3 0-64 28.7-64 64v64l32-21.3v48.9l-11.9 31.8c-4.6 12.2-5.3 25.4-2.2 38l24.9 82.5C44.6 507 51 512 58.3 512h63.8c10.4 0 18-9.8 15.5-19.9l-26.3-88.4 19.4-51.7H288v144c0 8.8 7.2 16 16 16h64c8.8 0 16-7.2 16-16V288l32-64h64c17.7 0 32-14.3 32-32v-27.9c0-14.3-9.6-26.9-23.3-30.8zM416 176c-8.8 0-16-7.2-16-16s7.2-16 16-16 16 7.2 16 16-7.2 16-16 16z"/>
        </svg>
    )
}

export default Icon
