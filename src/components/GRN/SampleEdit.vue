<template>
    <hr style="margin: 3px 0; opacity: 1;">
    <div class="container" style="padding-bottom:80px ;">

        <div class="avatar d-flex justify-content-center">
            <Avatar></Avatar>
        </div>
        <form class="w-100 mt-2">
            <TextInputs name="Price" type="text" design="inline" />
            <TextInputs name="MOQ" type="text" design="inline" />
            <TextInputs name="Length" type="text" design="inline" />
            <TextInputs name="Width" type="text" design="inline" />
            <TextInputs name="GSM" type="text" design="inline" />
            <TextInputs name="Color" type="text" design="inline" />
            <TextInputs name="Design" type="text" design="inline" />
            <TextInputs name="Construction" type="text" design="inline" />
            <TextInputs name="Processes" type="text" design="inline" />
            <TextInputs name="Discription" type="text" design="inline" />
            <RouterLink to="/Sample">
            <div class="btn btn-primary d-flex justify-content-center">Update</div>
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