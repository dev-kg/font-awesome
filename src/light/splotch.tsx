import React, { SVGAttributes } from "react"
function Icon(props: SVGAttributes<{}>): JSX.Element {
    return (
        <svg {...props} fill="currentColor" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg">
        	<path d="M463.94 185.08l-62.91-21.31c-12.97-4.41-22.5-13.58-25.41-24.53l-15-56.14c-6.25-23.38-25.5-41.41-51.53-48.23-28.84-7.58-58.94.17-78.47 20.17l-43.25 44.28c-9.16 9.38-23.56 14.38-38.13 13.16l-67.44-5.22c-31.41-2.41-60.44 12.14-74.16 37.05-11.69 21.17-9.91 45.61 4.75 65.36l36.13 48.69c6.81 9.16 7.88 20.06 2.91 29.91l-26.66 52.92c-10.69 21.22-8.25 45.27 6.5 64.33 17.88 23.06 49.22 33.63 80.06 27.03l65.59-14.17c14.38-3.09 29.56-.11 40.56 8.08l50.94 37.92c13.88 10.33 31.03 15.64 48.41 15.64 11.81 0 23.72-2.45 34.72-7.47 23.44-10.67 38.5-30.98 40.31-54.34l4.41-57.45c.81-10.89 8.28-20.92 20-26.86l58.09-29.48c24.94-12.61 39.28-36.22 37.47-61.58-1.83-26.25-20.2-48.36-47.89-57.76zm-4.03 90.78l-58.09 29.48c-21.78 11.02-35.78 30.83-37.47 52.97l-4.41 57.44c-1.25 16.66-15.53 24.89-21.63 27.66-16.78 7.61-36.69 5.77-50.75-4.7l-50.94-37.92c-13.66-10.17-30.94-15.61-48.53-15.61-6 0-12 .62-17.91 1.91l-65.59 14.17c-22.94 4.98-40.16-5.19-48-15.34-4.19-5.41-10.19-16.55-3.25-30.34L80 302.67c10.47-20.75 8.31-44.45-5.78-63.41l-36.13-48.67c-9.72-13.08-5.69-24.92-2.44-30.83 7.72-13.97 25.25-21.88 43.69-20.61l67.41 5.22c24.34 1.84 47.78-6.61 63.5-22.7L253.5 77.4c11.38-11.64 30.06-16.19 47.47-11.59 14.75 3.86 25.5 13.41 28.72 25.53l15 56.14c5.72 21.33 22.94 38.73 46.09 46.59l62.84 21.31c15.53 5.27 25.38 16.36 26.31 29.69.89 12.48-6.58 23.98-20.02 30.79z"/>
        </svg>
    )
}

export default Icon
