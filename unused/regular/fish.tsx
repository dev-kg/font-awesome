import { SVGAttributes } from "react"
function Icon(props: SVGAttributes<{}>): JSX.Element {
    return (
        <svg {...props} fill="currentColor" viewBox="0 0 640 512" xmlns="http://www.w3.org/2000/svg">
        	<path d="M360.18 64c-103.38 0-183.5 63.14-220.38 98.67l-72.88-56.3c-13.91-10.75-33.25-11.66-48.22-2.23C4.39 113.17-2.61 129.53.89 145.81L24.64 256 .89 366.19c-3.5 16.28 3.5 32.64 17.81 41.67 14.97 9.42 34.31 8.5 48.22-2.22l72.88-56.31c36.88 35.53 117 98.67 220.38 98.67C514.09 448 640 303.05 640 256S514.09 64 360.18 64zm0 336c-81.19 0-156.79-51.09-200.44-98.91l-14.91-16.31-92.72 71.63L73.77 256 52.11 155.59l92.72 71.63 14.91-16.31C203.4 163.09 278.99 112 360.18 112c125.22 0 227.97 119.88 231.85 143.2C588.15 280.13 485.4 400 360.18 400zM448 224c-17.67 0-32 14.33-32 32s14.33 32 32 32 32-14.33 32-32-14.33-32-32-32z"/>
        </svg>
    )
}

export default Icon
