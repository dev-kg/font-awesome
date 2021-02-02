import React, { SVGAttributes } from "react"
function Icon(props: SVGAttributes<{}>): JSX.Element {
    return (
        <svg {...props} fill="currentColor" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg">
        	<path d="M460.88 152.46c-3.16-3.16 2.2-.13 18.18-14.98 26.56-28.87 34.75-75.08 32.62-120.15C510.75-2.33 487.66.1 481.05.1c-34.29 0-76.94 6.42-105.69 33.16-18.54 18.64-11.73 21.82-16.26 17.29l-39.56-39.59c-6.26-6.26-16.37-6.24-22.6 0l-34.08 34.1c-12.59 12.6-20.57 27.91-24.71 44.01-11.18-8.16-20.36 1.13-20.57 1.35l-33.69 33.71c-12.58 12.59-20.57 27.9-24.7 43.99-11.19-8.16-20.35 1.14-20.57 1.36l-33.87 33.89c-37.49 37.51-37.49 98.35 0 135.87l16.95 16.96L7.03 471.01c-9.37 9.38-9.37 24.58 0 33.95 4.69 4.69 10.8 7.04 16.96 7.04s12.27-2.35 16.96-7.04l114.68-114.8 16.93 16.96c37.46 37.52 98.22 37.54 135.7 0L342.31 373c5.64-5.65 5.9-14.34 1.35-20.6 16.08-4.14 31.37-12.13 43.96-24.74l33.67-33.73c5.64-5.65 5.9-14.34 1.35-20.59 16.07-4.14 31.35-12.13 43.93-24.73l33.85-33.91c6.24-6.25 6.24-16.38 0-22.63l-39.54-39.61zM166.9 310.93l-11.29 11.31-16.95-16.97c-18.74-18.76-18.77-49.15 0-67.93l11.27-11.28 16.95 16.97c9.07 9.07 14.06 21.13 14.06 33.97 0 12.82-4.99 24.87-14.04 33.93zm129.87-231.9l11.47-11.48 16.95 16.96c18.74 18.75 18.77 49.15 0 67.93l-11.47 11.48-16.95-16.96c-18.74-18.74-18.78-49.14 0-67.93zM217.8 158.1l11.08-11.09 16.95 16.96c18.74 18.75 18.78 49.13.01 67.93L234.75 243l-16.95-16.96c-18.74-18.76-18.77-49.15 0-67.94zm56.53 215.07c-18.74 18.78-49.1 18.79-67.85 0l-16.94-16.97 11.54-11.55c18.8-18.76 49.09-18.65 67.77.06l16.94 16.97-11.46 11.49zm79.36-79.45c-18.74 18.78-49.1 18.79-67.85 0l-16.94-16.97 11.08-11.1c18.75-18.78 49.1-18.79 67.85 0l16.94 16.97-11.08 11.1zm78.95-79.06c-18.75 18.78-49.1 18.79-67.85 0l-16.94-16.97 11.26-11.28c18.75-18.78 49.1-18.79 67.85 0l16.94 16.97-11.26 11.28zm-42.65-92.63c1.6-20.03 6.74-41.62 18.71-54.22 11.53-10.28 30.54-16.82 54.59-18.93-2.06 23.83-8.38 42.97-18.28 54.68-11.83 10.14-30.97 16.52-55.02 18.47z"/>
        </svg>
    )
}

export default Icon
