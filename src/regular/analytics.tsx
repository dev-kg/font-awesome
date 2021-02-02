import React, { SVGAttributes } from "react"
function Icon(props: SVGAttributes<{}>): JSX.Element {
    return (
        <svg {...props} fill="currentColor" viewBox="0 0 608 512" xmlns="http://www.w3.org/2000/svg">
        	<path d="M416 320h-64c-17.67 0-32 14.33-32 32v128c0 17.67 14.33 32 32 32h64c17.67 0 32-14.33 32-32V352c0-17.67-14.33-32-32-32zm-16 144h-32v-96h32v96zm176-272h-64c-17.67 0-32 14.33-32 32v256c0 17.67 14.33 32 32 32h64c17.67 0 32-14.33 32-32V224c0-17.67-14.33-32-32-32zm-16 272h-32V240h32v224zM256 192h-64c-17.67 0-32 14.33-32 32v256c0 17.67 14.33 32 32 32h64c17.67 0 32-14.33 32-32V224c0-17.67-14.33-32-32-32zm-16 272h-32V240h32v224zM96 352H32c-17.67 0-32 14.33-32 32v96c0 17.67 14.33 32 32 32h64c17.67 0 32-14.33 32-32v-96c0-17.67-14.33-32-32-32zM80 464H48v-64h32v64zM64 256c26.51 0 48-21.49 48-48 0-4.27-.74-8.34-1.78-12.28l101.5-101.5C215.66 95.26 219.73 96 224 96c6.15 0 11.97-1.26 17.38-3.37l95.34 76.27c-.35 2.33-.71 4.67-.71 7.1 0 26.51 21.49 48 48 48s48-21.49 48-48c0-2.43-.37-4.76-.71-7.09l95.34-76.27C532.03 94.74 537.85 96 544 96c26.51 0 48-21.49 48-48S570.51 0 544 0s-48 21.49-48 48c0 2.43.37 4.76.71 7.09l-95.34 76.27c-5.4-2.11-11.23-3.37-17.38-3.37s-11.97 1.26-17.38 3.37L271.29 55.1c.35-2.33.71-4.67.71-7.1 0-26.51-21.49-48-48-48s-48 21.49-48 48c0 4.27.74 8.34 1.78 12.28l-101.5 101.5C72.34 160.74 68.27 160 64 160c-26.51 0-48 21.49-48 48s21.49 48 48 48z"/>
        </svg>
    )
}

export default Icon
