<template>
    <div>
        <loading :active.sync="isLoading"></loading>
        <div class="text-right mt-4">
            <button class="btn btn-outline-success btn-sm" type="button" @click="openModal('isNew')">建立新產品</button>
        </div>
        <table class="table mt-4">
            <thead>
                <th width="120">分類</th>
                <th>品名</th>
                <th width="120" class="text-right">原價</th>
                <th width="120" class="text-right">價格</th>
                <th width="120">啟用/未啟用</th>
                <th width="80">編輯</th>
                <th width="80">刪除</th>
            </thead>
            <tbody>
                <tr v-for="(item) in products" :key="item.id">
                    <td>{{item.category}}</td>
                    <td>{{item.title}}</td>
                    <td class="text-right">{{item.origin_price | currency}}</td>
                    <td class="text-right">{{item.price | currency}}</td>
                    <td>
                        <span v-if="item.isEnabled" class="text-success">啟用</span>
                        <span v-else class="text-danger">未啟用</span>
                    </td>
                    <td><button class="btn btn-outline-primary btn-sm" @click="openModal('isEdit',item)" >編輯</button></td>
                    <td><button class="btn btn-danger btn-sm" @click="openModal('isDelete',item)">刪除</button></td>
                </tr>
            </tbody>
        </table>
        
            <Pagination :pageInfo="pagination" @pageChange="getProducts"></Pagination>  
            <!-- <nav aria-label="Page navigation example">
                <ul class="pagination justify-content-center">
                    <li class="page-item" :class="{'disabled': !pagination.has_pre}">
                    <a class="page-link" href="#" aria-label="Previous" @click.prevent="getProducts(pagination.current_page-1)">
                        <span aria-hidden="true">&laquo;</span>
                    </a>
                    </li>
                    <li class="page-item" v-for="page in pagination.total_pages" :key="page" :class="{'active':pagination.current_page==page}">
                        <a class="page-link" href="#" @click.prevent="getProducts(page)">{{page}}</a>
                    </li>
                    
                    <li class="page-item" :class="{'disabled': !pagination.has_next}">
                    <a class="page-link" href="#" aria-label="Next" @click.prevent="getProducts(pagination.current_page+1)">
                        <span aria-hidden="true">&raquo;</span>
                    </a>
                    </li>
                </ul>
            </nav> -->

            <div class="modal fade" id="addProduct" tabindex="-1" role="dialog"
                aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div class="modal-dialog modal-lg" role="document">
                    <div class="modal-content border-0">
                    <div class="modal-header bg-dark text-white">
                        <h5 class="modal-title" id="exampleModalLabel">
                        <span>新增產品</span>
                        </h5>
                        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div class="modal-body">
                        <div class="row">
                        <div class="col-sm-4">
                            <div class="form-group">
                            <label for="image">輸入圖片網址</label>
                            <input type="text" class="form-control" id="image"
                                placeholder="請輸入圖片連結" v-model="tempProduct.imageUrl">
                            </div>
                            <div class="form-group">
                            <label for="customFile">或 上傳圖片
                                <i class="fas fa-spinner fa-pulse" v-if="status.isUploading"></i>
                            </label>
                            <input type="file" id="customFile" class="form-control"
                                ref="files" @change="uploadImage()">
                            </div>
                            <img img="" :src="tempProduct.imageUrl"
                            class="img-fluid" alt="" >
                        </div>
                        <div class="col-sm-8">
                            <div class="form-group">
                            <label for="title">標題</label>
                            <input type="text" class="form-control" id="title"
                                placeholder="請輸入標題" v-model="tempProduct.title">
                            </div>

                            <div class="form-row">
                            <div class="form-group col-md-6">
                                <label for="category">分類</label>
                                <input type="text" class="form-control" id="category"
                                placeholder="請輸入分類" v-model="tempProduct.category">
                            </div>
                            <div class="form-group col-md-6">
                                <label for="unit">單位</label>
                                <input type="unit" class="form-control" id="unit"
                                placeholder="請輸入單位" v-model="tempProduct.unit">
                            </div>
                            </div>

                            <div class="form-row">
                            <div class="form-group col-md-6">
                            <label for="origin_price">原價</label>
                                <input type="number" class="form-control" id="origin_price"
                                placeholder="請輸入原價" v-model="tempProduct.origin_price">
                            </div>
                            <div class="form-group col-md-6">
                                <label for="price">售價</label>
                                <input type="number" class="form-control" id="price"
                                placeholder="請輸入售價" v-model="tempProduct.price">
                            </div>
                            </div>
                            <hr>

                            <div class="form-group">
                            <label for="description">產品描述</label>
                            <textarea type="text" class="form-control" id="description"
                                placeholder="請輸入產品描述" v-model="tempProduct.description"></textarea>
                            </div>
                            <div class="form-group">
                            <label for="content">說明內容</label>
                            <textarea type="text" class="form-control" id="content"
                                placeholder="請輸入產品說明內容" v-model="tempProduct.content"></textarea>
                            </div>
                            <div class="form-group">
                            <div class="form-check">
                                <input class="form-check-input" type="checkbox"
                                id="is_enabled" v-model="tempProduct.isEnabled"
                                :true-value="1" :false-value="0">
                                <label class="form-check-label" for="is_enabled">
                                是否啟用
                                </label>
                            </div>
                            </div>
                        </div>
                        </div>
                    </div>
                    <div class="modal-footer">
                        
                        <button type="button" class="btn btn-outline-secondary" data-dismiss="modal">取消</button>
                        <button type="button" class="btn btn-primary" @click="updateProduct">確認</button>
                        
                    </div>
                    </div>
                </div>
                </div>
                <div class="modal fade" id="delProductModal" tabindex="-1" role="dialog"
                aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div class="modal-dialog" role="document">
                    <div class="modal-content border-0">
                    <div class="modal-header bg-danger text-white">
                        <h5 class="modal-title" id="exampleModalLabel">
                        <span>刪除產品</span>
                        </h5>
                        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div class="modal-body">
                        是否刪除 <strong class="text-danger"></strong> {{tempProduct.title}} 商品(刪除後將無法恢復)。
                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-outline-secondary" data-dismiss="modal">取消</button>
                        <button type="button" class="btn btn-danger" @click="deleteProduct()"
                        >確認刪除</button>
                    </div>
                    </div>
                </div>
            </div>
    </div>
