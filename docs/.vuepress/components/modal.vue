<template>
    <div class="modal">
    <button @click="modal">

    </button>

    </div>


</template>
<script>
    import Swal from 'sweetalert2'
    export default{

        data(){
            return {
                modalShow: false,
                message:"hello"
            }
        },
        methods: {


            modal: function () {
                Swal('Hello world!')
            }
        }
    }

</script>