import React, { SVGAttributes } from "react"
function Icon(props: SVGAttributes<{}>): JSX.Element {
    return (
        <svg {...props} fill="currentColor" viewBox="0 0 384 512" xmlns="http://www.w3.org/2000/svg">
        	<path d="M335.21 127.96H240V16c0-8.83-7.16-16-16-16h-64c-8.84 0-16 7.16-16 16v111.97H48.79c-26.32 0-48.34 20.85-48.78 47.17C-.44 202 21.22 223.93 48 223.93c26.51 0 48-21.48 48-47.99 0-5.64-1.15-10.97-2.94-16H128v268.92l50.69 76.01c6.33 9.5 20.29 9.5 26.63 0l50.68-76V159.95h34.94c-1.79 5.03-2.94 10.36-2.94 16 0 26.5 21.49 47.99 48 47.99 26.78 0 48.44-21.93 47.99-48.81-.44-26.31-22.46-47.17-48.78-47.17zM64 175.95c0 8.82-7.18 16-16 16s-16-7.18-16-16 7.18-16 16-16 16 7.18 16 16zM176 31.99h32v95.97h-32V31.99zm48 387.19l-32 47.99-32-47.99V159.95h64v259.23zm112-227.24c-8.82 0-16-7.18-16-16s7.18-16 16-16 16 7.18 16 16-7.18 16-16 16z"/>
        </svg>
    )
}

export default Icon
