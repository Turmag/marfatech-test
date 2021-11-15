<template>
  <div class="loader-wrapper" v-if="visible">
    <div class="loader">
      <div class="loader-inner">
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["visible"]
};
</script>

<style scoped>
.loader-wrapper {
  position: absolute;
  bottom: -8px;

  width: 100%;
}

.loader {
  position: absolute;
  top: 0;

  display: flex;
  justify-content: center;
  align-items: center;

  width: 100%;
  min-height: 50px;

  background-color: #ffffff;
  border: 1px solid #eeeeee;
  border-radius: 4px;

  filter: drop-shadow(0px 7px 11px rgba(8, 0, 47, 0.07))
    drop-shadow(0 3px 5px rgba(8, 0, 47, 0.04));
}

.loader-inner {
  display: inline-block;
  position: relative;
  width: 80px;
  height: 80px;
}

.loader-inner div {
  position: absolute;
  width: 6px;
  height: 6px;
  background: #aaaaaa;
  border-radius: 50%;
  animation: loader-inner 1.2s linear infinite;
}

.loader-inner div:nth-child(1) {
  animation-delay: 0s;
  top: 37px;
  left: 66px;
}

.loader-inner div:nth-child(2) {
  animation-delay: -0.1s;
  top: 22px;
  left: 62px;
}

.loader-inner div:nth-child(3) {
  animation-delay: -0.2s;
  top: 11px;
  left: 52px;
}

.loader-inner div:nth-child(4) {
  animation-delay: -0.3s;
  top: 7px;
  left: 37px;
}

.loader-inner div:nth-child(5) {
  animation-delay: -0.4s;
  top: 11px;
  left: 22px;
}

.loader-inner div:nth-child(6) {
  animation-delay: -0.5s;
  top: 22px;
  left: 11px;
}

.loader-inner div:nth-child(7) {
  animation-delay: -0.6s;
  top: 37px;
  left: 7px;
}

.loader-inner div:nth-child(8) {
  animation-delay: -0.7s;
  top: 52px;
  left: 11px;
}

.loader-inner div:nth-child(9) {
  animation-delay: -0.8s;
  top: 62px;
  left: 22px;
}

.loader-inner div:nth-child(10) {
  animation-delay: -0.9s;
  top: 66px;
  left: 37px;
}

.loader-inner div:nth-child(11) {
  animation-delay: -1s;
  top: 62px;
  left: 52px;
}

.loader-inner div:nth-child(12) {
  animation-delay: -1.1s;
  top: 52px;
  left: 62px;
}

@keyframes loader-inner {
  0%,
  20%,
  80%,
  100% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.5);
  }
}
</style>