</template>

<script>

import $ from "jquery" //引入這個vue才能看得懂$符號
import Pagination from './Pagination'

export default {  //使用export才能讓其他元件使用這裡的東西
    components: {
        Pagination,
    },
    data(){
        return{
            pagination:{},
            products:[],
            tempProduct:{

            },
            isNew:false,
            isEdit:false,
            isDelete:false,
            isLoading:false,
            status:{
                isUploading:false
            }
        }
    },
    methods:{
        getProducts(page){
            
            const vm=this;
            vm.isLoading=true
            const api=`${process.env.APIPATH}/api/${process.env.APIKEY}/products?page=${page}`;//'https://vue-course-api.hexschool.io/api/eric840906/products'
            this.$http.get(api).then((response) => {
            console.log(response.data)
            vm.isLoading=false
            vm.products=response.data.products; 
            vm.pagination=response.data.pagination;
            console.log(vm.pagination.current_page)
            })               
            
        },
        openModal(status, item){  //以javascript的方式來設定modal開關，方便在開啟前進行抓資料、確認等動作，例如在這裡加入判斷新增還是編輯商品
            switch(status){
                case 'isNew':
                this.tempProduct={};
                this.isNew=true;
                $('#addProduct').modal('show');
                break;
                case 'isEdit':
                this.tempProduct=Object.assign({},item);
                $('#addProduct').modal('show');
                break;
                case 'isDelete':
                this.tempProduct=item;
                $('#delProductModal').modal('show');
                break;

            }

            //原編輯/新增判定(已改為使用switch判定)
            // if(isNew){
            //     this.tempProduct={};
            //     this.isNew=true
            // }else{
            //     this.tempProduct=Object.assign({},item); //用Object.assign()方法將目前的item寫入一個空物件，避免傳參考
            //     this.isNew=false
            // }
            // $('#addProduct').modal('show')
           
            

            
            
        },
        updateProduct(){
            const vm=this;
            let api=`${process.env.APIPATH}/api/${process.env.APIKEY}/admin/product`;//'https://vue-course-api.hexschool.io/api/eric840906/products'
            let httpMedthod='post';
            if(!vm.isNew){
                httpMedthod='put'
                api=`${process.env.APIPATH}/api/${process.env.APIKEY}/admin/product/${vm.tempProduct.id}`
                                            //把vm.tempProduct包起來加一個data屬性符合目標api的資料格式才不會出錯
                this.$http[httpMedthod](api, {data: vm.tempProduct}).then((response) => {
                
                }) 
            }
            this.$http[httpMedthod](api, {data: vm.tempProduct}).then((response) => {
            console.log(response.data)
            if(response.data.success){
                $('#addProduct').modal('hide')
                vm.getProducts()
            }else{
                $('#addProduct').modal('hide')
                vm.getProducts()
                alert("新增失敗")
            }
            //vm.products=response.data.products; 
            }) 
            
            
                 
        },
        uploadImage(){//步驟: 1取出檔案(uploadedImage) 2.建立一個formData 3.以formData將檔案加入(符合API存放的位置) 4.送出檔案
            console.log(this)//透過這個可以在console看到上傳圖片被放在哪(this.$ref.files.files[0])
            const uploadedImage = this.$refs.files.files[0];
            const vm=this;
            vm.status.isUploading=true
            const formData= new FormData();  //https://developer.mozilla.org/en-US/docs/Web/API/FormData/FormData         可將資料以表單方式傳送的WEB API
            formData.append("file-to-upload",uploadedImage) //(傳出去後存放的位置，看API)
            const url = `${process.env.APIPATH}/api/${process.env.APIKEY}/admin/upload`;
            this.$http.post(url, formData,{
                headers:{
                    'Content-Type':'multipart/form-data'
                }
            }).then((response)=>{
                console.log(response.data)
                vm.status.isUploading=false
                if(response.data.success){
                    //vm.tempProduct.image=response.data.imageUrl  //只寫到這測試的時候會發現圖片連結確實有存到，但沒有getter和setter，這時候要用$set強制寫入才能確保圖片雙向綁定
                    vm.$set(vm.tempProduct,'imageUrl',response.data.imageUrl)
                    this.$bus.$emit('message:push','圖片上傳成功','success');
                    
                }else
                {
                    console.log(response.data)
                    this.$bus.$emit('message:push','圖片上傳失敗','success');
                }
            })
        },
        //原刪除判定(已改為使用switch判定併入openModal())
        // deletConfirm(item){
        //     this.tempProduct=Object.assign({},item);
        //     $('#delProductModal').modal('show')
        // },
        deleteProduct(){
            
            const vm=this;
            let api=`${process.env.APIPATH}/api/${process.env.APIKEY}/admin/product/${vm.tempProduct.id}`
            this.$http.delete(api).then((response) => {
                console.log(response.data)
                if(response.data.success){
                console.log('刪除成功')
                vm.getProducts()
                $('#delProductModal').modal('hide') 
                this.$bus.$emit('message:push',`成功刪除商品:${vm.tempProduct.title}`,'danger');
            }
            })
            
            
        }
    },
    created() {
        this.getProducts();
        
    },
    
}
</script>