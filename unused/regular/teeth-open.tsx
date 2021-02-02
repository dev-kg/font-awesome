import React, { SVGAttributes } from "react"
function Icon(props: SVGAttributes<{}>): JSX.Element {
    return (
        <svg {...props} fill="currentColor" viewBox="0 0 640 512" xmlns="http://www.w3.org/2000/svg">
        	<path d="M544 0H96C42.98 0 0 42.98 0 96v96c0 35.35 28.66 64 64 64h512c35.34 0 64-28.65 64-64V96c0-53.02-42.98-96-96-96zM160 212.57c0 6.31-5.12 11.43-11.43 11.43H91.43C85.12 224 80 218.88 80 212.57V200c0-22.09 17.91-40 40-40s40 17.91 40 40v12.57zm144-2.28c0 7.57-6.14 13.71-13.71 13.71h-68.57c-7.57 0-13.71-6.14-13.71-13.71V176c0-26.51 21.49-48 48-48s48 21.49 48 48v34.29zm128 0c0 7.57-6.14 13.71-13.71 13.71h-68.57c-7.57 0-13.71-6.14-13.71-13.71V176c0-26.51 21.49-48 48-48s48 21.49 48 48v34.29zm128 2.28c0 6.31-5.12 11.43-11.43 11.43h-57.14c-6.31 0-11.43-5.12-11.43-11.43V200c0-22.09 17.91-40 40-40s40 17.91 40 40v12.57zm32-62.51C575.96 127.13 549.53 112 520 112c-19.35 0-37.44 6.43-52.13 17.31C451.44 99.92 420 80 384 80c-24.56 0-47 9.27-64 24.5C303 89.27 280.56 80 256 80c-36 0-67.44 19.92-83.87 49.31C157.44 118.43 139.35 112 120 112c-29.53 0-55.96 15.13-72 38.06V96c0-26.47 21.53-48 48-48h448c26.47 0 48 21.53 48 48v54.06zM576 288H64c-35.34 0-64 28.65-64 64v64c0 53.02 42.98 96 96 96h448c53.02 0 96-42.98 96-96v-64c0-35.35-28.66-64-64-64zm-96 43.43c0-6.31 5.12-11.43 11.43-11.43h57.14c6.31 0 11.43 5.12 11.43 11.43V344c0 22.09-17.91 40-40 40s-40-17.91-40-40v-12.57zm-144 2.28c0-7.57 6.14-13.71 13.71-13.71h68.57c7.57 0 13.71 6.14 13.71 13.71V336c0 26.51-21.49 48-48 48s-48-21.49-48-48v-2.29zm-128 0c0-7.57 6.14-13.71 13.71-13.71h68.57c7.57 0 13.71 6.14 13.71 13.71V336c0 26.51-21.49 48-48 48s-48-21.49-48-48v-2.29zm-128-2.28c0-6.31 5.12-11.43 11.43-11.43h57.14c6.31 0 11.43 5.12 11.43 11.43V344c0 22.09-17.91 40-40 40s-40-17.91-40-40v-12.57zM592 416c0 26.47-21.53 48-48 48H96c-26.47 0-48-21.53-48-48v-21.68C63.93 417.04 90.21 432 120 432c26.38 0 50.09-11.67 66.23-30.12C203.75 420.42 228.55 432 256 432c24.56 0 47-9.27 64-24.5 17 15.23 39.44 24.5 64 24.5 27.45 0 52.25-11.58 69.77-30.12C469.91 420.33 493.62 432 520 432c29.79 0 56.07-14.96 72-37.68V416z"/>
        </svg>
    )
}

export default Icon