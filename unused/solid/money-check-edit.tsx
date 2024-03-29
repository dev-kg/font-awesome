import { SVGAttributes } from "react"
function Icon(props: SVGAttributes<{}>): JSX.Element {
    return (
        <svg {...props} fill="currentColor" viewBox="0 0 640 512" xmlns="http://www.w3.org/2000/svg">
        	<path d="M462.88 374.62a32 32 0 0 0 22.63 9.38H528a16 16 0 0 0 16-16v-42.46a32 32 0 0 0-9.38-22.63L303.19 71.47l-71.7 71.7zm-254-254l71.7-71.8L238.79 7a24.1 24.1 0 0 0-33.9 0L167 44.87a24 24 0 0 0 0 33.8zM608 160H437l120.27 120.28A64 64 0 0 1 576 325.54V400a16 16 0 0 1-16 16H104a8 8 0 0 1-8-8v-16a8 8 0 0 1 8-8h323l-64-64H104a8 8 0 0 1-8-8v-16a8 8 0 0 1 8-8h227L203 160H32a32 32 0 0 0-32 32v288a32 32 0 0 0 32 32h576a32 32 0 0 0 32-32V192a32 32 0 0 0-32-32z"/>
        </svg>
    )
}

export default Icon
