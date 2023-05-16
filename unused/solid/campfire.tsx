import { SVGAttributes } from "react"
function Icon(props: SVGAttributes<{}>): JSX.Element {
    return (
        <svg {...props} fill="currentColor" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg">
        	<path d="M501 450.17l-139.97-44.68L501 360.81c8.26-2.64 12.86-11.61 10.28-20.04l-9.35-30.55c-2.58-8.43-11.37-13.13-19.62-10.5L256 371.96 29.69 299.72c-8.26-2.63-17.04 2.07-19.62 10.5L.72 340.77c-2.58 8.43 2.02 17.41 10.28 20.04l139.97 44.68L11 450.17C2.74 452.8-1.86 461.78.72 470.21l9.35 30.55c2.58 8.43 11.37 13.13 19.62 10.5L256 439.02l226.31 72.24c8.26 2.63 17.04-2.07 19.62-10.5l9.35-30.55c2.58-8.43-2.02-17.4-10.28-20.04zM256 320c79.53 0 144-64.47 144-144 0-33.29-33.42-101.96-80-144-13.37 12.06-25.45 24.75-36.14 37.48C266.34 46.01 244.61 22.21 220 0c-63.17 56.98-108 131.22-108 176 0 79.53 64.47 144 144 144zM220.5 92.48c4.23 5.09 60.42 80.06 60.42 80.06l35.84-42.72c2.53 4.37 4.83 8.65 6.89 12.76 16.71 33.33 9.66 75.99-20.44 97.99C289.97 250.26 273.64 256 256 256c-44.11 0-80-30.49-80-80 0-24.66 14.86-46.39 44.5-83.52z"/>
        </svg>
    )
}

export default Icon
