import React, { SVGAttributes } from "react"
function Icon(props: SVGAttributes<{}>): JSX.Element {
    return (
        <svg {...props} fill="currentColor" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg">
        	<path d="M441.37 192c8.49 0 16.62-4.21 22.63-11.72l43.31-54.14c6.25-7.81 6.25-20.47 0-28.29L464 43.71C458 36.21 449.86 32 441.37 32H280V16c0-8.84-7.16-16-16-16h-16c-8.84 0-16 7.16-16 16v16H56c-13.25 0-24 13.43-24 30v100c0 16.57 10.75 30 24 30h176v32H70.63C62.14 224 54 228.21 48 235.71L4.69 289.86c-6.25 7.81-6.25 20.47 0 28.29L48 372.28c6 7.5 14.14 11.72 22.63 11.72H232v112c0 8.84 7.16 16 16 16h16c8.84 0 16-7.16 16-16V384h176c13.25 0 24-13.43 24-30V254c0-16.57-10.75-30-24-30H280v-32h161.37zM432 336H80.44l-25.6-32 25.6-32H432v64zM80 80h351.56l25.6 32-25.6 32H80V80z"/>
        </svg>
    )
}

export default Icon