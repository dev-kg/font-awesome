import React, { SVGAttributes } from "react"
function Icon(props: SVGAttributes<{}>): JSX.Element {
    return (
        <svg {...props} fill="currentColor" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg">
        	<path d="M472 440h-8v-56c0-13.255-10.745-24-24-24h-16V208h-48v152h-48V208h-48v152h-48V208h-48v152h-48V208H88v152H72c-13.255 0-24 10.745-24 24v56h-8c-13.255 0-24 10.745-24 24v16a8 8 0 0 0 8 8h464a8 8 0 0 0 8-8v-16c0-13.255-10.745-24-24-24zm-56 0H96v-32h320v32zm72.267-322.942L271.179 26.463a48.004 48.004 0 0 0-30.358 0L23.733 117.058A11.999 11.999 0 0 0 16 128.274V156c0 6.627 5.373 12 12 12h20v12c0 6.627 5.373 12 12 12h392c6.627 0 12-5.373 12-12v-12h20c6.627 0 12-5.373 12-12v-27.726c0-4.982-3.077-9.445-7.733-11.216zM64 144l192-72 192 72H64z"/>
        </svg>
    )
}

export default Icon
