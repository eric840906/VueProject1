<template>
    <div>
        
    </div>
</template>

<script>
import $ from 'jquery'
export default {
    data(){
        return{

        }
    },
    methods:{
         getCities(callback) {
            const vm=this;
            
            const api='http://www.ibon.com.tw/retail_inquiry.aspx#gsc.tab=0';//'https://vue-course-api.hexschool.io/api/eric840906/products'
            this.$http.get(api).then((response) => {
                var $ = cheerio.load(body)
                var cities = $('#Class1 option').map((index, obj) => {
                return $(obj).text()
                console.log(cities)
                })
                
            // console.log(response.data)
            // vm.isLoading=false
            // vm.products=response.data.products; 
            // console.log(vm.products)
            
                         
            // request('http://www.ibon.com.tw/retail_inquiry.aspx#gsc.tab=0', (err, res, body) => {
            //     var $ = cheerio.load(body)
            //     var cities = $('#Class1 option').map((index, obj) => {
            //     return $(obj).text()
            //     }).get()
            //     callback(cities)
            //     console.log(cities)
            // })
            })
        },
    },
    created(){
        this.getCities()
    }
}
</script>