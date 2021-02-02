import React, { SVGAttributes } from "react"
function Icon(props: SVGAttributes<{}>): JSX.Element {
    return (
        <svg {...props} fill="currentColor" viewBox="0 0 576 512" xmlns="http://www.w3.org/2000/svg">
        	<path d="M101.98 308.12c-17.69 8.02-23.99 24.81-15.77 41.96 8.22 17.15 25.5 23.24 43.18 15.22 17.69-8.02 45.59-17.2 37.37-34.35-8.22-17.16-47.09-30.86-64.78-22.83zm235.83-106.97c-17.69 8.02-31.88 45.79-23.66 62.94 8.22 17.15 33.38 2.26 51.07-5.76 17.69-8.02 23.99-24.81 15.77-41.96-8.22-17.15-25.5-23.24-43.18-15.22zM116.19 450.03l324.26-147.08 10.31 21.51c5.69 11.88 20.21 17.01 32.42 11.48l14.74-6.69c12.21-5.54 17.49-19.66 11.8-31.53l-44.67-93.19-13.75-28.67c-14.02-29.25-41.45-48.16-71.83-53.3l-76.15-69.24c-24.24-22.04-59.82-27.54-89.89-13.9L54.57 111.46C24.5 125.1 5.96 155.15 7.73 187.38l5.58 101.25c-15.48 25.94-18.22 58.54-4.19 87.79l58.42 121.86c5.69 11.88 20.21 17.02 32.42 11.48l14.74-6.69c12.21-5.54 17.49-19.66 11.8-31.53l-10.31-21.51zm-41-295.56l158.85-72.05c12.09-5.49 26.21-3.3 35.96 5.56l47.98 43.62-122.81 55.71-135.2 61.32-3.52-63.79c-.71-12.96 6.64-24.88 18.74-30.37zm20.38 252.55c-8.13 3.69-17.82.25-21.61-7.65l-20.62-43.01c-11.37-23.72-.78-52.01 23.6-63.07l265.3-120.33c24.38-11.06 53.47-.76 64.83 22.95l20.62 43.01c3.79 7.91.26 17.34-7.87 21.02L95.57 407.02zM464 384c-61.75 0-112 46.65-112 104 0 13.25 10.75 24 24 24s24-10.75 24-24c0-30.87 28.72-56 64-56s64 25.12 64 56c0 13.25 10.75 24 24 24s24-10.75 24-24c0-57.34-50.25-104-112-104z"/>
        </svg>
    )
}

export default Icon
