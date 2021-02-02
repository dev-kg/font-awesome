import React, { SVGAttributes } from "react"
function Icon(props: SVGAttributes<{}>): JSX.Element {
    return (
        <svg {...props} fill="currentColor" viewBox="0 0 384 512" xmlns="http://www.w3.org/2000/svg">
        	<path d="M360 0H24C10.8 0 0 10.8 0 24v80c0 13.2 10.8 24 24 24h8v352c0 17.6 14.4 32 32 32h256c17.6 0 32-14.4 32-32V128h8c13.2 0 24-10.8 24-24V24c0-13.2-10.8-24-24-24zm-40 480H64v-64h88c4.4 0 8-3.6 8-8v-16c0-4.4-3.6-8-8-8H64v-64h88c4.4 0 8-3.6 8-8v-16c0-4.4-3.6-8-8-8H64v-64h88c4.4 0 8-3.6 8-8v-16c0-4.4-3.6-8-8-8H64v-64h256v352zm32-384H32V32h320v64z"/>
        </svg>
    )
}

export default Icon