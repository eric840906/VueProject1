<template>
    <div>
        <div class="row flex-xs-column-reverse">
            <div class="col-md-4 md-mt-20">
                <h3>{{product.title}}</h3>
                <h4 style="text-align:end;">售價{{product.origin_price|currency}}元</h4>
                <h5>選購數量</h5>                
                <select name="" class="form-control" v-model="product.quantity">
                        <option selected disabled>請選擇數量</option>
                        <option v-for="item in 10" :value="item" :key="item">{{item}}{{product.unit}}</option>
                        
                </select>
                <br>
                <h5>小計{{product.origin_price*product.quantity|currency}}元</h5>
                <br>
                <h5>產品描述</h5>
                <p>{{product.description}}</p>    
                
                <button class="addCart-btn" @click="addCart(product.id, product.quantity)">加入購物車</button>
                

            </div>
            <div class="col-md-8 .container-fluid">
                <img :src="product.imageUrl" alt="" class="img-fluid">
            </div>
        </div>
        <Cart :cartInfo="cartList" :isloading="productStatus.loading" @refreshCart="getCart" @removeItem="removeCart"></Cart> 
    </div>
</template>

<script>
import $ from 'jquery'
import Navbar from './HomeNav'
import Cart from './Cart'

export default {
    components:{
        Navbar,
        Cart
    },
    data(){
        return{
            produtId:'',
            product:{
                
            },
            productStatus:{
                loading:''
            },
            cartList:{
                data:{
                    carts:[]
                }   //沒事先訂義的話會跳錯誤說carts undefined(雖然還是抓得到資料啦)
            },
            coupon_code:"",
            
        }
    },
    methods:{
        getProduct(){
            const vm=this;                  
            const api=`${process.env.APIPATH}/api/${process.env.APIKEY}/product/${vm.productId}`;
            this.$http.get(api).then((response) => {
            console.log(response.data)            
            if(response.data.success){
                vm.product=response.data.product;
                vm.productStatus.loading=""
                
                
            }
            
            
            
            })               
            
        },
        getCart(){
            
            const vm=this;    
            vm.isLoading=true        
            const api=`${process.env.APIPATH}/api/${process.env.APIKEY}/cart`;//'https://vue-course-api.hexschool.io/api/eric840906/products'
            this.$http.get(api).then((response) => {
            console.log(response.data)
            vm.isLoading=false
            vm.cartList=response.data; 
            
            })               
            
        },
        addCart(id, qty=1){
            const vm=this;
            vm.productStatus.loading=id            
            const api=`${process.env.APIPATH}/api/${process.env.APIKEY}/cart`;
            const cart={
                product_id:id,
                qty
            }
            this.$http.post(api, {'data':cart}).then((response) => {
            console.log(response.data)
                if(response.data.success){
                    $('#productModal').modal('hide');
                    vm.productStatus.loading=""
                    console.log('加入成功')
                    this.getCart()
                    
                }else{
                    alert('加入失敗')
                    vm.productStatus.loading=""
                }         
                                   
            })
            

        },
        removeCart(id){
            const vm=this;
            vm.productStatus.loading=id      
            let api=`${process.env.APIPATH}/api/${process.env.APIKEY}/cart/${id}`
            this.$http.delete(api).then((response) => {
                console.log(response.data)
                if(response.data.success){                            
                console.log('刪除成功')
                this.getCart()
                vm.productStatus.loading=""                      
                
                }else{
                    console.log('刪除失敗')
                    vm.productStatus.loading=""   
                }
            })
        },
    },
    created(){
        this.productId=this.$route.params.productId   //這裡的$router.params.orderId是對應到我們在index.js的customercheckout後面自訂義的動態orderId(就是訂單建立後給的ID)
        console.log(this.productId)
        this.getProduct();
        this.getCart();
    }
    
}
</script>

<style lang="scss">

.addCart-btn{
    margin: 70px 0;
    width: 100%;
    border-style: none;
    transition: 0.3s all;
    
    &:hover{        
        background-color: #ffdf76;
        color: #292929;
    }
    &:focus{
        background-color: #292929;
        color: #ffdf76;
    }
}
@media(max-width: 425px){
    .md-mt-20{
        margin-top: 20px;
    }
    .flex-xs-column-reverse{
        flex-direction: column-reverse;
    }
}
</style>

