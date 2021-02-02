import React, { SVGAttributes } from "react"
function Icon(props: SVGAttributes<{}>): JSX.Element {
    return (
        <svg {...props} fill="currentColor" viewBox="0 0 640 512" xmlns="http://www.w3.org/2000/svg">
        	<path d="M144 128h-32c-8.84 0-16 7.16-16 16v144h64V144c0-8.84-7.16-16-16-16zm96 0h-32c-8.84 0-16 7.16-16 16v144h64V144c0-8.84-7.16-16-16-16zm192 0h-32c-8.84 0-16 7.16-16 16v144h64V144c0-8.84-7.16-16-16-16zm96 0h-32c-8.84 0-16 7.16-16 16v144h64V144c0-8.84-7.16-16-16-16zm80-32c17.67 0 32-14.33 32-32S608 0 608 0s-32 46.33-32 64 14.33 32 32 32zm-96 0c17.67 0 32-14.33 32-32S512 0 512 0s-32 46.33-32 64 14.33 32 32 32zm-96 0c17.67 0 32-14.33 32-32S416 0 416 0s-32 46.33-32 64 14.33 32 32 32zm-96 0c17.67 0 32-14.33 32-32S320 0 320 0s-32 46.33-32 64 14.33 32 32 32zm-96 0c17.67 0 32-14.33 32-32S224 0 224 0s-32 46.33-32 64 14.33 32 32 32zm-96 0c17.67 0 32-14.33 32-32S128 0 128 0 96 46.33 96 64s14.33 32 32 32zm-96 0c17.67 0 32-14.33 32-32S32 0 32 0 0 46.33 0 64s14.33 32 32 32zm544 192c0 17.67-14.33 32-32 32H352V144c0-8.84-7.16-16-16-16h-32c-8.84 0-16 7.16-16 16v176H96c-17.67 0-32-14.33-32-32V144c0-8.84-7.16-16-16-16H16c-8.84 0-16 7.16-16 16v144c0 53.02 42.98 96 96 96h192v64H112c-8.84 0-16 7.16-16 16v32c0 8.84 7.16 16 16 16h416c8.84 0 16-7.16 16-16v-32c0-8.84-7.16-16-16-16H352v-64h192c53.02 0 96-42.98 96-96V144c0-8.84-7.16-16-16-16h-32c-8.84 0-16 7.16-16 16v144z"/>
        </svg>
    )
}

export default Icon
