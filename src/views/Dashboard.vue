<template>
    <div style="padding-bottom: 80px;">
        
        <hr style="margin: 3px 0; opacity: 1;">
        <div class="boxes px-4">
            <div v-for="box in boxes" class="box m-2 d-flex justify-content-center align-items-center shadow text-center "
                style="width: 150px; height: 150px;" :style="box.color">
                <p class="m-0 fs-4 fw-semibold">{{ box.num }} <br> <span class="fw-semibold" style="font-size: 13px;">{{ box.txt }}</span> </p>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    computed: {
        boxes() {
            return this.$store.getters.getBoxes;
        },
    }

}
</script>

<style scoped>

    .boxes {
        display: grid;
        grid-template-columns: 1fr 1fr;
    }

    @media only screen and (min-width: 601px) {
    .boxes {
        margin: 10px;
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    }
    }

</style>