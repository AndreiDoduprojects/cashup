<template>
  <section class="services-boxs section-padding">
    <div class="container">
      <div class="sec-head mb-80">
        <h6 class="sub-title main-color mb-25">Our Specialize</h6>
        <div class="bord pt-25 bord-thin-top d-flex align-items-center">
          <h2 class="fw-600 text-u ls1">
            What We <span class="fw-200">Offer</span>
          </h2>
        </div>
      </div>
      <div class="row pt-30">
        <div v-for="(item, i) in data" :key="i" class="col-lg-3 col-md-6 items">
          <div class="item-box bg md-mb50">
            <div class="icon mb-40 opacity-5">
              <img :src="item.img" alt="" />
            </div>
            <h5 class="mb-15 text-u">
              {{ item.title.split(' ')[0] }} <br />
              {{ item.title.split(' ')[1] }}
            </h5>
            <p>{{ item.desc }}</p>
            <a :href="item.link" class="rmore mt-30">
              <span class="sub-title">Read More</span>
              <img
                src="/light/assets/imgs/arrow-right.png"
                alt=""
                class="icon-img-20 ml-5"
              />
            </a>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
<script setup>
import data from '@/l-data/services.json';
</script>
