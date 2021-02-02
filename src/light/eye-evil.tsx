import React, { SVGAttributes } from "react"
function Icon(props: SVGAttributes<{}>): JSX.Element {
    return (
        <svg {...props} fill="currentColor" viewBox="0 0 640 512" xmlns="http://www.w3.org/2000/svg">
        	<path d="M627.03 239.08L514.87 208.7c-4.74-6.5-10.02-13.27-15.92-20.25 1.37-2.11 55.26-88.1 55.26-88.1 8.9-14.26-6.04-31.37-22.45-25.42l-119.65 43.32c-9.73-4.86-20.03-9.01-30.84-12.44l-44.39-95.07C333.54 3.58 326.77 0 320 0s-13.54 3.58-16.88 10.73l-44.39 95.07c-10.81 3.43-21.11 7.58-30.84 12.44C98.03 71.23 106.35 73.72 101.5 73.72c-13.37 0-23.41 14.32-15.72 26.63 0 0 53.89 86 55.26 88.1-5.9 6.98-11.18 13.75-15.92 20.25L12.97 239.08c-17.29 4.68-17.29 29.15 0 33.84l112.16 30.38c4.72 6.48 9.98 13.22 15.86 20.18-1.37 2.13-55.2 88.17-55.2 88.17-8.93 14.31 6.07 31.35 22.45 25.43l119.65-43.32c9.73 4.86 20.04 9.01 30.85 12.44l44.39 95.07c3.33 7.15 10.1 10.73 16.87 10.73s13.54-3.58 16.88-10.73l44.39-95.07c10.81-3.43 21.11-7.58 30.85-12.44l119.65 43.32c16.42 5.95 31.35-11.16 22.45-25.43 0 0-53.83-86.04-55.2-88.17 5.88-6.96 11.13-13.7 15.86-20.18l112.16-30.38c17.28-4.69 17.28-29.15-.01-33.84zm-131.39 36.27c-14.98 20.55-12.65 17.51-36.32 45.52l45.78 72.51-95-34.39c-24.77 12.38-24.11 12.13-51.89 20.95L320 461.78l-38.21-81.84c-27.76-8.81-27.08-8.56-51.89-20.95l-95 34.39 45.78-72.51c-23.7-28.04-21.34-24.96-36.32-45.52L72.91 256l71.45-19.35c14.93-20.48 12.55-17.39 36.49-45.72l-45.95-72.32 95 34.4c24.69-12.33 24-12.1 51.88-20.96L320 50.22l38.21 81.84c27.82 8.84 27.08 8.57 51.88 20.96l95-34.4-45.95 72.32c23.84 28.21 21.47 25.12 36.49 45.72L567.09 256l-71.45 19.35zM320 213.33c-32.82 0-62.7-8.79-86.45-23.09C222.48 206.77 216 226.62 216 248c0 57.44 46.56 104 104 104s104-46.56 104-104c0-21.38-6.48-41.23-17.55-57.75-23.75 14.29-53.63 23.08-86.45 23.08zM320 320c-39.7 0-72-32.3-72-72 0-5.03.52-10 1.54-14.85 12.42 4.53 25.52 7.48 38.91 9.5-.08.94-.45 1.71-.45 2.69 0 28.45 32 42.67 32 42.67s32-14.22 32-42.67c0-.97-.38-1.75-.45-2.69 13.39-2.01 26.49-4.97 38.91-9.5C391.48 238 392 242.97 392 248c0 39.7-32.3 72-72 72z"/>
        </svg>
    )
}

export default Icon
