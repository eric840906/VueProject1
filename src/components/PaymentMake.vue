<template>
    <div>        
        <div class="container mt-100">
            <table class="table" style="margin: 30px auto; width:70%">
            <thead>
                <th></th>
                <th>品名</th>
                <th width='80'>數量</th>
                <th width='20' class="text-right">價格</th>
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
                    
                </td>
                <td class="align-middle">{{ item.qty }}{{ item.product.unit }}</td>
                <td class="align-middle text-right">{{ item.final_total }}</td>
                </tr>
            </tbody>
            <tfoot>
                <tr>
                    <td></td>
                    <td colspan="2" class="text-right">總計</td>
                    <td class="text-right">{{ cartList.data.total }}</td>
                </tr>
                
                <tr v-if="cartList.data.total!=cartList.data.final_total">
                    <td class="text-left text-success">已套用優惠券</td>
                    <td colspan="2" class="text-right text-success">折扣價</td>
                    <td class="text-right text-success">{{ Math.round(cartList.data.final_total) }}</td>
                </tr>
                
            </tfoot>
            
            
            
        </table>
        </div>
        
        <div class="container">
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
                <div class="row">

                

              </div>
              <!--Grid row-->

            <hr>

            <div class="custom-control custom-checkbox">
                <input type="checkbox" class="custom-control-input" id="same-address">
                <label class="custom-control-label" for="same-address">與收件人地址相同</label>
            </div>
            <div class="custom-control custom-checkbox">
                <input type="checkbox" class="custom-control-input" id="save-info">
                <label class="custom-control-label" for="save-info">記錄我的資料</label>
            </div>

            <hr>

            <div class="d-block my-3">
                <div class="custom-control custom-radio">
                    <input id="method1" name="paymentMethod" type="radio" class="custom-control-input">
                    <label class="custom-control-label" for="method1">Credit card</label>
                </div>
                <div class="custom-control custom-radio">
                    <input id="method2" name="paymentMethod" type="radio" class="custom-control-input"> 
                    <label class="custom-control-label" for="method2">Debit card</label>
                </div>
                <div class="custom-control custom-radio">
                    <input id="method3" name="paymentMethod" type="radio" class="custom-control-input" >
                    <label class="custom-control-label" for="method3">Paypal</label>
                </div>
            </div>
            <div class="row">
                <div class="col-md-6 mb-3">
                    <label for="cc-name">持卡人姓名</label>
                    <input type="text" name="cardName" class="form-control" id="cc-name" placeholder="" :class="{'is-invalid': errors.has('cardName')}" v-validate="'required'">                        
                    <span class="text-danger" v-if="errors.has('cardName')">請輸入姓名</span>
                    <div class="invalid-feedback">
                        Name on card is required
                    </div>
                </div>
                <div class="col-md-6 mb-3">
                    <label for="cc-number">信用卡卡號</label>
                    <input type="text" name="credit_field" class="form-control" id="cc-number" placeholder="" :class="{'is-invalid': errors.has('credit_field')}" v-validate="'required'" >
                    <span class="text-danger" v-if="errors.has('credit_field')">Credit card number is required</span>                        
                    <!-- <input type="text" name="credit_field" class="form-control" id="cc-number" placeholder="" :class="{'is-invalid': errors.has('credit_field')}" v-validate="'credit_card'" >
                    <span class="text-danger" v-if="errors.has('credit_field')">Credit card number is required</span> -->
                </div>
            </div>
            <div class="row">
                <div class="col-md-3 mb-3 col-6">
                    <label for="cc-expiration">有效日期</label>
                    <input type="text" class="form-control" id="cc-expiration" placeholder="" required>
                    <div class="invalid-feedback">
                        Expiration date required
                    </div>
                </div>
                <div class="col-md-3 mb-3 col-6">
                    <label for="cc-expiration">安全碼</label>
                    <input type="text" class="form-control" id="cc-cvv" placeholder="" required>
                    <div class="invalid-feedback">
                        Security code required
                    </div>
                </div>
            </div>
            <div class="text-right">
                <button class="btn btn-danger" style="width:100%;">送出訂單</button>
            </div>
        </form>
            
        </div>
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
            console.log(1)
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
                            vm.$router.push(`paymentconfirm/${response.data.orderId}`)
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

<style lang="scss" scope>
*{
    font-family: 'cwTeXYen', sans-serif;
}
    .mt-100{
        margin-top: 100px;
    }
</style>