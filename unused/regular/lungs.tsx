import { SVGAttributes } from "react"
function Icon(props: SVGAttributes<{}>): JSX.Element {
    return (
        <svg {...props} fill="currentColor" viewBox="0 0 640 512" xmlns="http://www.w3.org/2000/svg">
        	<path d="M636.11 390.15C614.44 308.85 580.07 231 534.1 159.13 511.98 124.56 498.03 96 454.05 96 415.36 96 384 125.42 384 161.71v60.11l-32.88-21.92a15.996 15.996 0 0 1-7.12-13.31V16c0-8.84-7.16-16-16-16h-16c-8.84 0-16 7.16-16 16v170.59c0 5.35-2.67 10.34-7.12 13.31L256 221.82v-60.11C256 125.42 224.64 96 185.95 96c-43.98 0-57.93 28.56-80.05 63.13C59.93 231 25.56 308.85 3.89 390.15 1.3 399.84 0 409.79 0 419.78 0 472.11 45.63 512 98.07 512c18.09 0 24.45-2.87 86.68-19.55 42.18-11.3 71.26-47.47 71.26-88.62v-87.49l-48 32v55.49c0 19.25-14.67 36.62-35.68 42.25C107.71 463.4 107.88 464 98.07 464c-30.31 0-57.91-23.57-47.79-61.49C70.68 325.93 103 252.74 146.33 185c23.04-36.41 25.34-41 39.62-41 11.95 0 22.05 8.11 22.05 17.71v92.11l-80 53.33c-7.35 4.9-9.34 14.83-4.44 22.19l8.88 13.31c4.9 7.35 14.84 9.34 22.19 4.44L320 236.84l165.38 110.25c7.35 4.9 17.29 2.91 22.19-4.44l8.88-13.31c4.9-7.35 2.91-17.29-4.44-22.19l-80-53.33v-92.11c0-9.6 10.1-17.71 22.05-17.71 14.28 0 16.57 4.59 39.62 41 43.33 67.74 75.65 140.93 96.06 217.51 10.12 37.92-17.48 61.49-47.79 61.49-9.81 0-9.64-.6-74.25-17.91-21.01-5.63-35.68-23.01-35.68-42.25v-55.49l-48-32v87.49c0 41.15 29.08 77.31 71.26 88.62 62.22 16.68 68.59 19.55 86.68 19.55 52.44 0 98.07-39.89 98.07-92.22-.03-10-1.33-19.95-3.92-29.64z"/>
        </svg>
    )
}

export default Icon
