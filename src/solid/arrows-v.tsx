import React, { SVGAttributes } from "react"
function Icon(props: SVGAttributes<{}>): JSX.Element {
    return (
        <svg {...props} fill="currentColor" viewBox="0 0 256 512" xmlns="http://www.w3.org/2000/svg">
        	<path d="M160 406.186V105.815l43.728 46.208c9.289 9.815 24.846 10.03 34.402.474l10.84-10.84c9.373-9.373 9.373-24.569 0-33.941L150.627 9.373c-12.497-12.497-32.758-12.497-45.255 0L7.029 107.715c-9.373 9.373-9.373 24.569 0 33.941l10.84 10.84c9.556 9.556 25.113 9.341 34.402-.474L96 105.815v300.371l-43.728-46.208c-9.289-9.815-24.846-10.03-34.402-.474l-10.84 10.84c-9.373 9.373-9.373 24.569 0 33.941l98.343 98.343c12.497 12.497 32.758 12.497 45.255 0l98.343-98.343c9.373-9.373 9.373-24.569 0-33.941l-10.84-10.84c-9.556-9.556-25.113-9.341-34.402.474L160 406.186z"/>
        </svg>
    )
}

export default Icon
