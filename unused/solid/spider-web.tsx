import { SVGAttributes } from "react"
function Icon(props: SVGAttributes<{}>): JSX.Element {
    return (
        <svg {...props} fill="currentColor" viewBox="0 0 576 512" xmlns="http://www.w3.org/2000/svg">
        	<path d="M567.16 233.86c-56.54-59.32-97.92-131.64-120.56-210.71l-.02-.06c-4.72-16.48-21.5-26.26-38-22.14l-.07.02a497.663 497.663 0 0 1-241.03 0l-.07-.02c-16.5-4.12-33.28 5.66-38 22.14l-.02.06C106.76 102.22 65.38 174.54 8.84 233.86c-11.79 12.37-11.79 31.92 0 44.29 56.54 59.32 97.92 131.64 120.56 210.71l.02.06c4.72 16.48 21.5 26.26 38 22.14l.07-.02a497.663 497.663 0 0 1 241.03 0l.07.02c16.5 4.12 33.28-5.66 38-22.14l.03-.12c22.63-79.04 63.99-151.32 120.5-210.62l.04-.04c11.79-12.36 11.79-31.92 0-44.28zM365.54 73.71l-23.52 40.74a264.971 264.971 0 0 1-108.04 0l-23.52-40.74a563.283 563.283 0 0 0 155.08 0zM288 208.01l-23.43-40.58a313.24 313.24 0 0 0 46.86 0L288 208.01zM302.43 232h-.58l-.29-.5.87.5zM288 303.99l23.44 40.59c-7.8-.58-15.62-.99-23.44-.99s-15.63.41-23.44.99L288 303.99zm-65-112.58L246.43 232h-46.87c8.81-12.93 16.65-26.5 23.44-40.59zm-53.39 221.65A574.3 574.3 0 0 0 93.29 280h45.11c24.22 27.11 42.66 59.04 54.01 93.56l-22.8 39.5zM138.4 232H93.29a574.3 574.3 0 0 0 76.32-133.06l22.81 39.5A264.912 264.912 0 0 1 138.4 232zm108.03 48L223 320.59A314.825 314.825 0 0 0 199.56 280h46.87zM288 432.28c-25.95 0-51.82 2.43-77.54 6.01l23.52-40.73c35.58-7.42 72.45-7.42 108.04 0l23.52 40.73c-25.72-3.58-51.59-6.01-77.54-6.01zm65-111.69L329.57 280h46.87A314.825 314.825 0 0 0 353 320.59zM329.56 232L353 191.41A314.825 314.825 0 0 0 376.44 232h-46.88zm76.83 181.06l-22.81-39.5c11.35-34.52 29.8-66.45 54.02-93.56h45.11a574.3 574.3 0 0 0-76.32 133.06zM437.6 232a264.912 264.912 0 0 1-54.02-93.56l22.81-39.5A574.3 574.3 0 0 0 482.71 232H437.6z"/>
        </svg>
    )
}

export default Icon
