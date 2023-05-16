import { SVGAttributes } from "react"
function Icon(props: SVGAttributes<{}>): JSX.Element {
    return (
        <svg {...props} fill="currentColor" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg">
        	<path d="M448 0H64C28.65 0 0 28.65 0 64v288c0 35.35 28.65 64 64 64h96v83.98c0 7.1 5.83 12.02 12.05 12.02 2.41 0 4.88-.74 7.08-2.37L304 416h144c35.35 0 64-28.65 64-64V64c0-35.35-28.65-64-64-64zm16 352c0 8.82-7.18 16-16 16H288l-12.8 9.6-67.2 50.39V368H64c-8.82 0-16-7.18-16-16V64c0-8.82 7.18-16 16-16h384c8.82 0 16 7.18 16 16v288zM286.41 191.72l-50.07-14.3a8.46 8.46 0 0 1-6.12-8.11c0-4.64 3.78-8.42 8.44-8.42h32.78c3.6 0 7.08.77 10.26 2.22 4.8 2.21 10.37 1.71 14.11-2.03l17.52-17.52c5.27-5.27 4.67-14.28-1.55-18.38-9.5-6.27-20.35-10.11-31.78-11.46V96c0-8.84-7.16-16-16-16h-16c-8.84 0-16 7.16-16 16v17.56c-30.29 3.62-53.37 30.98-49.32 63.05 2.9 22.95 20.66 41.31 42.91 47.67l50.07 14.3a8.46 8.46 0 0 1 6.12 8.11c0 4.64-3.78 8.42-8.44 8.42h-32.78c-3.6 0-7.08-.77-10.26-2.22-4.8-2.21-10.37-1.71-14.11 2.03l-17.52 17.52c-5.27 5.27-4.68 14.28 1.55 18.38 9.5 6.27 20.35 10.11 31.78 11.46V320c0 8.84 7.16 16 16 16h16c8.84 0 16-7.16 16-16v-17.56c30.29-3.62 53.37-30.98 49.32-63.05-2.9-22.95-20.66-41.31-42.91-47.67z"/>
        </svg>
    )
}

export default Icon
