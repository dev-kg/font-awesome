import React, { SVGAttributes } from "react"
function Icon(props: SVGAttributes<{}>): JSX.Element {
    return (
        <svg {...props} fill="currentColor" viewBox="0 0 448 512" xmlns="http://www.w3.org/2000/svg">
        	<path d="M400 144c-26.51 0-48 21.49-48 48s21.49 48 48 48 48-21.49 48-48-21.49-48-48-48zm-256-16c26.51 0 48-21.49 48-48s-21.49-48-48-48-48 21.49-48 48 21.49 48 48 48zm160 0c26.51 0 48-21.49 48-48s-21.49-48-48-48-48 21.49-48 48 21.49 48 48 48zm63.31 172.78c-26.29-14.84-47.14-61.41-67.17-97.83C284.41 174.31 254.21 160 224 160s-60.41 14.31-76.15 42.95c-20.29 36.96-40.12 82.56-67.17 97.83C51.63 317.18 32 348.18 32 383.95c0 53.01 42.98 95.98 96 95.98 1.31.04 2.6.07 3.87.07 48.88 0 68.92-32.06 92.13-32.06S267.25 480 316.13 480c1.27 0 2.56-.02 3.87-.07 53.02 0 96-42.97 96-95.98 0-35.77-19.63-66.77-48.69-83.17zM320 431.93h-.81l-.81.03-2.25.04c-15.7 0-25.28-5.71-38.54-13.63-13.76-8.21-30.89-18.43-53.59-18.43-22.7 0-39.83 10.22-53.59 18.44-13.25 7.91-22.83 13.62-38.54 13.62l-2.24-.04-.81-.03H128c-26.47 0-48-21.52-48-47.98 0-17.32 9.08-32.79 24.29-41.38 34.56-19.52 55.25-58.92 75.25-97.02 3.48-6.62 6.92-13.2 10.38-19.48C199.13 209.3 218.33 208 224 208s24.87 1.3 34.08 18.07c3.27 5.95 6.56 12.17 9.89 18.48 20.47 38.73 41.65 78.78 75.74 98.03 15.21 8.59 24.29 24.06 24.29 41.38 0 26.45-21.53 47.97-48 47.97zM96 192c0-26.51-21.49-48-48-48S0 165.49 0 192s21.49 48 48 48 48-21.49 48-48z"/>
        </svg>
    )
}

export default Icon
