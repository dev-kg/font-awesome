import React, { SVGAttributes } from "react"
function Icon(props: SVGAttributes<{}>): JSX.Element {
    return (
        <svg {...props} fill="currentColor" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg">
        	<path d="M479.94 312.91c-.01-12.53-4.34-63.48-64.95-78.63-4.52-25.94-24.73-46.96-51.36-51.91-30.66-5.7-42.63-6.36-43.67-6.31l.04-96.07c0-44.18-35.82-80-80-80-44.11 0-79.85 35.7-79.98 79.78l-.05 96.29c-10.39-.49-23.46 2.65-36.82 5.33-11.88 2.38-59.16 16.77-59.16 76.94l-19.77 9.89C16.94 281.86 0 309.28 0 339.78v46.97c0 21.37 8.32 41.46 23.43 56.57l26.5 26.5c27.2 27.2 63.36 42.18 101.82 42.18h184.29c79.59 0 144.02-64.44 143.96-144.09l-.06-55zM336.04 464H151.75a95.942 95.942 0 0 1-67.87-28.12l-26.51-26.51c-6-6-9.37-14.14-9.37-22.63v-46.97a32 32 0 0 1 17.69-28.62L80 304v32c0 8.84 7.16 16 16 16s16-7.16 16-16l-.01-82.43c0-12.2 8.66-22.72 20.62-25.11 19.46-3.89 21.11-4.46 24.21-4.46 10.34 0 19.16 8.4 19.16 19.21 0 7.07 5.73 12.79 12.79 12.79h6.41c7.07 0 12.79-5.73 12.79-12.79L208 81.37c0-16.71 12.22-31.63 28.86-33.22C255.94 46.33 272 61.29 272 80l-.04 163.2c0 7.07 5.73 12.8 12.79 12.8h6.4c7.07 0 12.79-5.73 12.79-12.79 0-10.81 8.82-19.21 19.15-19.21 2.89 0 3.31.29 31.69 5.56 7.58 1.41 13.14 8.03 13.14 15.75V272l39.77 9.94c14.23 3.56 24.22 16.34 24.23 31.01l.06 55c.06 53.03-42.91 96.05-95.94 96.05z"/>
        </svg>
    )
}

export default Icon
