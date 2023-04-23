import React, { useEffect } from "react";
import { NavLink, Link } from "react-router-dom";
import Hero from "./Images/HomeHero.svg";
import Footer from "../Components/AllPageFooter";
import "./Home.css";
const Home = () => {
  return (
    <div>
      <div className="mt-5 p-5">
        <div>
          <div class="container text-center">
            <div class="row row-cols-2" id="HeroSection">
              {/* Home hero text section */}
              <div class="col mt-5 p-3" id="HeroTextSection">
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
                      Explore
                    </NavLink>
                  </button>
                  <button className="btn btn-light border ">
                    {" "}
                    <NavLink
                      activeClassName="menu_active"
                      className="nav-link"
                      to="/Contact/BcaAllPage"
                    >
                      View Courses
                    </NavLink>
                  </button>
                </div>
              </div>
              {/* Home hero img section */}
              <div class="col">
                <img
                  src={Hero}
                  alt=""
                  className="w-100 h-100"
                  id="HeroImgSection"
                />
              </div>
            </div>
          </div>
        </div>
        {/* Home page search button here */}
        <h1 className="fs-1 fw-bold text-center mb-3 mt-3">
          <b className="text-info">Your One-Stop Library </b> for Endless
          Possibilities!
        </h1>
        <div className="mt-2 p-1 row">
          <div className="text-center col">
            <select className="form-select rounded-pill " aria-label="Default select example">
              <option selected>Choose Your University</option>
              <option value="1">  Guru gobind singh IP university</option>
              <option value="2">Delhi university</option>
              <option value="3">Galgotias university</option>
              <option value="4">Amity university</option>
            </select>
          </div>

          <div className="text-center col">
            <select className="form-select rounded-pill " aria-label="Default select example">
              <option selected>Course</option>
              <option value="1">BCA</option>
              <option value="2">B.TECH</option>
              <option value="3">MCA</option>
              <option value="4">M.TECH</option>
            </select>
          </div>

          <div className="text-center col">
            <select className="form-select rounded-pill " aria-label="Default select example">
              <option selected>Subject</option>
              <option value="1">  Guru gobind singh IP university</option>
              <option value="2">Delhi university</option>
              <option value="3">Galgotias university</option>
              <option value="4">Amity university</option>
            </select>
          </div>
          <div className="col-1">
            <h6 className="btn btn-primary">Ser Logo</h6>
          </div>
        </div>
        {/* serch button end here */}

        <div className="bg- p-5 mt-3">
          <h1 className="text-left fw-bold fs-3 text-dark">What Do You Want ?</h1>

          <div className='container mt-3 p-3'>
            <div className='container row p-1'>
              <div className='col rounded shadow '>
                <h2 className="text-center p-1">Read</h2>
                <p className='text-secondary'>"I create innovative, user-friendly designs that meet the needs of today's users. Exceptional user experiences are my top priority as a UI/UX designer with a proven track record."</p>
              </div>

              <div className='col rounded shadow'>
                <h2 className="text-center p-1">Learn</h2>
                <p className='text-secondary'>In today's world the main purpose of a Website is to satisfy the needs of the user and provides them a satisfying browsing experience. and I'm passionate about creating top-notch web applications with the newest web technologies.</p>
              </div>

              <div className='col rounded shadow'>
                <h2 className="text-center p-1">Practice</h2>
                <p className='text-secondary'>Writing clear, accurate, and interesting technical material for websites, blogs, and other kinds of online content to convey complicated subjects in a clear and understandable manner requires research into and understanding of technical concepts, goods, and services.</p>
              </div>
            </div>
            <hr className='text-info' />
          </div>
        </div>
{/* Web dev section start from here */}
        <div className="shadow rounded p-2">
          <h1 className="text-left fw-bold fs-3 text-dark">Web Development</h1>
          <div className='mt-2 p-3'>
            <div className='container row mx-5 p-4 border border-primary shadow rounded-'>
              <div className='card col'>
                <h1 className='w-100 mt-2'>
                  <svg viewBox="0 0 128 128">
                    <path fill="#E44D26" d="M19.037 113.876L9.032 1.661h109.936l-10.016 112.198-45.019 12.48z"></path><path fill="#F16529" d="M64 116.8l36.378-10.086 8.559-95.878H64z"></path><path fill="#EBEBEB" d="M64 52.455H45.788L44.53 38.361H64V24.599H29.489l.33 3.692 3.382 37.927H64zm0 35.743l-.061.017-15.327-4.14-.979-10.975H33.816l1.928 21.609 28.193 7.826.063-.017z"></path><path fill="#fff" d="M63.952 52.455v13.763h16.947l-1.597 17.849-15.35 4.143v14.319l28.215-7.82.207-2.325 3.234-36.233.335-3.696h-3.708zm0-27.856v13.762h33.244l.276-3.092.628-6.978.329-3.692z"></path>
                  </svg>
                </h1>
                <h3 className='text-center text-info fs-6'>Html</h3>
              </div>

              <div className='card col'>
                <h1 className='w-100 mt-2'>
                  <svg viewBox="0 0 128 128">
                    <path fill="#1572B6" d="M18.814 114.123L8.76 1.352h110.48l-10.064 112.754-45.243 12.543-45.119-12.526z"></path><path fill="#33A9DC" d="M64.001 117.062l36.559-10.136 8.601-96.354h-45.16v106.49z"></path><path fill="#fff" d="M64.001 51.429h18.302l1.264-14.163H64.001V23.435h34.682l-.332 3.711-3.4 38.114h-30.95V51.429z"></path><path fill="#EBEBEB" d="M64.083 87.349l-.061.018-15.403-4.159-.985-11.031H33.752l1.937 21.717 28.331 7.863.063-.018v-14.39z"></path><path fill="#fff" d="M81.127 64.675l-1.666 18.522-15.426 4.164v14.39l28.354-7.858.208-2.337 2.406-26.881H81.127z"></path><path fill="#EBEBEB" d="M64.048 23.435v13.831H30.64l-.277-3.108-.63-7.012-.331-3.711h34.646zm-.047 27.996v13.831H48.792l-.277-3.108-.631-7.012-.33-3.711h16.447z"></path>
                  </svg>
                </h1>
                <h3 className='text-center text-info fs-6'>Css</h3>
              </div>

              <div className='card col'>
                <h1 className='w-100 mt-2'>
                  <svg viewBox="0 0 128 128">
                    <path fill="#F0DB4F" d="M1.408 1.408h125.184v125.185H1.408z"></path><path fill="#323330" d="M116.347 96.736c-.917-5.711-4.641-10.508-15.672-14.981-3.832-1.761-8.104-3.022-9.377-5.926-.452-1.69-.512-2.642-.226-3.665.821-3.32 4.784-4.355 7.925-3.403 2.023.678 3.938 2.237 5.093 4.724 5.402-3.498 5.391-3.475 9.163-5.879-1.381-2.141-2.118-3.129-3.022-4.045-3.249-3.629-7.676-5.498-14.756-5.355l-3.688.477c-3.534.893-6.902 2.748-8.877 5.235-5.926 6.724-4.236 18.492 2.975 23.335 7.104 5.332 17.54 6.545 18.873 11.531 1.297 6.104-4.486 8.08-10.234 7.378-4.236-.881-6.592-3.034-9.139-6.949-4.688 2.713-4.688 2.713-9.508 5.485 1.143 2.499 2.344 3.63 4.26 5.795 9.068 9.198 31.76 8.746 35.83-5.176.165-.478 1.261-3.666.38-8.581zM69.462 58.943H57.753l-.048 30.272c0 6.438.333 12.34-.714 14.149-1.713 3.558-6.152 3.117-8.175 2.427-2.059-1.012-3.106-2.451-4.319-4.485-.333-.584-.583-1.036-.667-1.071l-9.52 5.83c1.583 3.249 3.915 6.069 6.902 7.901 4.462 2.678 10.459 3.499 16.731 2.059 4.082-1.189 7.604-3.652 9.448-7.401 2.666-4.915 2.094-10.864 2.07-17.444.06-10.735.001-21.468.001-32.237z"></path>
                  </svg>
                </h1>
                <h3 className='text-center text-info fs-6'>JavaScript</h3>
              </div>

              <div className='card col'>
                <h1 className='w-100'>
                  <svg viewBox="0 0 128 128">
                    <path d="M64.004 25.602c-17.067 0-27.73 8.53-32 25.597 6.398-8.531 13.867-11.73 22.398-9.597 4.871 1.214 8.352 4.746 12.207 8.66C72.883 56.629 80.145 64 96.004 64c17.066 0 27.73-8.531 32-25.602-6.399 8.536-13.867 11.735-22.399 9.602-4.87-1.215-8.347-4.746-12.207-8.66-6.27-6.367-13.53-13.738-29.394-13.738zM32.004 64c-17.066 0-27.73 8.531-32 25.602C6.402 81.066 13.87 77.867 22.402 80c4.871 1.215 8.352 4.746 12.207 8.66 6.274 6.367 13.536 13.738 29.395 13.738 17.066 0 27.73-8.53 32-25.597-6.399 8.531-13.867 11.73-22.399 9.597-4.87-1.214-8.347-4.746-12.207-8.66C55.128 71.371 47.868 64 32.004 64zm0 0" fill="#38b2ac"></path>
                  </svg>
                </h1>
                <h3 className='text-center text-info fs-6'>Tailwindcss</h3>
              </div>

              <div className='card col'>
                <h1 className='w-100'>
                  <svg viewBox="0 0 128 128">
                    <defs><linearGradient id="bootstrap-original-a" x1="76.079" x2="523.48" y1="10.798" y2="365.95" gradientTransform="translate(1.11 14.613) scale(.24566)" gradientUnits="userSpaceOnUse"><stop stop-color="#9013fe" offset="0"></stop><stop stop-color="#6610f2" offset="1"></stop></linearGradient><linearGradient id="bootstrap-original-b" x1="193.51" x2="293.51" y1="109.74" y2="278.87" gradientTransform="translate(0 52)" gradientUnits="userSpaceOnUse"><stop stop-color="#fff" offset="0"></stop><stop stop-color="#f1e5fc" offset="1"></stop></linearGradient><filter id="bootstrap-original-c" x="161.9" y="135.46" width="197" height="249" color-interpolation-filters="sRGB" filterUnits="userSpaceOnUse"><feFlood flood-opacity="0" result="BackgroundImageFix"></feFlood><feColorMatrix in="SourceAlpha" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"></feColorMatrix><feOffset dy="4"></feOffset><feGaussianBlur stdDeviation="8"></feGaussianBlur><feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.15 0"></feColorMatrix><feBlend in2="BackgroundImageFix" result="effect1_dropShadow"></feBlend><feBlend in="SourceGraphic" in2="effect1_dropShadow" result="shape"></feBlend></filter></defs><path d="M14.985 27.712c-.237-6.815 5.072-13.099 12.249-13.099h73.54c7.177 0 12.486 6.284 12.249 13.099-.228 6.546.068 15.026 2.202 21.94 2.141 6.936 5.751 11.319 11.664 11.883v6.387c-5.913.564-9.523 4.947-11.664 11.883-2.134 6.914-2.43 15.394-2.202 21.94.237 6.815-5.072 13.098-12.249 13.098h-73.54c-7.177 0-12.486-6.284-12.249-13.098.228-6.546-.068-15.026-2.203-21.94-2.14-6.935-5.76-11.319-11.673-11.883v-6.387c5.913-.563 9.533-4.947 11.673-11.883 2.135-6.914 2.43-15.394 2.203-21.94z" fill="url(#bootstrap-original-a)"></path><path transform="translate(1.494 2.203) scale(.24566)" d="M267.1 364.46c47.297 0 75.798-23.158 75.798-61.355 0-28.873-20.336-49.776-50.532-53.085v-1.203c22.185-3.609 39.594-24.211 39.594-47.219 0-32.783-25.882-54.138-65.322-54.138h-88.74v217zm-54.692-189.48h45.911c24.958 0 39.131 11.128 39.131 31.279 0 21.505-16.484 33.535-46.372 33.535h-38.67zm0 161.96v-71.431h45.602c32.661 0 49.608 12.03 49.608 35.49 0 23.459-16.484 35.941-47.605 35.941z" fill="url(#bootstrap-original-b)" filter="url(#bootstrap-original-c)" stroke="#fff"></path>
                  </svg>
                </h1>
                <h3 className='text-center text-info fs-6'>Bootstrap</h3>
              </div>

              <div className='card col'>
                <h1 className='w-100'>
                  <svg viewBox="0 0 128 128">
                    <path fill="#1FA6CA" d="M.2 68.6V13.4L48 41v18.4L16.1 41v36.8L.2 68.6z"></path><path fill="#1C7FB6" d="M48 41l47.9-27.6v55.3L64 87l-16-9.2 32-18.4V41L48 59.4V41z"></path><path fill="#1FA6CA" d="M48 77.8v18.4l32 18.4V96.2L48 77.8z"></path><path fill="#1C7FB6" d="M80 114.6L127.8 87V50.2l-16 9.2v18.4L80 96.2v18.4zM111.9 41V22.6l16-9.2v18.4l-16 9.2z"></path>
                  </svg>
                </h1>
                <h3 className='text-center text-info fs-6'>MaterialUi</h3>
              </div>

              <div className='card col'>
                <h1 className='w-100'>
                  <svg viewBox="0 0 128 128">
                    <g fill="#61DAFB"><circle cx="64" cy="64" r="11.4"></circle><path d="M107.3 45.2c-2.2-.8-4.5-1.6-6.9-2.3.6-2.4 1.1-4.8 1.5-7.1 2.1-13.2-.2-22.5-6.6-26.1-1.9-1.1-4-1.6-6.4-1.6-7 0-15.9 5.2-24.9 13.9-9-8.7-17.9-13.9-24.9-13.9-2.4 0-4.5.5-6.4 1.6-6.4 3.7-8.7 13-6.6 26.1.4 2.3.9 4.7 1.5 7.1-2.4.7-4.7 1.4-6.9 2.3C8.2 50 1.4 56.6 1.4 64s6.9 14 19.3 18.8c2.2.8 4.5 1.6 6.9 2.3-.6 2.4-1.1 4.8-1.5 7.1-2.1 13.2.2 22.5 6.6 26.1 1.9 1.1 4 1.6 6.4 1.6 7.1 0 16-5.2 24.9-13.9 9 8.7 17.9 13.9 24.9 13.9 2.4 0 4.5-.5 6.4-1.6 6.4-3.7 8.7-13 6.6-26.1-.4-2.3-.9-4.7-1.5-7.1 2.4-.7 4.7-1.4 6.9-2.3 12.5-4.8 19.3-11.4 19.3-18.8s-6.8-14-19.3-18.8zM92.5 14.7c4.1 2.4 5.5 9.8 3.8 20.3-.3 2.1-.8 4.3-1.4 6.6-5.2-1.2-10.7-2-16.5-2.5-3.4-4.8-6.9-9.1-10.4-13 7.4-7.3 14.9-12.3 21-12.3 1.3 0 2.5.3 3.5.9zM81.3 74c-1.8 3.2-3.9 6.4-6.1 9.6-3.7.3-7.4.4-11.2.4-3.9 0-7.6-.1-11.2-.4-2.2-3.2-4.2-6.4-6-9.6-1.9-3.3-3.7-6.7-5.3-10 1.6-3.3 3.4-6.7 5.3-10 1.8-3.2 3.9-6.4 6.1-9.6 3.7-.3 7.4-.4 11.2-.4 3.9 0 7.6.1 11.2.4 2.2 3.2 4.2 6.4 6 9.6 1.9 3.3 3.7 6.7 5.3 10-1.7 3.3-3.4 6.6-5.3 10zm8.3-3.3c1.5 3.5 2.7 6.9 3.8 10.3-3.4.8-7 1.4-10.8 1.9 1.2-1.9 2.5-3.9 3.6-6 1.2-2.1 2.3-4.2 3.4-6.2zM64 97.8c-2.4-2.6-4.7-5.4-6.9-8.3 2.3.1 4.6.2 6.9.2 2.3 0 4.6-.1 6.9-.2-2.2 2.9-4.5 5.7-6.9 8.3zm-18.6-15c-3.8-.5-7.4-1.1-10.8-1.9 1.1-3.3 2.3-6.8 3.8-10.3 1.1 2 2.2 4.1 3.4 6.1 1.2 2.2 2.4 4.1 3.6 6.1zm-7-25.5c-1.5-3.5-2.7-6.9-3.8-10.3 3.4-.8 7-1.4 10.8-1.9-1.2 1.9-2.5 3.9-3.6 6-1.2 2.1-2.3 4.2-3.4 6.2zM64 30.2c2.4 2.6 4.7 5.4 6.9 8.3-2.3-.1-4.6-.2-6.9-.2-2.3 0-4.6.1-6.9.2 2.2-2.9 4.5-5.7 6.9-8.3zm22.2 21l-3.6-6c3.8.5 7.4 1.1 10.8 1.9-1.1 3.3-2.3 6.8-3.8 10.3-1.1-2.1-2.2-4.2-3.4-6.2zM31.7 35c-1.7-10.5-.3-17.9 3.8-20.3 1-.6 2.2-.9 3.5-.9 6 0 13.5 4.9 21 12.3-3.5 3.8-7 8.2-10.4 13-5.8.5-11.3 1.4-16.5 2.5-.6-2.3-1-4.5-1.4-6.6zM7 64c0-4.7 5.7-9.7 15.7-13.4 2-.8 4.2-1.5 6.4-2.1 1.6 5 3.6 10.3 6 15.6-2.4 5.3-4.5 10.5-6 15.5C15.3 75.6 7 69.6 7 64zm28.5 49.3c-4.1-2.4-5.5-9.8-3.8-20.3.3-2.1.8-4.3 1.4-6.6 5.2 1.2 10.7 2 16.5 2.5 3.4 4.8 6.9 9.1 10.4 13-7.4 7.3-14.9 12.3-21 12.3-1.3 0-2.5-.3-3.5-.9zM96.3 93c1.7 10.5.3 17.9-3.8 20.3-1 .6-2.2.9-3.5.9-6 0-13.5-4.9-21-12.3 3.5-3.8 7-8.2 10.4-13 5.8-.5 11.3-1.4 16.5-2.5.6 2.3 1 4.5 1.4 6.6zm9-15.6c-2 .8-4.2 1.5-6.4 2.1-1.6-5-3.6-10.3-6-15.6 2.4-5.3 4.5-10.5 6-15.5 13.8 4 22.1 10 22.1 15.6 0 4.7-5.8 9.7-15.7 13.4z"></path></g>
                  </svg>
                </h1>
                <h3 className='text-center text-info fs-6'>ReactJs</h3>
              </div>

              <div className='card col'>
                <h1 className='w-100'>
                  <svg viewBox="0 0 128 128">
                    <path fill="none" d="M0 0h128v128H0z"></path><path d="M88.69 88.11c-9 18.4-24.76 30.78-45.61 34.85a39.73 39.73 0 01-9.77 1.14c-12 0-23-5-28.34-13.19C-2.2 100-4.64 76.87 19 59.76c.48 2.61 1.46 6.19 2.11 8.31A38.24 38.24 0 0010 81.1c-4.4 8.64-3.91 17.27 1.3 25.25 3.6 5.38 9.3 8.65 16.63 9.65a44 44 0 0026.55-5c12.71-6.68 21.18-14.66 26.72-25.57a9.32 9.32 0 01-2.61-6A9.12 9.12 0 0187.37 70h.34a9.15 9.15 0 011 18.25zm28.67-20.2c12.21 13.84 12.54 30.13 7.82 39.58-4.4 8.63-16 17.27-31.6 17.27a50.48 50.48 0 01-21-5.05c2.29-1.63 5.54-4.24 7.33-5.87a41.54 41.54 0 0016 3.42c10.1 0 17.75-4.72 22.31-13.35 2.93-5.7 3.1-12.38.33-19.22a43.61 43.61 0 00-17.27-20.85 62 62 0 00-34.74-10.59h-2.93a9.21 9.21 0 01-8 5.54h-.31a9.13 9.13 0 01-.3-18.25h.33a9 9 0 018 4.89h2.61c20.8 0 39.06 7.98 51.42 22.48zm-82.75 23a7.31 7.31 0 011.14-4.73c-9.12-15.8-14-35.83-6.51-56.68C34.61 13.83 48.13 3.24 62.79 3.24c15.64 0 31.93 13.69 33.88 40.07-2.44-.81-6-2-8.14-2.44-.53-8.63-7.82-30.13-25.09-29.81-6.19.17-15.31 3.1-20 9.12a43.69 43.69 0 00-9.64 25.25 59.61 59.61 0 008.47 36.16 2.75 2.75 0 011.14-.16h.32a9.12 9.12 0 01.33 18.24h-.33a9.16 9.16 0 01-9.12-8.79z" fill="#764abc"></path>
                  </svg>
                </h1>
                <h3 className='text-center text-info fs-6'>Redux</h3>
              </div>
            </div>
          </div>
        </div>

      </div>


      <Footer />
    </div>

  );
};

export default Home;
