import React, { SVGAttributes } from "react"
function Icon(props: SVGAttributes<{}>): JSX.Element {
    return (
        <svg {...props} fill="currentColor" viewBox="0 0 640 512" xmlns="http://www.w3.org/2000/svg">
        	<path d="M120 272a120 120 0 1 0 120 120 120 120 0 0 0-120-120zm0 208a88 88 0 1 1 88-88 88.1 88.1 0 0 1-88 88zm400-208a120 120 0 1 0 120 120 120 120 0 0 0-120-120zm0 208a88 88 0 1 1 88-88 88.1 88.1 0 0 1-88 88zM374.31 245.79a48.19 48.19 0 0 0 29.89 10.43H464a48 48 0 0 0 0-96h-42.95l-21.32-17.05a70.18 70.18 0 0 0 8.27.83 72.07 72.07 0 1 0-66.4-44.22 46.67 46.67 0 0 0-48.69 8l-99.25 79c-12.35 10.51-18.45 24.81-17.57 39.94a47.64 47.64 0 0 0 21.24 37.14L272 313.69V400a48 48 0 0 0 96 0V288a47.91 47.91 0 0 0-21.33-39.91l-13.33-9 16.5-12.72zM408 32a40 40 0 1 1-40 40 40 40 0 0 1 40-40zm-79.12 242.69A16 16 0 0 1 336 288v112a16 16 0 0 1-32 0V296.56l-88.88-59.25a16 16 0 0 1-1.53-25.45l100.2-79.78a16 16 0 0 1 20.41-.36l75.62 60.5H464a16 16 0 0 1 0 32h-59.8a16 16 0 0 1-10-3.5l-44.09-35-71.43 55.11z"/>
        </svg>
    )
}

export default Icon
