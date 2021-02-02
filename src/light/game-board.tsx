import React, { SVGAttributes } from "react"
function Icon(props: SVGAttributes<{}>): JSX.Element {
    return (
        <svg {...props} fill="currentColor" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg">
        	<path d="M256 160h-96v96h96zm-32 64h-32v-32h32zm224 32v-96h-96v96zm-64-64h32v32h-32zM352 64h-96v96h96zm-32 64h-32V96h32zM160 256H64v96h96zm-32 64H96v-32h32zm32 128h96v-96h-96zm32-64h32v32h-32zm256 64v-96h-96v96zm-64-64h32v32h-32zm-128-32h96v-96h-96zm32-64h32v32h-32zM480 0H32A32 32 0 0 0 0 32v448a32 32 0 0 0 32 32h448a32 32 0 0 0 32-32V32a32 32 0 0 0-32-32zm0 480H32V32h448zM64 64v96h96V64zm64 64H96V96h32z"/>
        </svg>
    )
}

export default Icon
