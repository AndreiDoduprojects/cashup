<template>
  <LoadingScreen />
  <Cursor />
  <ProgressScroll />
  <Lines />
  <Navbar />
  <div id="smooth-wrapper">
    <Navbar />
    <div id="smooth-content">
      <main class="main-bg">
        <Header />
        <Services />
        <Process />
        <Testimonials />
        <Services2 />
        <FAQS />
      </main>
      <Footer />
    </div>
  </div>
</template>
<script setup>
import Footer from '@/components/light/modern-agency/Footer';
import Lines from '@/components/light/common/Lines';
import ProgressScroll from '@/components/light/common/ProgressScroll';
import Cursor from '@/components/light/common/cusor';
import LoadingScreen from '@/components/light/common/loader';
import Navbar from '@/components/light/creative-agency/Navbar';
import Testimonials from '@/components/light/FAQS/Testimonials';
import Header from '@/components/light/services-details/Header';
import Services from '@/components/light/services-details/Services';
import Process from '@/components/light/services-details/Process';
import Services2 from '@/components/light/services-details/Services2';
import FAQS from '@/components/light/services-details/FAQS';
import { onMounted } from 'vue';

useHead({
  link: [
    { rel: 'stylesheet', href: '/light/assets/css/plugins.css' },
    { rel: 'stylesheet', href: '/light/assets/css/satoshi.css' },
    { rel: 'stylesheet', href: '/light/assets/css/style.css' },
  ],
  // script: [{ src: '/light/assets/js/smoother-script.js', defer: true }],
});

onMounted(() => {
  gsap.registerPlugin(ScrollTrigger, ScrollSmoother);
  ScrollTrigger.normalizeScroll(true);
  ScrollSmoother.create({
    smooth: 2,
    effects: true,
  });
});
</script>
