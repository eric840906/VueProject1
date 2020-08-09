<template>
    <div>
        <header>
        <nav class="main-nav navbar navbar-expand-md navbar-dark fixed-top black">
            <a class="navbar-brand" href="#" style="font-family: 'Tangerine', cursive;">Lächeln</a>
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
                <div class="navbar-nav ml-auto">
                <router-link class="nav-item nav-link" to="/">首頁</router-link>
                <router-link class="nav-item nav-link" to="/shoppage/shoppingmain">商品列表</router-link>
                <router-link class="nav-item nav-link" to="/couponjackpot" >優惠資訊</router-link>
                <router-link class="nav-item nav-link" to="/storeinfo" >門市資訊</router-link>
                <router-link class="nav-item nav-link" to="/commentform" >留言板</router-link>
                <router-link class="nav-item nav-link" to="/contact">聯絡我們</router-link>
                </div>
            </div>
        </nav>
        </header>
    </div>
</template>



<script>
import $ from 'jquery'
export default {
    mounted(){
        $(window).on("scroll", function() {
            if($(window).scrollTop()) {
                  $('.main-nav').addClass('top-nav');
            }

            else {
                  $('.main-nav').removeClass('top-nav');
            }
      })
    }
}
</script>


<style lang="scss">

.nav-item{
    font-family: 'cwTeXYen', sans-serif;
}
.navbar-brand{
    background-color: transparent;
    -webkit-box-shadow: none;
    box-shadow: none;    
    font-size: 30px;
    
}

.black{
    background-color: black;
    transition: 0.5s;
}

.top-nav{
    background-color: rgba(0,0,0,0.5) !important;
    
}








</style>