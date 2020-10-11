<template>
  <div class="about">
    <img alt="Vue logo" id="im" src="../assets/tedx.png" width="200" />
    <qrcode-vue :value="value" :size="size" level="H"></qrcode-vue>
    <canvas id="canvas"></canvas>
    <HelloWorld
            id="spacing"
            msg="Welcome to TEDxRUPP,This is your TEDxRUPP Circle ticket.
    Please show this to redeem yourself into the event."
    />
  </div>
</template>

<script>
import QrcodeVue from 'qrcode.vue'
import HelloWorld from '../components/HelloWorld'
export default {
   props: ["name"],
     data() {
      return {
        value: this.name,
        size: 300,
      }
    },
  components: {
    HelloWorld,
    QrcodeVue,
  }
}
</script>

<style>

body {
    margin: 0;
    overflow: hidden;
}

#canvas {

    padding: 0;
    margin: auto;
    display: block;

}

#im {
    align-content: center;
    margin: 0;
}
#app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    line-height: 12px;
    align-content: center;

    height: 100vh;
    width: 100vw;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-evenly;
}
#spacing {
    line-height: normal;
    align-content: center;
}
</style>

