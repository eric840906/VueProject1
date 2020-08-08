<template>
    <div>
        <div class="my-5 row justify-content-center">
            <form class="col-md-6" @submit.prevent="payConfirm">
                <table class="table">
                    <thead>
                        <th>品名</th>
                        <th>數量</th>
                        <th>單價</th>
                    </thead>
                <tbody>
                    <tr v-for="item in orders.products" :key="item.id">
                        <td class="align-middle">{{ item.product.title }}</td>
                        <td class="align-middle">{{ item.qty }}/{{ item.product.unit }}</td>
                        <td class="align-middle text-right">{{ item.final_total }}</td>
                    </tr>
                </tbody>
                <tfoot>
                    <tr>
                        <td colspan="2" class="text-right">總計</td>
                        <td class="text-right">{{ orders.total }}</td>
                    </tr>
                </tfoot>
                </table>

                <table class="table">
                    <tbody>
                        <tr>
                        <th width="100">Email</th>
                        <td>{{ orders.user.email }}</td>
                        </tr>
                        <tr>
                        <th>姓名</th>
                        <td>{{ orders.user.name }}</td>
                        </tr>
                        <tr>
                        <th>收件人電話</th>
                        <td>{{ orders.user.tel }}</td>
                        </tr>
                        <tr>
                        <th>收件人地址</th>
                        <td>{{ orders.user.address }}</td>
                        </tr>
                        <tr>
                        <th>付款狀態</th>
                        <td>
                            <span v-if="!orders.is_paid" class="text-danger">尚未付款</span>
                            <span v-else class="text-success">付款完成</span>
                        </td>
                        </tr>
                    </tbody>
                </table>
                <div class="text-right">
                    <button class="btn btn-danger" v-if="orders.is_paid==false">確認付款去</button>
                </div>
            </form>
        </div>

        <!-- Button trigger modal -->
        <!-- <button type="button" class="btn btn-primary" data-toggle="modal" data-target="#loadingModal">
        Launch demo modal
        </button>         -->

        <!-- Modal -->
        <div class="modal fade" id="loadingModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLongTitle" aria-hidden="true">
            <div class="modal-dialog modal-dialog-centered" role="document">
                <div class="modal-content">                
                    <div class="modal-body loading-modal text-center">
                        <div class="lds-facebook">
                            <div></div>
                            <div></div>
                            <div></div>
                        </div>
                        <h3 class="loading-text">{{loadingMessage}}</h3>
                    </div>                
                </div>
            </div>
        </div>
        
    </div>
</template>

<script>
import $ from 'jquery'
export default {
    data(){
        return{
           orderId:'',
           orders:{
               products:{
                   
               },
               user:{}
           },
           loadingMessage:''

        }

    },
    methods:{                                            
                  
        getOrder(){
            const vm=this;                     
            const api=`${process.env.APIPATH}/api/${process.env.APIKEY}/order/${vm.orderId}`;//'https://vue-course-api.hexschool.io/api/eric840906/products'
            this.$http.get(api).then((response) => {
            console.log(response.data)
            vm.orders=response.data.order
            console.log(vm.orders)
            })
        },
        payConfirm(){
            const vm=this;                   
            const api=`${process.env.APIPATH}/api/${process.env.APIKEY}/pay/${vm.orderId}`;//'https://vue-course-api.hexschool.io/api/eric840906/products'
            $('#loadingModal').modal('toggle')
            vm.loadingMessage='正在送出訂單'  
            this.$http.post(api).then((response) => {
            console.log(response.data)
                      
                if(response.data.success){
                    vm.loadingMessage='訂單成功送出，將回到首頁'
                    setTimeout( () => $('#loadingModal').modal('toggle'),10000)           
                    this.getOrder()                        
                    setTimeout( () => vm.$router.push('/home'), 5000);
                                                         
                    
                    
                    
                    
                }else{
                    vm.loadingMessage='訂單送出失敗'
                    
                }
             
             
            
            })
            

        },
        
    },
    created(){
        this.orderId=this.$route.params.orderId   //這裡的$router.params.orderId是對應到我們在index.js的customercheckout後面自訂義的動態orderId(就是訂單建立後給的ID)
        console.log(this.orderId)
        this.getOrder()

    }
    
        
    
    
}
</script>

<style lang="scss">
.mt-100{
    margin-top: 100px;
}

//loading effect
.loading-modal{
    background-color: #000000;
    .loading-text{
        font-family: 'cwTeXYen', sans-serif;
        color: white;
    }
}

.lds-facebook {
  display: inline-block;
  position: relative;
  width: 80px;
  height: 80px;
}
.lds-facebook div {
  display: inline-block;
  position: absolute;
  left: 8px;
  width: 16px;
  background: #fff;
  animation: lds-facebook 1.2s cubic-bezier(0, 0.5, 0.5, 1) infinite;
}
.lds-facebook div:nth-child(1) {
  left: 8px;
  animation-delay: -0.24s;
}
.lds-facebook div:nth-child(2) {
  left: 32px;
  animation-delay: -0.12s;
}
.lds-facebook div:nth-child(3) {
  left: 56px;
  animation-delay: 0;
}
@keyframes lds-facebook {
  0% {
    top: 8px;
    height: 64px;
  }
  50%, 100% {
    top: 24px;
    height: 32px;
  }
}

.lds-ellipsis {
  display: inline-block;
  position: relative;
  width: 80px;
  height: 80px;
}
.lds-ellipsis div {
  position: absolute;
  top: 33px;
  width: 13px;
  height: 13px;
  border-radius: 50%;
  background: #fff;
  animation-timing-function: cubic-bezier(0, 1, 1, 0);
}
.lds-ellipsis div:nth-child(1) {
  left: 8px;
  animation: lds-ellipsis1 0.6s infinite;
}
.lds-ellipsis div:nth-child(2) {
  left: 8px;
  animation: lds-ellipsis2 0.6s infinite;
}
.lds-ellipsis div:nth-child(3) {
  left: 32px;
  animation: lds-ellipsis2 0.6s infinite;
}
.lds-ellipsis div:nth-child(4) {
  left: 56px;
  animation: lds-ellipsis3 0.6s infinite;
}
@keyframes lds-ellipsis1 {
  0% {
    transform: scale(0);
  }
  100% {
    transform: scale(1);
  }
}
@keyframes lds-ellipsis3 {
  0% {
    transform: scale(1);
  }
  100% {
    transform: scale(0);
  }
}
@keyframes lds-ellipsis2 {
  0% {
    transform: translate(0, 0);
  }
  100% {
    transform: translate(24px, 0);
  }
}

</style>