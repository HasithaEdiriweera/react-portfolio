import React from "react";

function Experience() {
  return (
    <div
      name="experience"
      className="bg-gradient-to-b from-black to-sky-950 w-full h-screen"
    >
      <div className="max-w-screen-lg mx-auto p-4 flex flex-col justify-center w-full h-full text-white">
        <div>
          <p className="text-4xl font-bold border-b-4 border-gray-500 p-2 inline">
            Experience
          </p>
          <p className="py-6">
            These are the higlights of my 10 years of career
          </p>
          <div class="flex flex-col justify-center py-6 lg:py-12">
            <div class="w-full mx-auto lg:max-w-4xl">
              <div class="relative">
                {/* <!-- Vertical middle line--> */}
                <div class="absolute hidden w-px h-full transform -translate-x-1/2 bg-sky-200 lg:block left-1/2"></div>
                <div class="space-y-12 lg:space-y-8">
                  {/* <!-- Left section --> */}
                  <div>
                    <div class="flex flex-col items-center">
                      <div class="flex items-center justify-start w-full mx-auto">
                        <div class="w-full lg:w-1/2 lg:pr-8">
                          <div class="p-4 bg-sky-900 rounded shadow-lg shadow-cyan-300">
                            <p>
                              In 2013, I enrolled at the University of Colombo
                              (UCSC) to pursue a Bachelor of Science degree in
                              Computer Science. I successfully completed my
                              studies and graduated in 2016.{" "}
                            </p>
                          </div>
                        </div>
                      </div>
                      <div class="absolute flex items-center justify-center w-10 h-10 transform -translate-x-1/2 -translate-y-4 bg-sky-900 border-2 border-sky-200 rounded-full left-1/2 sm:translate-y-0">
                        <span class="text-white">2013</span>
                      </div>
                    </div>
                  </div>

                  {/* <!-- Right section --> */}
                  <div>
                    <div class="flex flex-col items-center">
                      <div class="flex items-center justify-end w-full mx-auto">
                        <div class="w-full lg:w-1/2 lg:pl-8">
                          <div class="p-4 bg-sky-900 rounded shadow-lg shadow-cyan-300">
                            <p>
                              In 2016, I joined Typefi Systems as a Software
                              Engineer. Through my dedication and expertise, I
                              was promoted to the position of Senior Software
                              Engineer and subsequently took on the role of
                              Project Leader.{" "}
                            </p>
                          </div>
                        </div>
                      </div>
                      <div class="absolute flex items-center justify-center w-10 h-10 transform -translate-x-1/2 -translate-y-4 bg-sky-900 border-2 border-sky-200 rounded-full left-1/2 sm:translate-y-0">
                        <span class="text-white">2016</span>
                      </div>
                    </div>
                  </div>

                  {/* <!-- Left section --> */}
                  <div>
                    <div class="flex flex-col items-center">
                      <div class="flex items-center justify-start w-full mx-auto">
                        <div class="w-full lg:w-1/2 lg:pr-8">
                          <div class="p-4 bg-sky-900 rounded shadow-lg shadow-cyan-300">
                            <p>
                              In 2019, I relocated to Japan and commenced my
                              employment at Human Resocia. Throughout my tenure
                              at Human Resocia, I have consistently demonstrated
                              my dedication, adaptability, and commitment to
                              delivering exceptional results in Software
                              Development.{" "}
                            </p>
                          </div>
                        </div>
                      </div>
                      <div class="absolute flex items-center justify-center w-10 h-10 transform -translate-x-1/2 -translate-y-4 bg-sky-900 border-2 border-cyan-200 rounded-full left-1/2 sm:translate-y-0">
                        <span class="text-white">2019</span>
                      </div>
                    </div>
                  </div>

                  {/* <!-- Right section --> */}
                  <div>
                    <div class="flex flex-col items-center">
                      <div class="flex items-center justify-end w-full mx-auto">
                        <div class="w-full lg:w-1/2 lg:pl-8">
                          <div class="p-4 bg-sky-900 rounded shadow-lg shadow-cyan-300">
                            <p>
                              Since 2021, I have been employed at Mitsui
                              Knowledge Industries as a Full Stack Software
                              Engineer. In this role, I am responsible for
                              utilizing my expertise in technologies such as
                              Backend: PHP/Laravel and Frontend:
                              JavaScript/VueJs, along with ElementUI, to develop
                              robust and efficient software solutions.{" "}
                            </p>
                          </div>
                        </div>
                      </div>
                      <div class="absolute flex items-center justify-center w-10 h-10 transform -translate-x-1/2 -translate-y-4 bg-sky-900 border-2 border-cyan-200 rounded-full left-1/2 sm:translate-y-0">
                        <span class="text-white">2021</span>
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
}

export default Experience;
