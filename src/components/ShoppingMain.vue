<template>
    <div>
        <loading :active.sync="isLoading"></loading>
        <nav class="navbar navbar-expand navbar-light bg-light top-select justify-content-center">      
        
            <ul class="navbar-nav">
            <li class="nav-item">
                <div class="top-select-item">
                    <a class="nav-link " href="#" @click.prevent="visibility='all'" :class="{'active':visibility=='all'}">                    
                    所有商品
                    </a>
                </div>
                
            </li>
            <li class="nav-item">
                <div class="top-select-item">
                    <a class="nav-link" href="#" @click.prevent="visibility='冰棒'" :class="{'active':visibility=='冰棒'}">                    
                        冰棒系列
                    </a>    
                </div>   
                
            </li>
            <li class="nav-item">
                <div class="top-select-item">
                    <a class="nav-link" href="#" @click.prevent="visibility='冰淇淋'" :class="{'active':visibility=='冰淇淋'}">                    
                        冰淇淋
                    </a>
                </div>  
                
            </li>
            <li class="nav-item">
                <div class="top-select-item">
                    <a class="nav-link" href="#" @click.prevent="visibility='精品'" :class="{'active':visibility=='精品'}">                    
                        不凡精品
                    </a>    
                </div>  
                
            </li>
            </ul>
        
    </nav>
        <div class="row">          
            <nav id="sidebarMenu" class="col-xl-3 col-sm-2 d-md-block bg-light sidebar collapse">          
                <div class="sidebar-sticky pt-3">
                    <h3 style="margin-bottom: 2rem;">商品列表</h3>
                    <ul class="nav flex-column">                    
                        <li class="nav-item">
                            <a class="nav-link " href="#" @click.prevent="visibility='all'" :class="{'active':visibility=='all'}">                    
                            所有商品
                            </a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#" @click.prevent="visibility='冰棒'" :class="{'active':visibility=='冰棒'}">                    
                            冰棒系列
                            </a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#" @click.prevent="visibility='冰淇淋'" :class="{'active':visibility=='冰淇淋'}">                    
                            冰淇淋系列
                            </a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#" @click.prevent="visibility='精品'" :class="{'active':visibility=='精品'}">                    
                            不凡精品
                            </a>
                        </li>                
                    </ul>
                </div>
            </nav>
        
            <div class="col-md-9 row">            
                <div class="col-md-6 mb-4 col-lg-4" v-for="item in filterProducts " :key="item.id">
                    <div class="card border-0 shadow-sm" >
                        <div style="height: 150px; background-size: cover; background-position: center" :style="{backgroundImage:`url(${item.imageUrl})`}">
                        </div>
                        <div class="card-body">
                            <span class="badge badge-secondary float-right ml-2">{{item.category}}</span>
                            <h5 class="card-title">
                                <a href="#" class="text-dark">{{item.title}}</a>
                            </h5>
                            <p class="card-text">{{item.description}}</p>
                            <div class="d-flex justify-content-end align-items-baseline">                      
                                <div class="h5">{{item.price}} 元/{{item.unit}}</div>
                            </div>
                        </div>
                        <div class="card-footer d-flex">
                            <button type="button" class="btn btn-sm shop-btn border-right" @click="getProduct(item.id)">
                                <i class="fas fa-spinner fa-spin" v-if="productStatus.loading==item.id"></i>
                                查看更多
                            </button>
                            <button type="button" class="btn  btn-sm shop-btn" @click="addCart(item.id)">
                                <i class="fas fa-spinner fa-spin" v-if="productStatus.loading==item.id"></i>
                                加到購物車
                            </button>
                        </div>
                    </div>
                </div>            
            </div>             
        </div>
      <Cart :cartInfo="cartList" :isloading="productStatus.loading" @refreshCart="getCart" @removeItem="removeCart"></Cart> 
    </div>
</template>

<script>
import $ from 'jquery'
import Navbar from './HomeNav'
import Cart from './Cart'
import GoTop from './GoTop'
import TopSelect from './TopSelect'
import Alert from './Alert'




