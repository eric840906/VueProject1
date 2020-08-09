<template>
    <div>        
        <table class="table" style="margin: 30px auto; width:70%">
            <thead>
                <th></th>                
                <th>使用者名稱</th>
                <th>Email</th>
                <th>評價</th>
                <th>留言</th>
                
            </thead>
            <tbody>
                <tr v-for="item in UserComments" :key="item.id">
                <td class="align-middle">
                    <button type="button" class="btn btn-outline-danger btn-sm" @click="commentDelete(item.id)">
                    <i class="far fa-trash-alt"></i>
                    </button>
                </td>
                <td class="align-middle">
                    {{ item.data.name }}                    
                </td>
                <td class="align-middle">{{item.data.email}}</td>
                
                <td class="align-middle">{{item.data.grading}}</td>
                <td class="align-middle">{{item.data.message}}</td>
                
                </tr>
            </tbody>                                   
            
        </table>
        
            
    </div>
</template>

<script>
import $ from 'jquery'

export default {
    components: {
        
    },
    data(){
        return{            
            UserComments:[]
        }
    },
    methods:{
        commentGet(){
            const vm = this;
            let api = 'http://localhost:3000/posts'
            this.$http.get(api).then((response) => {
                console.log(response)
                vm.UserComments=response.data
            }) 
        },
        commentDelete(id){
            const vm = this;
            let api = `http://localhost:3000/posts/${id}`
            this.$http.delete(api).then((response) => {
                console.log(response)
                vm.commentGet();
            }) 
        }
        
    },
    created(){
        this.commentGet();
        
    }
}
</script>

<style>
    input::-webkit-outer-spin-button,
    input::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
    }
</style>