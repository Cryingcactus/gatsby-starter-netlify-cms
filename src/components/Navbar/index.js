import React, { useContext } from "react";
import PropTypes from "prop-types";
import { Link } from "gatsby";
import { ThemeContext } from "../../context/ThemeContext";
import styles from "./Navbar.module.css";
import Desktop from "./Desktop";
import Mobile from "./Mobile";

const Navbar = ({ ref }) => (
    <nav ref={ref}>
        <div className={[styles.container, "global-padding"].join(" ")}>
            <div id="navMenu" className={styles.menu}>
                <div className={[styles.item, styles.logo].join(" ")}>
                    <Link to="/" title="Logo">
                        <svg
                            id="svg"
                            xmlns="http://www.w3.org/2000/svg"
                            width="150"
                            height="54"
                            viewBox="0, 0, 400,142.72"
                        >
                            <g id="svgg">
                                <path
                                    id="path0"
                                    d="M229.760 9.935 C 221.928 11.498,215.196 12.857,214.800 12.955 C 214.114 13.124,214.080 13.282,214.080 16.275 L 214.080 19.417 217.520 20.029 L 220.960 20.642 221.041 57.814 L 221.123 94.987 218.081 95.680 L 215.040 96.373 215.040 100.026 L 215.040 103.680 233.600 103.680 L 252.160 103.680 252.160 100.046 L 252.160 96.413 249.600 95.859 L 247.040 95.306 247.054 75.253 L 247.067 55.200 248.651 53.978 C 253.825 49.989,258.587 49.745,260.268 53.383 C 261.262 55.533,261.545 94.880,260.569 95.146 C 260.256 95.231,258.956 95.546,257.680 95.845 L 255.360 96.389 255.360 100.034 L 255.360 103.680 273.920 103.680 L 292.480 103.680 292.480 100.027 L 292.480 96.373 290.960 96.052 C 290.124 95.875,288.900 95.631,288.240 95.509 L 287.040 95.289 287.035 77.484 C 287.029 57.777,286.811 53.493,285.618 49.717 C 280.899 34.780,261.927 31.227,249.687 42.987 L 246.302 46.240 246.514 30.880 C 246.631 22.432,246.816 13.936,246.925 12.000 L 247.125 8.480 245.839 7.760 C 245.132 7.364,244.428 7.052,244.276 7.067 C 244.124 7.082,237.592 8.373,229.760 9.935 M56.713 20.560 C 56.385 21.308,54.555 25.607,52.648 30.114 L 49.180 38.309 44.750 38.875 L 40.320 39.441 40.320 44.041 L 40.320 48.640 43.985 48.640 L 47.650 48.640 47.762 70.000 C 47.885 93.460,47.814 92.570,49.906 96.819 C 56.102 109.406,80.975 108.620,88.714 95.593 L 90.053 93.339 88.306 91.793 C 86.242 89.966,86.471 90.006,84.656 91.157 C 79.306 94.550,74.615 92.447,73.591 86.197 C 73.421 85.158,73.283 76.357,73.282 66.480 L 73.280 48.640 79.520 48.640 L 85.760 48.640 85.760 43.520 L 85.760 38.400 79.520 38.400 L 73.280 38.400 73.280 28.800 L 73.280 19.200 65.295 19.200 L 57.310 19.200 56.713 20.560 M179.913 20.560 C 179.585 21.308,177.755 25.607,175.848 30.114 L 172.380 38.309 167.950 38.875 L 163.520 39.441 163.520 44.041 L 163.520 48.640 167.185 48.640 L 170.850 48.640 170.962 70.000 C 171.085 93.460,171.014 92.570,173.106 96.819 C 179.302 109.406,204.175 108.620,211.914 95.593 L 213.253 93.339 211.506 91.793 C 209.442 89.966,209.671 90.006,207.856 91.157 C 202.506 94.550,197.815 92.447,196.791 86.197 C 196.621 85.158,196.483 76.357,196.482 66.480 L 196.480 48.640 202.720 48.640 L 208.960 48.640 208.960 43.520 L 208.960 38.400 202.720 38.400 L 196.480 38.400 196.480 28.800 L 196.480 19.200 188.495 19.200 L 180.510 19.200 179.913 20.560 M151.527 39.174 L 144.494 42.452 142.384 41.088 C 130.484 33.390,106.329 34.774,97.440 43.663 C 88.604 52.499,90.902 69.744,101.563 74.602 C 102.697 75.118,102.656 75.224,100.659 76.929 C 90.534 85.580,88.999 98.590,97.516 103.581 L 98.925 104.407 96.903 105.544 C 86.475 111.401,86.487 124.166,96.925 129.422 C 108.045 135.022,133.096 134.132,145.924 127.682 C 157.443 121.890,162.821 110.518,158.967 100.103 C 155.246 90.048,147.713 87.092,125.120 86.825 C 111.395 86.662,110.123 86.504,108.668 84.775 C 107.358 83.218,107.668 77.060,109.030 77.583 C 114.133 79.541,128.721 79.278,135.602 77.103 C 148.073 73.162,154.078 62.129,150.006 50.640 L 149.184 48.320 155.392 48.320 L 161.600 48.320 161.600 42.742 L 161.600 37.164 160.671 36.502 C 159.333 35.549,159.251 35.573,151.527 39.174 M310.804 40.752 L 296.328 45.280 296.324 48.207 L 296.320 51.134 298.320 51.482 C 299.420 51.674,300.996 51.923,301.821 52.036 C 302.693 52.156,303.399 52.439,303.503 52.711 C 303.851 53.619,304.089 76.109,303.850 85.507 L 303.607 95.013 300.444 95.719 L 297.280 96.426 297.280 100.053 L 297.280 103.680 318.720 103.680 L 340.160 103.680 340.160 100.053 L 340.160 96.427 335.440 95.392 C 332.844 94.823,330.468 94.285,330.160 94.197 C 329.212 93.926,329.315 67.233,330.276 64.114 C 331.439 60.338,334.188 55.162,336.489 52.415 L 337.214 51.549 338.851 53.751 C 348.019 66.080,364.352 56.680,357.973 42.747 C 352.439 30.659,335.076 35.853,329.769 51.185 C 329.431 52.160,329.332 51.394,328.960 44.926 L 328.537 37.555 327.325 36.857 C 325.755 35.954,327.330 35.583,310.804 40.752 M124.227 43.922 C 130.629 47.798,130.413 68.556,123.941 71.419 C 117.795 74.138,114.272 68.354,114.647 56.160 C 114.967 45.750,118.915 40.706,124.227 43.922 M107.360 108.352 C 109.252 108.721,113.177 108.909,122.400 109.074 C 137.253 109.340,137.879 109.488,139.555 113.120 C 142.642 119.807,133.175 124.733,118.555 124.047 C 106.268 123.471,101.015 118.245,103.631 109.200 C 104.078 107.654,103.941 107.685,107.360 108.352 M208.707 120.127 C 208.794 129.484,208.842 130.220,209.410 130.847 C 210.255 131.780,212.800 131.825,212.800 130.906 C 212.800 129.974,212.459 129.280,212.000 129.280 C 211.269 129.280,211.200 128.410,211.200 119.174 L 211.200 110.080 209.907 110.080 L 208.614 110.080 208.707 120.127 M221.827 120.127 C 221.914 129.484,221.962 130.220,222.530 130.847 C 223.375 131.780,225.920 131.825,225.920 130.906 C 225.920 129.974,225.579 129.280,225.120 129.280 C 224.389 129.280,224.320 128.410,224.320 119.174 L 224.320 110.080 223.027 110.080 L 221.734 110.080 221.827 120.127 M290.480 111.066 C 289.599 111.579,289.758 113.159,290.757 113.814 C 292.412 114.898,294.259 112.796,292.936 111.334 C 292.329 110.663,291.354 110.556,290.480 111.066 M275.394 113.466 C 275.287 113.745,275.200 114.609,275.200 115.386 C 275.200 116.789,275.191 116.800,274.080 116.800 C 273.013 116.800,272.960 116.853,272.960 117.920 C 272.960 118.941,273.042 119.040,273.881 119.040 L 274.802 119.040 274.939 123.920 C 275.125 130.512,275.682 131.504,279.200 131.508 C 281.620 131.511,282.053 131.255,281.775 129.988 C 281.575 129.077,281.499 129.034,280.580 129.297 C 279.589 129.581,278.496 129.248,278.005 128.512 C 277.876 128.318,277.768 126.108,277.765 123.600 L 277.760 119.040 279.680 119.040 L 281.600 119.040 281.600 117.920 L 281.600 116.800 279.680 116.800 L 277.760 116.800 277.760 114.880 L 277.760 112.960 276.674 112.960 C 275.979 112.960,275.519 113.142,275.394 113.466 M171.680 116.957 C 166.281 118.850,165.786 128.280,170.947 130.914 C 174.181 132.564,179.928 130.823,178.289 128.690 L 177.713 127.941 176.616 128.609 C 173.411 130.563,170.137 128.315,170.137 124.160 C 170.137 120.139,173.289 117.624,176.187 119.334 L 177.361 120.026 177.881 119.293 C 179.290 117.303,175.146 115.742,171.680 116.957 M190.080 116.989 C 184.934 119.215,184.401 127.878,189.237 130.711 C 192.937 132.880,197.718 130.924,198.933 126.744 C 200.805 120.307,195.619 114.594,190.080 116.989 M238.217 117.086 C 233.152 119.386,232.839 128.192,237.730 130.775 C 239.564 131.744,242.729 131.792,244.733 130.883 L 246.106 130.259 245.603 129.287 C 245.120 128.353,245.065 128.332,244.219 128.769 C 241.510 130.170,238.655 129.389,237.459 126.920 C 236.403 124.739,236.283 124.800,241.600 124.800 L 246.400 124.800 246.400 122.770 C 246.400 117.909,242.449 115.164,238.217 117.086 M259.040 116.957 C 253.641 118.850,253.146 128.280,258.307 130.914 C 261.541 132.564,267.288 130.823,265.649 128.690 L 265.073 127.941 263.976 128.609 C 260.771 130.563,257.497 128.315,257.497 124.160 C 257.497 120.139,260.649 117.624,263.547 119.334 L 264.721 120.026 265.241 119.293 C 266.650 117.303,262.506 115.742,259.040 116.957 M325.897 117.086 C 320.832 119.386,320.519 128.192,325.410 130.775 C 327.244 131.744,330.409 131.792,332.413 130.883 L 333.786 130.259 333.283 129.287 C 332.800 128.353,332.745 128.332,331.899 128.769 C 329.190 130.170,326.335 129.389,325.139 126.920 C 324.083 124.739,323.963 124.800,329.280 124.800 L 334.080 124.800 334.080 122.770 C 334.080 117.909,330.129 115.164,325.897 117.086 M290.240 124.000 L 290.240 131.200 291.520 131.200 L 292.800 131.200 292.800 124.000 L 292.800 116.800 291.520 116.800 L 290.240 116.800 290.240 124.000 M301.437 117.022 C 301.435 117.164,302.551 120.409,303.917 124.234 L 306.400 131.188 308.000 131.194 L 309.600 131.200 311.976 124.400 C 313.282 120.660,314.417 117.411,314.498 117.180 C 314.607 116.865,314.292 116.784,313.247 116.860 L 311.850 116.960 309.945 122.902 L 308.041 128.843 306.082 122.902 L 304.123 116.960 302.782 116.862 C 302.044 116.807,301.439 116.879,301.437 117.022 M194.281 119.221 C 196.980 120.617,197.257 126.587,194.716 128.586 C 192.059 130.676,188.689 128.196,188.702 124.160 C 188.715 120.081,191.381 117.721,194.281 119.221 M242.523 119.242 C 242.932 119.529,243.468 120.244,243.714 120.832 C 244.565 122.870,244.549 122.880,240.480 122.880 C 238.456 122.880,236.800 122.811,236.800 122.726 C 236.800 120.028,240.462 117.798,242.523 119.242 M330.203 119.242 C 330.612 119.529,331.148 120.244,331.394 120.832 C 332.245 122.870,332.229 122.880,328.160 122.880 C 326.136 122.880,324.480 122.811,324.480 122.726 C 324.480 120.028,328.142 117.798,330.203 119.242 "
                                    stroke="none"
                                    fillRule="evenodd"
                                />
                            </g>
                        </svg>
                    </Link>
                </div>
                <Desktop />
                <Mobile />
            </div>
        </div>
    </nav>
);

Navbar.propTypes = {
    props: PropTypes.shape({}).isRequired,
};

export default Navbar;
