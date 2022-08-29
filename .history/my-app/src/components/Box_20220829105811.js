import React from "react";

const Box = ({ content = "" }) => {
  return (
    <div className="bg-[#fff] rounded-xl shadow-[3px_10px_30px_rgba(0,_0,_0,_0.07)]">
      <div className="relative h-[270px]">
        <img src="./box1.png" alt="" className="w-full h-full object-cover" />
        <span className="absolute left-0 bottom-0">
          <svg
            width="67"
            height="64"
            viewBox="0 0 67 64"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <rect width="66.113" height="64" fill="#CD163F" />
            <path
              d="M17.4967 34.8239C15.7833 34.8257 14.1402 35.5025 12.9267 36.7064C11.7132 37.9103 11.0279 39.5433 11.0205 41.2486C11.0059 41.7857 10.9644 48.0333 16.5805 53.6236C16.8234 53.8652 17.1528 54.001 17.4963 54.001C17.8397 54.001 18.1691 53.8652 18.412 53.6236C24.0247 48.0376 23.9867 41.7865 23.972 41.2486C23.9647 39.5434 23.2795 37.9105 22.0662 36.7067C20.8528 35.5028 19.21 34.8259 17.4967 34.8239ZM20.8427 44.7187C20.1859 46.9703 19.0441 49.0524 17.4967 50.8203C15.9503 49.0521 14.8094 46.97 14.1533 44.7187C13.5756 42.7284 13.611 41.3242 13.6119 41.3156C13.6127 41.307 13.6119 41.2821 13.6119 41.2658C13.6119 40.2401 14.0213 39.2565 14.75 38.5312C15.4787 37.806 16.467 37.3986 17.4976 37.3986C18.5281 37.3986 19.5165 37.806 20.2452 38.5312C20.9739 39.2565 21.3833 40.2401 21.3833 41.2658C21.3833 41.2821 21.3833 41.2941 21.3833 41.3104C21.3833 41.3268 21.4204 42.7284 20.8427 44.7187Z"
              fill="white"
            />
            <path
              d="M17.4984 42.5583C18.2138 42.5583 18.7937 41.9811 18.7937 41.2692C18.7937 40.5573 18.2138 39.9801 17.4984 39.9801C16.7831 39.9801 16.2032 40.5573 16.2032 41.2692C16.2032 41.9811 16.7831 42.5583 17.4984 42.5583Z"
              fill="white"
            />
            <path
              d="M52.9593 14.8623L54.9876 12.0384C55.1258 11.8458 55.2081 11.6191 55.2255 11.383C55.2428 11.147 55.1945 10.9107 55.0859 10.7002C54.9773 10.4897 54.8125 10.3129 54.6096 10.1894C54.4068 10.0659 54.1737 10.0004 53.9359 9.99997H43.574C43.2305 9.99997 42.9011 10.1358 42.6582 10.3775C42.4152 10.6193 42.2788 10.9472 42.2788 11.289V25.2968H41.2858C40.9423 25.2968 40.6128 25.4327 40.3699 25.6744C40.127 25.9161 39.9905 26.244 39.9905 26.5859C39.9905 26.9278 40.127 27.2557 40.3699 27.4974C40.6128 27.7392 40.9423 27.875 41.2858 27.875H45.8536C46.1971 27.875 46.5266 27.7392 46.7695 27.4974C47.0124 27.2557 47.1489 26.9278 47.1489 26.5859C47.1489 26.244 47.0124 25.9161 46.7695 25.6744C46.5266 25.4327 46.1971 25.2968 45.8536 25.2968H44.8692V19.4961H53.9359C54.1783 19.4961 54.416 19.4283 54.6217 19.3006C54.8274 19.1728 54.9929 18.9901 55.0994 18.7733C55.206 18.5565 55.2492 18.3143 55.2243 18.0743C55.1993 17.8342 55.1071 17.606 54.9582 17.4155L52.9593 14.8623ZM50.3222 15.6873L51.285 16.9179H44.8692V12.5781H51.4205L50.298 14.1456C50.1356 14.3717 50.051 14.6439 50.0568 14.9217C50.0625 15.1996 50.1584 15.4681 50.3299 15.6873H50.3222Z"
              fill="white"
            />
            <path
              d="M48.6185 35.4572C48.1059 33.9265 47.1228 32.5948 45.8082 31.6506C44.4935 30.7063 42.9139 30.1972 41.2927 30.1953H31.0699C30.8065 29.4346 30.3114 28.7747 29.6534 28.3073C28.9953 27.8399 28.2073 27.5884 27.3989 27.5879C26.5905 27.5873 25.802 27.8377 25.1434 28.3041C24.4847 28.7706 23.9886 29.4298 23.7242 30.1901C22.3994 30.1386 21.1461 29.579 20.2267 28.6284C19.3073 27.6778 18.7932 26.41 18.7919 25.0906V22.3406C18.7933 20.9874 19.334 19.69 20.2955 18.7332C21.2569 17.7763 22.5605 17.2381 23.9202 17.2368H29.4603C29.7284 17.9904 30.2246 18.6428 30.8805 19.1042C31.5365 19.5656 32.32 19.8133 33.1232 19.8133C33.9265 19.8133 34.71 19.5656 35.366 19.1042C36.0219 18.6428 36.5181 17.9904 36.7861 17.2368H38.6608C39.0043 17.2368 39.3337 17.101 39.5766 16.8592C39.8195 16.6175 39.956 16.2896 39.956 15.9477C39.956 15.6058 39.8195 15.2779 39.5766 15.0362C39.3337 14.7945 39.0043 14.6586 38.6608 14.6586H36.7879C36.5198 13.905 36.0236 13.2527 35.3677 12.7912C34.7117 12.3298 33.9282 12.0821 33.125 12.0821C32.3217 12.0821 31.5382 12.3298 30.8822 12.7912C30.2263 13.2527 29.7301 13.905 29.462 14.6586H23.9219C21.8749 14.6605 19.9122 15.4706 18.4648 16.9111C17.0173 18.3517 16.2033 20.305 16.2015 22.3423V25.0923C16.2034 27.0989 16.9932 29.0252 18.4024 30.4603C19.8115 31.8953 21.7285 32.7254 23.744 32.7734C24.0165 33.5197 24.5131 34.1644 25.1665 34.62C25.8199 35.0756 26.5984 35.32 27.3962 35.32C28.194 35.32 28.9724 35.0756 29.6258 34.62C30.2792 34.1644 30.7758 33.5197 31.0483 32.7734H41.2927C42.2778 32.7746 43.2419 33.0577 44.0699 33.5888C44.898 34.12 45.5552 34.8768 45.9633 35.7692C45.3228 36.0922 44.7847 36.5856 44.4089 37.1945C44.033 37.8034 43.8341 38.5041 43.8341 39.2187C43.8341 39.9334 44.033 40.634 44.4089 41.2429C44.7847 41.8519 45.3228 42.3452 45.9633 42.6683C45.5552 43.5606 44.898 44.3175 44.0699 44.8486C43.2419 45.3798 42.2778 45.6628 41.2927 45.664H36.7879C36.5198 44.9104 36.0236 44.258 35.3677 43.7966C34.7117 43.3352 33.9282 43.0875 33.125 43.0875C32.3217 43.0875 31.5382 43.3352 30.8822 43.7966C30.2263 44.258 29.7301 44.9104 29.462 45.664H26.2525C25.9089 45.664 25.5795 45.7998 25.3366 46.0416C25.0937 46.2833 24.9572 46.6112 24.9572 46.9531C24.9572 47.295 25.0937 47.6229 25.3366 47.8646C25.5795 48.1063 25.9089 48.2422 26.2525 48.2422H29.462C29.7301 48.9958 30.2263 49.6481 30.8822 50.1096C31.5382 50.571 32.3217 50.8187 33.125 50.8187C33.9282 50.8187 34.7117 50.571 35.3677 50.1096C36.0236 49.6481 36.5198 48.9958 36.7879 48.2422H41.2927C42.914 48.2402 44.4937 47.731 45.8084 46.7865C47.123 45.8421 48.1061 44.5103 48.6185 42.9793C49.4675 42.7768 50.2232 42.2956 50.7637 41.6134C51.3043 40.9311 51.5983 40.0876 51.5983 39.2187C51.5983 38.3499 51.3043 37.5063 50.7637 36.8241C50.2232 36.1418 49.4675 35.6598 48.6185 35.4572ZM33.1258 14.6604C33.382 14.6604 33.6324 14.736 33.8454 14.8776C34.0584 15.0193 34.2244 15.2206 34.3225 15.4561C34.4205 15.6917 34.4461 15.9509 34.3962 16.2009C34.3462 16.451 34.2228 16.6806 34.0417 16.8609C33.8605 17.0412 33.6298 17.164 33.3785 17.2137C33.1273 17.2635 32.8668 17.2379 32.6302 17.1404C32.3935 17.0428 32.1912 16.8776 32.0489 16.6656C31.9066 16.4536 31.8306 16.2044 31.8306 15.9494C31.8306 15.6075 31.9671 15.2797 32.21 15.0379C32.4529 14.7962 32.7823 14.6604 33.1258 14.6604ZM27.3966 32.7399C27.1404 32.7399 26.89 32.6643 26.677 32.5226C26.464 32.381 26.298 32.1797 26.1999 31.9441C26.1019 31.7086 26.0763 31.4494 26.1262 31.1993C26.1762 30.9493 26.2996 30.7196 26.4807 30.5393C26.6619 30.359 26.8926 30.2363 27.1439 30.1865C27.3951 30.1368 27.6556 30.1623 27.8923 30.2599C28.1289 30.3575 28.3312 30.5227 28.4735 30.7347C28.6159 30.9466 28.6918 31.1959 28.6918 31.4508C28.6918 31.7927 28.5554 32.1206 28.3125 32.3623C28.0695 32.6041 27.7401 32.7399 27.3966 32.7399ZM33.1258 48.2422C32.8697 48.2422 32.6192 48.1666 32.4062 48.0249C32.1932 47.8833 32.0272 47.6819 31.9292 47.4464C31.8312 47.2109 31.8055 46.9517 31.8555 46.7016C31.9055 46.4516 32.0288 46.2219 32.21 46.0416C32.3911 45.8613 32.6219 45.7385 32.8731 45.6888C33.1244 45.6391 33.3848 45.6646 33.6215 45.7622C33.8582 45.8597 34.0604 46.0249 34.2028 46.2369C34.3451 46.4489 34.4211 46.6981 34.4211 46.9531C34.4211 47.295 34.2846 47.6229 34.0417 47.8646C33.7988 48.1063 33.4693 48.2422 33.1258 48.2422ZM47.7188 40.5078C47.4626 40.5078 47.2122 40.4322 46.9992 40.2905C46.7862 40.1489 46.6202 39.9476 46.5221 39.712C46.4241 39.4765 46.3984 39.2173 46.4484 38.9672C46.4984 38.7172 46.6217 38.4875 46.8029 38.3072C46.984 38.1269 47.2148 38.0042 47.4661 37.9544C47.7173 37.9047 47.9777 37.9302 48.2144 38.0278C48.4511 38.1253 48.6534 38.2906 48.7957 38.5026C48.938 38.7145 49.014 38.9638 49.014 39.2187C49.014 39.5606 48.8775 39.8885 48.6346 40.1302C48.3917 40.372 48.0623 40.5078 47.7188 40.5078Z"
              fill="white"
            />
          </svg>
        </span>
      </div>
      <div className="text-base font-normal text-clBlue">{content}</div>
    </div>
  );
};

export default Box;