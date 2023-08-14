import React from "react";
import "./style.css";

const Home = () => {
  return (
    <div class="wrapper">
      <div class="sidebar">
        <div class="sidebar-content">
          <div class="container-fluid">
            <div class="row justify-content-left">
              <div class="col-7 col-md-2 col-sm-1 col-xs-1">
                <div
                  class="card p-4"
                  style={{ background: "#5c9be5", border: "none" }}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    class="bi bi-plus-square-fill"
                    viewBox="0 0 16 16"
                  >
                    <path d="M2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2zm6.5 4.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3a.5.5 0 0 1 1 0z" />
                  </svg>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    class="bi bi-dash"
                    viewBox="0 0 16 16"
                  >
                    <path d="M4 8a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7A.5.5 0 0 1 4 8z" />
                  </svg>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    class="bi bi-dot"
                    viewBox="0 0 16 16"
                  >
                    <path d="M8 9.5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3z" />
                  </svg>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    class="bi bi-dot"
                    viewBox="0 0 16 16"
                  >
                    <path d="M8 9.5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3z" />
                  </svg>
                  &deg;C
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    class="bi bi-toggle2-off"
                    viewBox="0 0 16 16"
                  >
                    <path d="M9 11c.628-.836 1-1.874 1-3a4.978 4.978 0 0 0-1-3h4a3 3 0 1 1 0 6H9z" />
                    <path d="M5 12a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm0 1A5 5 0 1 0 5 3a5 5 0 0 0 0 10z" />
                  </svg>
                  &deg;F
                  <div class="d-flex">
                    <h6 class="flex-grow-1" style={{ color: "white" }}>
                      New York
                    </h6>
                    <h6 style={{ color: "white" }}>13:08</h6>
                  </div>
                  <div class="d-flex flex-column temp mt-5 mb-3">
                    <h1 class="mb-0 font-weight-bold" id="heading">
                      27&deg; C
                    </h1>
                    <span class="small grey">Sunny</span>
                  </div>
                  <div class="d-flex">
                    <div class="temp-details flex-grow-1">
                      <p class="my-1">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="16"
                          height="16"
                          fill="white"
                          class="bi bi-wind"
                          viewBox="0 0 16 16"
                        >
                          <path d="M12.5 2A2.5 2.5 0 0 0 10 4.5a.5.5 0 0 1-1 0A3.5 3.5 0 1 1 12.5 8H.5a.5.5 0 0 1 0-1h12a2.5 2.5 0 0 0 0-5zm-7 1a1 1 0 0 0-1 1 .5.5 0 0 1-1 0 2 2 0 1 1 2 2h-5a.5.5 0 0 1 0-1h5a1 1 0 0 0 0-2zM0 9.5A.5.5 0 0 1 .5 9h10.042a3 3 0 1 1-3 3 .5.5 0 0 1 1 0 2 2 0 1 0 2-2H.5a.5.5 0 0 1-.5-.5z" />
                        </svg>

                        <span> 40 km/h </span>
                      </p>

                      <p class="my-1">
                        <i class="fa fa-tint mr-2" aria-hidden="true"></i>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="16"
                          height="16"
                          fill="white"
                          class="bi bi-droplet-fill"
                          viewBox="0 0 16 16"
                        >
                          <path d="M8 16a6 6 0 0 0 6-6c0-1.655-1.122-2.904-2.432-4.362C10.254 4.176 8.75 2.503 8 0c0 0-6 5.686-6 10a6 6 0 0 0 6 6ZM6.646 4.646l.708.708c-.29.29-1.128 1.311-1.907 2.87l-.894-.448c.82-1.641 1.717-2.753 2.093-3.13Z" />
                        </svg>
                        <span> 84% </span>
                      </p>

                      <p class="my-1">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="16"
                          height="16"
                          fill="white"
                          class="bi bi-brightness-high"
                          viewBox="0 0 16 16"
                        >
                          <path d="M8 11a3 3 0 1 1 0-6 3 3 0 0 1 0 6zm0 1a4 4 0 1 0 0-8 4 4 0 0 0 0 8zM8 0a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-1 0v-2A.5.5 0 0 1 8 0zm0 13a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-1 0v-2A.5.5 0 0 1 8 13zm8-5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1 0-1h2a.5.5 0 0 1 .5.5zM3 8a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1 0-1h2A.5.5 0 0 1 3 8zm10.657-5.657a.5.5 0 0 1 0 .707l-1.414 1.415a.5.5 0 1 1-.707-.708l1.414-1.414a.5.5 0 0 1 .707 0zm-9.193 9.193a.5.5 0 0 1 0 .707L3.05 13.657a.5.5 0 0 1-.707-.707l1.414-1.414a.5.5 0 0 1 .707 0zm9.193 2.121a.5.5 0 0 1-.707 0l-1.414-1.414a.5.5 0 0 1 .707-.707l1.414 1.414a.5.5 0 0 1 0 .707zM4.464 4.465a.5.5 0 0 1-.707 0L2.343 3.05a.5.5 0 1 1 .707-.707l1.414 1.414a.5.5 0 0 1 0 .708z" />
                        </svg>

                        <span> 0.2h </span>
                      </p>
                    </div>

                    <div>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="60"
                        height="60"
                        fill="white"
                        class="bi bi-sun-fill"
                        viewBox="0 0 16 16"
                      >
                        <path d="M8 12a4 4 0 1 0 0-8 4 4 0 0 0 0 8zM8 0a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-1 0v-2A.5.5 0 0 1 8 0zm0 13a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-1 0v-2A.5.5 0 0 1 8 13zm8-5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1 0-1h2a.5.5 0 0 1 .5.5zM3 8a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1 0-1h2A.5.5 0 0 1 3 8zm10.657-5.657a.5.5 0 0 1 0 .707l-1.414 1.415a.5.5 0 1 1-.707-.708l1.414-1.414a.5.5 0 0 1 .707 0zm-9.193 9.193a.5.5 0 0 1 0 .707L3.05 13.657a.5.5 0 0 1-.707-.707l1.414-1.414a.5.5 0 0 1 .707 0zm9.193 2.121a.5.5 0 0 1-.707 0l-1.414-1.414a.5.5 0 0 1 .707-.707l1.414 1.414a.5.5 0 0 1 0 .707zM4.464 4.465a.5.5 0 0 1-.707 0L2.343 3.05a.5.5 0 1 1 .707-.707l1.414 1.414a.5.5 0 0 1 0 .708z" />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="container">
          <div class="page-content page-container" id="page-content">
            <div class="padding">
              <div class="row container d-flex justify-content-center">
                <div>
                  <h6 style={{ "font-family": "Poppins" }}>
                    <b>
                      <strong>Welcome back Isabella!</strong>
                    </b>{" "}
                    <br />
                    Check out today's weather information
                  </h6>
                </div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  class="bi bi-three-dots"
                  viewBox="0 0 16 16"
                >
                  <path d="M3 9.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3z" />
                </svg>
                <div class="col-lg-8 grid-margin stretch-card">
                  <div class="card card-weather">
                    <div class="card-body">
                      <div class="weather-date-location">
                        <h3>Thursday</h3>
                        <p class="text-gray">
                          <span class="weather-date">28 September, 2023</span>
                          <span class="weather-location">New York, USA</span>
                        </p>
                      </div>
                      <div class="weather-data d-flex">
                        <div class="mr-auto">
                          <h4 class="display-3">
                            27 <span class="symbol">&deg;</span>C
                          </h4>
                          <p>Sunny</p>
                        </div>
                      </div>
                    </div>
                    <div class="card-body p-0">
                      <div class="d-flex weakly-weather">
                        <div class="weakly-weather-item">
                          <p class="mb-0">Sun</p>
                          <i class="mdi mdi-weather-cloudy"></i>
                          <p class="mb-0">30&deg;</p>
                        </div>
                        <div class="weakly-weather-item">
                          <p class="mb-1">Mon</p>
                          <i class="mdi mdi-weather-hail"></i>
                          <p class="mb-0">31&deg;</p>
                        </div>
                        <div class="weakly-weather-item">
                          <p class="mb-1">Tue</p>
                          <i class="mdi mdi-weather-partlycloudy"></i>
                          <p class="mb-0">28&deg;</p>
                        </div>
                        <div class="weakly-weather-item">
                          <p class="mb-1">Wed</p>
                          <i class="mdi mdi-weather-pouring"></i>
                          <p class="mb-0">30&deg;</p>
                        </div>
                        <div class="weakly-weather-item">
                          <p class="mb-1">Thu</p>
                          <i class="mdi mdi-weather-pouring"></i>
                          <p class="mb-0">29&deg;</p>
                        </div>
                        <div class="weakly-weather-item">
                          <p class="mb-1">Fri</p>
                          <i class="mdi mdi-weather-snowy-rainy"></i>
                          <p class="mb-0">31&deg;</p>
                        </div>
                        <div class="weakly-weather-item">
                          <p class="mb-1">Sat</p>
                          <i class="mdi mdi-weather-snowy"></i>
                          <p class="mb-0">32&deg;</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
