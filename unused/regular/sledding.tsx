import { SVGAttributes } from "react"
function Icon(props: SVGAttributes<{}>): JSX.Element {
    return (
        <svg {...props} fill="currentColor" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg">
        	<path d="M505 420c-9.4-9.4-24.6-9.3-33.9 0-12.1 12.1-30.7 15.3-45.1 8.7l-51-26.4c5.4-4.4 9.1-10.8 9.1-18.3v-80c0-22.1-17.9-40-40-40h-71.5l67.7-67.7c11.5-11.5 14.9-28.6 8.7-43.6-6.2-15-20.7-24.7-37-24.7H152c-13.3 0-24 10.8-24 24s10.8 24 24 24h107l-100 85.8c-6.2 5.3-9.3 13.4-8.2 21.5.2 1.5 1.2 2.6 1.7 4L35 226.7c-11.9-6.1-26.3-1.5-32.3 10.3-6.1 11.8-1.5 26.3 10.3 32.3l391.9 202.5c11.9 5.5 24.5 8.1 37.1 8.1 23.2 0 46.1-9 63-26 9.3-9.3 9.3-24.5 0-33.9zm-169-37.7L200.1 312H336v70.3zM400 128c26.5 0 48-21.5 48-48s-21.5-48-48-48-48 21.5-48 48 21.5 48 48 48z"/>
        </svg>
    )
}

export default Icon
