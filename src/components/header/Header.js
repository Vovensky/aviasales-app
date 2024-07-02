import classes from './Header.module.scss'

function Header() {
  return (
    <div className={classes.header}>
      <div className={classes['header-logo']}>
        <svg viewBox="0 0 82 89" fill="none" xmlns="http://www.w3.org/2000/svg" className={classes['header-logo__background']}>
          <g filter="url(#filter0_d_1_706)">
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M41 70C53.1503 70 63 60.1503 63 48C63 35.8497 53.1503 26 41 26C28.8497 26 19 35.8497 19 48C19 60.1503 28.8497 70 41 70Z"
              fill="black"
              fillOpacity="0.01"
            />
          </g>
          <g filter="url(#filter1_d_1_706)">
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M41 70C57.5685 70 71 56.5685 71 40C71 23.4315 57.5685 10 41 10C24.4315 10 11 23.4315 11 40C11 56.5685 24.4315 70 41 70Z"
              fill="#2196F3"
            />
            <path
              d="M69 40C69 55.464 56.464 68 41 68C25.536 68 13 55.464 13 40C13 24.536 25.536 12 41 12C56.464 12 69 24.536 69 40Z"
              stroke="#42A5F5"
              strokeWidth="4"
            />
          </g>
          <mask id="mask0_1_706" style={{ maskType: 'luminance' }} maskUnits="userSpaceOnUse" x="11" y="10" width="60" height="60">
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M41 70C57.5685 70 71 56.5685 71 40C71 23.4315 57.5685 10 41 10C24.4315 10 11 23.4315 11 40C11 56.5685 24.4315 70 41 70Z"
              fill="white"
            />
          </mask>
          <g mask="url(#mask0_1_706)">
            <path d="M13.714 32.875H67.536" stroke="#42A5F5" strokeWidth="4" strokeLinecap="square" />
            <path d="M13.714 48.625H67.536" stroke="#42A5F5" strokeWidth="4" strokeLinecap="square" />
            <path
              d="M40.25 14.5C40.25 14.5 30.2878 26.0775 30.5035 40.75C30.7191 55.4225 40.25 65.5 40.25 65.5"
              stroke="#42A5F5"
              strokeWidth="4"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M41 14.5C41 14.5 50.9622 26.0775 50.7465 40.75C50.5309 55.4225 41 65.5 41 65.5"
              stroke="#42A5F5"
              strokeWidth="4"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </g>
          <defs>
            <filter id="filter0_d_1_706" x="8" y="23" width="66" height="66" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
              <feFlood floodOpacity="0" result="BackgroundImageFix" />
              <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
              <feOffset dy="8" />
              <feGaussianBlur stdDeviation="5.5" />
              <feColorMatrix type="matrix" values="0 0 0 0 0.215686 0 0 0 0 0.407843 0 0 0 0 0.556863 0 0 0 0.25 0" />
              <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_1_706" />
              <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_1_706" result="shape" />
            </filter>
            <filter id="filter1_d_1_706" x="0" y="0" width="82" height="82" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
              <feFlood floodOpacity="0" result="BackgroundImageFix" />
              <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
              <feOffset dy="1" />
              <feGaussianBlur stdDeviation="5.5" />
              <feColorMatrix type="matrix" values="0 0 0 0 0.215686 0 0 0 0 0.407843 0 0 0 0 0.556863 0 0 0 0.3 0" />
              <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_1_706" />
              <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_1_706" result="shape" />
            </filter>
          </defs>
        </svg>
        <svg viewBox="0 0 50 51" fill="none" xmlns="http://www.w3.org/2000/svg" className={classes['header-logo__plane']}>
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M35.1946 16.0278C35.3946 15.9123 35.6151 15.8406 35.8456 15.8261C36.8621 15.7621 39.798 15.678 40.4347 16.7809C41.0715 17.8838 39.5298 20.3837 38.966 21.2314C38.8383 21.4235 38.666 21.5784 38.4662 21.6938L32.3904 25.2016L33.2343 42.302C33.2461 42.5414 33.125 42.7679 32.9193 42.8911L31.67 43.6393C31.5055 43.7379 31.3057 43.7586 31.1244 43.696L30.1776 43.369C30.019 43.3143 29.8877 43.2002 29.8114 43.0508L23.3534 30.4192L16.9843 34.0964L16.2974 38.7678C16.2498 39.0912 15.9693 39.3288 15.6426 39.3226L15.1446 39.3132C14.8927 39.3084 14.6663 39.1583 14.5638 38.9282L12.7741 34.9122C11.5439 34.9515 10.3891 34.8306 10.0792 34.294C9.7697 33.7579 10.2429 32.7021 10.893 31.6611L8.32952 28.1301C8.18151 27.9263 8.16477 27.6552 8.28658 27.4347L8.52738 26.9987C8.68539 26.7126 9.03141 26.5886 9.33522 26.709L13.6974 28.4392L20.0779 24.7555L12.4192 12.9267C12.328 12.7858 12.2948 12.6152 12.3267 12.4504L12.517 11.4669C12.5534 11.2786 12.6712 11.116 12.8389 11.0228L14.1115 10.315C14.321 10.1984 14.5777 10.2068 14.7791 10.3368L29.0768 19.5599L35.1946 16.0278Z"
            fill="white"
          />
          <mask id="mask0_1_716" style={{ maskType: 'luminance' }} maskUnits="userSpaceOnUse" x="8" y="10" width="33" height="34">
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M35.1946 16.0278C35.3946 15.9123 35.6151 15.8406 35.8456 15.8261C36.8621 15.7621 39.798 15.678 40.4347 16.7809C41.0715 17.8838 39.5298 20.3837 38.966 21.2314C38.8383 21.4235 38.666 21.5784 38.4662 21.6938L32.3904 25.2016L33.2343 42.302C33.2461 42.5414 33.125 42.7679 32.9193 42.8911L31.67 43.6393C31.5055 43.7379 31.3057 43.7586 31.1244 43.696L30.1776 43.369C30.019 43.3143 29.8877 43.2002 29.8114 43.0508L23.3534 30.4192L16.9843 34.0964L16.2974 38.7678C16.2498 39.0912 15.9693 39.3288 15.6426 39.3226L15.1446 39.3132C14.8927 39.3084 14.6663 39.1583 14.5638 38.9282L12.7741 34.9122C11.5439 34.9515 10.3891 34.8306 10.0792 34.294C9.7697 33.7579 10.2429 32.7021 10.893 31.6611L8.32952 28.1301C8.18151 27.9263 8.16477 27.6552 8.28658 27.4347L8.52738 26.9987C8.68539 26.7126 9.03141 26.5886 9.33522 26.709L13.6974 28.4392L20.0779 24.7555L12.4192 12.9267C12.328 12.7858 12.2948 12.6152 12.3267 12.4504L12.517 11.4669C12.5534 11.2786 12.6712 11.116 12.8389 11.0228L14.1115 10.315C14.321 10.1984 14.5777 10.2068 14.7791 10.3368L29.0768 19.5599L35.1946 16.0278Z"
              fill="white"
            />
          </mask>
          <g mask="url(#mask0_1_716)">
            <rect x="29.536" y="17.7839" width="1.30853" height="12.4084" transform="rotate(60 29.536 17.7839)" fill="#EBECF2" />
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M32.9193 42.8911C33.125 42.7679 33.246 42.5415 33.2342 42.302L32.3628 24.6426L23.1264 29.9752L29.8113 43.0508C29.8877 43.2002 30.0189 43.3143 30.1775 43.369L31.1244 43.696C31.3057 43.7587 31.5054 43.7379 31.67 43.6393L32.9193 42.8911Z"
              fill="#DEE1E3"
            />
            <path
              opacity="0.4"
              fillRule="evenodd"
              clipRule="evenodd"
              d="M12.8366 34.8013L12.7476 34.8527L14.5638 38.9282C14.6664 39.1584 14.8928 39.3084 15.1447 39.3132L15.6426 39.3226C15.9694 39.3288 16.2498 39.0912 16.2974 38.7678L17.023 33.8334L16.56 34.1007C16.4167 34.1834 16.2626 34.2452 16.1011 34.2813C15.551 34.4041 14.1548 34.6951 12.8366 34.8013Z"
              fill="#DEE1E3"
            />
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M23.2482 30.2134L32.3776 24.9426L32.4768 26.9539L24.9559 33.5538L23.2482 30.2134Z"
              fill="#C5C6CC"
            />
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M41.4823 19.9524L11.6913 37.1523C11.6913 37.1523 10.8123 35.5636 10.0793 34.2939C10.0704 34.2786 10.062 34.263 10.0541 34.2473C11.4056 34.345 14.1269 34.2351 16.7661 32.7114L37.3906 20.8038C39.6822 19.4807 40.2435 17.7674 40.5526 17.0309C41.0312 18.316 41.4823 19.9524 41.4823 19.9524Z"
              fill="#DEE1E3"
            />
          </g>
        </svg>
      </div>
    </div>
  )
}

export default Header
