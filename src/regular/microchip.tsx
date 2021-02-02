import React, { SVGAttributes } from "react"
function Icon(props: SVGAttributes<{}>): JSX.Element {
    return (
        <svg {...props} fill="currentColor" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg">
        	<path d="M368.5 0H144c-26.5 0-48 21.5-48 48v416c0 26.5 21.5 48 48 48h224.5c26.5 0 48-21.5 48-48V48c0-26.5-21.5-48-48-48zm0 457c0 3.3-2.7 7-6 7H150c-3.3 0-6-3.7-6-7V54c0-3.3 2.7-6 6-6h212.5c3.3 0 6 2.7 6 6v403zM512 106v12c0 3.3-2.7 6-6 6h-18v6c0 3.3-2.7 6-6 6h-42V88h42c3.3 0 6 2.7 6 6v6h18c3.3 0 6 2.7 6 6zm0 96v12c0 3.3-2.7 6-6 6h-18v6c0 3.3-2.7 6-6 6h-42v-48h42c3.3 0 6 2.7 6 6v6h18c3.3 0 6 2.7 6 6zm0 96v12c0 3.3-2.7 6-6 6h-18v6c0 3.3-2.7 6-6 6h-42v-48h42c3.3 0 6 2.7 6 6v6h18c3.3 0 6 2.7 6 6zm0 96v12c0 3.3-2.7 6-6 6h-18v6c0 3.3-2.7 6-6 6h-42v-48h42c3.3 0 6 2.7 6 6v6h18c3.3 0 6 2.7 6 6zM30 376h42v48H30c-3.3 0-6-2.7-6-6v-6H6c-3.3 0-6-2.7-6-6v-12c0-3.3 2.7-6 6-6h18v-6c0-3.3 2.7-6 6-6zm0-96h42v48H30c-3.3 0-6-2.7-6-6v-6H6c-3.3 0-6-2.7-6-6v-12c0-3.3 2.7-6 6-6h18v-6c0-3.3 2.7-6 6-6zm0-96h42v48H30c-3.3 0-6-2.7-6-6v-6H6c-3.3 0-6-2.7-6-6v-12c0-3.3 2.7-6 6-6h18v-6c0-3.3 2.7-6 6-6zm0-96h42v48H30c-3.3 0-6-2.7-6-6v-6H6c-3.3 0-6-2.7-6-6v-12c0-3.3 2.7-6 6-6h18v-6c0-3.3 2.7-6 6-6z"/>
        </svg>
    )
}

export default Icon
