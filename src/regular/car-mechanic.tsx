import React, { SVGAttributes } from "react"
function Icon(props: SVGAttributes<{}>): JSX.Element {
    return (
        <svg {...props} fill="currentColor" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg">
        	<path d="M503.91 104h-55.98l-24-24 24-24h55.97c5.95 0 9.9-6.31 7.25-11.64-15.19-30.52-49.01-50.04-86.84-42.88-25.65 4.87-46.72 22.99-57.05 46.52H145.01c-12.38-28.17-40.2-48-72.94-48C40.75 0 13.9 18.12.84 44.37-1.81 49.7 2.15 56 8.09 56h55.98l24 24-24 24H8.09c-5.95 0-9.9 6.31-7.25 11.64 15.19 30.52 49.01 50.04 86.84 42.88 25.65-4.86 46.73-22.99 57.05-46.52h222.25c12.38 28.17 40.2 48 72.94 48 31.32 0 58.17-18.12 71.23-44.38 2.66-5.31-1.3-11.62-7.24-11.62zm-69.7 162.17l-25.79-64.04c-12.18-30.29-41.55-50.13-74.2-50.13H161.78c-32.65 0-62.02 19.84-74.21 50.12l-25.79 64.04C30.04 281.83 8 314.2 8 352v136c0 13.25 10.75 24 24 24h16c13.25 0 24-10.75 24-24v-24h352v24c0 13.25 10.75 24 24 24h16c13.25 0 24-10.75 24-24V352c0-37.8-22.04-70.17-53.79-85.83zM132.1 220.05C137 207.87 148.66 200 161.79 200h172.44c13.13 0 24.78 7.87 29.69 20.05l14.47 35.94H117.63l14.47-35.94zM440 400c0 8.82-7.18 16-16 16H72c-8.82 0-16-7.18-16-16v-48c0-26.47 21.53-48 48-48h288c26.47 0 48 21.53 48 48v48zm-320-72.01c-19.2 0-32 12.76-32 31.91s12.8 31.91 32 31.91 48 3.19 48-15.96-28.8-47.86-48-47.86zm256 0c-19.2 0-48 28.72-48 47.86s28.8 15.96 48 15.96 32-12.76 32-31.91-12.8-31.91-32-31.91z"/>
        </svg>
    )
}

export default Icon
