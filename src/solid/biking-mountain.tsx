import React, { SVGAttributes } from "react"
function Icon(props: SVGAttributes<{}>): JSX.Element {
    return (
        <svg {...props} fill="currentColor" viewBox="0 0 640 512" xmlns="http://www.w3.org/2000/svg">
        	<path d="M400 96a48 48 0 1 0-48-48 48 48 0 0 0 48 48zm-227.29 74.16c5.65 6.8 15.39 7.81 21.77 2.26L298.8 83.51c6.38-5.54 7-15.54 1.35-22.33-28.2-33.95-76.91-39-108.81-11.3l-58.12 48.76c-6.37 5.55-7 15.54-1.34 22.34zM240 352h-5.2a110.19 110.19 0 0 0-8.65-20.89l3.67-3.67a16 16 0 0 0 0-22.63l-22.63-22.63a16 16 0 0 0-22.63 0l-3.67 3.67A110.45 110.45 0 0 0 160 277.2V272a16 16 0 0 0-16-16h-32a16 16 0 0 0-16 16v5.2a110.19 110.19 0 0 0-20.89 8.65l-3.67-3.67a16 16 0 0 0-22.63 0l-22.63 22.63a16 16 0 0 0 0 22.63l3.67 3.67A110.45 110.45 0 0 0 21.2 352H16a16 16 0 0 0-16 16v32a16 16 0 0 0 16 16h5.2a110.19 110.19 0 0 0 8.65 20.89l-3.67 3.67a16 16 0 0 0 0 22.63l22.63 22.63a16 16 0 0 0 22.63 0l3.67-3.67A110.94 110.94 0 0 0 96 490.8v5.2a16 16 0 0 0 16 16h32a16 16 0 0 0 16-16v-5.2a110.47 110.47 0 0 0 20.89-8.65l3.67 3.67a16 16 0 0 0 22.63 0l22.63-22.63a16 16 0 0 0 0-22.63l-3.67-3.67a110.45 110.45 0 0 0 8.66-20.89H240a16 16 0 0 0 16-16v-32a16 16 0 0 0-16-16zm-112 96a64 64 0 1 1 64-64 64 64 0 0 1-64 64zm496-96h-5.2a110.19 110.19 0 0 0-8.65-20.89l3.67-3.67a16 16 0 0 0 0-22.63l-22.63-22.63a16 16 0 0 0-22.63 0l-3.67 3.67A110.45 110.45 0 0 0 544 277.2V272a16 16 0 0 0-16-16h-32a16 16 0 0 0-16 16v5.2a110.1 110.1 0 0 0-20.88 8.65l-3.67-3.67a16 16 0 0 0-22.63 0l-22.63 22.63a16 16 0 0 0 0 22.63l3.67 3.67a110.45 110.45 0 0 0-8.67 20.89H400a16 16 0 0 0-16 16v32a16 16 0 0 0 16 16h5.2a110.19 110.19 0 0 0 8.65 20.89l-3.67 3.67a16 16 0 0 0 0 22.63l22.63 22.63a16 16 0 0 0 22.63 0l3.67-3.67A111.13 111.13 0 0 0 480 490.8v5.2a16 16 0 0 0 16 16h32a16 16 0 0 0 16-16v-5.2a110.56 110.56 0 0 0 20.9-8.65l3.67 3.67a16 16 0 0 0 22.63 0l22.63-22.63a16 16 0 0 0 0-22.63l-3.67-3.67A110.45 110.45 0 0 0 618.8 416h5.2a16 16 0 0 0 16-16v-32a16 16 0 0 0-16-16zm-112 96a64 64 0 1 1 64-64 64 64 0 0 1-64 64zM396 217a32 32 0 0 0 20 7h64a32 32 0 0 0 0-64h-52.78L356 103a31.94 31.94 0 0 0-40.81.68l-112 96a32 32 0 0 0 3.07 50.92L288 305.12V416a32 32 0 0 0 64 0V288a32 32 0 0 0-14.25-26.62l-41.35-27.57 58.24-49.92z"/>
        </svg>
    )
}

export default Icon
