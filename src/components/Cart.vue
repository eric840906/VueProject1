<template>
    <div>
        <div class="cartframe">
            
            <div class="cartcount" v-if="!isloading">
                <div class="cartcounter">{{cartInfo.data.carts.length}}</div>
            </div>
            
            
            <div class="cartlist">
                <div class="scroll-menu">
                    <table class="table" style="margin: 30px auto; width:70%">
                        <thead>
                            <th></th>
                            <th>品名</th>
                            <th width='60'>數量</th>
                            <th width='40'>價格</th>
                            
                        </thead>
                        <tbody>
                            <tr v-for="item in cartInfo.data.carts" :key="item.id">
                            <td class="align-middle">
                                <button type="button" class="btn btn-outline-danger btn-sm" @click="removeItem(item.id)">
                                <i class="far fa-trash-alt"></i>                
                                </button>
                            </td>
                            <td class="align-middle">
                                {{ item.product.title }}                    
                            </td>
                            <td class="align-middle">{{ item.qty }}{{ item.product.unit }}</td>
                            <td class="align-middle text-right">{{ item.final_total }}</td>                
                            
                            </tr>
                        </tbody>
                        <tfoot>
                            <tr>
                            <td></td>
                            <td colspan="2" class="text-right">總計</td>
                            <td class="text-right">{{ cartInfo.data.total }}</td>
                            </tr>
                            <tr v-if="cartInfo.data.total!=cartInfo.data.final_total">
                            <td class="text-right text-success">已使用優惠</td>
                            <td colspan="2" class="text-right text-success">折扣價</td>
                            <td class="text-right text-success">{{ Math.round(cartInfo.data.final_total) }}</td>
                            </tr>                    
                        </tfoot>                                
                    </table>
                </div>
            
            <div class="input-group input-group-sm" style="margin:50px auto; width: 70%;">
                <div class="d-flex">
                    <input type="text" class="form-control" placeholder="請輸入優惠碼" v-model="coupon_code" style="flex:1;">
                    <div class="input-group-append">
                        <button class="btn btn-outline-secondary" type="button" @click="applyCoupon">
                        套用優惠碼
                        </button>
                    </div>
                </div>
                
                <router-link class="pay-btn text-decoration-none" to="/paymentpage/paymentmake">&emsp;結帳&emsp;</router-link>
            </div>
            
            </div>
            <a href="#" class="carttrigger">            
                <i class="carticon fas fa-shopping-cart" v-if="!isloading"></i>
                <i class="cartloading fas fa-spinner fa-spin" v-else></i>            
            </a>
    </div>
        
    </div>
</template>

<script>
import $ from 'jquery'
export default {
    
    props:['cartInfo', 'isloading'],//用props將pagination資料帶入
    data(){
        return{
            coupon_code:""
        }
    },
    methods:{
        
        refreshCart(){        
        this.$emit('refreshCart')        
        
        },
        removeItem(id){
            this.$emit('removeItem', id)     
        },
        applyCoupon(){
            const vm=this;              
            const coupon={
                code:vm.coupon_code
            }            
            const api=`${process.env.APIPATH}/api/${process.env.APIKEY}/coupon`;//'https://vue-course-api.hexschool.io/api/eric840906/products'
            this.$http.post(api,{data:coupon}).then((response) => {
            console.log(response)
            vm.isLoading=true
            if(response.data.success){

                vm.refreshCart();
                vm.isLoading=false
                this.$bus.$emit('message:push','優惠碼套用成功','success');  
            }else{
                vm.isLoading=false
                this.$bus.$emit('message:push','查無優惠碼','danger');  
            }    
                         
             
            })
        },

    },
    mounted(){
        $('.carttrigger').click(function (e) { 
            e.preventDefault();
            
        });
        $('.cartframe').click(function (e) { 
            e.preventDefault();
            e.stopPropagation();
            $('.cartlist').addClass('show');
             
        });
        $('body').click(function (e) { 
            e.preventDefault();
            $('.cartlist.show').removeClass('show');
            
        });
        
        
    },

}
</script>

<style lang="scss">

.mb-5{
    margin-bottom:5rem !important;
}

.scroll-menu{
    overflow-y: auto;
    height: 35vh;
}

.cartcount{
    position: absolute;
    right: -6px;
    top: -8px;
    height: 23px;
    width: 23px;
    z-index: 10000;
    border: 1px solid black;
    background-color: black;
    border-radius: 25px;
    .cartcounter{
        color: #ffdf76;
        position: absolute;
        left: 50%;
        transform: translateX(-50%);
    }
}


.cartframe{    
    border: 1px solid black;
    border-radius: 153px;
    height: 50px;
    width: 50px;
    position: fixed;    
    right: 20px;
    bottom: 20px;
    box-shadow: 0px 0px 11px rgba(0,0,0,1);
    transition: cubic-bezier(0.075, 0.82, 0.165, 1);
    .carticon{
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
        .carticon{
            color: #ceb669;
        }
        
    }
}

.cartlist{
    background: white;
    position: absolute;
    right: 0;
    bottom: 95px;
    width: 450px;
    display: none;
    box-shadow: 0 5px 12px 8px rgba(0, 0, 0, 0.5);
    
}

.pay-btn{
    display: inline-block;
    width: 100%;
    text-align: center;
    margin-top: 20px;    
    background-color: white;    
    transition: 0.3s;
    &:hover{
        background-color: #292929;   
        color: #ffdf76;     
    }
    &:focus{
        outline:0;
    }
}

.show{
        display: block;
}

.cartloading{
    position: absolute;
    left: 11.5%;
    top: 10.5%;    
    transform: translate(-50%, -50%);
    font-size: 37px;
}

@media(max-width: 425px){
    .cartlist{
        right: -34px
    }
}

@media(max-width: 320px){
    .cartlist{
        width: 364px;
        right: -42px;
    }
}

</style>