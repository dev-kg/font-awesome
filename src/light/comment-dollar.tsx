import React, { SVGAttributes } from "react"
function Icon(props: SVGAttributes<{}>): JSX.Element {
    return (
        <svg {...props} fill="currentColor" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg">
        	<path d="M256 32C114.62 32 0 125.12 0 240c0 47.55 19.86 91.23 52.9 126.27C38 405.72 6.97 439.06 6.54 439.5c-6.56 6.95-8.38 17.19-4.59 25.98S14.39 480 23.98 480c61.51 0 110.02-25.72 139.15-46.33C191.95 442.8 223.2 448 256 448c141.38 0 256-93.12 256-208S397.38 32 256 32zm0 384c-28.33 0-56.32-4.32-83.21-12.84l-15.16-4.8-12.99 9.19c-23.02 16.29-58.53 35.34-102.62 39.59 11.99-15.09 29.82-40.44 40.81-69.55l7.07-18.71-13.72-14.55C47.28 313.67 32 277.6 32 240c0-97.05 100.49-176 224-176s224 78.95 224 176-100.49 176-224 176zm33.94-182.95l-59.06-16.86c-8.75-2.52-14.88-10.61-14.88-19.7 0-11.3 9.19-20.48 20.47-20.48h36.91c8.24 0 16.08 2.56 22.63 7.32 2.99 2.17 7.22 1.46 9.84-1.16l11.42-11.42c3.5-3.5 2.94-9.22-.99-12.23-12.26-9.41-27.18-14.51-42.9-14.51H272v-24c0-4.42-3.58-8-8-8h-16c-4.42 0-8 3.58-8 8v24h-3.53c-30.59 0-55.13 26.3-52.24 57.48 2.06 22.16 19.06 40.12 40.45 46.22l56.44 16.11c8.75 2.52 14.88 10.61 14.88 19.7 0 11.3-9.19 20.48-20.47 20.48h-36.91c-8.24 0-16.08-2.56-22.63-7.32-2.99-2.17-7.22-1.46-9.84 1.16l-11.42 11.42c-3.5 3.5-2.94 9.21.99 12.23 12.26 9.41 27.18 14.51 42.9 14.51H240v24c0 4.42 3.58 8 8 8h16c4.42 0 8-3.58 8-8v-24h1.36c22.81 0 44.33-13.59 51.72-35.17 10.15-29.65-7.28-59.8-35.14-67.78z"/>
        </svg>
    )
}

export default Icon
