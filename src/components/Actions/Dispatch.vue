<template>
    <div style="padding-bottom: 80px;">
        <hr style="margin: 3px 0; opacity: 1;">
        <div class="container">
            <div v-for="dispatch in dispatches" class="box border border-1 mt-3 container py-3">
                <div class="d-flex justify-content-between w-100">
                    <p class="fw-bold m-0">Invoice No.<span>{{ dispatch.txt5 }}</span></p>
                    <i class="bi bi-download"></i>
                </div>
                <div class="price">
                    <p class="m-0 fw-bold">{{ dispatch.txt6 }}</p>
                </div>

                <div class="sec mt-2">
                    <p class="m-0">{{ dispatch.txt2 }}</p>
                    <p class="m-0">{{ dispatch.txt3 }}</p>
                    <p class="m-0">{{ dispatch.tag }}</p>


                </div>
                <div class="fourth mt-3">
                    <img :src="dispatch.img" alt="" class="w-100">
                </div>

                <div class="">

                    <div class="date d-flex justify-content-between px-3 mt-3">
                        <span>Courier Date</span> <input type="date">
                    </div>
                    <div class="date d-flex justify-content-between px-3 mt-3">
                        <span>Courier Time</span> <input type="date">
                    </div>
                    <div class="date d-flex justify-content-between px-3 mt-3">
                        <span>Courier type</span> <input type="text">
                    </div>
                    <div class="date d-flex justify-content-between px-3 mt-3">
                        <span>Courier ID</span> <input type="text">
                    </div>
                    <div class="date d-flex justify-content-between px-3 mt-3">
                        <span>Delivery Date</span> <input type="date">
                    </div>
                    <div class="date d-flex justify-content-between px-3 mt-3">
                        <span>Delivery Time</span> <input type="date">
                    </div>
                    <div class="date d-flex justify-content-between px-3 mt-3">
                        <input type="file">
                    </div>
                    <div class="btnbtn d-flex justify-content-center mt-4">
                        <div class="btn btn-warning">Submit</div>
                    </div>
                </div>
            </div>

        </div>
    </div>
</template>

<script>
export default {
    computed: {
        dispatches() {
            return this.$store.getters.getDispatches;
        }
    }
}
</script>

<style lang="scss" scoped></style>