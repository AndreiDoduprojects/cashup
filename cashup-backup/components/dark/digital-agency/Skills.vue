<template>
  <section class="skills-img section-padding pt-0">
    <div class="container">
      <div class="row justify-content-between">
        <div class="col-lg-5">
          <div class="img md-mb50">
            <img
              src="/dark/assets/imgs/intro/02.jpg"
              alt=""
              class="radius-30"
            />
            <div class="curv-title main-bg">
              <h6 class="sub-title">Efficient Tasking</h6>
              <div class="shap-left-bottom">
                <svg
                  viewBox="0 0 11 11"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  class="w-11 h-11"
                >
                  <path
                    d="M11 1.54972e-06L0 0L2.38419e-07 11C1.65973e-07 4.92487 4.92487 1.62217e-06 11 1.54972e-06Z"
                    fill="#1a1a1a"
                  ></path>
                </svg>
              </div>
              <div class="shap-right-bottom">
                <svg
                  viewBox="0 0 11 11"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  class="w-11 h-11"
                >
                  <path
                    d="M11 1.54972e-06L0 0L2.38419e-07 11C1.65973e-07 4.92487 4.92487 1.62217e-06 11 1.54972e-06Z"
                    fill="#1a1a1a"
                  ></path>
                </svg>
              </div>
            </div>
          </div>
        </div>
        <div class="col-lg-6 valign">
          <div class="content full-width">
            <div class="sec-head mb-30">
              <h6 class="sub-title mb-15 main-color">Our Skills</h6>
              <h2>The ultmiate guide to marketing success.</h2>
            </div>
            <div class="row justify-content-end">
              <div class="col-lg-11">
                <div class="text">
                  <p>
                    We shifted our talents to frontier science because we wanted
                    our work to have tangible, human-positive impact. Also, we
                    get front row seats to the future.
                  </p>
                </div>
                <div class="mt-50">
                  <div class="skills-box">
                    <div class="skill-item mb-40">
                      <h5 class="fz-14 mb-15">UI / UX Design</h5>
                      <div class="skill-progress">
                        <div class="progres" data-value="90%"></div>
                      </div>
                    </div>
                    <div class="skill-item">
                      <h5 class="fz-14 mb-15">Apps Development</h5>
                      <div class="skill-progress">
                        <div class="progres" data-value="80%"></div>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="mt-80">
                  <a
                    href="#0"
                    class="butn-circle-text d-flex align-items-center"
                  >
                    <h6 class="text">Try it for free</h6>
                    <div>
                      <span class="circle">
                        <svg
                          width="18"
                          height="18"
                          viewBox="0 0 18 18"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M13.922 4.5V11.8125C13.922 11.9244 13.8776 12.0317 13.7985 12.1108C13.7193 12.1899 13.612 12.2344 13.5002 12.2344C13.3883 12.2344 13.281 12.1899 13.2018 12.1108C13.1227 12.0317 13.0783 11.9244 13.0783 11.8125V5.51953L4.79547 13.7953C4.71715 13.8736 4.61092 13.9176 4.50015 13.9176C4.38939 13.9176 4.28316 13.8736 4.20484 13.7953C4.12652 13.717 4.08252 13.6108 4.08252 13.5C4.08252 13.3892 4.12652 13.283 4.20484 13.2047L12.4806 4.92188H6.18765C6.07577 4.92188 5.96846 4.87743 5.88934 4.79831C5.81023 4.71919 5.76578 4.61189 5.76578 4.5C5.76578 4.38811 5.81023 4.28081 5.88934 4.20169C5.96846 4.12257 6.07577 4.07813 6.18765 4.07812H13.5002C13.612 4.07813 13.7193 4.12257 13.7985 4.20169C13.8776 4.28081 13.922 4.38811 13.922 4.5Z"
                            fill="currentColor"
                          ></path>
                        </svg>
                      </span>
                    </div>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted, onBeforeUnmount } from 'vue';
import isInView from '@/common/isInView';

function handleShowProgressValues() {
  isInView({
    selector: '.skill-progress .progres',
    isElements: true,
    callback: (element) => {
      element.style.width = element.getAttribute('data-value');
    },
  });
}

onMounted(() => {
  window.addEventListener('scroll', handleShowProgressValues);
});

onUnmounted(() => {
  window.removeEventListener('scroll', handleShowProgressValues);
});
</script>
