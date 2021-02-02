import React, { SVGAttributes } from "react"
function Icon(props: SVGAttributes<{}>): JSX.Element {
    return (
        <svg {...props} fill="currentColor" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg">
        	<path d="M256 112a56 56 0 1 0-56-56 56 56 0 0 0 56 56zm248.87 72.16l-28.51-15.92a15.09 15.09 0 0 0-8.45-2.59 17.59 17.59 0 0 0-13.84 7.27A47.48 47.48 0 0 1 416 192a50.79 50.79 0 0 1-9.16-.85C383.7 186.86 368 164.93 368 141.4a13.4 13.4 0 0 0-13.4-13.4h-38.77c-6 0-11.61 4-12.86 9.91a48 48 0 0 1-93.94 0c-1.25-5.92-6.82-9.91-12.86-9.91H157.4a13.4 13.4 0 0 0-13.4 13.4c0 25.69-19 48.75-44.67 50.49-1.12.07-2.23.11-3.33.11a47.47 47.47 0 0 1-38.21-19.26 17.17 17.17 0 0 0-13.61-7.13 15.16 15.16 0 0 0-8.48 2.59l-28.57 16a16 16 0 0 0-5.44 20.47L109.84 432H163L69.91 236.32A94.78 94.78 0 0 0 96 240c2.17 0 4.37-.07 6.57-.22 34.06-2.31 63.1-23 78.23-52.22a95.81 95.81 0 0 0 150.29.14c13.29 26 37.51 45.18 67 50.64A98.41 98.41 0 0 0 416 240a96.13 96.13 0 0 0 26-3.55L349 432h53.16l108.15-227.37a16 16 0 0 0-5.44-20.47zM432 464H80a16 16 0 0 0-16 16v16a16 16 0 0 0 16 16h352a16 16 0 0 0 16-16v-16a16 16 0 0 0-16-16z"/>
        </svg>
    )
}

export default Icon
