import { SVGAttributes } from "react"
function Icon(props: SVGAttributes<{}>): JSX.Element {
    return (
        <svg {...props} fill="currentColor" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg">
        	<path d="M415.81 66a16.095 16.095 0 0 0-7.76-1.99c-4.28 0-8.51 1.71-11.6 5.01a15.974 15.974 0 0 0-1.91 19.52c16.49 26.16 25.2 56.39 25.2 87.41-.19 53.25-26.77 102.69-71.27 132.41l-76.63 53.35v-20.1l44.05-36.09c3.92-4.2 5-10.09 2.81-15.28L310.85 273c33.84-19.26 56.94-55.25 56.94-96.99 0-40.79-22.02-76.13-54.59-95.71l5.22-11.44c2.34-5.53.93-11.83-3.57-16.04L255.86 0l-58.99 52.81c-4.5 4.21-5.9 10.51-3.57 16.04l5.22 11.44c-32.57 19.58-54.59 54.93-54.59 95.72 0 41.75 23.09 77.73 56.94 96.99l-7.85 17.24c-2.19 5.18-1.1 11.07 2.81 15.28l44.05 36.09v19.9l-76.59-53.33C119.02 278.62 92.44 229.19 92.25 176c0-31.08 8.71-61.31 25.2-87.47 3.87-6.16 2.4-13.77-2.59-19.08-3-3.21-7.34-4.8-11.69-4.8-2.89 0-5.8.7-8.33 2.1C16.32 109.6-22.3 205.3 13.36 295.99c7.07 17.99 17.89 34.38 30.46 49.06l55.97 65.36c3.12 3.65 7.6 5.59 12.15 5.59 2.55 0 5.13-.61 7.5-1.88l79.35-42.23L228 392.23l-47.08 32.78c-1.67-.37-3.23-1.01-5.01-1.01-13.25 0-23.99 10.74-23.99 24 0 13.25 10.74 24 23.99 24 12.1 0 21.69-9.11 23.33-20.76l40.63-28.28v29.95c-9.39 5.57-15.99 15.38-15.99 27.1 0 17.67 14.32 32 31.98 32s31.98-14.33 31.98-32c0-11.71-6.61-21.52-15.99-27.1v-30.15l40.91 28.48C314.41 462.89 324 472 336.09 472c13.25 0 23.99-10.75 23.99-24 0-13.26-10.74-24-23.99-24-1.78 0-3.34.64-5.01 1.01L284 392.23l29.21-20.34 79.35 42.23c2.38 1.26 4.95 1.88 7.5 1.88 4.55 0 9.03-1.94 12.15-5.59l52.51-61.31c18.86-22.02 34-47.5 41.25-75.59 21.62-83.66-16.45-167.27-90.16-207.51zM119.53 359.7l-39.29-45.88c-10.22-11.93-17.7-23.84-22.25-35.4-8.06-20.5-11.11-41.58-9.63-61.89 10.7 53.27 41.94 100.63 87.51 131.05l2.79 1.95-19.13 10.17zM327.81 176c0 25.53-13.44 47.86-33.52 60.65l-8.96-19.67c-8.75-24.52-8.75-51.04 0-75.56l11.25-24.68c18.83 13 31.23 34.69 31.23 59.26zm-143.91 0c0-24.57 12.4-46.26 31.23-59.26l11.25 24.68c8.75 24.52 8.75 51.03 0 75.56l-8.96 19.67c-20.08-12.79-33.52-35.12-33.52-60.65zm275.64 85.5c-4.88 18.91-15.39 37.87-31.23 56.37l-35.84 41.84-19.15-10.19 1.78-1.24c46.36-30.96 77.82-78.56 88.55-132.04 1.12 14.77-.18 30.03-4.11 45.26z"/>
        </svg>
    )
}

export default Icon
