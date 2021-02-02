import React, { SVGAttributes } from "react"
function Icon(props: SVGAttributes<{}>): JSX.Element {
    return (
        <svg {...props} fill="currentColor" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg">
        	<path d="M74.84 286.73c29.12-6.96 44.29-40.69 33.88-75.34C99.6 181 73.83 160 47.98 160c-3.62 0-7.24.41-10.81 1.27-29.12 6.96-44.29 40.69-33.89 75.34C12.41 267 38.18 288 64.02 288c3.62 0 7.24-.41 10.82-1.27zM41.59 225.1c-2.88-9.59-1.38-17.37.97-21.47 1.69-2.93 3.3-3.32 3.91-3.46.48-.11.97-.17 1.51-.17 6.52 0 17.95 7.96 22.43 22.89 2.88 9.59 1.38 17.38-.97 21.47-1.69 2.93-3.3 3.32-5.42 3.63-6.52.01-17.94-7.95-22.43-22.89zm276.97-34.49c3.55.93 7.15 1.38 10.76 1.38 27.84 0 56.22-26.82 66.7-65.25 11.84-43.42-3.64-85.21-34.58-93.36a41.92 41.92 0 0 0-10.76-1.39c-27.84 0-56.22 26.82-66.7 65.26-11.84 43.42 3.64 85.22 34.58 93.36zm4.01-82.83C328.98 84.29 344.28 72 350.68 72l.58.07c.88.23 2.46 1.67 4.01 4.35 4.08 7.06 7.09 21.73 2.16 39.8-6.39 23.43-21.62 35.71-28.63 35.71h-.06c-.88-.23-2.46-1.66-4.01-4.35-4.08-7.06-7.09-21.72-2.16-39.8zm152.26 53.49c-3.57-.86-7.2-1.27-10.81-1.27-25.85 0-51.62 21-60.74 51.39-10.4 34.65 4.77 68.38 33.89 75.34 3.58.86 7.2 1.27 10.81 1.27 25.85 0 51.62-21 60.74-51.39 10.4-34.65-4.77-68.38-33.89-75.34zm-4.42 63.83c-4.44 14.78-15.67 22.73-23.69 22.73h-.25c-.61-.14-2.22-.53-3.91-3.46-2.36-4.1-3.85-11.89-.97-21.47 4.49-14.94 15.91-22.9 22.43-22.9l1.51.17c.61.14 2.22.53 3.91 3.46 2.36 4.1 3.85 11.89.97 21.47zM182.68 192c3.61 0 7.21-.45 10.76-1.38 30.94-8.14 46.42-49.94 34.58-93.36C217.54 58.82 189.16 32 161.32 32c-3.61 0-7.21.45-10.76 1.39-30.94 8.14-46.42 49.94-34.58 93.36 10.48 38.43 38.87 65.25 66.7 65.25zM156.73 76.42c1.55-2.68 3.13-4.12 4.01-4.35.12-.03.29-.07.58-.07 6.4 0 21.7 12.29 28.11 35.78 4.93 18.08 1.92 32.74-2.16 39.8-1.55 2.68-3.13 4.12-4.59 4.41-6.4 0-21.71-12.29-28.11-35.78-4.93-18.07-1.92-32.73 2.16-39.79zM256 224c-79.41 0-192 122.76-192 200.25 0 34.9 26.81 55.75 71.74 55.75 48.84 0 81.09-25.08 120.26-25.08 39.51 0 71.85 25.08 120.26 25.08 44.93 0 71.74-20.85 71.74-55.75C448 346.76 335.41 224 256 224zm143.81 203.07c-.95 1.05-7.7 4.93-23.54 4.93-17.73 0-33.3-5.13-51.34-11.08-19.9-6.56-42.46-14-68.92-14-26.22 0-48.63 7.4-68.4 13.92-18.14 5.99-33.8 11.16-51.86 11.16-15.85 0-22.6-3.89-23.38-4.67-.1-.23-.36-1.23-.36-3.08C112 370.18 204.86 272 256 272s144 98.18 144 152.25c0 1.82-.25 2.82-.19 2.82z"/>
        </svg>
    )
}

export default Icon
