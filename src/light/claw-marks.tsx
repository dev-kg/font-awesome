import React, { SVGAttributes } from "react"
function Icon(props: SVGAttributes<{}>): JSX.Element {
    return (
        <svg {...props} fill="currentColor" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg">
        	<path d="M509.64 477.53l-1.47-3.12C463.56 378.88 328.12 141.69 34.58 2.4c-10.75-5.11-23.12-1.86-30 7.86-6.94 9.84-5.84 22.69 2.69 31.23l168.44 168.35c.44 1.06.41 4.81.34 10.25v51.89h55.89c3.69 0 7.28 1.5 9.69 3.9l75.08 77.51c2.62 2.64 4.09 6.15 4.09 9.54l-1.12 53.39 53.02-1.14c3.69 0 7.31 1.5 10.06 4.25l87.8 85.37c4.72 4.77 10.84 7.19 17.03 7.19 4.84 0 9.75-1.48 14.06-4.53 9.77-6.85 13.05-19.15 7.99-29.93zm-104.42-80.87c-8.56-8.56-20.4-13.47-32.84-13.47h-.03l-20 .42.44-20.33c0-12.28-4.78-23.83-13.28-32.33l-75.08-77.51c-8.69-8.69-20.21-13.47-32.49-13.47h-23.9l.03-22.45c.09-8.05.25-20.23-9.5-29.97L64.26 53.23c222.8 119.7 342.4 296.28 396.05 397.03l-55.09-53.6zM29.52 212l-.03-.02a20.536 20.536 0 0 0-25.59 6.75c-5.81 8.23-4.84 19.4 1.06 25.17l71.02 89.17c2.62 2.64 4.09 6.16 4.09 9.91v57h56.99c3.75 0 7.25 1.45 10.84 4.97L266.75 505.9c4 4 9.28 6.06 14.59 6.06 4.12 0 8.28-1.25 11.87-3.78 8.22-5.75 11.09-16.5 6.81-25.56C222.01 317.23 84.85 238.26 29.52 212zm140.06 169.44c-8.69-8.69-20.25-13.47-32.53-13.47h-24.99v-25c0-12.3-4.78-23.84-12.25-31.17L64.6 267.62c52.18 32.22 122.97 87.92 177.46 175.4l-72.48-61.58zm144.19-274.15c1.69 1.67 2.62 3.95 2.75 8.19l5.09 42.9 44.8 5.23c2.34 0 4.62.94 7.62 3.8l104.04 82.75c3.84 3.84 8.9 5.81 14 5.81 4 0 8-1.2 11.5-3.66 7.87-5.55 10.59-15.89 6.5-24.56C445 89.79 330.55 23.88 284.34 1.93c-8.72-4.12-19.06-1.44-24.65 6.45-5.59 7.94-4.69 18.67.44 23.47l53.64 75.44zm137.29 80.63l-55.71-44.33c-7.5-7.52-17.87-11.87-26.71-11.87h-.31l-17.96-2.14-1.97-16c0-10.89-4.25-21.15-10.22-26.84l-21.53-30.25c40.37 25.78 92.42 67.86 134.41 131.43z"/>
        </svg>
    )
}

export default Icon
