<template>
  <div class="about">
    <h1>This is an about page {{name}}</h1>
    <qrcode-vue :value="value" :size="size" level="H"></qrcode-vue>
    <canvas id="canvas"></canvas>
  </div>
</template>

<script>
import QrcodeVue from 'qrcode.vue'
export default {
     props: ["name"],
     data() {
      return {
        value: this.name,
        size: 300,
      }
    },
    components: {
      QrcodeVue,
    },
}
</script>
