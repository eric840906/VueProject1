<template>
    <div>
        <div class="gotopframe" @click="goTop">                                                 
            <i class="gotopicon fas fa-angle-double-up"></i>        
        </div>
        
    </div>
</template>

<script>
export default {
    methods:{
        goTop(){
            window.scrollTo(0, 0);
        }
    }
}
</script>

<style lang="scss">
    .gotopframe{
        z-index: 1000;
        border: 1px solid black;
        border-radius: 153px;
        height: 50px;
        width: 50px;
        position: fixed;
        left: 20px;
        bottom: 20px;
        -webkit-box-shadow: 0px 0px 11px black;
        box-shadow: 0px 0px 11px black;
        -webkit-transition: cubic-bezier(0.075, 0.82, 0.165, 1);
        transition: cubic-bezier(0.075, 0.82, 0.165, 1);
            .gotopicon{
                position: absolute;
                left: 50%;
                top: 50%;
                transform: translate(-50%,-50%);
                font-size: 25px;    
                color: black;
            
            }

            &:hover{
                background-color: black;
                box-shadow: 0px 0px 11px rgba(255,255,255,1);
                .gotopicon{
                    color: #ceb669;
                }
                
            }
    }
</style>