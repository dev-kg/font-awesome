import React, { SVGAttributes } from "react"
function Icon(props: SVGAttributes<{}>): JSX.Element {
    return (
        <svg {...props} fill="currentColor" viewBox="0 0 576 512" xmlns="http://www.w3.org/2000/svg">
        	<path d="M432 128c-8.84 0-16 7.16-16 16s7.16 16 16 16 16-7.16 16-16-7.16-16-16-16zm48 16c0 8.84 7.16 16 16 16s16-7.16 16-16-7.16-16-16-16-16 7.16-16 16zM544.01 0c-9.32 0-18.39 4.08-24.59 11.52L475.68 64h-23.36l-43.74-52.49A32.024 32.024 0 0 0 383.99 0C366.37 0 352 14.3 352 32v128h-16c-103.82 0-194.18 58.53-240 144.27V176c0-44.11-35.88-80-80-80-8.84 0-16 7.16-16 16s7.16 16 16 16c26.47 0 48 21.53 48 48v256c0 44.11 35.88 80 80 80h208c17.66 0 32-14.36 32-32 0-33.05-25.19-60.33-57.38-63.66L416 376.63V480c0 17.64 14.34 32 32 32h32c17.66 0 32-14.36 32-32V260.77c37.7-18.05 64-56.25 64-100.77V32c0-17.7-14.37-32-31.99-32zM480 480h-32V327.38l-144.81 64.37c-3.98-39-30.03-72.23-67.25-84.89-4.33-1.47-8.99 1.34-10.1 5.77l-3.88 15.55c-1.03 4.12 1.41 8.09 5.39 9.57A68.41 68.41 0 0 1 272 401.97V448h48c17.66 0 32 14.36 32 32H144c-26.47 0-48-21.53-48-48 0-132.34 107.66-240 240-240h21.22c13.87 46.1 56.22 80 106.78 80 5.48 0 10.73-.85 16-1.62V480zm64-320c0 44.18-35.82 80-80 80s-80-35.82-80-80V32l53.33 64h53.33L544 32v128z"/>
        </svg>
    )
}

export default Icon