export default {
    components:{
        Navbar,
        Cart,
        GoTop,
        TopSelect,
        
        
    },
    data(){
        return{
            products:[],
            product:{},
            productStatus:{
                loading:''
            },
            cartList:{
                data:{
                    carts:[]
                }   //沒事先訂義的話會跳錯誤說carts undefined(雖然還是抓得到資料啦)
            },
            coupon_code:"",
            visibility:'all',
            isLoading:false,
            
        }
    },
    methods:{
        getProducts(page=1){  //參數直接寫page=1代表page預設值為1
            
            const vm=this;
            vm.isLoading=true
            const api=`${process.env.APIPATH}/api/${process.env.APIKEY}/products`;//'https://vue-course-api.hexschool.io/api/eric840906/products'
            this.$http.get(api).then((response) => {
            console.log(response.data)
            vm.isLoading=false
            vm.products=response.data.products; 
            console.log(vm.products)
            
            })               
            
        },
        getProduct(id){
            const vm=this;
            vm.productStatus.loading=id            
            const api=`${process.env.APIPATH}/api/${process.env.APIKEY}/product/${id}`;
            this.$http.get(api).then((response) => {
            console.log(response.data)            
            if(response.data.success){
                vm.product=response.data.product;
                vm.productStatus.loading=""
                vm.$router.push(`product/${vm.product.id}`)
                
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
                    this.$bus.$emit('message:push','加入購物車','success');
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
        productFilter(value){
            const vm=this
            
            vm.tempProducts = vm.products.filter(function(item,index,array){
            return item.category==value
            })            

            console.log(vm.tempProducts)

        }
    },
    created(){
        this.getProducts();
        this.getCart();
        

        
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
    computed:{
        filterProducts: function(){
            if(this.visibility=='all'){
                return this.products;
            }
            else if(this.visibility=='冰棒'){
                let newFilter=[]
                this.products.forEach(element=>{
                    if(element.category=='冰棒'){
                        newFilter.push(element)
                    }
                });
                return newFilter
            }
            else if(this.visibility=='冰淇淋'){
                let newFilter=[]
                this.products.forEach(element=>{
                    if(element.category=='冰淇淋'){
                        newFilter.push(element)
                    }
                });
                return newFilter
            }
            else if(this.visibility=='精品'){
                let newFilter=[]
                this.products.forEach(element=>{
                    if(element.category=='精品系列'){
                        newFilter.push(element)
                    }
                });
                return newFilter
            }
        }
    }  
}
</script>

<style lang="scss">
    .sidebar .nav-item .nav-link.active{
    color: #ffdf76; // for example
}
.sidebar {  
  top: 0;
  bottom: 0;
  left: 0;
  z-index: 100; /* Behind the navbar */
  padding: 48px 0 0; /* Height of navbar */
  box-shadow: inset -1px 0 0 rgba(0, 0, 0, .1);
  
  .nav-item{
    
    color: #ffdf76;
    &:hover{
        background-color: #ffdf76;
    }
    .active{
        background-color: #292929;
        .nav-link a{
            color: #ffdf76;
        }
    }
    
}
}







@media (max-width: 767.98px) {
  .sidebar {
    top: 5rem;
  }
  .top-select{
      display: block;
  }
}

.sidebar-sticky {
  position: relative;
  top: 0;
  height: calc(100vh - 48px);
  padding-top: .5rem;
  overflow-x: hidden;
  overflow-y: auto; /* Scrollable contents if viewport is shorter than content. */
}

@supports ((position: -webkit-sticky) or (position: sticky)) {
  .sidebar-sticky {
    position: -webkit-sticky;
    position: sticky;
  }
}

.sidebar .nav-link {
  font-weight: 500;
  color: #333;
}

.sidebar .nav-link .feather {
  margin-right: 4px;
  color: #999;
}



.sidebar .nav-link:hover .feather,
.sidebar .nav-link.active .feather {
  color: inherit;
}

.sidebar-heading {
  font-size: .75rem;
  text-transform: uppercase;
}
    
</style>