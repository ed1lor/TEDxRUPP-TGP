<template>
    <div class="hello">
        <div>
            <p1>{{ msg }}</p1>
        </div>
        <div id="button" @click="goToMainWebsite">Main event</div>
    </div>
</template>

<script>
export default {
    name: "HelloWorld",
    props: {
        msg: String,
    },
    methods: {
        goToMainWebsite: () => {
            window.location = "http://tedxrupp.com";
        },
    },
};
</script>

<style scoped>
p1 {
    font-size: 18px;
    padding: 20px;
    color: #202020;
}

#button {
    background-color: red;

    font-weight: 500;
    font-size: 18px;
    text-align: center;
    display: inline-block;

    border-radius: 12px;
    border: none;

    color: white;

    align-content: CENTER;
    padding: 10px 40px;
    margin-top: 30px;
}
</style>
