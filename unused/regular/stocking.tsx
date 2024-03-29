import { SVGAttributes } from "react"
function Icon(props: SVGAttributes<{}>): JSX.Element {
    return (
        <svg {...props} fill="currentColor" viewBox="0 0 384 512" xmlns="http://www.w3.org/2000/svg">
        	<path d="M368 0H80c-8.8 0-16 7.2-16 16v64c0 8.8 7.2 16 16 16h16v155.5l-39 26C-1.8 316.7-17.7 396.2 21.5 455c24.7 37 65.2 57 106.6 57 24.4 0 49.1-7 70.9-21.5l81.7-54.5c44.6-29.7 71.2-79.5 71.2-133.1V96h16c8.8 0 16-7.2 16-16V16c.1-8.8-7.1-16-15.9-16zm-64 302.9c0 37.5-18.6 72.4-49.9 93.2l-81.8 54.5c-53.7 35.8-99.8-5.6-110.9-22.2-24.5-36.8-14.6-86.4 22.2-111l60.4-40.2V96h160v206.9z"/>
        </svg>
    )
}

export default Icon
