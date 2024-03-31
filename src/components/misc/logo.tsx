import Link from "next/link";
import { ComponentProps, ElementType, FC } from "react";

interface LogoProps extends ComponentProps<"svg"> {
  href?: string;
}
const Logo: FC<LogoProps> = ({ href, ...props }) => {
  return (
    <Link href={href ? href : "/"}>
      <svg
        width="360"
        height="82"
        viewBox="0 0 360 82"
        xmlns="http://www.w3.org/2000/svg"
        {...props}
      >
        <path d="M5.33333 26.0625V12.3125H18.0625V26.0625H25.8542V35.7708H18.0625V47.5C18.0625 50.9063 19.026 52.6042 20.9583 52.6042C21.4271 52.6042 21.9271 52.5156 22.4583 52.3333C22.9844 52.1406 23.3958 51.9479 23.6875 51.75L24.125 51.4583L27.2917 61.75C24.5521 63.2917 21.4375 64.0625 17.9375 64.0625C15.5312 64.0625 13.4635 63.6458 11.7292 62.8125C10.0052 61.9688 8.69792 60.8333 7.8125 59.4167C6.92187 58 6.28125 56.5156 5.89583 54.9583C5.52083 53.3906 5.33333 51.724 5.33333 49.9583V35.7708H0V26.0625H5.33333Z" />
        <path d="M24.8271 62.9805V26.0638H37.5771V31.3763H37.723C37.8167 31.1836 37.973 30.9492 38.1813 30.668C38.4001 30.3763 38.8688 29.8711 39.5771 29.1471C40.2959 28.4284 41.0667 27.7826 41.8896 27.2096C42.7074 26.6263 43.7646 26.1159 45.0563 25.668C46.348 25.2096 47.6657 24.9805 49.0146 24.9805C50.4001 24.9805 51.7699 25.1784 53.1188 25.5638C54.4626 25.9388 55.4521 26.3242 56.0771 26.7096L57.0771 27.2721L51.7438 38.0846C50.1605 36.7409 47.9574 36.0638 45.1396 36.0638C43.598 36.0638 42.2699 36.4076 41.1605 37.0846C40.0615 37.7513 39.2855 38.5638 38.8271 39.5221C38.3688 40.4805 38.0407 41.3034 37.848 41.9805C37.6657 42.6471 37.5771 43.168 37.5771 43.543V62.9805H24.8271Z" />
        <path d="M55.1286 5.48047C56.613 3.98047 58.3838 3.23047 60.4411 3.23047C62.5088 3.23047 64.2848 3.98047 65.7744 5.48047C67.2588 6.97005 68.0036 8.74609 68.0036 10.8138C68.0036 12.8711 67.2588 14.6419 65.7744 16.1263C64.2848 17.6159 62.5088 18.3555 60.4411 18.3555C58.3838 18.3555 56.613 17.6159 55.1286 16.1263C53.639 14.6419 52.8994 12.8711 52.8994 10.8138C52.8994 8.74609 53.639 6.97005 55.1286 5.48047ZM53.8994 26.0638V62.9805H66.6494V26.0638H53.8994Z" />
        <path d="M80.8883 26.0625V43.625C80.8883 47.2656 81.4352 49.8542 82.5342 51.3958C83.6436 52.9271 85.5186 53.6875 88.1592 53.6875C90.7946 53.6875 92.6644 52.9271 93.7633 51.3958C94.8727 49.8542 95.43 47.2656 95.43 43.625V26.0625H108.18V46.7083C108.18 52.849 106.581 57.2813 103.388 60C100.19 62.7083 95.1175 64.0625 88.1592 64.0625C81.2008 64.0625 76.1227 62.7083 72.93 60C69.7477 57.2813 68.1592 52.849 68.1592 46.7083V26.0625H80.8883Z" />
        <path d="M109.311 62.9805V26.0638H122.061V29.9388H122.206C125.508 26.6367 129.04 24.9805 132.79 24.9805C135.467 24.9805 137.982 25.5378 140.331 26.6471C142.691 27.7461 144.467 29.4492 145.665 31.7513C149.415 27.2409 153.488 24.9805 157.894 24.9805C161.837 24.9805 165.217 26.0846 168.04 28.293C170.873 30.5013 172.29 33.9544 172.29 38.6471V62.9805H159.561V42.1055C159.561 40.1367 159.019 38.4909 157.936 37.168C156.852 35.8503 155.232 35.1888 153.081 35.1888C151.206 35.1888 149.774 35.7617 148.79 36.8971C147.816 38.0221 147.279 39.3763 147.186 40.9596V62.9805H134.436V42.1055C134.436 40.1367 133.894 38.4909 132.811 37.168C131.738 35.8503 130.123 35.1888 127.956 35.1888C125.982 35.1888 124.503 35.8086 123.519 37.043C122.545 38.2669 122.061 39.7096 122.061 41.3763V62.9805H109.311Z" />
        <path d="M211.431 30.6263C214.889 34.3919 216.618 39.0117 216.618 44.4805C216.618 49.9544 214.889 54.5846 211.431 58.3763C207.983 62.168 203.597 64.0638 198.264 64.0638C193.373 64.0638 189.347 62.5326 186.181 59.4596V81.6888H173.431V26.0638H186.035V30.2305H186.181C189.347 26.7305 193.373 24.9805 198.264 24.9805C203.597 24.9805 207.983 26.8659 211.431 30.6263ZM200.597 50.7513C202.264 49.1159 203.097 47.0221 203.097 44.4805C203.097 41.9388 202.306 39.8659 200.722 38.2513C199.139 36.6419 197.045 35.8346 194.451 35.8346C191.962 35.8346 189.915 36.6576 188.306 38.293C186.691 39.918 185.889 41.9805 185.889 44.4805C185.889 47.0221 186.712 49.1159 188.368 50.7513C190.019 52.3763 192.045 53.1888 194.451 53.1888C196.894 53.1888 198.941 52.3763 200.597 50.7513Z" />
        <path d="M215.816 62.9798V1.08398H228.566V29.9382H228.712C232.014 26.6361 235.546 24.9798 239.296 24.9798C241.113 24.9798 242.921 25.2246 244.712 25.709C246.514 26.1829 248.243 26.9277 249.9 27.9382C251.551 28.9382 252.889 30.3652 253.921 32.209C254.962 34.0579 255.483 36.2038 255.483 38.6465V62.9798H242.733V42.1048C242.733 40.1882 242.118 38.5163 240.9 37.084C239.676 35.6413 238.087 34.9173 236.129 34.9173C234.197 34.9173 232.452 35.6621 230.9 37.1465C229.342 38.6361 228.566 40.2871 228.566 42.1048V62.9798H215.816Z" />
        <path d="M257.849 5.48047C259.334 3.98047 261.104 3.23047 263.162 3.23047C265.229 3.23047 267.006 3.98047 268.495 5.48047C269.979 6.97005 270.724 8.74609 270.724 10.8138C270.724 12.8711 269.979 14.6419 268.495 16.1263C267.006 17.6159 265.229 18.3555 263.162 18.3555C261.104 18.3555 259.334 17.6159 257.849 16.1263C256.36 14.6419 255.62 12.8711 255.62 10.8138C255.62 8.74609 256.36 6.97005 257.849 5.48047ZM256.62 26.0638V62.9805H269.37V26.0638H256.62Z" />
        <path d="M273.754 26.0625V18.2083C273.796 12.6979 275.088 8.28646 277.629 4.97917C280.181 1.66146 283.713 0 288.213 0C290.14 0 291.983 0.281249 293.733 0.833333C295.483 1.375 296.739 1.9375 297.504 2.52083L298.733 3.3125L294.275 12.3125C293.119 11.6354 291.848 11.2917 290.463 11.2917C288.864 11.2917 287.801 11.8333 287.275 12.9167C286.744 14 286.483 15.8854 286.483 18.5625V26.0625H294.983V35.7708H286.483V62.9792H273.754V35.7708H268.421V26.0625H273.754Z" />
        <path d="M319.808 26.0625H334.495L305.495 81.6875H290.808L303.537 57.2292L286.058 26.0625H300.745L311.037 44.9792L319.808 26.0625Z" />
        <path d="M351.685 47.584C353.987 47.584 355.94 48.3913 357.539 50.0007C359.148 51.5996 359.956 53.5527 359.956 55.8548C359.956 58.1048 359.148 60.0371 357.539 61.6465C355.94 63.2559 353.987 64.0632 351.685 64.0632C349.435 64.0632 347.503 63.2559 345.893 61.6465C344.279 60.0371 343.477 58.1048 343.477 55.8548C343.477 53.5527 344.279 51.5996 345.893 50.0007C347.503 48.3913 349.435 47.584 351.685 47.584Z" />
      </svg>
    </Link>
  );
};

export default Logo;
