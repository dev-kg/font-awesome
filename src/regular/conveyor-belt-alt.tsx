import React, { SVGAttributes } from "react"
function Icon(props: SVGAttributes<{}>): JSX.Element {
    return (
        <svg {...props} fill="currentColor" viewBox="0 0 640 512" xmlns="http://www.w3.org/2000/svg">
        	<path d="M544 320H96c-53 0-96 43-96 96s43 96 96 96h448c53 0 96-43 96-96s-43-96-96-96zm0 144H96c-26.5 0-48-21.5-48-48s21.5-48 48-48h448c26.5 0 48 21.5 48 48s-21.5 48-48 48zm-416-80c-17.7 0-32 14.3-32 32s14.3 32 32 32 32-14.3 32-32-14.3-32-32-32zm384 0c-17.7 0-32 14.3-32 32s14.3 32 32 32 32-14.3 32-32-14.3-32-32-32zm-192 0c-17.7 0-32 14.3-32 32s14.3 32 32 32 32-14.3 32-32-14.3-32-32-32zm-208-96h416c8.8 0 16-7.2 16-16V80c0-8.8-7.2-16-16-16H384V16c0-8.8-7.2-16-16-16H112c-8.8 0-16 7.2-16 16v256c0 8.8 7.2 16 16 16zm272-176h112v128H384V112zM144 48h192v192H144V48z"/>
        </svg>
    )
}

export default Icon
