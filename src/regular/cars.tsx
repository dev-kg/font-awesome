import React, { SVGAttributes } from "react"
function Icon(props: SVGAttributes<{}>): JSX.Element {
    return (
        <svg {...props} fill="currentColor" viewBox="0 0 640 512" xmlns="http://www.w3.org/2000/svg">
        	<path d="M499.32 275.65A32.06 32.06 0 0 0 469.8 256h-75.6a32 32 0 0 0-29.41 19.4L345.2 320h173.6zM336 344a24 24 0 1 0 24 24 24 24 0 0 0-24-24zm250.77-67.4l-14-32.72A111.86 111.86 0 0 0 469.8 176h-75.6a111.86 111.86 0 0 0-102.94 67.88l-14 32.72A80.16 80.16 0 0 0 224 352v32a79.67 79.67 0 0 0 32.07 63.65c0 .12-.07.23-.07.35v32a32 32 0 0 0 32 32h16a32 32 0 0 0 32-32v-16h192v16a32 32 0 0 0 32 32h16a32 32 0 0 0 32-32v-32c0-.12-.07-.23-.07-.35A79.67 79.67 0 0 0 640 384v-32a80.16 80.16 0 0 0-53.23-75.4zM592 384a32 32 0 0 1-32 32H304a32 32 0 0 1-32-32v-32a32 32 0 0 1 32-32h6.86l24.52-57.21A64 64 0 0 1 394.2 224h75.6a64 64 0 0 1 58.82 38.79L553.14 320H560a32 32 0 0 1 32 32zm-64-40a24 24 0 1 0 24 24 24 24 0 0 0-24-24zM275.32 99.65A32.06 32.06 0 0 0 245.8 80h-75.6a32 32 0 0 0-29.41 19.4L121.2 144h173.6zM252.79 252.4l5.32-12.4H80a32 32 0 0 1-32-32v-32a32 32 0 0 1 32-32h6.86l24.52-57.21A64 64 0 0 1 170.2 48h75.6a64 64 0 0 1 58.82 38.79L329.14 144H336c6.62 0 12.41 2.49 17.52 5.93A143.81 143.81 0 0 1 394.2 144h14.88a80.3 80.3 0 0 0-46.31-43.4l-14-32.72A111.86 111.86 0 0 0 245.8 0h-75.6A111.86 111.86 0 0 0 67.26 67.88l-14 32.72A80.16 80.16 0 0 0 0 176v32a79.67 79.67 0 0 0 32.07 63.65c0 .12-.07.23-.07.35v32a32 32 0 0 0 32 32h16a32 32 0 0 0 32-32v-16h100.46a112 112 0 0 1 40.33-35.6zM88 192a24 24 0 1 0 24-24 24 24 0 0 0-24 24z"/>
        </svg>
    )
}

export default Icon
