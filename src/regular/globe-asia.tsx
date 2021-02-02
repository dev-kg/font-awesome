import React, { SVGAttributes } from "react"
function Icon(props: SVGAttributes<{}>): JSX.Element {
    return (
        <svg {...props} fill="currentColor" viewBox="0 0 496 512" xmlns="http://www.w3.org/2000/svg">
        	<path d="M403.31 322.49l-11.91-11.91a8.008 8.008 0 0 1-2.34-5.66V292c0-2.21-1.79-4-4-4H379c-1.78 0-3.35 1.18-3.84 2.88l-4.2 14.47a3.996 3.996 0 0 1-3.84 2.88h-3.8a3.99 3.99 0 0 1-3.69-2.46l-5.35-12.85a8.003 8.003 0 0 0-7.39-4.93H334.8c-1.66 0-3.29.52-4.64 1.48l-23.71 16.89a26.355 26.355 0 0 1-5.59 3.05l-39.34 15.74a7.996 7.996 0 0 0-5.03 7.43v10.21c0 2.12.84 4.16 2.34 5.66l11.91 11.91c3 3 7.07 4.69 11.31 4.69h10.34c1.31 0 2.61-.16 3.88-.48l21.27-5.32c9.12-2.28 18.77.39 25.42 7.04l13.01 13.01c3 3 7.07 4.69 11.31 4.69h15.16c4.24 0 8.31-1.69 11.31-4.69l9.57-9.57c3-3 4.69-7.07 4.69-11.31V333.8c-.01-4.24-1.7-8.31-4.7-11.31zM248 8C111.04 8 0 119.03 0 256s111.04 248 248 248 248-111.03 248-248S384.96 8 248 8zm0 448c-99.37 0-181.8-72.91-197.19-168h62.57c4.24 0 8.31-1.69 11.31-4.69l19.47-19.46c3.86-3.86 10.37-2.8 12.81 2.08l22.62 45.23c2.71 5.42 8.25 8.85 14.31 8.85h6.1c8.84 0 16-7.16 16-16v-9.37c0-4.24-1.69-8.31-4.69-11.31l-5.66-5.66c-3.12-3.12-3.12-8.19 0-11.31l5.66-5.66c3-3 7.07-4.69 11.31-4.69h.31c5.62 0 10.83-2.95 13.72-7.77l17.37-28.95c1.8-3 6.2-2.83 7.76.3a7.996 7.996 0 0 0 7.15 4.42H272c4.42 0 8-3.58 8-8V137.9c0-6.06-3.42-11.6-8.84-14.31l-10.83-5.41c-5.49-2.75-5.97-10.4-.86-13.81l50.16-38.53C389.83 91.88 448 167.23 448 256c0 110.28-89.72 200-200 200z"/>
        </svg>
    )
}

export default Icon
