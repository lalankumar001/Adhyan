import React, { useEffect } from "react";
import { NavLink } from "react-router-dom";
import Hero from "./Images/HomeHero.svg";
import Instagram from "./Images/Instagram.png";
import Youtube from "./Images/youtube.png";
import Footer from "../Components/AllPageFooter";
import "./Home.css";
const Home = () => {
  return (
    <div className="foum">
      <div className="mt-5 p-5">
        <div class="container text-center">
          <div class="row row-cols-2" id="HeroSection">
            {/* Home hero text section */}
            <div class="col mt-5 p-5" id="HeroTextSection">
              <h1 id="HeroText" className="mt-3 p-2 text-start sm:text-start">
                Welcome to Adhyan
              </h1>
              <h3 className="text-start fw-bold sm: mt-1 p-1 text-start">
                Unlock Your Learning Potential with{" "}
                <b className="text-info">us!</b>
              </h3>
              {/* Home hero button section */}
              <div className="col text-start mt-5 ">
                <button className="btn btn-dark">
                  {" "}
                  <NavLink
                    activeClassName="menu_active"
                    className="nav-link"
                    to="/CoursesHomepage"
                  >
                    View Courses
                  </NavLink>
                </button>
                <button className="btn btn-light border ">
                  {" "}
                  <NavLink
                    activeClassName="menu_active"
                    className="nav-link"
                    to="/Contact/BcaAllPage"
                  >
                    Explore
                  </NavLink>
                </button>
              </div>
            </div>
            {/* Home hero img section */}
            <div class="col">
              <img
                src={Hero}
                alt=""
                className="mt-2 w-100 h-100 p-3 "
                id="HeroImgSection"
              />
            </div>
          </div>
        </div>
      </div>

      <h1 className="fs-1 fw-bold text-center mb-5 ">
        {" "}
        <b className="text-info">Your One-Stop Library </b> for Endless
        Possibilities!
      </h1>
      <div className="bg-dark p-5">
        <h1 className="text-left fw-bold fs-1 text-white">Web Development</h1>
        <div className="container w-75 h-75 p-2 mt-3 ">
          <div className="row">
            <div className="col-sm">
              {/* html svg */}
              <a href="" className="btn btn- w-100 h-75">
                <svg viewBox="0 0 128 128">
                  <path
                    fill="#E44D26"
                    d="M19.037 113.876L9.032 1.661h109.936l-10.016 112.198-45.019 12.48z"
                  ></path>
                  <path
                    fill="#F16529"
                    d="M64 116.8l36.378-10.086 8.559-95.878H64z"
                  ></path>
                  <path
                    fill="#EBEBEB"
                    d="M64 52.455H45.788L44.53 38.361H64V24.599H29.489l.33 3.692 3.382 37.927H64zm0 35.743l-.061.017-15.327-4.14-.979-10.975H33.816l1.928 21.609 28.193 7.826.063-.017z"
                  ></path>
                  <path
                    fill="#fff"
                    d="M63.952 52.455v13.763h16.947l-1.597 17.849-15.35 4.143v14.319l28.215-7.82.207-2.325 3.234-36.233.335-3.696h-3.708zm0-27.856v13.762h33.244l.276-3.092.628-6.978.329-3.692z"
                  ></path>
                </svg>
              </a>
              <h1 className="card-title text-center text-white w-100 h-100 fw-bold fs-1 p-3 ">
                HTML
              </h1>
            </div>

            <div class="col-sm">
              {/* css svg */}
              <a href="" className="btn btn- w-100 h-75">
                <svg viewBox="0 0 128 128">
                  <path
                    fill="#1572B6"
                    d="M18.814 114.123L8.76 1.352h110.48l-10.064 112.754-45.243 12.543-45.119-12.526z"
                  ></path>
                  <path
                    fill="#33A9DC"
                    d="M64.001 117.062l36.559-10.136 8.601-96.354h-45.16v106.49z"
                  ></path>
                  <path
                    fill="#fff"
                    d="M64.001 51.429h18.302l1.264-14.163H64.001V23.435h34.682l-.332 3.711-3.4 38.114h-30.95V51.429z"
                  ></path>
                  <path
                    fill="#EBEBEB"
                    d="M64.083 87.349l-.061.018-15.403-4.159-.985-11.031H33.752l1.937 21.717 28.331 7.863.063-.018v-14.39z"
                  ></path>
                  <path
                    fill="#fff"
                    d="M81.127 64.675l-1.666 18.522-15.426 4.164v14.39l28.354-7.858.208-2.337 2.406-26.881H81.127z"
                  ></path>
                  <path
                    fill="#EBEBEB"
                    d="M64.048 23.435v13.831H30.64l-.277-3.108-.63-7.012-.331-3.711h34.646zm-.047 27.996v13.831H48.792l-.277-3.108-.631-7.012-.33-3.711h16.447z"
                  ></path>
                </svg>
              </a>
              <h1 className="card-title text-center text-white w-100 h-100 fw-bold fs-1 p-3 ">
                CSS
              </h1>
            </div>
            <div class="col-sm">
              {/* Bootstrap svg */}
              <a href="" className="btn btn-info w-100 h-75">
                <svg viewBox="0 0 128 128">
                  <defs>
                    <linearGradient
                      id="bootstrap-original-a"
                      x1="76.079"
                      x2="523.48"
                      y1="10.798"
                      y2="365.95"
                      gradientTransform="translate(1.11 14.613) scale(.24566)"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop stop-color="#9013fe" offset="0"></stop>
                      <stop stop-color="#6610f2" offset="1"></stop>
                    </linearGradient>
                    <linearGradient
                      id="bootstrap-original-b"
                      x1="193.51"
                      x2="293.51"
                      y1="109.74"
                      y2="278.87"
                      gradientTransform="translate(0 52)"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop stop-color="#fff" offset="0"></stop>
                      <stop stop-color="#f1e5fc" offset="1"></stop>
                    </linearGradient>
                    <filter
                      id="bootstrap-original-c"
                      x="161.9"
                      y="135.46"
                      width="197"
                      height="249"
                      color-interpolation-filters="sRGB"
                      filterUnits="userSpaceOnUse"
                    >
                      <feFlood
                        flood-opacity="0"
                        result="BackgroundImageFix"
                      ></feFlood>
                      <feColorMatrix
                        in="SourceAlpha"
                        values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                      ></feColorMatrix>
                      <feOffset dy="4"></feOffset>
                      <feGaussianBlur stdDeviation="8"></feGaussianBlur>
                      <feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.15 0"></feColorMatrix>
                      <feBlend
                        in2="BackgroundImageFix"
                        result="effect1_dropShadow"
                      ></feBlend>
                      <feBlend
                        in="SourceGraphic"
                        in2="effect1_dropShadow"
                        result="shape"
                      ></feBlend>
                    </filter>
                  </defs>
                  <path
                    d="M14.985 27.712c-.237-6.815 5.072-13.099 12.249-13.099h73.54c7.177 0 12.486 6.284 12.249 13.099-.228 6.546.068 15.026 2.202 21.94 2.141 6.936 5.751 11.319 11.664 11.883v6.387c-5.913.564-9.523 4.947-11.664 11.883-2.134 6.914-2.43 15.394-2.202 21.94.237 6.815-5.072 13.098-12.249 13.098h-73.54c-7.177 0-12.486-6.284-12.249-13.098.228-6.546-.068-15.026-2.203-21.94-2.14-6.935-5.76-11.319-11.673-11.883v-6.387c5.913-.563 9.533-4.947 11.673-11.883 2.135-6.914 2.43-15.394 2.203-21.94z"
                    fill="url(#bootstrap-original-a)"
                  ></path>
                  <path
                    transform="translate(1.494 2.203) scale(.24566)"
                    d="M267.1 364.46c47.297 0 75.798-23.158 75.798-61.355 0-28.873-20.336-49.776-50.532-53.085v-1.203c22.185-3.609 39.594-24.211 39.594-47.219 0-32.783-25.882-54.138-65.322-54.138h-88.74v217zm-54.692-189.48h45.911c24.958 0 39.131 11.128 39.131 31.279 0 21.505-16.484 33.535-46.372 33.535h-38.67zm0 161.96v-71.431h45.602c32.661 0 49.608 12.03 49.608 35.49 0 23.459-16.484 35.941-47.605 35.941z"
                    fill="url(#bootstrap-original-b)"
                    filter="url(#bootstrap-original-c)"
                    stroke="#fff"
                  ></path>
                </svg>
              </a>
              <h1 className="card-title text-center text-white w-100 h-100 fw-bold fs-1 p-3 ">
                Bootstrap
              </h1>
            </div>
          </div>
          <hr />
          <div className="row">
            <div class="col-sm">
              {/* tailwind svg */}
              <a href="" className="btn btn- w-100 h-75">
                <svg viewBox="0 0 128 128">
                  <path
                    d="M64.004 25.602c-17.067 0-27.73 8.53-32 25.597 6.398-8.531 13.867-11.73 22.398-9.597 4.871 1.214 8.352 4.746 12.207 8.66C72.883 56.629 80.145 64 96.004 64c17.066 0 27.73-8.531 32-25.602-6.399 8.536-13.867 11.735-22.399 9.602-4.87-1.215-8.347-4.746-12.207-8.66-6.27-6.367-13.53-13.738-29.394-13.738zM32.004 64c-17.066 0-27.73 8.531-32 25.602C6.402 81.066 13.87 77.867 22.402 80c4.871 1.215 8.352 4.746 12.207 8.66 6.274 6.367 13.536 13.738 29.395 13.738 17.066 0 27.73-8.53 32-25.597-6.399 8.531-13.867 11.73-22.399 9.597-4.87-1.214-8.347-4.746-12.207-8.66C55.128 71.371 47.868 64 32.004 64zm0 0"
                    fill="#38b2ac"
                  ></path>
                </svg>
              </a>
              <h1 className="card-title text-center text-white w-100 h-100 fw-bold fs-1 p-3 ">
                Tailwind
              </h1>
            </div>

            <div class="col-sm">
              {/* Reactjs svg */}
              <a href="" className="btn btn- w-100 h-75">
                <svg viewBox="0 0 128 128">
                  <g fill="#61DAFB">
                    <circle cx="64" cy="64" r="11.4"></circle>
                    <path d="M107.3 45.2c-2.2-.8-4.5-1.6-6.9-2.3.6-2.4 1.1-4.8 1.5-7.1 2.1-13.2-.2-22.5-6.6-26.1-1.9-1.1-4-1.6-6.4-1.6-7 0-15.9 5.2-24.9 13.9-9-8.7-17.9-13.9-24.9-13.9-2.4 0-4.5.5-6.4 1.6-6.4 3.7-8.7 13-6.6 26.1.4 2.3.9 4.7 1.5 7.1-2.4.7-4.7 1.4-6.9 2.3C8.2 50 1.4 56.6 1.4 64s6.9 14 19.3 18.8c2.2.8 4.5 1.6 6.9 2.3-.6 2.4-1.1 4.8-1.5 7.1-2.1 13.2.2 22.5 6.6 26.1 1.9 1.1 4 1.6 6.4 1.6 7.1 0 16-5.2 24.9-13.9 9 8.7 17.9 13.9 24.9 13.9 2.4 0 4.5-.5 6.4-1.6 6.4-3.7 8.7-13 6.6-26.1-.4-2.3-.9-4.7-1.5-7.1 2.4-.7 4.7-1.4 6.9-2.3 12.5-4.8 19.3-11.4 19.3-18.8s-6.8-14-19.3-18.8zM92.5 14.7c4.1 2.4 5.5 9.8 3.8 20.3-.3 2.1-.8 4.3-1.4 6.6-5.2-1.2-10.7-2-16.5-2.5-3.4-4.8-6.9-9.1-10.4-13 7.4-7.3 14.9-12.3 21-12.3 1.3 0 2.5.3 3.5.9zM81.3 74c-1.8 3.2-3.9 6.4-6.1 9.6-3.7.3-7.4.4-11.2.4-3.9 0-7.6-.1-11.2-.4-2.2-3.2-4.2-6.4-6-9.6-1.9-3.3-3.7-6.7-5.3-10 1.6-3.3 3.4-6.7 5.3-10 1.8-3.2 3.9-6.4 6.1-9.6 3.7-.3 7.4-.4 11.2-.4 3.9 0 7.6.1 11.2.4 2.2 3.2 4.2 6.4 6 9.6 1.9 3.3 3.7 6.7 5.3 10-1.7 3.3-3.4 6.6-5.3 10zm8.3-3.3c1.5 3.5 2.7 6.9 3.8 10.3-3.4.8-7 1.4-10.8 1.9 1.2-1.9 2.5-3.9 3.6-6 1.2-2.1 2.3-4.2 3.4-6.2zM64 97.8c-2.4-2.6-4.7-5.4-6.9-8.3 2.3.1 4.6.2 6.9.2 2.3 0 4.6-.1 6.9-.2-2.2 2.9-4.5 5.7-6.9 8.3zm-18.6-15c-3.8-.5-7.4-1.1-10.8-1.9 1.1-3.3 2.3-6.8 3.8-10.3 1.1 2 2.2 4.1 3.4 6.1 1.2 2.2 2.4 4.1 3.6 6.1zm-7-25.5c-1.5-3.5-2.7-6.9-3.8-10.3 3.4-.8 7-1.4 10.8-1.9-1.2 1.9-2.5 3.9-3.6 6-1.2 2.1-2.3 4.2-3.4 6.2zM64 30.2c2.4 2.6 4.7 5.4 6.9 8.3-2.3-.1-4.6-.2-6.9-.2-2.3 0-4.6.1-6.9.2 2.2-2.9 4.5-5.7 6.9-8.3zm22.2 21l-3.6-6c3.8.5 7.4 1.1 10.8 1.9-1.1 3.3-2.3 6.8-3.8 10.3-1.1-2.1-2.2-4.2-3.4-6.2zM31.7 35c-1.7-10.5-.3-17.9 3.8-20.3 1-.6 2.2-.9 3.5-.9 6 0 13.5 4.9 21 12.3-3.5 3.8-7 8.2-10.4 13-5.8.5-11.3 1.4-16.5 2.5-.6-2.3-1-4.5-1.4-6.6zM7 64c0-4.7 5.7-9.7 15.7-13.4 2-.8 4.2-1.5 6.4-2.1 1.6 5 3.6 10.3 6 15.6-2.4 5.3-4.5 10.5-6 15.5C15.3 75.6 7 69.6 7 64zm28.5 49.3c-4.1-2.4-5.5-9.8-3.8-20.3.3-2.1.8-4.3 1.4-6.6 5.2 1.2 10.7 2 16.5 2.5 3.4 4.8 6.9 9.1 10.4 13-7.4 7.3-14.9 12.3-21 12.3-1.3 0-2.5-.3-3.5-.9zM96.3 93c1.7 10.5.3 17.9-3.8 20.3-1 .6-2.2.9-3.5.9-6 0-13.5-4.9-21-12.3 3.5-3.8 7-8.2 10.4-13 5.8-.5 11.3-1.4 16.5-2.5.6 2.3 1 4.5 1.4 6.6zm9-15.6c-2 .8-4.2 1.5-6.4 2.1-1.6-5-3.6-10.3-6-15.6 2.4-5.3 4.5-10.5 6-15.5 13.8 4 22.1 10 22.1 15.6 0 4.7-5.8 9.7-15.7 13.4z"></path>
                  </g>
                </svg>
              </a>
              <h1 className="card-title text-center text-white w-100 h-100 fw-bold fs-1 p-3 ">
                Reactjs
              </h1>
            </div>

            <div className="col-sm">
              {/* JavaScript svg */}
              <a href="" className="btn btn- w-100 h-75">
                <svg viewBox="0 0 128 128">
                  <path
                    fill="#F0DB4F"
                    d="M1.408 1.408h125.184v125.185H1.408z"
                  ></path>
                  <path
                    fill="#323330"
                    d="M116.347 96.736c-.917-5.711-4.641-10.508-15.672-14.981-3.832-1.761-8.104-3.022-9.377-5.926-.452-1.69-.512-2.642-.226-3.665.821-3.32 4.784-4.355 7.925-3.403 2.023.678 3.938 2.237 5.093 4.724 5.402-3.498 5.391-3.475 9.163-5.879-1.381-2.141-2.118-3.129-3.022-4.045-3.249-3.629-7.676-5.498-14.756-5.355l-3.688.477c-3.534.893-6.902 2.748-8.877 5.235-5.926 6.724-4.236 18.492 2.975 23.335 7.104 5.332 17.54 6.545 18.873 11.531 1.297 6.104-4.486 8.08-10.234 7.378-4.236-.881-6.592-3.034-9.139-6.949-4.688 2.713-4.688 2.713-9.508 5.485 1.143 2.499 2.344 3.63 4.26 5.795 9.068 9.198 31.76 8.746 35.83-5.176.165-.478 1.261-3.666.38-8.581zM69.462 58.943H57.753l-.048 30.272c0 6.438.333 12.34-.714 14.149-1.713 3.558-6.152 3.117-8.175 2.427-2.059-1.012-3.106-2.451-4.319-4.485-.333-.584-.583-1.036-.667-1.071l-9.52 5.83c1.583 3.249 3.915 6.069 6.902 7.901 4.462 2.678 10.459 3.499 16.731 2.059 4.082-1.189 7.604-3.652 9.448-7.401 2.666-4.915 2.094-10.864 2.07-17.444.06-10.735.001-21.468.001-32.237z"
                  ></path>
                </svg>
              </a>
              <h1 className="card-title text-center text-white w-100 h-100 fw-bold fs-1 p-3 ">
                JavaScript
              </h1>
            </div>
            
          </div>
        </div>

      </div>
      <Footer />

    </div>
  );
};

export default Home;
