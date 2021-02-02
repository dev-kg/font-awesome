import React, { SVGAttributes } from "react"
function Icon(props: SVGAttributes<{}>): JSX.Element {
    return (
        <svg {...props} fill="currentColor" viewBox="0 0 640 512" xmlns="http://www.w3.org/2000/svg">
        	<path d="M344 480h-80c-4.42 0-8 3.58-8 8v16c0 4.42 3.58 8 8 8h80c4.42 0 8-3.58 8-8v-16c0-4.42-3.58-8-8-8zm144 0h-80c-4.42 0-8 3.58-8 8v16c0 4.42 3.58 8 8 8h80c4.42 0 8-3.58 8-8v-16c0-4.42-3.58-8-8-8zm144 0h-80c-4.42 0-8 3.58-8 8v16c0 4.42 3.58 8 8 8h80c4.42 0 8-3.58 8-8v-16c0-4.42-3.58-8-8-8zM511.45 13.17C498.87 4.19 484.31 0 469.7 0c-23.06 0-46.27 10.44-62.13 28.97L183.68 290.6c-5.79 6.77-4.9 15.34-.5 21.57L0 512h.38c101.37 0 198.38-34.12 272.96-94.68.23-.19.46-.37.69-.56 30.39-24.9 47.16-59.96 52.22-96.75h17.57c10.41 0 20.3-4.55 27.08-12.47l154.47-180.49c29.3-34.23 23.59-87.13-13.92-113.88zm-258.28 379.3c-49.49 40.19-109.26 67.52-173.46 79.93L219.41 320h75.21c-4.94 28.79-19.33 54.35-41.45 72.47zm247.88-286.23L346.58 286.73c-.69.81-1.7 1.28-2.77 1.28H228.02L431.88 49.78C441.41 38.64 455.54 32 469.7 32c8.54 0 16.54 2.5 23.17 7.22 10.54 7.52 17.22 18.75 18.79 31.62 1.56 12.79-2.3 25.7-10.61 35.4z"/>
        </svg>
    )
}

export default Icon