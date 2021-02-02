import React, { SVGAttributes } from "react"
function Icon(props: SVGAttributes<{}>): JSX.Element {
    return (
        <svg {...props} fill="currentColor" viewBox="0 0 640 512" xmlns="http://www.w3.org/2000/svg">
        	<path d="M640 264v-16c0-8.84-7.16-16-16-16H344v-72h72c17.67 0 32-14.33 32-32V32c0-17.67-14.33-32-32-32H224c-17.67 0-32 14.33-32 32v96c0 17.67 14.33 32 32 32h72v72H16c-8.84 0-16 7.16-16 16v16c0 8.84 7.16 16 16 16h104v72H64c-17.67 0-32 14.33-32 32v96c0 17.67 14.33 32 32 32h160c17.67 0 32-14.33 32-32v-96c0-17.67-14.33-32-32-32h-56v-72h304v72h-56c-17.67 0-32 14.33-32 32v96c0 17.67 14.33 32 32 32h160c17.67 0 32-14.33 32-32v-96c0-17.67-14.33-32-32-32h-56v-72h104c8.84 0 16-7.16 16-16zM240 48h160v64H240V48zm-32 352v64H80v-64h128zm352 0v64H432v-64h128z"/>
        </svg>
    )
}

export default Icon
