<template>
    <div style="padding-bottom: 80px;">
        <hr style="margin: 3px 0; opacity: 1;">
        <div class="container my-3">
            <RouterLink to="/AddSample">
                <div class="btn btn-warning w-100 fw-semibold">
                    Orders Received
                </div>
            </RouterLink>
            <div class="form my-3">
                <select class="form-select" id="Select" aria-label="Floating label select example">
                    <option selected>Open this select menu</option>
                    <option value="1">In Transit</option>
                    <option value="2">Received</option>
                </select>
                <!-- <label for="floatingSelect"></label> -->
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
            <div v-for="data in datas" class="box border border-1 mt-3 container py-3">
                <div class="first d-flex justify-content-between align-items-center w-100">
                    <div class="txt d-flex  fw-semibold ">
                        <p class="m-0">Courier ID</p>
                    </div>
                    <div class=" d-flex justify-content-center align-items-center">
                        <i class="bi bi-download"></i> 
                    
                    <div class="btnbtn">
                        <div class="dropdown">
                            <button class="btn  " type="button" id="dropdownMenuButton1"
                                data-bs-toggle="dropdown" aria-expanded="false">
                                <i class="bi bi-three-dots-vertical"></i>
                            </button>
                            <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                                <li><a class="dropdown-item text-warning" href="#">Good Received</a></li>
                                <li><a class="dropdown-item text-info" href="#">QC Passed</a></li>
                                <li><a class="dropdown-item text-success" href="#">Goods Rejected</a></li>
                            </ul>
                        </div>         
                                    
                    </div>
                </div> 
                </div>
                <div class="sec mt-2">
                    <p class="m-0 fw-semibold">{{ data.tag }}</p>
                </div>
                <div class="third mt-2">
                    <p class="m-0">{{ data.txt1 }}</p>
                    <p class="m-0">{{ data.txt2 }}</p>
                    <p class="m-0">{{ data.txt3 }}</p>
                    <p class="m-0">Invoice No.{{ data.txt4 }}</p>
                    <p class="m-0">{{ data.txt5 }}</p>
                </div>
                <RouterLink to="/SampleDetails" style="text-decoration: none;" class="text-dark">
                    <div class="third mt-3">
                        <img :src="data.img" alt="" class="w-100">
                    </div>
                </RouterLink>

                <div class="fourth w-100 mt-2">
                    <button class="btn btn-warning w-100">{{data.btn}}</button>
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
        datas() {
            return this.$store.getters.getDatas;
        }
    }
}
</script>

<style lang="scss" scoped></style>