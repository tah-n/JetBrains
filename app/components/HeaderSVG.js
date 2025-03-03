import React from 'react'

const HeaderSVG = (props) => {
  return (
    <div className={`${props.className}`}>
        <svg
            xmlns="http://www.w3.org/2000/svg"
            xmlnsXlink="http://www.w3.org/1999/xlink"
            width={1146}
            height={842}
            fill="none"
            {...props}
        >
            <pattern
            id="k"
            width={1}
            height={1}
            patternContentUnits="objectBoundingBox"
            >
            <image
                xlinkHref="data:image/png;base64,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"
                width={214}
                height={159}
                transform="scale(.00467 .00629)"
            />
            </pattern>
            <linearGradient id="a">
            <stop offset={0} stopColor="#dca672" />
            <stop offset={0.13} stopColor="#dfab79" />
            <stop offset={0.34} stopColor="#eabc8f" />
            <stop offset={0.48} stopColor="#f4cba3" />
            </linearGradient>
            <linearGradient
            xlinkHref="#a"
            id="d"
            x1={978.438}
            x2={996.465}
            y1={424.296}
            y2={475.369}
            gradientUnits="userSpaceOnUse"
            />
            <linearGradient
            xlinkHref="#a"
            id="e"
            x1={946.402}
            x2={909.548}
            y1={350.532}
            y2={311.406}
            gradientUnits="userSpaceOnUse"
            />
            <linearGradient
            xlinkHref="#a"
            id="f"
            x1={1016.58}
            x2={1057.51}
            y1={440.734}
            y2={394.969}
            gradientUnits="userSpaceOnUse"
            />
            <linearGradient id="b">
            <stop offset={0.43} stopColor="#b4734a" />
            <stop offset={0.88} stopColor="#944d36" />
            </linearGradient>
            <linearGradient
            xlinkHref="#b"
            id="g"
            x1={457.503}
            x2={457.503}
            y1={756.59}
            y2={683.051}
            gradientUnits="userSpaceOnUse"
            />
            <linearGradient
            xlinkHref="#b"
            id="h"
            x1={448.992}
            x2={448.992}
            y1={756.59}
            y2={683.051}
            gradientUnits="userSpaceOnUse"
            />
            <linearGradient id="c">
            <stop offset={0} stopColor="#02b757" />
            <stop offset={0.6} stopColor="#21d789" />
            </linearGradient>
            <linearGradient
            xlinkHref="#c"
            id="l"
            x1={273.987}
            x2={407.176}
            y1={726.201}
            y2={726.201}
            gradientUnits="userSpaceOnUse"
            />
            <linearGradient
            xlinkHref="#c"
            id="m"
            x1={200.146}
            x2={202.666}
            y1={623.076}
            y2={857.359}
            gradientUnits="userSpaceOnUse"
            />
            <linearGradient
            id="n"
            x1={273.139}
            x2={311.029}
            y1={646.137}
            y2={542.024}
            gradientUnits="userSpaceOnUse"
            >
            <stop offset={0.3} stopColor="#b4734a" />
            <stop offset={0.45} stopColor="#ad6b46" />
            <stop offset={0.68} stopColor="#9c573b" />
            <stop offset={0.78} stopColor="#944d36" />
            </linearGradient>
            <linearGradient
            id="p"
            x1={268.198}
            x2={253.624}
            y1={574.41}
            y2={541.361}
            gradientUnits="userSpaceOnUse"
            >
            <stop offset={0.33} stopColor="#b4734a" />
            <stop offset={0.49} stopColor="#ab6b45" />
            <stop offset={0.73} stopColor="#955537" />
            <stop offset={1} stopColor="#753625" />
            </linearGradient>
            <linearGradient
            xlinkHref="#b"
            id="q"
            x1={285.366}
            x2={218.354}
            y1={753.664}
            y2={744.99}
            gradientUnits="userSpaceOnUse"
            />
            <mask
            id="i"
            width={109}
            height={78}
            x={371}
            y={669}
            maskUnits="userSpaceOnUse"
            >
            <path
                fill="#fff"
                d="M479.067 696.614c-.058-3.716 0-11.043-7.176-15.584-4.947-3.123-29.901-10.439-33.745-10.857-12.68-1.37-20.019 2.508-31.004 10.672l-35.254 28.809c6.015 10.184 12.042 20.356 18.068 30.528 1.684 2.833 3.751 5.945 7.002 6.491 2.59.441 5.11-.929 7.386-2.253 7.385-4.285 15.699-10.102 15.745-18.637 0-1.661 20.6-24.292 19.253-26.417l14.213 3.205c1.278 1.869 2.566 3.739 3.844 5.608 1.544 2.253 3.147 4.564 5.457 6.027 2.311 1.463 5.528 1.846 7.688.174 1.672-1.289 2.368-3.542 2.31-5.655-.035-1.184-.011-1.521-.116-1.939.558-.233.987-1.069 1.254-2.381 2.694-1.974 5.144-4.563 5.086-7.791z"
            />
            </mask>
            <mask
            id="j"
            width={119}
            height={89}
            x={366}
            y={664}
            maskUnits="userSpaceOnUse"
            >
            <path fill="#fff" d="M484.885 664.1H366.083v88.472h118.802z" />
            </mask>
            <mask
            id="o"
            width={43}
            height={32}
            x={301}
            y={509}
            maskUnits="userSpaceOnUse"
            >
            <path
                fill="#fff"
                d="M330.816 509.185s9.348 10.207 12.309 16.303L317.3 540.84h-15.699v-17.535l29.215-14.131z"
            />
            </mask>
            <g fill="#6b57ff">
            <path
                d="M650.679 466.279c46.335 0 83.896-37.562 83.896-83.897s-37.561-83.896-83.896-83.896-83.897 37.561-83.897 83.896 37.562 83.897 83.897 83.897z"
                opacity={0.2}
            />
            <path
                d="M650.679 366.788c46.335 0 83.896-37.562 83.896-83.897s-37.561-83.896-83.896-83.896-83.897 37.561-83.897 83.896 37.562 83.897 83.897 83.897z"
                opacity={0.47}
            />
            <path
                d="M650.679 267.285c46.335 0 83.896-37.562 83.896-83.897s-37.561-83.896-83.896-83.896-83.897 37.561-83.897 83.896 37.562 83.897 83.897 83.897z"
                opacity={0.73}
            />
            <path d="M650.679 167.793c46.334 0 83.896-37.562 83.896-83.897C734.575 37.563 697.013 0 650.679 0c-46.335 0-83.897 37.562-83.897 83.897 0 46.334 37.562 83.896 83.897 83.896z" />
            </g>
            <path
            stroke="#00dc7e"
            strokeMiterlimit={10}
            strokeWidth={11.612}
            d="M760.993 534.267c0 19.427-217.585 20.844-217.585 40.27 0 19.427 214.531 19.427 214.531 38.866 0 19.427-214.531 19.426-214.531 38.865 0 19.427 214.531 19.427 214.531 38.865 0 19.439-214.531 19.439-214.531 38.865 0 19.439 214.531 19.439 214.531 38.866"
            />
            <path
            stroke="#00dc7e"
            strokeLinecap="round"
            strokeMiterlimit={10}
            strokeWidth={11.612}
            d="M543.594 534.267h217.399"
            />
            <path fill="#000" d="M934.129 737.326h-74.05v31.538h74.05z" />
            <path
            fill="#000"
            d="M839.282 741.274h49.572V572.378h-88.483c-14.957 0-26.395 13.331-24.119 28.113l15.375 99.909c3.623 23.514 23.851 40.874 47.644 40.874z"
            />
            <path
            fill="#000"
            d="M1144.97 669.558c-2.28-32.606-12.53-70.519-27.36-99.665-11.88-23.34-24.76-46.413-33.87-70.88-4.39-11.797-13.98-20.913-26.04-24.547l-45.78-13.819-55.031.372-46.436 1.219c-18.243.476-33.989 12.924-38.68 30.563l-7.792 29.343 29.681 98.516 70.02-14.201-6.305 6.967c5.875 17.256 64.843 63.46 55.883 76.07-8.95 12.611-15.079 29.286-8.83 43.429 3.38 7.629 9.91 13.423 16.93 17.952 27.37 17.697 66.01 24.803 92.24 5.458 26.32-19.404 33.63-54.17 31.37-86.788z"
            />
            <path
            fill="url(#d)"
            d="m958.759 431.362 6.34 31.329 46.821-2.032-4.51-30.516z"
            />
            <path
            fill="#000"
            d="M960.756 441.255s.279 10.672 16.849 12.46c12.111 1.312 26.775-5.678 31.355-13.063l.76-.128c4.47-.767 8.69 2.357 9.26 6.851l2.56 20.216-67.925 10.428-2.358-27.602c-.418-4.923 3.461-9.15 8.408-9.15h1.091z"
            />
            <path
            fill="#00dc7e"
            d="M910.766 398.465c-3.74 1.521-9.081 1.963-10.056-1.335-1.046-3.542 6.224-7.513 9.754-10.3 10.404-8.244 27.148-24.815 33.709-39.841 2.764-6.34 5.574-14.48 8.152-22.283 5.353-16.175 26.661-17.871 26.661-17.871 1.184 4.378 1.626 10.974.65 15.212-3.855 16.744-38.087 63.901-68.859 76.407z"
            />
            <path
            fill="url(#e)"
            d="M938.786 361.017c10.267 0 18.591-8.323 18.591-18.591 0-10.267-8.324-18.591-18.591-18.591-10.268 0-18.591 8.324-18.591 18.591 0 10.268 8.323 18.591 18.591 18.591z"
            />
            <path
            fill="#efc297"
            d="M981.82 436.297c31.09 0 56.29-25.204 56.29-56.295s-25.2-56.295-56.29-56.295c-31.091 0-56.295 25.204-56.295 56.295s25.204 56.295 56.295 56.295z"
            />
            <path
            fill="#00dc7e"
            d="M1031.5 426.949s7.71-75.257-23.94-89.47c-28.039-12.599-49.359-10.625-49.359-10.625s-2.009-15.676 20.24-22.109c11.577-3.344 28.609-8.721 57.909 4.436 31.19 14.004 40.6 42.209 35.81 64.121-9.63 44.079-40.66 53.636-40.66 53.636z"
            />
            <path
            fill="#00dc7e"
            d="M1069.85 419.727c19.33 0 35-15.67 35-34.999s-15.67-34.998-35-34.998-35 15.669-35 34.998 15.67 34.999 35 34.999zM1007.76 339.674c19.33 0 35-15.669 35-34.999 0-19.329-15.67-34.998-35-34.998-19.329 0-34.998 15.669-34.998 34.998 0 19.33 15.669 34.999 34.998 34.999z"
            />
            <path
            fill="url(#f)"
            d="M1032.25 441.79c10.27 0 18.59-8.324 18.59-18.591s-8.32-18.591-18.59-18.591-18.59 8.324-18.59 18.591 8.32 18.591 18.59 18.591z"
            />
            <path
            fill="#00dc7e"
            d="M961.603 332.475c6.189 7.524 17.337-2.23 20.46-4.947-2.357 3.6-4.157 8.244.174 13.296 4.959 5.771 12.983 1.312 15.642-1.092-3.751 3.739-12.727 14.248-7.606 20.402 4.412 5.284 14.487.302 17.097-1.683-2.15 2.136-7.552 7.675-4.44 11.681 4.13 5.33 9.67 1.243 13.46-1.684-4.08 4.459-8.19 11.113-6.61 16.942 1.58 5.83 9.59 10.103 15.43 8.605 3.86-.987 6.78-4.227 8.57-7.792 3.28-6.526 9.47-16.059 7.39-23.05-2.08-7.002-12.26-11.53-17.05-17.046-10.58-12.204-27.611-33.919-43.113-38.401-5.121-1.475-13.703 7.06-18.011 11.647-2.496 2.648-4.54 9.313-1.393 13.133z"
            />
            <path
            stroke="#000"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2.322}
            d="M975.885 367.183s-8.999 8.314-15.897 5.516c0 0-3.901-3.124-7.489 1.381"
            />
            <path
            stroke="#a0714a"
            strokeLinecap="round"
            strokeMiterlimit={10}
            strokeWidth={4.645}
            d="M942.374 379.967s-2.834 22.47 19.252 23.758"
            />
            <path
            fill="#00dc7e"
            d="M1006.18 462.482c.65 3.983 3.07 8.767 6.39 7.885 3.56-.953 3.16-9.232 3.7-13.691 1.6-13.179 7.02-36.102 16.41-49.537 3.97-5.666 9.45-12.297 14.76-18.579 10.99-13.005 1.35-32.06 1.35-32.06-4.36 1.277-10.21 4.342-13.32 7.385-12.28 12.018-34.67 65.828-29.29 98.609z"
            />
            <path
            fill="#000"
            d="m968.663 348.127-8.407 6.248c-2.125 1.579-2.566 4.586-.987 6.723a4.8 4.8 0 0 0 6.723.987l8.407-6.247c2.125-1.579 2.566-4.587.987-6.724a4.801 4.801 0 0 0-6.723-.987zM979.637 377.622l-8.408 6.247c-2.125 1.579-2.566 4.587-.987 6.723a4.802 4.802 0 0 0 6.724.987l8.407-6.247c2.125-1.579 2.566-4.587.987-6.723a4.8 4.8 0 0 0-6.723-.987z"
            />
            <path
            fill="#efc297"
            d="M821.284 593.164c21.737-1.545 26.498 7.524 47.411 1.393 3.763-1.103 9.336-4.262 11.647-10.056s.72-13.981-1.614-19.903c-6.456-16.384-26.138-59.569-50.489-42.836 0 0 2.787 43.591-6.955 71.39z"
            />
            <path
            fill="#00dc7e"
            d="m838.362 422.476-20.241 8.178 54.566 135.054 20.24-8.178z"
            />
            <path
            fill="#00dc7e"
            d="M823.28 414.283c5.588-2.258 11.952.444 14.21 6.031l2.527 6.256-20.241 8.178-2.527-6.256c-2.258-5.588.444-11.952 6.031-14.209z"
            />
            <path fill="#fff" d="m872.691 565.702 20.239-8.175-3.599 20.239z" />
            <path
            fill="#efc297"
            d="M840.026 472.713c-4.378-3.356-9.209-6.886-14.724-6.793-8.582.15-14.69 9.579-14.132 18.137.557 8.558 5.899 16.025 11.681 22.365 6.48 7.107 22.237 9.232 30.923 13.331 8.674 4.099 18.777 1.358 20.786-3.031 1.66-3.623 3.321-10.044-2.996-18.057-3.437-4.366-19.985-17.093-31.538-25.964z"
            />
            <path
            fill="#efc297"
            d="M848.119 504.193c2.625 5.562 5.249 11.136 7.862 16.698 1.37 2.903 2.183 15.769-.5 17.522-2.008 1.312-1.323 6.503-3.75.627 10.195 3.24 4.749 18.475 4.134 19.961-.395.952-7.513 10.138-14.295 5.853 6.364 3.762.476 7.35 1.719 14.642-10.66 1.162-2.543 2.288-8.698-6.491-1.834-2.624-17.023-9.998-23.467-25.453-2.114-5.075-6.666-14.736-3.879-22.655 3.008-8.535 7.362-9.371 7.362-9.371-2.531-8.535-2.252-15.839 1.173-19.833 3.426-3.995 9.475-6.236 14.12-3.762M874.385 526.302a26.061 26.061 0 0 1 10.532-5.737c7.63-2.09 17.314-4.192 22.098-1.602 4.32 2.322 6.747 9.162 5.458 13.888-1.185 4.366-5.284 7.327-9.394 9.208-6.248 2.857-14.074 5.551-14.074 5.551-1.661.418-4.448 1.103-8.163.789-10.741-.894-15.096-14.329-7.084-21.528l.639-.569z"
            />
            <path
            fill="#fff"
            d="M830.399 590.632h114.947a67.363 67.363 0 0 1 59.194 35.208l55.7 102.533H903.009l-72.61-137.753z"
            />
            <path
            fill="#efc297"
            d="M862.506 647.658c-8.082-2.404-11.461-.081-13.807 2.694-3.449 4.088-.836 13.18 5.202 17.128-6.038-3.948-15.2-6.573-20.1.627-5.841 8.581 4.459 17.557 10.276 19.775-6.769-3.379-13.446-1.695-14.967 4.111-3.031 11.577 8.802 17.987 13.795 17.592-5.504-1.312-9.336 3.843-9.871 6.433-1.393 6.804 2.184 11.658 12.855 15.978 24.246 9.812 60.742 20.251 81.853 22.817 27.543 4.959 30.551-57.943 25.116-61.148-10.357-6.131-72.319-40.631-90.352-46.007z"
            />
            <path
            fill="#000"
            d="M923.725 779.663s85.065 20.635 107.095 19.102c46.9-3.263 89.59-19.404 108.48-78.706 7.47-23.444-89.82-34.093-98.29-34.325-8.48-.232-67.656-4.459-91.205-6.166-6.224-.453-11.914 3.449-13.783 9.406-8.976 28.6-18.545 88.53-12.274 90.678z"
            />
            <path
            fill="#fff"
            d="M842.742 590.632h-49.304c-1.846 0-2.148 2.648-.36 3.066a103.48 103.48 0 0 1 59.86 39.898l.406.558-10.602-43.534z"
            />
            <path
            fill="#efc297"
            d="m909.128 695.941-17.302-30.005c-4.494-8.268-1.719-18.603 6.305-23.503a7.005 7.005 0 0 1 9.696 2.427l22.62 35.962-21.308 15.119z"
            />
            <path
            fill="#00dc7e"
            d="M516.944 769.212h-90.306v-2.81c0-12.088 10.358-21.586 22.411-20.53 8.756.767 17.859 1.44 22.736 1.44s13.981-.673 22.737-1.44c12.053-1.056 22.411 8.442 22.411 20.53v2.81z"
            />
            <path
            fill="url(#g)"
            d="M446.216 734.225c3.252 3.228 9.162 4.482 12.228 1.068 3.518-3.913 1.509-10.869 2.671-15.618 1.451-5.922 5.097-10.102 8.221-15.119 4.366-7.037 7.304-12.134-3.112-15.687-19.021-6.492-31.736 33.709-19.996 45.356z"
            />
            <path
            fill="url(#h)"
            d="M437.705 724.61c3.251 3.229 9.162 4.483 12.227 1.069 3.519-3.913 1.51-10.869 2.671-15.618 1.451-5.922 5.097-10.103 8.221-15.119 4.366-7.037 7.304-12.135-3.112-15.688-19.02-6.491-31.735 33.71-19.996 45.356z"
            />
            <path
            fill="#b4734a"
            d="M371.889 709.665c-.314-.534-.627-1.103-.813-1.695.116 1.022.337 2.137.813 1.695zM370.89 706.74c-.035.418.047.824.174 1.219-.104-.964-.116-1.835-.174-1.219z"
            />
            <g mask="url(#i)">
            <g mask="url(#j)">
                <path fill="url(#k)" d="M365.595 663.984h119.836v88.623H365.595z" />
            </g>
            </g>
            <path
            fill="#b4734a"
            d="M466.665 746.557c4.993 2.021 11.972.685 13.749-4.401 2.032-5.852-3.31-12.483-4.216-18.161-1.126-7.083.929-13.272 2.033-20.147 1.532-9.626 2.392-16.477-10.521-15.594-23.595 1.625-19.078 51.011-1.045 58.303zM418.023 732.808l21.517-27.137c5.655-7.513 4.424-18.15-2.787-24.176-3.007-2.508-7.489-2.067-9.939.975l-27.649 32.258 18.858 18.092z"
            />
            <path
            fill="url(#l)"
            d="m368.741 690.68 38.435 78.474-120.66-1.324c-2.427-.557-12.529-44.659-12.529-44.659l76.871-38.529c6.608-3.309 14.643-.604 17.883 6.038z"
            />
            <path
            fill="url(#m)"
            d="m308.346 670.243-127.22-56.852s-22.179 50.733-87.88 84.164h142.526c8.116 0 14.201 7.455 12.564 15.409l-2.102 10.23 54.17 10.904c6.549-47.737 7.931-63.866 7.931-63.866z"
            />
            <path fill="#b4734a" d="m293.692 611.371 22.899-12.379-11.449-3.762z" />
            <path
            fill="url(#n)"
            d="m322.362 589.598-13.62 55.355-58.745-14.794 12.401-51.151z"
            />
            <path
            fill="#b4734a"
            d="M265.986 463.62s75.966 36.682 82.654 76.743c6.689 40.062-26.173 53.857-55.215 55.25-9.975.476-38.761-6.05-38.761-6.05l-55.946-39.306z"
            />
            <path
            fill="#b4734a"
            d="M322.456 507.85c5.259 0 9.522-4.263 9.522-9.522s-4.263-9.522-9.522-9.522-9.522 4.263-9.522 9.522 4.263 9.522 9.522 9.522z"
            />
            <path
            fill="#b4734a"
            d="M307.802 490.351s10.88-4.889 19.008-.476l-3.367 9.196-13.992 1.022z"
            />
            <path
            fill="#000"
            d="M298.604 494.626a4.446 4.446 0 0 0-6.056 1.698 4.447 4.447 0 0 0 1.697 6.056l10.356 5.82a4.447 4.447 0 1 0 4.358-7.754z"
            />
            <path
            fill="#00dc7e"
            d="m308.742 644.952 10.602 21.982c3.019 5.504-1.01 11.472-6.781 9.684l-59.256-26.789 24.454-19.589 30.97 14.701z"
            />
            <g mask="url(#o)">
            <path
                stroke="#753625"
                strokeLinecap="round"
                strokeMiterlimit={10}
                strokeWidth={6.967}
                d="M306.64 533.396s33.861-1.149 29.53-27.091"
            />
            </g>
            <path
            fill="#000407"
            d="M179.755 565.515c4.912 7.85 4.668 17.871-.638 25.453-10.579 15.119-24.931 40.166-10.939 48.469 5.214 3.1 22.62.65 27.405 9.022 36.287 63.483 102.046-39.318 102.046-39.318l2.612-1.974c13.017-9.87 6.12-18.173 2.102-21.261-13.168-10.138-16.315-12.088-17.627-15.781-4.343-12.146 11.484-23.375-2.659-34.906-7.687-6.27-10.532-2.461-14.991-20.205-2.95-11.751 12.843-64.527-8.976-55.052-16.303 7.072-33.269 34.081-33.269 34.081-3.901-.534-13.191 4.157-22.666 9.778-13.307 7.896-23.398 20.042-28.902 34.267-2.601 6.723-1.696 14.294 2.125 20.402l4.377 7.013z"
            />
            <path
            fill="#b4734a"
            d="M261.353 586.811c14.513 0 26.278-11.765 26.278-26.277 0-14.513-11.765-26.278-26.278-26.278-14.512 0-26.277 11.765-26.277 26.278 0 14.512 11.765 26.277 26.277 26.277z"
            />
            <path
            fill="url(#p)"
            d="M262.073 576.395c8.761 0 15.862-7.101 15.862-15.862 0-8.76-7.101-15.862-15.862-15.862-8.76 0-15.862 7.102-15.862 15.862 0 8.761 7.102 15.862 15.862 15.862z"
            />
            <path
            fill="#000407"
            d="M255.443 461.019c23.851-14.376 39.307 5.086 42.477 9.057 3.715 4.645 7.129 10.66 5.132 16.257a78.563 78.563 0 0 1-16.512.673c-.65 1.08.372 2.358.859 3.519.836 2.009-.093 4.459-1.8 5.806s-4.006 1.742-6.177 1.556c-5.423-.441-9.998-4.006-14.236-7.42-2.927-2.357-5.841-4.715-8.768-7.072-1.184-.952-2.415-1.986-2.891-3.425-.371-1.138-.221-2.381-.058-3.565 1.44-10.474-7.362-9.766 1.951-15.375z"
            />
            <path
            fill="url(#q)"
            d="M250.89 718.282c31.759 1.742 47.47 6.41 61.869 13.087 14.399 6.665 26.162 21.842 23.572 37.495l-171.241 1.022 10.857-59.535s45.658 6.329 74.943 7.931z"
            />
            <path
            fill="#b4734a"
            d="m281.825 721.65 78.184 11.135a32.138 32.138 0 0 1 20.355 12.53l10.323 13.934c3.043 4.111.117 9.928-4.993 9.928h-.731a21.876 21.876 0 0 1-17.476-8.697l-5.783-7.652-42.802-7.304-37.065-23.84z"
            />
            <path
            fill="#b4734a"
            d="m269.087 733.982 67.036 11.53a32.139 32.139 0 0 1 20.356 12.53l10.323 13.934c3.042 4.111.116 9.928-4.993 9.928h-.732a21.877 21.877 0 0 1-17.476-8.697l-5.783-7.652-42.801-7.304-25.918-24.246z"
            />
            <path
            fill="#b4734a"
            d="m267.984 719.826 60.533 31.039a32.102 32.102 0 0 1 15.676 18.034l5.69 16.372c1.672 4.831-2.857 9.499-7.734 7.978l-.696-.221a21.927 21.927 0 0 1-14.086-13.528l-3.228-9.034-38.656-19.763-17.488-30.888z"
            />
            <path
            fill="#b4734a"
            d="m278.4 722.706 42.499 41.594a32.085 32.085 0 0 1 8.082 22.493l-.627 17.325c-.185 5.109-6.108 7.826-10.102 4.633l-.569-.453a21.952 21.952 0 0 1-8.233-17.708l.256-9.591-28.879-32.421-2.439-25.86z"
            />
            <path
            fill="#00dc7e"
            d="M93.258 697.566c-10.056 5.121-21.412 10.335-34.29 15.583-12.9 5.237-59.36 25.372-58.965 55.482.394 30.11 11.728 42.465 57.072 47.621 45.345 5.156 86.44 4.715 117.455 12.413 18.963 4.703 32.584 14.736 37.786 12.646 14.097-5.69 28.298-75.467 37.762-133.259.755-5.551-3.565-10.486-9.162-10.486H93.246z"
            />
        </svg>
    </div>
  )
}

export default HeaderSVG
