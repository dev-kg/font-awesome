import React, { SVGAttributes } from "react"
function Icon(props: SVGAttributes<{}>): JSX.Element {
    return (
        <svg {...props} fill="currentColor" viewBox="0 0 640 512" xmlns="http://www.w3.org/2000/svg">
        	<path d="M96 224a64 64 0 1 0-64-64 64.06 64.06 0 0 0 64 64zm224 32a112 112 0 1 0-112-112 111.94 111.94 0 0 0 112 112zm32 96c0-19.1 3.92-37.17 10.09-54.17A152.75 152.75 0 0 1 320 304c-24.6 0-47.6-6-68.5-16h-8.3A115.23 115.23 0 0 0 128 403.2V432a48 48 0 0 0 48 48h241c-39.22-29.19-65-75.47-65-128zm-178.9-77.4A63.81 63.81 0 0 0 128 256H64a64.06 64.06 0 0 0-64 64v32a32 32 0 0 0 32 32h65.9a146.64 146.64 0 0 1 75.2-109.4zM512 224a128 128 0 1 0 128 128 128 128 0 0 0-128-128zm64 144a5.33 5.33 0 0 1-5.33 5.33h-37.34v37.34A5.33 5.33 0 0 1 528 416h-32a5.33 5.33 0 0 1-5.33-5.33v-37.34h-37.34A5.33 5.33 0 0 1 448 368v-32a5.33 5.33 0 0 1 5.33-5.33h37.34v-37.34A5.33 5.33 0 0 1 496 288h32a5.33 5.33 0 0 1 5.33 5.33v37.34h37.34A5.33 5.33 0 0 1 576 336z"/>
        </svg>
    )
}

export default Icon
