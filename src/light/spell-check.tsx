import React, { SVGAttributes } from "react"
function Icon(props: SVGAttributes<{}>): JSX.Element {
    return (
        <svg {...props} fill="currentColor" viewBox="0 0 576 512" xmlns="http://www.w3.org/2000/svg">
        	<path d="M272 256h88a72 72 0 0 0 30.63-137.16A72 72 0 0 0 336 0h-64a16 16 0 0 0-16 16v224a16 16 0 0 0 16 16zm16-224h48a40 40 0 0 1 0 80h-48zm0 112h72a40 40 0 0 1 0 80h-72zm-63.93 101.34l-89-234.67A16 16 0 0 0 120 0h-16a16 16 0 0 0-15.09 10.67l-89 234.67A8 8 0 0 0 7.47 256h17a8 8 0 0 0 7.53-5.34L60.54 176h102.92L192 250.66a8 8 0 0 0 7.55 5.34h17a8 8 0 0 0 7.52-10.66zM72.78 144L112 41.41 151.22 144zm499.5 135L561 267.72a12 12 0 0 0-17 0L354.8 460.41l-99-99a12 12 0 0 0-17 0l-11.31 11.31a12 12 0 0 0 0 17L346.3 508.48a12 12 0 0 0 17 0L572.28 296a12 12 0 0 0 0-17z"/>
        </svg>
    )
}

export default Icon
