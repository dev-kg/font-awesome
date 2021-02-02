import React, { SVGAttributes } from "react"
function Icon(props: SVGAttributes<{}>): JSX.Element {
    return (
        <svg {...props} fill="currentColor" viewBox="0 0 640 512" xmlns="http://www.w3.org/2000/svg">
        	<path d="M313.8 241.5c13.8 0 21-10.1 24.8-17.9-1-1.1-5-4.2-7.4-6.6-2.4 4.3-8.2 10.7-13.9 10.7-10.2 0-15.4-14.7-3.2-26.6-.5-.2-4.3-1.8-8 2.4 0-3 1-5.1 2.1-6.6-3.5 1.3-9.8 5.6-11.4 7.9.2-5.8 1.6-7.5.6-9l-.2-.2s-8.5 5.6-9.3 14.7c0 0 1.1-1.6 2.1-1.9.6-.3 1.3 0 .6 1.9-.2.6-5.8 15.7 5.1 26-.6-1.6-1.9-7.6 2.4-1.9-.3.1 5.8 7.1 15.7 7.1zm52.4-21.1c0-4-4.9-4.4-5.6-4.5 2 3.9.9 7.5.2 9 2.5-.4 5.4-1.6 5.4-4.5zm10.3 5.2c0-6.4-6.2-11.4-13.5-10.7 8 1.3 5.6 13.8-5 11.4 3.7-2.6 3.2-9.9-1.3-12.5 1.4 4.2-3 8.2-7.4 4.6-2.4-1.9-8-6.6-10.6-8.6-2.4-2.1-5.5-1-6.6-1.8-1.3-1.1-.5-3.8-2.2-5-1.6-.8-3-.3-4.8-1-1.6-.6-2.7-1.9-2.6-3.5-2.5 4.4 3.4 6.3 4.5 8.5 1 1.9-.8 4.8 4 8.5 14.8 11.6 9.1 8 10.4 18.1.6 4.3 4.2 6.7 6.4 7.4-2.1-1.9-2.9-6.4 0-9.3 0 13.9 19.2 13.3 23.1 6.4-2.4 1.1-7-.2-9-1.9 7.7 1 14.2-4.1 14.6-10.6zm-39.4-18.4c2 .8 1.6.7 6.4 4.5 10.2-24.5 21.7-15.7 22-15.5 2.2-1.9 9.8-3.8 13.8-2.7-2.4-2.7-7.5-6.2-13.3-6.2-4.7 0-7.4 2.2-8 1.3-.8-1.4 3.2-3.4 3.2-3.4-5.4.2-9.6 6.7-11.2 5.9-1.1-.5 1.4-3.7 1.4-3.7-5.1 2.9-9.3 9.1-10.2 13 4.6-5.8 13.8-9.8 19.7-9-10.5.5-19.5 9.7-23.8 15.8zm242.5 51.9c-20.7 0-40 1.3-50.3 2.1l7.4 8.2v77.2l-7.4 8.2c10.4.8 30.9 2.1 51.6 2.1 42.1 0 59.1-20.7 59.1-48.9 0-29.3-23.2-48.9-60.4-48.9zm-15.1 75.6v-53.3c30.1-3.3 46.8 3.8 46.8 26.3 0 25.6-21.4 30.2-46.8 27zM301.6 181c-1-3.4-.2-6.9 1.1-9.4 1 3 2.6 6.4 7.5 9-.5-2.4-.2-5.6.5-8-1.4-5.4 2.1-9.9 6.4-9.9 6.9 0 8.5 8.8 4.7 14.4 2.1 3.2 5.5 5.6 7.7 7.8 3.2-3.7 5.5-9.5 5.5-13.8 0-8.2-5.5-15.9-16.7-16.5-20-.9-20.2 16.6-20 18.9.5 5.2 3.4 7.8 3.3 7.5zm-.4 6c-.5 1.8-7 3.7-10.2 6.9 4.8-1 7-.2 7.8 1.8.5 1.4-.2 3.4-.5 5.6 1.6-1.8 7-5.5 11-6.2-1-.3-3.4-.8-4.3-.8 2.9-3.4 9.3-4.5 12.8-3.7-2.2-.2-6.7 1.1-8.5 2.6 1.6.3 3 .6 4.3 1.1-2.1.8-4.8 3.4-5.8 6.1 7-5 13.1 5.2 7 8.2.8.2 2.7 0 3.5-.5-.3 1.1-1.9 3-3 3.4 2.9 0 7-1.9 8.2-4.6 0 0-1.8.6-2.6-.2s.3-4.3.3-4.3c-2.3 2.9-3.4-1.3-1.3-4.2-1-.3-3.5-.6-4.6-.5 3.2-1.1 10.4-1.8 11.2-.3.6 1.1-1 3.4-1 3.4 4-.5 8.3 1.1 6.7 5.1 2.9-1.4 5.5-5.9 4.8-10.4-.3 1-1.6 2.4-2.9 2.7.2-1.4-1-2.2-1.9-2.6 1.7-9.6-14.6-14.2-14.1-23.9-1 1.3-1.8 5-.8 7.1 2.7 3.2 8.7 6.7 10.1 12.2-2.6-6.4-15.1-11.4-14.6-20.2-1.6 1.6-2.6 7.8-1.3 11 2.4 1.4 4.5 3.8 4.8 6.1-2.2-5.1-11.4-6.1-13.9-12.2-.6 2.2-.3 5 1 6.7 0 0-2.2-.8-7-.6 1.7.6 5.1 3.5 4.8 5.2zm25.9 7.4c-2.7 0-3.5-2.1-4.2-4.3 3.3 1.3 4.2 4.3 4.2 4.3zm38.9 3.7l-1-.6c-1.1-1-2.9-1.4-4.7-1.4-2.9 0-5.8 1.3-7.5 3.4-.8.8-1.4 1.8-2.1 2.6v15.7c3.5 2.6 7.1-2.9 3-7.2 1.5.3 4.6 2.7 5.1 3.2 0 0 2.6-.5 5-.5 2.1 0 3.9.3 5.6 1.1V196c-1.1.5-2.2 1-2.7 1.4zM79.9 305.9c17.2-4.6 16.2-18 16.2-19.9 0-20.6-24.1-25-37-25H3l8.3 8.6v29.5H0l11.4 14.6V346L3 354.6c61.7 0 73.8 1.5 86.4-5.9 6.7-4 9.9-9.8 9.9-17.6 0-5.1 2.6-18.8-19.4-25.2zm-41.3-27.5c20 0 29.6-.8 29.6 9.1v3c0 12.1-19 8.8-29.6 8.8zm0 59.2V315c12.2 0 32.7-2.3 32.7 8.8v4.5h.2c0 11.2-12.5 9.3-32.9 9.3zm101.2-19.3l23.1.2v-.2l14.1-21.2h-37.2v-14.9h52.4l-14.1-21v-.2l-73.5.2 7.4 8.2v77.1l-7.4 8.2h81.2l14.1-21.2-60.1.2zm214.7-60.1c-73.9 0-77.5 99.3-.3 99.3 77.9 0 74.1-99.3.3-99.3zm-.3 77.5c-37.4 0-36.9-55.3.2-55.3 36.8.1 38.8 55.3-.2 55.3zm-91.3-8.3l44.1-66.2h-41.7l6.1 7.2-20.5 37.2h-.3l-21-37.2 6.4-7.2h-44.9l44.1 65.8.2 19.4-7.7 8.2h42.6l-7.2-8.2zm-28.4-151.3c1.6 1.3 2.9 2.4 2.9 6.6v38.8c0 4.2-.8 5.3-2.7 6.4-.1.1-7.5 4.5-7.9 4.6h35.1c10 0 17.4-1.5 26-8.6-.6-5 .2-9.5.8-12 0-.2-1.8 1.4-2.7 3.5 0-5.7 1.6-15.4 9.6-20.5-.1 0-3.7-.8-9 1.1 2-3.1 10-7.9 10.4-7.9-8.2-26-38-22.9-32.2-22.9-30.9 0-32.6.3-39.9-4 .1.8.5 8.2 9.6 14.9zm21.5 5.5c4.6 0 23.1-3.3 23.1 17.3 0 20.7-18.4 17.3-23.1 17.3zm228.9 79.6l7 8.3V312h-.3c-5.4-14.4-42.3-41.5-45.2-50.9h-31.6l7.4 8.5v76.9l-7.2 8.3h39l-7.4-8.2v-47.4h.3c3.7 10.6 44.5 42.9 48.5 55.6h21.3v-85.2l7.4-8.3zm-106.7-96.1c-32.2 0-32.8.2-39.9-4 .1.7.5 8.3 9.6 14.9 3.1 2 2.9 4.3 2.9 9.5 1.8-1.1 3.8-2.2 6.1-3-1.1 1.1-2.7 2.7-3.5 4.5 1-1.1 7.5-5.1 14.6-3.5-1.6.3-4 1.1-6.1 2.9.1 0 2.1-1.1 7.5-.3v-4.3c4.7 0 23.1-3.4 23.1 17.3 0 20.5-18.5 17.3-19.7 17.3 5.7 4.4 5.8 12 2.2 16.3h.3c33.4 0 36.7-27.3 36.7-34 0-3.8-1.1-32-33.8-33.6z"/>
        </svg>
    )
}

export default Icon
