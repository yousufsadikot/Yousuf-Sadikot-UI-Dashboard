import React, {useState} from 'react';

function WelcomeBanner() {
  const [greetingTime, setGreatingTime] = useState('')

 const getGreeting = ()=> {
    const currentTime = new Date();
    const currentHour = currentTime.getHours();
    
    if (currentHour >= 0 && currentHour < 12) {
        return "Good Morning";
    } else if (currentHour >= 12 && currentHour < 16) {
        return "Good Afternoon";
    } else {
        return "Good Evening";
    }
}

  return (
    <div className="relative bg-indigo-200 dark:bg-indigo-500 p-4 sm:p-6 rounded-sm overflow-hidden mb-8">
      {/* Background illustration */}
      <div className="absolute right-0 top-0 -mt-4 mr-16 pointer-events-none hidden xl:block" aria-hidden="true">
      <svg width="449" height="180" viewBox="0 0 449 180" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M414.621 28.6543L405.522 69.9359L423.661 85.7414L448.034 57.7697L414.621 28.6543Z" fill="#4A41CF"/>
<path d="M371.555 90.2203C369.28 91.5972 360.734 93.3873 356.994 93.8238L361.481 97.7336L390.635 123.642L411.931 99.2021C411.174 99.9422 407.815 101.998 400.435 104.3C393.054 106.603 392.329 103.451 392.889 101.588L397.968 74.9425L376.584 56.3086C376.333 63.9844 375.834 79.8743 375.839 82.028C375.844 84.7201 374.399 88.4991 371.555 90.2203Z" fill="#919EFA"/>
<path d="M385.987 6.39029L404.698 22.6949C396.581 26.035 381.534 30.6592 381.438 30.3068C381.342 29.9544 384.07 14.6293 385.987 6.39029Z" fill="#919EFA"/>
<path d="M324.847 66.1472L380.905 2.97012L374.019 37.2787C378.716 39.0201 397.96 32.6116 408.165 28.739L399.899 63.8604L398.051 63.09C386.718 52.8119 380.277 49.1142 378.474 48.5501C371.502 50.5371 369.524 56.3152 369.406 58.9559L368.852 84.8417L350.623 88.6076L324.847 66.1472Z" fill="url(#paint0_linear_245_23)"/>
<path d="M399.383 96.8337L402.982 79.9828C408.133 82.8597 413.72 88.6683 415.87 91.213L399.383 96.8337Z" fill="#919EFA"/>
<path d="M152.047 114.346L86.9501 124.396L74.2137 159.654L128.585 179.295L152.047 114.346Z" fill="#4A41CF"/>
<path d="M38.3388 86.4871C35.0564 83.9588 27.6388 72.5523 24.897 67.3662L21.7464 76.0879L0.543315 133.042L48.0487 150.202C46.547 149.52 41.6674 145.799 34.163 136.375C26.6585 126.952 30.8274 124.122 33.8499 123.885L75.4196 116.245L90.4352 74.6779C79.1438 78.6408 55.7797 86.8715 52.6537 88.0919C48.7461 89.6173 42.4417 89.6475 38.3388 86.4871Z" fill="#919EFA"/>
<path d="M168.25 60.2014L155.111 96.5726C145.684 86.6639 130.485 67.412 130.943 67.0738C131.401 66.7357 155.201 62.0608 168.25 60.2014Z" fill="#919EFA"/>
<path d="M46.9822 5.06696L170.354 50.8919L116.634 60.2266C116.751 68.031 136.908 92.3745 148.285 105.016L92.6063 112.804L92.684 109.685C101.227 87.4291 102.968 75.9886 102.771 73.0503C95.9551 64.043 86.4464 64.4262 82.544 65.7437L44.6285 79.5287L28.8831 55.1702L46.9822 5.06696Z" fill="url(#paint1_linear_245_23)"/>
<path d="M44.4167 130.639L70.9235 126.369C69.6482 135.474 64.3591 146.864 61.8739 151.42L44.4167 130.639Z" fill="#919EFA"/>
<path d="M288.298 139.473L241.385 134.142L225.926 156.122L259.821 179.962L288.298 139.473Z" fill="#4A41CF"/>
<path d="M214.92 98.7563C213.127 96.3886 210.149 87.1012 209.231 82.9976L205.407 88.4347L180 123.821L209.615 144.65C208.705 143.895 206.032 140.401 202.621 132.468C199.209 124.536 202.625 123.365 204.76 123.772L234.949 126.33L253.174 100.418C244.618 101.028 226.908 102.312 224.516 102.566C221.526 102.884 217.161 101.716 214.92 98.7563Z" fill="#919EFA"/>
<path d="M309.717 105.086L293.77 127.76C289.12 119.129 282.241 102.948 282.622 102.801C283.002 102.653 300.342 103.91 309.717 105.086Z" fill="#919EFA"/>
<path d="M236.257 44.0813L312.928 99.0449L274.018 95.3661C272.627 100.785 281.974 121.422 287.457 132.31L247.483 127.193L248.125 125.051C258.232 111.271 261.594 103.688 262.012 101.619C258.998 94.1044 252.35 92.5755 249.403 92.7505L220.582 95.1308L214.288 75.3155L236.257 44.0813Z" fill="url(#paint2_linear_245_23)"/>
<path d="M210.794 130.436L229.93 132.483C227.33 138.539 221.524 145.418 218.946 148.1L210.794 130.436Z" fill="#919EFA"/>
<defs>
<linearGradient id="paint0_linear_245_23" x1="346.441" y1="41.3655" x2="383.562" y2="79.6399" gradientUnits="userSpaceOnUse">
<stop offset="0.306051" stop-color="#6A73B6"/>
<stop offset="1" stop-color="#2F3350"/>
</linearGradient>
<linearGradient id="paint1_linear_245_23" x1="67.1069" y1="8.1233" x2="81.2208" y2="85.474" gradientUnits="userSpaceOnUse">
<stop stop-color="#919EFA"/>
<stop offset="1" stop-color="#565E94"/>
</linearGradient>
<linearGradient id="paint2_linear_245_23" x1="274.837" y1="71.2161" x2="239.443" y2="121.538" gradientUnits="userSpaceOnUse">
<stop stop-color="#919EFA"/>
<stop offset="1" stop-color="#565E94"/>
</linearGradient>
</defs>
</svg>



      </div>

      {/* Content */}
      <div className="relative">
        <h1 className="text-2xl md:text-3xl text-slate-800 dark:text-slate-100 font-bold mb-1">{getGreeting()}👋</h1>
        <p className="dark:text-indigo-200">Welcome to Yousuf Sadikot's World of UI Design</p>
      </div>
    </div>
  );
}

export default WelcomeBanner;
