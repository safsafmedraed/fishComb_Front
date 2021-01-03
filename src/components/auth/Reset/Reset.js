import React , {useState} from 'react';
import { reset } from '../../../Actions/auth';
import propTypes from 'prop-types';
import { connect } from 'react-redux';
import './Reset.css';
const Reset = ({ reset }) => {
    const [formData, setFormData] = useState({
        email: ''
   
      });
      const { email } = formData;

   
      const onchange = e => setFormData({ ...formData, [e.target.name]: e.target.value });
      
      const onSubmit = async e => {
        e.preventDefault();
        reset(email);
        
      }

return(
    <div className="Reset">
    <div className="row">
    <svg width="210px" height="70px" viewbox="0 0 210 70" version="1.1" xlink="http://www.w3.org/1999/xlink" xmlns="http://www.w3.org/2000/svg" className="img">
          <defs>
            <linearGradient x1="0.15689053" y1="0.8479203" x2="0.70081013" y2="-0.2158878" id="gradient_1">
              <stop offset="0" stop-color="#32ABE4" />
              <stop offset="1" stop-color="#0071BC" />
            </linearGradient>
            <linearGradient x1="-0.30873457" y1="0.5906304" x2="5.006519" y2="0.05281756" id="gradient_2">
              <stop offset="0" stop-color="#32ABE4" />
              <stop offset="0.05" stop-color="#2BA3DF" />
              <stop offset="0.24" stop-color="#188DCF" />
              <stop offset="0.45" stop-color="#0B7DC4" />
              <stop offset="0.68" stop-color="#0374BE" />
              <stop offset="1" stop-color="#0071BC" />
            </linearGradient>
            <linearGradient x1="-0.6230475" y1="0.81764156" x2="2.3246825" y2="-0.0058199493" id="gradient_3">
              <stop offset="0" stop-color="#32ABE4" />
              <stop offset="0.05" stop-color="#2BA3DF" />
              <stop offset="0.24" stop-color="#188DCF" />
              <stop offset="0.45" stop-color="#0B7DC4" />
              <stop offset="0.68" stop-color="#0374BE" />
              <stop offset="1" stop-color="#0071BC" />
            </linearGradient>
            <linearGradient x1="-1.4992715" y1="0.9197923" x2="1.1401151" y2="0.376511" id="gradient_4">
              <stop offset="0" stop-color="#32ABE4" />
              <stop offset="0.05" stop-color="#2BA3DF" />
              <stop offset="0.24" stop-color="#188DCF" />
              <stop offset="0.45" stop-color="#0B7DC4" />
              <stop offset="0.68" stop-color="#0374BE" />
              <stop offset="1" stop-color="#0071BC" />
            </linearGradient>
          </defs>
          <g id="Logofile-01">
            <path d="M0 0L210 0L210 70L0 70L0 0Z" id="Rectangle" fill="none" fill-rule="evenodd" stroke="none" />
            <path d="M3 1.5C3 2.32843 2.32843 3 1.5 3C0.671573 3 0 2.32843 0 1.5C0 0.671573 0.671573 0 1.5 0C2.32843 0 3 0.671573 3 1.5Z" transform="translate(40 49)" id="Path" fill="#9DEFFF" fill-opacity="0.4" fill-rule="evenodd" stroke="none" />
            <path d="M2 0.999412C2.00023 1.40397 1.75668 1.76882 1.38296 1.92374C1.00924 2.07867 0.578986 1.99315 0.292918 1.70708C0.00685062 1.42101 -0.0786675 0.990764 0.0762582 0.617043C0.231184 0.243322 0.596027 -0.000231608 1.00059 1.65277e-07C1.55255 1.65277e-07 2 0.447452 2 0.999412Z" transform="translate(35 40)" id="Path" fill="#9DEFFF" fill-opacity="0.4" fill-rule="evenodd" stroke="none" />
            <path d="M2 0.999214C2.00031 1.40381 1.75679 1.76873 1.38305 1.9237C1.00931 2.07868 0.579011 1.99318 0.292918 1.70708C0.00682501 1.42099 -0.0786804 0.99069 0.0762964 0.616951C0.231273 0.243212 0.59619 -0.000312009 1.00079 3.00038e-07C1.55246 0.000426139 1.99957 0.44754 2 0.999214L2 0.999214Z" transform="translate(32 49)" id="Path" fill="#9DEFFF" fill-opacity="0.4" fill-rule="evenodd" stroke="none" />
            <path d="M1.99999 1.00464C1.99743 1.55631 1.54859 2.0017 0.996912 2C0.445235 1.99829 -0.000847514 1.55014 1.20909e-06 0.998462C0.000849932 0.446782 0.448309 5.93053e-06 0.999989 0C1.26601 -2.85972e-06 1.52107 0.10599 1.70874 0.294531C1.89641 0.483071 2.00122 0.738618 1.99999 1.00464L1.99999 1.00464Z" transform="translate(13 49)" id="Path" fill="#9DEFFF" fill-opacity="0.4" fill-rule="evenodd" stroke="none" />
            <path d="M2 0.999214C2.00031 1.40381 1.75679 1.76873 1.38305 1.9237C1.00931 2.07868 0.579011 1.99318 0.292918 1.70708C0.00682501 1.42099 -0.0786804 0.99069 0.0762964 0.616951C0.231273 0.243212 0.59619 -0.000312009 1.00079 3.00038e-07C1.55158 0.00253662 1.99746 0.448417 2 0.999214Z" transform="translate(23 30)" id="Path" fill="#9DEFFF" fill-opacity="0.4" fill-rule="evenodd" stroke="none" />
            <path d="M2 1C2 1.55228 1.55228 2 1 2C0.447715 2 0 1.55228 0 1C0 0.447715 0.447715 0 1 0C1.55228 0 2 0.447715 2 1Z" transform="translate(37 25)" id="Path" fill="#9DEFFF" fill-opacity="0.4" fill-rule="evenodd" stroke="none" />
            <path d="M3 1.50065C2.99964 2.329 2.32791 3.00024 1.49956 3C0.671222 2.99976 -0.000120364 2.32812 0 1.49978C0.000120364 0.67144 0.671658 7.87719e-08 1.5 0C1.89794 -3.78423e-08 2.27957 0.158125 2.56089 0.439571C2.84221 0.721017 3.00017 1.10272 3 1.50065L3 1.50065Z" transform="translate(17 40)" id="Path" fill="#9DEFFF" fill-opacity="0.4" fill-rule="evenodd" stroke="none" />
            <path d="M1 0.5C1 0.776142 0.776142 1 0.5 1C0.223858 1 0 0.776142 0 0.5C0 0.223858 0.223858 0 0.5 0C0.776142 0 1 0.223858 1 0.5L1 0.5Z" transform="translate(31 33)" id="Path" fill="#9DEFFF" fill-opacity="0.4" fill-rule="evenodd" stroke="none" />
            <path d="M1 0.5C1 0.776142 0.776142 1 0.5 1C0.223858 1 0 0.776142 0 0.5C0 0.223858 0.223858 0 0.5 0C0.776142 0 1 0.223858 1 0.5Z" transform="translate(48 33)" id="Path" fill="#9DEFFF" fill-opacity="0.4" fill-rule="evenodd" stroke="none" />
            <path d="M1 0.5C1 0.776142 0.776142 1 0.5 1C0.223858 1 0 0.776142 0 0.5C0 0.223858 0.223858 0 0.5 0C0.776142 0 1 0.223858 1 0.5Z" transform="translate(12 31)" id="Path" fill="#9DEFFF" fill-opacity="0.4" fill-rule="evenodd" stroke="none" />
            <path d="M1 0.5C1 0.776142 0.776142 1 0.5 1C0.223858 1 0 0.776142 0 0.5C0 0.223858 0.223858 0 0.5 0C0.776142 0 1 0.223858 1 0.5Z" transform="translate(27 42)" id="Path" fill="#9DEFFF" fill-opacity="0.4" fill-rule="evenodd" stroke="none" />
            <path d="M1 0.5C1 0.776142 0.776142 1 0.5 1C0.223858 1 0 0.776142 0 0.5C0 0.223858 0.223858 0 0.5 0C0.776142 0 1 0.223858 1 0.5Z" transform="translate(45 42)" id="Path" fill="#9DEFFF" fill-opacity="0.4" fill-rule="evenodd" stroke="none" />
            <path d="M1 0.5C1 0.776142 0.776142 1 0.5 1C0.223858 1 0 0.776142 0 0.5C0 0.223858 0.223858 0 0.5 0C0.632608 0 0.759785 0.0526784 0.853553 0.146447C0.947322 0.240215 1 0.367392 1 0.5L1 0.5Z" transform="translate(22 48)" id="Path" fill="#9DEFFF" fill-opacity="0.4" fill-rule="evenodd" stroke="none" />
            <path d="M1 0.5C1 0.776142 0.776142 1 0.5 1C0.223858 1 0 0.776142 0 0.5C0 0.223858 0.223858 0 0.5 0C0.776142 0 1 0.223858 1 0.5Z" transform="translate(44 60)" id="Path" fill="#9DEFFF" fill-opacity="0.4" fill-rule="evenodd" stroke="none" />
            <path d="M1 0.5C1 0.776142 0.776142 1 0.5 1C0.223858 1 0 0.776142 0 0.5C0 0.223858 0.223858 0 0.5 0C0.776142 0 1 0.223858 1 0.5Z" transform="translate(46 29)" id="Path" fill="#9DEFFF" fill-opacity="0.4" fill-rule="evenodd" stroke="none" />
            <path d="M1 0.5C1 0.776142 0.776142 1 0.5 1C0.223858 1 0 0.776142 0 0.5C0 0.223858 0.223858 0 0.5 0C0.776142 0 1 0.223858 1 0.5L1 0.5Z" transform="translate(22 19)" id="Path" fill="#9DEFFF" fill-opacity="0.4" fill-rule="evenodd" stroke="none" />
            <path d="M1 0.5C1 0.776142 0.776142 1 0.5 1C0.223858 1 0 0.776142 0 0.5C0 0.223858 0.223858 0 0.5 0C0.776142 0 1 0.223858 1 0.5Z" transform="translate(57 32)" id="Path" fill="#9DEFFF" fill-opacity="0.4" fill-rule="evenodd" stroke="none" />
            <path d="M39.7311 2.84154C38.5502 1.9699 37.1958 1.47935 35.7866 1.16985C34.6864 0.92773 33.5708 0.752982 32.4581 0.57683C31.294 0.392256 30.13 0.173294 28.9575 0.0855692C26.1643 -0.116549 23.388 0.0210036 20.6426 0.696136C17.156 1.55795 14.065 3.14051 11.5458 5.80033C11.004 6.37087 10.5121 6.98673 10.0755 7.64116C4.27627 6.89164 0.486938 6.77093 0.00501798 7.68607C-0.156559 8.64544 3.60607 9.35917 8.08386 12.3973C8.04592 12.5741 8.01009 12.7524 7.97848 12.932C7.41648 16.0656 7.7607 19.1514 8.58194 22.186C9.12568 24.1924 9.76566 26.1708 10.3101 28.1766C10.7 29.6138 10.5209 30.9887 9.57528 32.1902C8.83976 33.1222 8.10002 34.0534 7.3392 34.9602C5.13052 37.5814 5.51268 40.6588 7.5366 43C8.30023 42.4105 8.85029 41.6476 9.42846 40.9058C10.0389 40.1226 10.6473 39.331 11.3252 38.6095C11.8029 38.1007 12.1963 38.013 12.5701 38.7815C12.6403 38.9282 12.7295 39.0664 12.8103 39.2082C13.5473 40.5058 14.3285 41.7627 15.5937 42.6105C15.836 42.7726 16.0152 42.821 16.1894 42.5558C16.6516 41.854 17.1806 41.183 17.5544 40.4335C18.3089 38.9225 18.3932 37.3323 17.8782 35.7153C17.4399 34.3363 16.7605 33.1053 15.7574 32.08C14.7738 31.0729 14.5174 29.8784 14.8357 28.5197C14.9516 28.0285 15.0464 27.5239 15.1975 27.0396C15.8199 25.0002 16.5484 23.0043 17.6689 21.1838C17.8065 20.9656 17.9823 20.774 18.188 20.6182C18.2695 20.5557 18.5266 20.5831 18.5828 20.661C19.1926 21.5031 20.0532 21.9067 21.0037 22.1649C23.8797 22.9467 27.0038 23.4871 29.6909 24.8262C30.5402 25.2472 31.0959 25.8739 31.705 26.5807C31.9705 25.1553 31.6572 23.9314 30.751 22.8366C29.83 21.7235 28.6217 20.9094 27.4134 20.1599C26.6624 19.6946 25.9044 19.2335 25.2307 18.6545C24.753 18.2447 23.5945 17.2551 23.5496 16.5674C23.454 15.116 24.0589 13.897 25.3058 13.0815C26.2704 12.4499 27.3586 12.2141 28.4552 12.0057C30.602 11.5972 32.7925 11.4393 34.8965 10.7803C37.1642 10.0701 39.0743 8.84685 40.4084 6.78707C41.382 5.28732 41.1523 3.89073 39.7311 2.84154ZM34.8368 5.31118C34.2888 5.26276 33.9319 4.80869 33.9874 4.23181C34.0429 3.65493 34.4792 3.28648 35.0349 3.34403C35.5266 3.39526 35.9306 3.89003 35.8933 4.40515C35.8561 4.92028 35.3545 5.3575 34.8368 5.31118Z" transform="translate(20 14)" id="Shape" fill="url(#gradient_1)" stroke="none" />
            <path d="M7.26341 21.274C7.76506 21.2826 8.26053 21.168 8.70175 20.9413L8.52645 24.6998C7.42625 25.5666 6.1747 26 4.77181 26C2.64327 26 1.26337 25.5339 0.632092 24.6017C0.221916 24.0142 0.0023446 23.3255 0.00057258 22.6208C-0.00581719 22.0022 0.041283 21.3841 0.141399 20.7729L2.24646 9.51953L8.21033 9.51953L6.24609 20.0093C6.2234 20.1302 6.21162 20.2527 6.21088 20.3754C6.21088 20.9745 6.56173 21.274 7.26341 21.274ZM2.94766 4.09541C2.94766 2.67459 3.28115 1.63682 3.94812 0.982091C4.61509 0.327364 5.65002 0 7.05291 0C9.01715 0 9.99951 0.821309 10 2.46393C10 3.86201 9.66651 4.88284 8.99954 5.52644C8.33257 6.17003 7.28591 6.49205 5.85955 6.49252C3.91829 6.49252 2.94766 5.69348 2.94766 4.09541Z" transform="translate(55 29)" id="Shape" fill="url(#gradient_2)" stroke="none" />
            <path d="M17 3.96971C17.0006 4.70131 16.7687 5.41388 16.3382 6.003L10.9134 6.003C11.0895 5.86967 11.1777 5.64739 11.1782 5.33615C11.1787 5.02491 11.0023 4.77499 10.6492 4.58639C10.2956 4.39732 9.8436 4.30279 9.29316 4.30279C7.63907 4.30279 6.81203 4.81378 6.81203 5.83576C6.81203 6.23573 7.12067 6.52444 7.73796 6.70189C8.47576 6.90375 9.22777 7.04864 9.98743 7.13531C10.8776 7.24821 11.761 7.40964 12.6338 7.61889C13.4855 7.81332 14.2651 8.24672 14.8826 8.86896C15.4999 9.49144 15.8088 10.3246 15.8092 11.3684C15.8092 13.2126 15.076 14.6125 13.6095 15.5681C12.1431 16.5236 10.0103 17.0009 7.21103 17C4.41043 17 2.44793 16.5445 1.32354 15.6336C0.441181 14.9224 0 13.9445 0 12.7C0.00125992 12.3313 0.0345796 11.9633 0.099577 11.6004L5.62333 11.5308C5.57723 11.842 5.7591 12.1142 6.16893 12.3474C6.57876 12.5806 7.17968 12.6968 7.97169 12.6958C8.76554 12.6958 9.33903 12.6127 9.69216 12.4464C10.0453 12.2801 10.2216 11.9632 10.2212 11.4959C10.2212 11.1851 9.91252 10.9687 9.29523 10.8465C8.67795 10.7243 7.92259 10.6186 7.02916 10.5295C6.12755 10.4413 5.23204 10.2985 4.3475 10.1016C3.48345 9.91809 2.69414 9.47695 2.08213 8.83552C1.46438 8.1912 1.15574 7.34667 1.1562 6.30193C1.1562 4.28072 1.93345 2.72452 3.48796 1.63332C5.04247 0.542123 7.28617 -0.00231529 10.2191 7.40024e-06C14.7392 0.00233009 16.9995 1.32557 17 3.96971Z" transform="translate(66 38)" id="Path" fill="url(#gradient_3)" fill-rule="evenodd" stroke="none" />
            <path d="M17.643 21.2259C18.1163 21.2346 18.5837 21.1188 19 20.8899L18.8346 24.6866C17.798 25.5622 16.6174 26 15.2929 26C12.2918 26 10.7911 24.722 10.7906 22.166C10.7939 21.6809 10.8384 21.197 10.9235 20.7197L11.6515 16.5827C11.7174 16.1828 11.7505 15.7781 11.7504 15.3726C11.7504 14.2945 11.1934 13.7555 10.0792 13.7555C8.96507 13.7555 8.0989 14.1366 7.4807 14.8987L5.62678 25.5261L0 25.5261L4.43513 0L10.0626 0L8.17548 10.8629C9.38928 9.54062 10.9117 8.87924 12.7428 8.87877C14.972 8.87877 16.4174 9.38313 17.079 10.3918C17.538 11.0501 17.7814 11.8386 17.7744 12.6453C17.7799 13.4124 17.7134 14.1782 17.5758 14.9325L16.6824 19.9435C16.661 20.0656 16.6499 20.1893 16.6492 20.3133C16.6497 20.9217 16.9809 21.2259 17.643 21.2259Z" transform="translate(84 29)" id="Path" fill="url(#gradient_4)" fill-rule="evenodd" stroke="none" />
            <path d="M6.9756 17C2.3252 17 0 15.4 0 12.2C0.00335681 11.7192 0.0483916 11.2396 0.134605 10.7666L0.83567 6.63345C1.19321 4.49965 2.17143 2.8662 3.77033 1.7331C5.36923 0.6 7.39787 0.0222997 9.85628 0C14.6184 0 16.9994 1.64437 16.9994 4.9331C17.0078 5.58078 16.9231 6.22633 16.7477 6.85017C16.58 7.41649 16.4068 7.79977 16.2283 8L15.9597 8.3331L10.2587 8.3331C10.8195 7.84437 11.1 7.26667 11.1 6.6C11.1 5.4 10.4963 4.8 9.28911 4.8C8.57309 4.8 7.95826 5.01115 7.44461 5.43345C6.93096 5.85575 6.59469 6.50081 6.43578 7.36864L6.00042 9.80209C5.95572 10.0104 5.93223 10.2226 5.93031 10.4355C5.93031 11.6132 6.66807 12.2021 8.14357 12.2021C8.62637 12.2053 9.095 12.0401 9.46789 11.7352C9.85908 11.4244 10.0883 11.0799 10.1556 10.7017L15.7221 10.7714C14.9883 14.9238 12.0728 17 6.9756 17Z" transform="translate(105 38)" id="Path" fill="#FBB03B" fill-rule="evenodd" stroke="none" />
            <path d="M28.607 12.2574C29.0929 12.266 29.5727 12.151 30 11.9235L29.8302 15.6953C28.7643 16.5651 27.5515 17 26.1919 17C23.1138 17 21.5748 15.7311 21.5748 13.1934C21.5783 12.7115 21.6237 12.2308 21.7105 11.7566L22.4208 7.64682C22.4887 7.24962 22.5229 6.84754 22.5231 6.44476C22.5231 5.37378 21.9283 4.83828 20.7387 4.83828C19.5492 4.83828 18.6149 5.29485 17.9358 6.20798L16.1053 16.5341L10.3289 16.5341L11.9257 7.64682C11.9936 7.24962 12.0278 6.84754 12.028 6.44476C12.028 5.37378 11.4164 4.83828 10.1932 4.83828C9.21864 4.83828 8.38045 5.20568 7.67865 5.94047L5.77639 16.5313L0 16.5313L2.88819 0.460989L8.25686 0.460989L7.87967 2.47188C9.23924 0.824424 10.9608 0.000465645 13.0445 0C15.989 0 17.6652 0.957599 18.0729 2.8728C19.4324 0.957599 21.2502 0 23.5261 0C25.802 0 27.2802 0.501034 27.9606 1.5031C28.4086 2.17864 28.6448 2.96876 28.6397 3.77522C28.6454 4.52472 28.5886 5.27342 28.47 6.0138L27.6176 10.9918C27.5962 11.1131 27.585 11.236 27.5842 11.3592C27.5861 11.958 27.927 12.2574 28.607 12.2574Z" transform="translate(142 38)" id="Path" fill="#FBB03B" fill-rule="evenodd" stroke="none" />
            <path d="M11.3219 8.88415C13.5391 8.88415 15.0958 9.50075 15.9921 10.734C16.6645 11.6077 17.0005 12.6726 17 13.9288C16.9974 14.472 16.9411 15.0137 16.8321 15.5459L16.1599 19.3123C15.7792 21.4646 14.7882 23.118 13.1867 24.2725C11.5853 25.427 9.56939 26.0028 7.13911 26C4.70884 26 2.84422 25.5179 1.54526 24.5537C0.515088 23.7916 0 22.7267 0 21.3589C0.00124953 20.9866 0.0350938 20.6152 0.101144 20.2488L3.66227 0L9.37413 0L7.66099 9.7862C8.60126 9.18483 9.82155 8.88415 11.3219 8.88415ZM11.0198 16.0471C11.0455 15.7958 11.0567 15.5432 11.0535 15.2906C11.0535 14.9658 10.9131 14.6183 10.6321 14.248C10.3512 13.8777 9.74686 13.6937 8.81924 13.696C7.88927 13.696 7.22293 13.9773 6.82023 14.5397L5.84531 20.156C6.11409 20.829 6.67413 21.1654 7.52543 21.1649C9.25004 21.1649 10.2692 20.3017 10.5829 18.5754L11.0198 16.0471Z" transform="translate(174 29)" id="Shape" fill="#FBB03B" stroke="none" />
            <path d="M15.5704 1.5697C14.3479 0.523234 12.5357 0 10.1338 0C4.73244 0 1.64238 2.20443 0.863591 6.61328L0.166585 10.5236C0.0611695 11.0855 0.00542543 11.6556 0 12.2273C0 13.6965 0.444458 14.7986 1.33337 15.5336C2.53362 16.514 4.42297 17.0028 7.00143 17C9.57989 16.9972 11.6414 16.5084 13.186 15.5336C14.7305 14.5561 15.714 12.886 16.1364 10.5236L16.8334 6.61328C16.9393 6.08439 16.9951 5.54667 17 5.00727C17.0028 3.53951 16.5263 2.39366 15.5704 1.5697Z" transform="translate(124 38)" id="Path" fill="#FBB03B" fill-rule="evenodd" stroke="none" />
            <path d="M0.56073 0.00359411C0.359285 -0.0206007 0.163117 0.0789004 0.0639312 0.255581C-0.0352543 0.432262 -0.0178618 0.651218 0.107978 0.81009C0.233817 0.968961 0.443244 1.03636 0.638351 0.98078C0.833459 0.9252 0.975703 0.75762 0.998586 0.556382C1.01838 0.286644 0.828237 0.0465881 0.56073 0.00359411L0.56073 0.00359411Z" transform="translate(133 46)" id="Path" fill="#FBB03B" fill-rule="evenodd" stroke="none" />
            <path d="M0.560494 0.00390139C0.287176 -0.0303186 0.0379737 0.164371 0.00388628 0.438753C-0.0302011 0.713135 0.163734 0.963307 0.437053 0.997527C0.711952 1.02441 0.959222 0.829295 0.99815 0.554789C1.02105 0.283649 0.82891 0.041802 0.560494 0.00390139L0.560494 0.00390139Z" transform="translate(132 46)" id="Path" fill="#FBB03B" fill-rule="evenodd" stroke="none" />
            <path d="M0.562434 0.00318528C0.382969 -0.0169303 0.206293 0.0592416 0.0989587 0.203008C-0.00837559 0.346774 -0.0300616 0.536293 0.0420696 0.700174C0.114201 0.864056 0.269191 0.977403 0.448656 0.997519C0.722135 1.02448 0.966637 0.82868 0.997067 0.558345C1.02626 0.287821 0.834399 0.0427586 0.562434 0.00318528L0.562434 0.00318528Z" transform="translate(131 46)" id="Path" fill="#FBB03B" fill-rule="evenodd" stroke="none" />
            <g id="Group" transform="translate(9 31)" opacity="0.76">
              <path d="M0 0C0 0.216603 0 0.432495 0.00911215 0.648388C0.309112 11.649 9.38832 20.3202 20.2507 20.3202L24.6519 20.3202C35.5164 20.3202 44.5928 11.6461 44.8935 0.648388C44.8991 0.432495 44.9019 0.216366 44.9019 0L0 0Z" transform="translate(0.05046729 16.666334)" id="Path" fill="#00B1E0" fill-rule="evenodd" stroke="none" />
              <path d="M44.9019 2.62764C44.9019 4.08065 34.8505 5.25528 22.4509 5.25528C10.0514 5.25528 0 4.07852 0 2.62764C0 1.17676 10.0521 0 22.4509 0C34.8498 0 44.9019 1.17534 44.9019 2.62764Z" transform="translate(0.05046729 14.038694)" id="Path" fill="#00D4F7" fill-rule="evenodd" stroke="none" />
              <path d="M14.9019 11.8528C15.2201 13.9492 13.8673 13.788 13.8673 13.788C10.9234 13.707 12.8327 10.3927 12.8327 10.3927C14.8227 8.68825 14.4245 7.41846 14.4245 7.41846C14.1855 5.64303 12.7689 6.12453 12.7689 6.12453C15.3315 1.60499 12.4346 0 12.4346 0C13.6262 2.74198 11.243 4.44497 11.243 4.44497C8.95864 5.82981 7.56659 8.43898 6.91402 9.95307C6.5243 8.60374 5.51636 8.66127 5.51636 8.66127C3.84393 8.74223 4.00374 10.5958 4.00374 10.5958C3.92453 13.5785 0 14.1104 0 14.1104L0 15.562L19.4383 16.6635L19.4383 15.562C17.4484 10.8855 14.9019 11.8528 14.9019 11.8528Z" transform="translate(11.346729 0.002840691)" id="Path" fill="#00D4F7" fill-rule="evenodd" stroke="none" />
            </g>
            <path d="M1.54622 6.96174L1.29344 6.91742C0.440928 6.76421 -0.125988 5.96353 0.0240756 5.12463L0.59522 1.99496C0.836022 0.678405 2.11668 -0.197377 3.45641 0.0383291L3.70645 0.0826454C4.55918 0.235517 5.12627 1.03646 4.97582 1.87544L4.40331 5.00712C4.28866 5.63894 3.92307 6.20002 3.38713 6.56668C2.85119 6.93333 2.18888 7.07546 1.54622 6.96174Z" transform="translate(130 43)" id="Path" fill="#FFFFFF" fill-rule="evenodd" stroke="none" />
          </g>
        </svg>
    </div>
    <div className="row">
    <div className="card col-md-5">
        <div className="card-reset">
            <form onSubmit={e => onSubmit(e)}>
                <div >
                    <label className="reg_su">Reset Password</label>
                </div>

                <div className="form-group">
                    <div className="row">
                        <div className="col-md-12 pt-3 ">
                            <input type="email" className="form-control res__input" placeholder="Your Email"
                                 name="email" value={email} onChange={e => onchange(e)}/>
                        </div>

                    </div>
                </div>
                <div>
                    <button className="btn btn-primary col-md-12 mt-3  res-button">Reset Password
                    </button>
                </div>

            </form>
        </div>
    </div>

    </div>
  
</div>
)
}
Reset.propTypes = {
    reset: propTypes.func.isRequired,
    isAuthenticated: propTypes.bool
  }
  const mapStateToProps = state => ({
    isAuthenticated: state.auth.isAuthenticated
  })

export default connect(mapStateToProps,{reset}) (Reset);