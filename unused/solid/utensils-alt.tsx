import { SVGAttributes } from "react"
function Icon(props: SVGAttributes<{}>): JSX.Element {
    return (
        <svg {...props} fill="currentColor" viewBox="0 0 576 512" xmlns="http://www.w3.org/2000/svg">
        	<path d="M53.8 8.6L293 230.7c28.8-25.5 18-16 48.4-42.9-21.4-36.3-17.2-75.1 16.1-108.4C379.3 57.7 452.3 6 456.2 3.2c16.1-11.8 37.6 11.5 24.8 26.2l-81.2 93.8c-1.3 1.5 3 6 4.7 4.6L501.4 49c15.1-12.3 37.9 10.2 25.5 25.5l-78.8 96.9c-1.3 1.6 3.1 6 4.6 4.6l93.8-81.2c14.7-12.7 38 8.7 26.2 24.9-2.8 4-54.5 76.9-76.2 98.6-34.2 34.3-73.5 36.9-108.5 16.2-26.6 30.1-14.5 16.3-41 46.3l154.7 143.6c13.3 12.3 13.7 33.3.8 46.1l-32 32c-12.8 12.8-33.6 12.4-46-.7C405.4 479.2 223.9 265.3 216 256 56 256 0 165.9 0 32.1 0 4.2 33.3-10.4 53.8 8.6zm19.6 462l32 32c13 13 34.4 12.4 46.6-1.4l117.5-132.7-56.6-66.8L74.8 424c-13.8 12.3-14.5 33.6-1.4 46.6z"/>
        </svg>
    )
}

export default Icon
