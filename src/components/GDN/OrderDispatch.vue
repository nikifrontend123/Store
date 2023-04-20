<template>
    <div style="padding-bottom: 80px;">
        <hr style="margin: 3px 0; opacity: 1;">
        <div class="first text-center p-2 m-2" style="background-color: #B7B7B7;">
            <b>Orders Dispatch</b>
        </div>
        <div class="container">
            <div class="box border border-3 mt-3 container py-3">
                <div class="first  w-100">
                    <div class="txt d-flex justify-content-between">
                        <b class="m-0">Invoice no. 2023/56</b>
                        <i class="bi bi-download"></i>
                    </div>
                    <b class="m-0">Rs.15,000/ (Incl GST)</b>
                    <div class="mt-2">
                        <p class="m-0">Fabric 1 Name</p>
                        <p class="m-0">PO No. 2023/1088</p>
                        <p class="m-0">{02/04/2024 & 18:30}</p>

                    </div>
                </div>
                <div class="img mt-2">
                    <img src="../../assets/cotton.jpg" width="100%" alt="">
                </div>
            </div>
            <div class="date d-flex justify-content-between  mt-3">
                <span class="fw-semibold">Courier Date</span> <input type="date">
            </div>
            <div class="date d-flex justify-content-between  mt-3">
                <span class="fw-semibold">Courier Time</span> <input type="time">
            </div>
            <div class="date d-flex justify-content-between  mt-3">
                <span class="fw-semibold">Courier Type</span> <input type="text">
            </div>
            <div class="date d-flex justify-content-between  mt-3">
                <span class="fw-semibold">Delivery Date</span> <input type="date">
            </div>
            <div class="date d-flex justify-content-between mt-3">
                <span class="fw-semibold">Delivery Time</span> <input type="time">
            </div>
            <div class="date d-flex justify-content-between align-items-center mt-3">
                <span class="fw-semibold">Upload E-Way Bill</span>
                <input type="file">
            </div>
            <div class="date d-flex justify-content-between align-items-center mt-3">
                <span class="fw-semibold">Upload Bilti</span>
                <input type="file">
            </div>
            <div class="btnbtn d-flex justify-content-center mt-4">
            <div class="btn btn-warning">Submit</div>
        </div>
        </div>
        
    </div>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped></style>