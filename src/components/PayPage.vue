<template>
    <div>
        <table class="table" style="margin: 30px auto; width:70%">
            <thead>
                <th></th>
                <th>品名</th>
                <th>數量</th>
                <th class="text-right">單價</th>
            </thead>
            <tbody>
                <tr v-for="item in cartList.data.carts" :key="item.id">
                <td class="align-middle">
                    <button type="button" class="btn btn-outline-danger btn-sm" @click="removeCart(item.id)">
                    <i class="far fa-trash-alt"></i>
                    </button>
                </td>
                <td class="align-middle">
                    {{ item.product.title }}
                    <div class="text-success" v-if="item.coupon">
                    已套用優惠券
                    </div>
                </td>
                <td class="align-middle">{{ item.qty }}/{{ item.product.unit }}</td>
                <td class="align-middle text-right">{{ item.final_total }}</td>
                </tr>
            </tbody>
            <tfoot>
                <tr>
                <td colspan="3" class="text-right">總計</td>
                <td class="text-right">{{ cartList.data.total }}</td>
                </tr>
                <tr v-if="cartList.data.total!=cartList.data.final_total">
                <td colspan="3" class="text-right text-success">折扣價</td>
                <td class="text-right text-success">{{ cartList.data.final_total }}</td>
                </tr>
                
            </tfoot>
            
            
            
        </table>

        <div class="my-5 row justify-content-center">
            <form class="col-md-6" @submit.prevent="buildOrder">
                <div class="form-group">
                    <label for="useremail">Email</label>
                    <input type="email" class="form-control" name="email" id="useremail"
                        v-model="orderForm.user.email" placeholder="請輸入 Email" v-validate="'required|email'">
                    <span class="text-danger" v-if="errors.has('email')">{{errors.first('email')}}</span>
                </div>
            
                <div class="form-group">
                    <label for="username">收件人姓名</label>
                    <input type="text" class="form-control" name="name" id="username"
                        v-model="orderForm.user.name" placeholder="輸入姓名" :class="{'is-invalid': errors.has('name')}" v-validate="'required'">
                    <span class="text-danger" v-if="errors.has('name')">請輸入姓名</span>
                </div>
            
                <div class="form-group">
                    <label for="usertel">收件人電話</label>
                    <input type="tel" class="form-control" id="usertel" v-model="orderForm.user.tel" placeholder="請輸入電話">
                </div>
            
                <div class="form-group">
                    <label for="useraddress">收件人地址</label>
                    <input type="text" class="form-control" name="address" id="useraddress" v-model="orderForm.user.address"
                        placeholder="請輸入地址" v-validate="'required'">
                    <span class="text-danger" v-if="errors.has('address')">地址欄位不得留空</span>
                </div>
            
                <div class="form-group">
                    <label for="comment">留言</label>
                    <textarea name="" id="comment" class="form-control" cols="30" rows="10" v-model="orderForm.message"></textarea>
                </div>
                    <div class="text-right">
                    <button class="btn btn-danger">送出訂單</button>
                </div>
            </form>
        </div>
    </div>
</template>

<script>
import $ from 'jquery'
export default {
    data(){
        return{
           orderForm: {
                user: {
                    name: "",
                    email: "",
                    tel: "",
                    address: ""
                },
                message: ""
            },
            cartList:{
                data:{}
            },
            coupon_code:""
        }

    },
    methods:{                    
        
        buildOrder(){
            const vm=this;    
            vm.isLoading=true
            const order=vm.orderForm        
            const api=`${process.env.APIPATH}/api/${process.env.APIKEY}/order`;
            //這裡使用Veevalidate的api來驗證表單
            this.$validator.validate().then((valid) => {
                if (valid) { 
                    this.$http.post(api,{data:order}).then((response) => {
                    console.log(response.data)
                    vm.isLoading=false
                        if(response.data.success){
                            vm.$router.push(`/customercheckout/${response.data.orderId}`)
                        }
                    
                    })
         
                }else{
                    console.log('資料不齊全')
                }
                
            })
            this.getCart()
            
            
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
        removeCart(id){
            const vm=this;
            let api=`${process.env.APIPATH}/api/${process.env.APIKEY}/cart/${id}`
            this.$http.delete(api).then((response) => {
                console.log(response.data)
                if(response.data.success){                            
                console.log('刪除成功')
                this.getCart()                
                
            }
            })
        },
        
    },
    created(){
        this.getCart()
    }
        
    
    
}
</script>