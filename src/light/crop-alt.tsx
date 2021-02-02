import React, { SVGAttributes } from "react"
function Icon(props: SVGAttributes<{}>): JSX.Element {
    return (
        <svg {...props} fill="currentColor" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg">
        	<path d="M488 320h-72V128c0-17.67-14.33-32-32-32H192V24c0-13.26-10.75-24-24-24h-48c-13.25 0-24 10.74-24 24v72H24c-13.25 0-24 10.74-24 24v48c0 13.25 10.75 24 24 24h72v192c0 17.67 14.33 32 32 32h192v72c0 13.25 10.75 24 24 24h48c13.25 0 24-10.75 24-24v-72h72c13.25 0 24-10.75 24-24v-48c0-13.26-10.75-24-24-24zM96 160H32v-32h64v32zm224 224H128V32h32v320h160v32zm0-64H192V192h128v128zm64 160h-32V160H192v-32h192v352zm96-96h-64v-32h64v32z"/>
        </svg>
    )
}

export default Icon
