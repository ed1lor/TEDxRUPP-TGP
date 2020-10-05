<template>

    <div class="v-header container">
        <div id="splash">
            <img src="../assets/tedxrupp-logo.svg" />
        </div>
        <div class="header-content">
            <img src="../assets/tedxrupp-logo.svg" />
        </div>
        <div class="fullscreen-video-wrap">
            <video id="video" autoplay></video>
         
        </div>

        <!-- <div class="header-overlay"></div> -->
    </div>
</template>

<script>
//import instascan from "instascan";
import Vue from "vue";
import VueSimpleAlert from "vue-simple-alert";
 //ES6 Modules or TypeScript
import Swal from 'sweetalert2'

// CommonJS
Vue.use(VueSimpleAlert);
export default {
    
    methods: {
        
        loadScanner() {
            let scanner = new window.Instascan.Scanner({
                video: document.getElementById("video"),
                mirror: false
            });
            scanner.addListener("scan", this.scan);
            window.Instascan.Camera.getCameras()
                .then(function (cameras) {
                    if (cameras.length > 0) {
                        scanner.start(cameras[cameras.length - 1]);
                    } else {
                        console.error("No cameras found.");
                    }
                })
                .catch(function (e) {
                    console.error(e);
                });
        },
                scan(content) {
            if (content == "david") {
                console.log("dope")
                Swal.fire({
                    icon: 'success',
                    title: 'Hooray!',
                    text: 'You have successfully redeemed your ticket.',
                    confirmButtonColor: '#e62b1e'
                })
            } else {
                console.log("no dope")
                Swal.fire({
                    icon: 'error',
                    title: 'Oops...',
                    text: 'Something went wrong!',
                    confirmButtonColor: '#e62b1e',
                })
            }
        }
    },
    mounted() {

            const splashScreen = document.getElementById("splash");
            let visited = sessionStorage.getItem("visited");
            if (!visited) {
                let loadingInterval = setInterval(() => {
                    splashScreen.classList.add("loaded");
                    clearInterval(loadingInterval);
                    sessionStorage.setItem("visited", true);
                }, 1500);
            } else {
                splashScreen.classList.add("loaded");
            }
            // Grab elements, create settings, etc.
            var video = document.getElementById('video');

            let instaScanScript = document.createElement("script");
            instaScanScript.src =
                "https://rawcdn.githack.com/tobiasmuehl/instascan/4224451c49a701c04de7d0de5ef356dc1f701a93/bin/instascan.min.js";
            document.body.appendChild(instaScanScript);
            instaScanScript.addEventListener("load", this.loadScanner);

            // Get access to the camera!
            if (navigator.mediaDevices && navigator.mediaDevices.getUserMedia) {
                // Not adding `{ audio: true }` since we only want video now
                navigator.mediaDevices.getUserMedia({
                    video: true
                }).then(function (stream) {
                    //video.src = window.URL.createObjectURL(stream);
                    video.srcObject = stream;
                    video.play();
                });
            }
        }
}
</script>

<style scoped>
*{
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    overflow: hidden;
}
body{
    padding: 0;
    margin: 0;
}

.v-header {
    height: 100vh;
    display: flex;
    align-items: top;
    justify-content: center;
    
}
.container{
    padding: 0;
    height: 100vh;
    width: 100vw;
    margin: 0;
    text-align: center;
    position: relative;
}

.fullscreen-video-wrap {
    width: 100%;
    height: 100vh;
    overflow: hidden;
    margin: 0;
    position: relative;
    clear:both;
}

.fullscreen-video-wrap video{
    position: absolute;
    left: -1000%;
    right: -1000%;
    top: -1000%;
    bottom: -1000%;
    margin: auto;
    min-height: 100%;
    min-width: 100%;
}

/* .header-overlay{
    height: 100vh;
    width: 100vw;
    position: absolute;
    top:0;
    left:0;
    background: black;
    z-index: 1;
    opacity:0.85;
} */

.header-content {
    z-index: 2;
}

.header-content img{
    padding: 1rem;
    height: 90px;
    display: flex;
    position: absolute;
    width: 100%;
}

#splash {
    position: absolute;
    width: 100vw;
    height: 100vh;
    background-color: #202020;
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 10000;
    overflow: hidden;
    top: 0;
    left: 0;
}

.loaded {
    display: none !important;
}

img {
    width: 170px;
    display: flex;
}

</style>
