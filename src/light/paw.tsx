import React, { SVGAttributes } from "react"
function Icon(props: SVGAttributes<{}>): JSX.Element {
    return (
        <svg {...props} fill="currentColor" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg">
        	<path d="M256 224c-79.41 0-192 122.76-192 200.25 0 34.9 26.81 55.75 71.74 55.75 48.84 0 81.09-25.08 120.26-25.08 39.51 0 71.85 25.08 120.26 25.08 44.93 0 71.74-20.85 71.74-55.75C448 346.76 335.41 224 256 224zm120.26 224c-20.3 0-37.81-5.77-56.35-11.88-19.68-6.49-40.02-13.19-63.91-13.19-23.65 0-43.85 6.67-63.39 13.12-18.64 6.15-36.25 11.96-56.87 11.96C96 448 96 430.12 96 424.25 96 361.35 196.19 256 256 256s160 105.35 160 168.25c0 5.87 0 23.75-39.74 23.75zm98.57-286.73c-3.57-.86-7.2-1.27-10.81-1.27-25.85 0-51.62 21-60.74 51.39-10.4 34.65 4.77 68.38 33.89 75.34 3.58.86 7.2 1.27 10.81 1.27 25.85 0 51.62-21 60.74-51.39 10.4-34.65-4.77-68.38-33.89-75.34zm3.24 66.14C472.7 245.3 458.55 256 447.98 256c-1.16 0-2.29-.13-3.37-.39-3.7-.88-6.72-3.32-8.98-7.25-4.13-7.18-4.76-17.55-1.7-27.76 5.37-17.9 19.52-28.6 30.1-28.6 1.16 0 2.29.13 3.37.39 3.7.88 6.72 3.33 8.98 7.25 4.12 7.18 4.76 17.55 1.69 27.77zm-159.51-36.8c3.55.93 7.15 1.38 10.76 1.38 27.84 0 56.22-26.82 66.7-65.25 11.84-43.42-3.64-85.21-34.58-93.36a41.92 41.92 0 0 0-10.76-1.39c-27.84 0-56.22 26.82-66.7 65.26-11.84 43.42 3.64 85.22 34.58 93.36zm-3.71-84.93C322.27 78.48 340.43 64 350.68 64c.91 0 1.77.11 2.61.33 4.13 1.09 7.12 5 8.9 8.09 5.08 8.8 8.52 25.48 2.95 45.91-7.42 27.19-25.57 41.67-35.83 41.67-.91 0-1.77-.11-2.62-.33-4.12-1.08-7.12-4.99-8.9-8.08-5.07-8.81-8.51-25.48-2.94-45.91zM182.68 192c3.61 0 7.21-.45 10.76-1.38 30.94-8.14 46.42-49.94 34.58-93.36C217.54 58.82 189.16 32 161.32 32c-3.61 0-7.21.45-10.76 1.39-30.94 8.14-46.42 49.94-34.58 93.36 10.48 38.43 38.87 65.25 66.7 65.25zM149.8 72.42c1.78-3.09 4.78-7 8.9-8.09.85-.22 1.7-.33 2.61-.33 10.26 0 28.41 14.48 35.83 41.68 5.57 20.43 2.13 37.11-2.95 45.91-1.78 3.09-4.77 7-8.9 8.08-.85.22-1.7.33-2.61.33-10.26 0-28.41-14.48-35.83-41.68-5.57-20.42-2.13-37.1 2.95-45.9zM74.84 286.73c29.12-6.96 44.29-40.69 33.88-75.34C99.6 181 73.83 160 47.98 160c-3.62 0-7.24.41-10.81 1.27-29.12 6.96-44.29 40.69-33.89 75.34C12.4 267 38.18 288 64.02 288c3.62 0 7.24-.41 10.82-1.27zM33.93 227.4c-3.06-10.21-2.43-20.59 1.7-27.76 2.26-3.93 5.28-6.37 8.98-7.25 1.08-.26 2.21-.39 3.37-.39 10.57 0 24.72 10.7 30.09 28.59 3.06 10.21 2.43 20.59-1.7 27.77-2.26 3.93-5.28 6.37-8.98 7.25-1.1.26-2.2.39-3.37.39-10.57 0-24.72-10.7-30.09-28.6z"/>
        </svg>
    )
}

export default Icon
