<template>
    <hr style="margin: 3px 0; opacity: 1;">
    <div class="container" style="padding-bottom:80px ;">
        <div class=" d-flex justify-content-between w-100 text-center rounded p-2">
            <p class="m-0">Fabric 4 Name</p>
            <i class="bi bi-pencil-square"></i>
        </div>
        <div class="mt-2 w-100 d-flex align-items-center justify-content-between rounded p-2">
            <p class="m-0 fw-bold">So/001008 {02/04/2023 & 18:30}</p>
            <i class="bi bi-trash3"></i>
        </div>

        <div class="avatar d-flex justify-content-center">
            <Avatar></Avatar>
        </div>
        <form class="w-100 mt-2">
            <TextInputs name="Name" type="text" design="inline" />
            <TextInputs name="Price" type="text" design="inline" />
            <TextInputs name="MOQ" type="text" design="inline" />
            <TextInputs name="Length" type="text" design="inline" />
            <TextInputs name="GSM" type="text" design="inline" />
            <TextInputs name="Color" type="text" design="inline" />
            <TextInputs name="Design" type="text" design="inline" />
            <TextInputs name="Construction" type="text" design="inline" />
            <TextInputs name="Processes" type="text" design="inline" />
            <TextInputs name="Discription" type="text" design="inline" />
            <RouterLink to="/Sample">
            <div class="btn btn-primary d-flex justify-content-center">Submit</div>
        </RouterLink>
        </form>
    </div>
</template>

<script>
import TextInputs from '../InputsType/TextInputs.vue';
import Avatar from '../Avatarinput/Avatar.vue'
export default {
    components: {
        TextInputs,
        Avatar
    }

}
</script>

<style lang="scss" scoped></style>