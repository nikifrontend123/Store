<template>
    <div style="padding-bottom: 80px;">
        <hr style="margin: 3px 0; opacity: 1;">
        <div class="container my-3">
            <RouterLink to="/Dispatch">
                <div class="btn btn-warning w-100 fw-semibold">
                    Order Dispatch
                </div>
            </RouterLink>
            <div class="form my-3">
                <select class="form-select" id="Select" aria-label="Floating label select example">
                    <option selected>Open this select menu</option>
                    <option value="1">To be Deliever</option>
                    <option value="3">In-Transit</option>
                    <option value="3">Delievered</option>
                </select>
            </div>
        </div>
        <div class="search d-flex  d-flex justify-content-between align-items-center w-100">
            <div class="inp ms-3">
                <input type="search" placeholder="Search">
            </div>

            <p class="m-0">
            <div class="btn btn-primary">Reset</div>
            <button type="button" class="btn btn-primary " data-bs-toggle="collapse"
                data-bs-target="#myCollapse">Filters</button>
            </p>
        </div>
        <!-- Collapsible Element HTML -->
        <div class="collapse  mt-2" id="myCollapse">
            <div class="card card-body">
                <div class="first d-flex">
                    <TextInputs name="Start Date" type="date" design="floating" />
                    <TextInputs name="End Date" type="date" design="floating" />
                </div>
                <TextInputs name="Filter By Colour" type="text" design="floating" />
                <TextInputs name="Filter By Fabric" type="text" design="floating" />
                <div class="first d-flex">
                    <TextInputs name="Per Meter/KG Price Starts" type="date" design="floating" />
                    <TextInputs name="Per Meter/KG Price End" type="date" design="floating" />
                </div>
                <TextInputs name="Filter By Processings" type="text" design="floating" />
                <TextInputs name="Sort Purchase By" type="text" design="floating" />

            </div>
        </div>
        <div class="container">
            <div v-for="deleiver in deleivers" class="box border border-1 mt-3 container py-3">
                <div class="btnbtn d-flex justify-content-between w-100">
                    <b>Courier ID</b>
                    <div class="dropdown">
                        <button class="btn  " type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown"
                            aria-expanded="false">
                            <i class="bi bi-three-dots-vertical"></i>
                        </button>
                        <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                            <li><a class="dropdown-item text-warning" href="#">Bilty</a></li>
                            <li><a class="dropdown-item text-info" href="#">E-Way</a></li>
                            <li><a class="dropdown-item text-success" href="#">Invoice</a></li>
                        </ul>
                    </div>
                </div>
                <p class="m-0">{{ deleiver.tag }}</p>
                <div class="sec mt-2">
                    <p class="m-0">{{ deleiver.txt2 }}</p>
                    <p class="m-0">{{ deleiver.txt3 }}</p>
                    <p class="m-0">{{ deleiver.txt4 }}</p>
                    <p class="m-0">{{ deleiver.txt5 }}</p>
                    <p class="m-0">{{ deleiver.txt6 }}</p>
                </div>
                <div class="fourth mt-3">
                        <img :src="deleiver.img" alt="" class="w-100">
                </div>
                <div class="button mt-2 px-2">
                    <div class="btn btn-danger w-100">{{ deleiver.btn }}</div>
                </div>
            </div>
        </div>

    </div>
</template>

<script>
import TextInputs from '../InputsType/TextInputs.vue';

export default {
    components: {
        TextInputs,
    },
    computed: {
        deleivers() {
            return this.$store.getters.getDeleivers;
        }
    }
}
</script>

<style lang="scss" scoped></style>