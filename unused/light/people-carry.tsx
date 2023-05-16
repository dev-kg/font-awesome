import { SVGAttributes } from "react"
function Icon(props: SVGAttributes<{}>): JSX.Element {
    return (
        <svg {...props} fill="currentColor" viewBox="0 0 640 512" xmlns="http://www.w3.org/2000/svg">
        	<path d="M635.9 444.4l-52.2-117.3c19.4-22 25-48.2 19.4-72.4l-18.4-80.2c-5-21.7-19.3-40-38.4-51.1 24.5-24 28.4-60.4 11.4-88.6C542.8 10.2 517.7 0 496 0c-33.2 0-61.9 22.5-69.9 54.8-3.5 14.1-6.2 52.1 29.3 76.4-17.3 13.2-30.8 30.5-39.4 50.5V160c0-8.8-7.2-16-16-16H240c-8.8 0-16 7.2-16 16v21.8c-8.5-20-22-37.3-39.4-50.5 35.4-24.3 32.8-62.2 29.3-76.4C206 22.5 177.2 0 144 0c-21.8 0-46.8 10.3-61.6 34.7-17 28.1-13.2 64.5 11.4 88.6-19.1 11.2-33.4 29.4-38.4 51.1L37 254.6c-5.5 24.1-.2 50.3 19.4 72.4L4.1 444.4c-10.7 24.1.2 52.6 24.3 63.3 29 12.8 54.9-5.2 63.4-24.3l29.7-66.7 6.9 53.3c1.1 8.6 13 46.1 53.3 41.5 26.7-3.5 45.3-27.6 42-53.8l-10.5-81.5c-1.6-12.7-7-24.6-15.5-34.2l-41.2-46.6 4.2-16.9c4.6 6 10.2 11.4 16.7 16.1 1.7 1.2-2.7-1.6 47.7 30.4 2.2 6.2 8 10.8 14.9 10.8h160c7 0 12.8-4.5 14.9-10.8 50.4-32.1 46.1-29.2 47.7-30.4 6.5-4.8 12.1-10.2 16.7-16.1l4.2 16.9-41.1 46.6c-8.5 9.6-13.9 21.5-15.5 34.2l-10.5 81.5c-3.4 26.2 15.2 50.3 42 53.8 40.5 4.6 52.1-32.7 53.3-41.5l6.9-53.3 29.7 66.7c8.5 19.1 34.4 37.1 63.4 24.3 24-10.8 34.9-39.2 24.2-63.3zm-178.7-382C461.6 44.2 478 32 496 32c24.4 0 45.4 22.8 38.9 49.5C530.3 99.8 514 112 496 112c-24.4 0-45.4-22.9-38.8-49.6zM144 32c18 0 34.3 12.2 38.8 30.4C189.5 89.6 168 112 144 112c-18 0-34.3-12.2-38.8-30.4C98.5 54.4 120 32 144 32zM62.6 470.4c-3.6 8.1-13 11.7-21.1 8.1s-11.7-13-8.1-21.1l46.2-103.9 23.3 26.4zm207.1-173.9c-5 7.8-15 9.4-22.1 4.9l-51.1-32.5c-9.1-6.6-15-14.7-18.1-24.1L167.1 211c-2.3-6.9-6-12.8-9.3-17.2-2.7-3.6-8.3-2.4-9.4 1.9L121.3 304l52.4 59.3c4.2 4.8 6.9 10.8 7.8 17.1l10.5 81.5c1.1 8.6-4.9 16.8-13.5 17.9-14.1 1.8-17.9-11-18.2-13.8l-9.2-71.8c-.8-6.3-3.5-12.3-7.8-17.1l-64.2-72.7c-10.3-11.6-14.3-27.5-10.8-42.6l18.4-80.2c3.5-15 14-27.7 28.2-33.8 23-9.9 41.1 2.1 41.7 2.4 19.4 11.4 33.9 29.4 41 50.7l11.7 34.9c1.8 2.3 3.5 4.5 5.3 6.8l50.2 31.8c7.4 4.7 9.7 14.6 4.9 22.1zm69.2 7.4h-37.7c7.3-20.6-.2-44.2-19.3-56.5L256 231.1V176h128v55l-25.8 16.4c-19.2 12.2-26.6 35.9-19.3 56.5zm158 73.1c-4.2 4.8-6.9 10.7-7.8 17.1l-9.2 71.8c-.4 2.8-4.2 15.6-18.2 13.8-8.6-1.1-14.6-9.2-13.5-17.9l10.5-81.5c.8-6.3 3.5-12.3 7.8-17.1l52.4-59.3-27.1-108.2c-1.1-4.4-6.7-5.5-9.4-1.9-3.3 4.4-7 10.3-9.3 17.2l-11.3 33.8c-3.1 9.4-9 17.5-17.9 24.1l-51.1 32.5c-7 4.4-17.1 3-22.1-4.9-4.7-7.5-2.5-17.3 4.9-22.1l50.2-31.8c1.8-2.3 3.5-4.5 5.3-6.8l11.7-34.9c7.1-21.3 21.6-39.3 41-50.7.5-.3 18.7-12.3 41.7-2.4 14.2 6.1 24.8 18.8 28.2 33.8l18.4 80.2c3.5 15.1-.6 30.9-10.8 42.6zm101.6 101.5c-8.1 3.6-17.5 0-21.1-8.1l-40.3-90.6 23.3-26.4 46.2 103.9c3.6 8.1 0 17.6-8.1 21.2z"/>
        </svg>
    )
}

export default Icon
