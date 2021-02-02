import React, { SVGAttributes } from "react"
function Icon(props: SVGAttributes<{}>): JSX.Element {
    return (
        <svg {...props} fill="currentColor" viewBox="0 0 576 512" xmlns="http://www.w3.org/2000/svg">
        	<path d="M200 32H72C32.3 32 0 64.3 0 104v112c0 39.7 32.3 72 72 72h56v8c0 22.1-17.9 40-40 40h-8c-26.5 0-48 21.5-48 48v48c0 26.5 21.5 48 48 48h8c101.5 0 184-82.5 184-184V104c0-39.7-32.3-72-72-72zm24 264c0 75-61 136-136 136h-8v-48h8c48.5 0 88-39.5 88-88v-56H72c-13.2 0-24-10.8-24-24V104c0-13.2 10.8-24 24-24h128c13.2 0 24 10.8 24 24v192zM504 32H376c-39.7 0-72 32.3-72 72v112c0 39.7 32.3 72 72 72h56v8c0 22.1-17.9 40-40 40h-8c-26.5 0-48 21.5-48 48v48c0 26.5 21.5 48 48 48h8c101.5 0 184-82.5 184-184V104c0-39.7-32.3-72-72-72zm24 264c0 75-61 136-136 136h-8v-48h8c48.5 0 88-39.5 88-88v-56H376c-13.2 0-24-10.8-24-24V104c0-13.2 10.8-24 24-24h128c13.2 0 24 10.8 24 24v192z"/>
        </svg>
    )
}

export default Icon
