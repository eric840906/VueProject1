<template>
    <div>
        
        <Navbar></Navbar>        
        <main role="main">

            <section class="jumbotron text-center" style="border-radius: 0; padding-bottom: 104px;; margin-bottom:0; backgroundImage:url(https://images.unsplash.com/photo-1577218546063-5e53e820851e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80); background-size: cover; background-position: center;">
                
                <div class="page-title" style="margin-top:30px; color:white;">
                    <h1 style="font-family: 'Tangerine', cursive; font-size: 4.5rem;">Promotion</h1>
                    <br>
                    <p class="lead">自己的優惠自己翻</p>
                </div>
                
            </section>
            
            <div class="album py-5 bg-light">
                <div class="container"> 
                    <!-- <a href="" @click.prevent="startDrawing">點擊開始抽優惠</a> -->
                    
                    <div class="card-deck mb-3 text-center">
                        <VueSlickCarousel v-bind="settings">
                            <div class="card mb-4 shadow-sm card-background">
                                <div class="front face"></div>                                                          
                                <div class="back">
                                    <div class="card-header" :class="{'small-discount-title':coupons[0].discount<=20, 'big-discount-title':coupons[0].discount>=50, 'normal-discount-title': coupons[0].discount<50 && coupons[0].discount>20}">
                                        <h4 class="my-0 font-weight-normal">{{coupons[0].title}}</h4>
                                    </div>
                                    <div class="card-body" :class="{'small-discount-title':coupons[0].discount<=20, 'big-discount-title':coupons[0].discount>=50, 'normal-discount-title': coupons[0].discount<50 && coupons[0].discount>20}">
                                        <h1 class="card-title pricing-card-title">{{coupons[0].discount}}%off</h1>
                                        <h2>優惠代碼</h2>
                                        <input type="text" class="code" :value="coupons[0].code" readonly="readonly">
                                        <h3>使用期限:{{coupons[0].due_date}}</h3>
                                        <a class="btn btn-lg btn-block btn-outline-primary" @click.prevent="copyCode">複製優惠碼</a>
                                        
                                    </div>
                                    
                                    <div class="card-footer">
                                        
                                        <router-link class="btn btn-lg btn-block btn-outline-primary" style="border-radius: 35px;" to="/shoppage/shoppingmain">前往購物區</router-link>
                                        
                                    </div>                                
                                </div>                            
                            </div>
                            <div class="card mb-4 shadow-sm card-background">
                                <div class="front face"></div>                                                          
                                <div class="back">
                                    <div class="card-header" :class="{'small-discount-title':coupons[1].discount<=20, 'big-discount-title':coupons[1].discount>=50, 'normal-discount-title': coupons[1].discount<50 && coupons[1].discount>20}">
                                        <h4 class="my-0 font-weight-normal">{{coupons[1].title}}</h4>
                                    </div>
                                    <div class="card-body" :class="{'small-discount-title':coupons[1].discount<=20, 'big-discount-title':coupons[1].discount>=50, 'normal-discount-title': coupons[1].discount<50 && coupons[1].discount>20}">
                                        <h1 class="card-title pricing-card-title">{{coupons[1].discount}}%off</h1>
                                        <h2>優惠代碼</h2>
                                        <input type="text" class="code" :value="coupons[1].code" readonly="readonly">
                                        <h3>使用期限:{{coupons[1].due_date}}</h3>
                                        <a class="btn btn-lg btn-block btn-outline-primary" @click.prevent="copyCode">複製優惠碼</a>
                                        
                                    </div>
                                    
                                    <div class="card-footer">
                                        
                                        <router-link class="btn btn-lg btn-block btn-outline-primary" style="border-radius: 35px;" to="/shoppage/shoppingmain">前往購物區</router-link>
                                        
                                    </div>                                
                                </div>                            
                            </div>
                            <div class="card mb-4 shadow-sm card-background">
                                <div class="front face"></div>                                                          
                                <div class="back">
                                    <div class="card-header" :class="{'small-discount-title':coupons[2].discount<=20, 'big-discount-title':coupons[2].discount>=50, 'normal-discount-title': coupons[2].discount<50 && coupons[2].discount>20}">
                                        <h4 class="my-0 font-weight-normal">{{coupons[2].title}}</h4>
                                    </div>
                                    <div class="card-body" :class="{'small-discount-title':coupons[2].discount<=20, 'big-discount-title':coupons[2].discount>=50, 'normal-discount-title': coupons[2].discount<50 && coupons[2].discount>20}">
                                        <h1 class="card-title pricing-card-title">{{coupons[2].discount}}%off</h1>
                                        <h2>優惠代碼</h2>
                                        <input type="text" class="code" :value="coupons[2].code" readonly="readonly">
                                        <h3>使用期限:{{coupons[2].due_date}}</h3>
                                        <a class="btn btn-lg btn-block btn-outline-primary" @click.prevent="copyCode">複製優惠碼</a>
                                        
                                    </div>
                                    
                                    <div class="card-footer">
                                        
                                        <router-link class="btn btn-lg btn-block btn-outline-primary" style="border-radius: 35px;" to="/shoppage/shoppingmain">前往購物區</router-link>
                                        
                                    </div>                                
                                </div>                            
                            </div>
                        </VueSlickCarousel>
                        <!-- <div class="card mb-4 shadow-sm" style="background: antiquewhite;">
                            <div class="front face" style="backgroundImage:url(https://i.pinimg.com/564x/c1/59/b4/c159b4738dae9c9d8d6417228024de8d.jpg)"></div>                                                          
                            <div class="back">
                                <div class="card-header" :class="{'small-discount-title':coupons[0].discount<=20, 'big-discount-title':coupons[0].discount>=50, 'normal-discount-title': coupons[0].discount<50 && coupons[0].discount>20}">
                                    <h4 class="my-0 font-weight-normal">{{coupons[0].title}}</h4>
                                </div>
                                <div class="card-body" :class="{'small-discount-title':coupons[0].discount<=20, 'big-discount-title':coupons[0].discount>=50, 'normal-discount-title': coupons[0].discount<50 && coupons[0].discount>20}">
                                    <h1 class="card-title pricing-card-title">{{coupons[0].discount}}%off</h1>
                                    <h2>優惠代碼</h2>
                                    <h2>{{coupons[0].code}}</h2>
                                    <h3>使用期限:{{coupons[0].due_date}}</h3>
                                    
                                </div>
                                <div class="card-footer" style="background: antiquewhite; " >
                                    <router-link class="btn btn-lg btn-block btn-outline-primary" style="border-radius: 35px;" to="/shoppage/shoppingmain">前往購物區</router-link>
                                </div>                                
                            </div>                            
                        </div>
                        <div class="card mb-4 shadow-sm" style="background: antiquewhite;">
                            <div class="front face" style="backgroundImage:url(https://i.pinimg.com/564x/c1/59/b4/c159b4738dae9c9d8d6417228024de8d.jpg)"></div>                                                          
                            <div class="back">
                                <div class="card-header" :class="{'small-discount-title':coupons[1].discount<=20, 'big-discount-title':coupons[1].discount>=50, 'normal-discount-title': coupons[1].discount<50 && coupons[1].discount>20}">
                                    <h4 class="my-0 font-weight-normal">{{coupons[1].title}}</h4>
                                </div>
                                <div class="card-body" :class="{'small-discount-title':coupons[1].discount<=20, 'big-discount-title':coupons[1].discount>=50, 'normal-discount-title': coupons[1].discount<50 && coupons[1].discount>20}">
                                    <h1 class="card-title pricing-card-title">{{coupons[1].discount}}%off</h1>
                                    <h2>優惠代碼</h2>
                                    <h2>{{coupons[1].code}}</h2>
                                    <h3>使用期限:{{coupons[1].due_date}}</h3>
                                    
                                </div>
                                <div class="card-footer" style="background: antiquewhite; " >
                                    <router-link class="btn btn-lg btn-block btn-outline-primary" style="border-radius: 35px;" to="/shoppage/shoppingmain">前往購物區</router-link>
                                </div>                                
                            </div>                            
                        </div>
                        <div class="card mb-4 shadow-sm" style="background: antiquewhite;">
                            <div class="front face" style="backgroundImage:url(https://i.pinimg.com/564x/c1/59/b4/c159b4738dae9c9d8d6417228024de8d.jpg)"></div>                                                          
                            <div class="back">
                                <div class="card-header" :class="{'small-discount-title':coupons[2].discount<=20, 'big-discount-title':coupons[2].discount>=50, 'normal-discount-title': coupons[2].discount<50 && coupons[2].discount>20}">
                                    <h4 class="my-0 font-weight-normal">{{coupons[2].title}}</h4>
                                </div>
                                <div class="card-body" :class="{'small-discount-title':coupons[2].discount<=20, 'big-discount-title':coupons[2].discount>=50, 'normal-discount-title': coupons[2].discount<50 && coupons[2].discount>20}">
                                    <h1 class="card-title pricing-card-title">{{coupons[2].discount}}%off</h1>
                                    <h2>優惠代碼</h2>
                                    <h2>{{coupons[2].code}}</h2>
                                    <h3>使用期限:{{coupons[2].due_date}}</h3>
                                    
                                </div>
                                <div class="card-footer" style="background: antiquewhite; " >
                                    <router-link class="btn btn-lg btn-block btn-outline-primary" style="border-radius: 35px;" to="/shoppage/shoppingmain">前往購物區</router-link>
                                </div>                                
                            </div>                            
                        </div> -->
                    </div>
                    
                </div>
                
                
                <!-- <div class="container">
                    <div class="card darth col-sm-4">
                        <div class="face front">
                            <img class="logo" src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/261096/Star_Wars_Logo.svg" />
                            <h2><small>Darth</small><br/>Vader</h2>
                            <cite>
                            <a href="http://6kart.deviantart.com/art/Darth-Vader-415281288" target="_blank">Vader Image by 6Kart</a>
                            </cite>
                        </div>
                        <div class="face back">
                            <img src="http://img.lum.dolimg.com/v1/images/Darth-Vader_6bda9114.jpeg?region=0%2C23%2C1400%2C785&width=768" alt="Image of Darth Vader" />
                            <div class="description">Once a heroic Jedi Knight, <b>Darth Vader</b> was seduced by the dark side of the Force, became a Sith Lord, and led the Empire’s eradication of the Jedi Order. He remained in service of the Emperor -- the evil Darth Sidious -- for decades, enforcing
                            his Master’s will and seeking to crush the fledgling Rebel Alliance. But there was still good in him…</div>
                            <img class="logo" src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/261096/Star_Wars_Logo.svg" />
                        </div>
                        </div>
                        <div class="card luke col-sm-4">
                        <div class="face front">
                            <img class="logo" src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/261096/Star_Wars_Logo.svg" />
                            <h2><small>Luke</small><br/>Skywalker</h2>
                            <cite>
                            <a href="http://salvadortrakal.deviantart.com/art/Luke-Skywalker-352420315" target="_blank">Luke Image by SalvadorTrakal</a>
                            </cite>
                        </div>
                        <div class="face back">
                            <img src="http://img.lum.dolimg.com/v1/images/Luke-Skywalker_dd9c9f9b.jpeg?region=0%2C0%2C1536%2C864&width=768" alt="Image of luke skywalker" />
                            <div class="description">
                            <b>Luke Skywalker</b> was a Tatooine farmboy who rose from humble beginnings to become one of the greatest Jedi the galaxy has ever known. Along with his friends Princess Leia and Han Solo, Luke battled the evil Empire, discovered the truth of his
                            parentage, and ended the tyranny of the Sith.</div>
                            <img class="logo" src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/261096/Star_Wars_Logo.svg" />
                        </div>
                    </div>
                    
                </div> -->
                <!-- <Cart :cartInfo="cartList" :isloading="productStatus.loading" @refreshCart="getCart" @removeItem="removeCart"></Cart> -->
                
            </div>
            
        </main>
        
        <!-- Modal -->
        <div class="modal fade" id="start-modal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div class="modal-dialog modal-dialog-centered">
                <div class="modal-content">                
                    <div class="modal-body start-modal text-center">
                        <div class="lds-circle"><div></div></div>
                        <h3 class="loading-text">試試手氣翻一張優惠卡吧</h3>
                        <h3 class="loading-text">點擊後開始翻牌</h3>
                    </div>                
                </div>
            </div>
        </div>

        <Footer></Footer>
    </div>
</template>

<script>
import $ from 'jquery'
import Navbar from './HomeNav'
import Gotop from './GoTop'
import Footer from './Footer'
import VueSlickCarousel from 'vue-slick-carousel'
export default {
    components:{
        Navbar,
        Gotop,
        Footer,
        VueSlickCarousel
    },
    data(){
        return{
                settings:{
            "arrows": false,
            "dots": true,
            "infinite": true,
            "slidesToShow": 3,
            "slidesToScroll": 1,
            "autoplay": false,
            "speed": 300,
            "autoplaySpeed": 1000,
            "cssEase": "linear",
            "responsive":[
                {
                "breakpoint": 500,
                "settings": {
                        "slidesToShow": 1, //一次顯示1個
                        "slidesToScroll": 1,//切換下一頁時移動1個
                }
                },
               
                
            ]
                
            
            },
            coupons:[
                {
                    'due_date':'2020-09-06',
                    'code':'FpNm9d49syE',
                    'discount': 30,
                    'title':'周年慶'
                },
                {
                    'due_date':'2020-08-31',
                    'code':'Si7e98g1IqhY',
                    'discount': 20,
                    'title':'暑假優惠'
                },
                {
                    'due_date':'2020-08-02',
                    'code':'yDh7e1sU5Kj',
                    'discount': 10,
                    'title':'夏日特賣'
                },
                {
                    'due_date':'2020-08-31',
                    'code':'GtyH8tAfl6k',
                    'discount': 5,
                    'title':'清涼一夏'
                },
                {
                    'due_date':'2020-12-31',
                    'code':'ht37YWRtyrjU',
                    'discount': 50,
                    'title':'頭獎'
                },
                {
                    'due_date':'2020-12-31',
                    'code':'JGd5u0EjkA',
                    'discount': 30,
                    'title':'二獎'
                },
                {
                    'due_date':'2020-12-31',
                    'code':'fH1tK8pd6B',
                    'discount': 25,
                    'title':'三獎'
                },
                
            ],
            shuffleCoupons:'',
            comparisonA:'',
            comparisonB:'',
            randomCoupons:[]
            
        }
    },
    methods:{
        randomSort(a, b) {
        const vm=this
        // // 如果原陣列arr的length值等於1時，原陣列只有一個值，其鍵值為0
        // // 同時將這個值push到新陣列newArr中
        // if(arr.length == 1) {
        // newArr.push(arr[0]);
        // return newArr; // 相當於遞迴退出
        // }
        // // 在原陣列length基礎上取出一個隨機數
        // let random = Math.ceil(Math.random() * arr.length) - 1;
        // // 將原陣列中的隨機一個值push到新陣列newArr中
        // newArr.push(arr[random]);
        // // 對應刪除原陣列arr的對應陣列項
        
        // return randomSort(arr, newArr);
        vm.shuffleCoupons= Math.random() > 0.5 ? -1 : 1;
        },
        shuffleCoupon(){
            const vm=this                        
            vm.coupons.sort(function(){
                vm.comparisonA=Math.random()
                vm.comparisonB=Math.random()
                if (vm.comparisonA>vm.comparisonB) {
                    return -1;
                }
                if (vm.comparisonA<vm.comparisonB) {
                    return 1;
                }
                // a must be equal to b
                return 0;
            })
        },
        getCoupon(){
            const vm=this;
            for(let i=0; i<3; i++){
                let a=parseInt(Math.random()*7);
                vm.randomCoupons.push(vm.coupons[a])
            }
            console.log(vm.randomCoupons)
        },
        startDrawing(){
            $('.start-btn').fadeOut();
            $('.card-deck').fadeIn();

        },
        copyCode(e){            
            let couponCode = $(e.currentTarget).closest('.card-body').find('.code')            
            couponCode.select()

            try {
                var successful = document.execCommand('copy');
                var msg = successful ? 'successful' : 'unsuccessful';
                alert('Testing code was copied ' + msg);
            } catch (err) {
                alert('Oops, unable to copy');
            }
            
            

        }
        

        
    },
    mounted(){
        $(".card").click(function(e){
            $(e.currentTarget).addClass("flip");
            
            $(".card").off() //翻一張牌之後停止對所有兄弟的監聽
            
            
        });
        $('#start-modal').modal('show')
        $('body').click(function(e){
            $('#start-modal').modal('hide')
        });

        // $(".copybtn").click(function(e){
        //     e.preventDefault();            
        //     $(e.currentTarget).closest('.code').document.execCommand('copy');
        // })


        
    },
    created(){        
        this.shuffleCoupon()
        this.getCoupon()
        
        
    }
}
</script>

<style lang="scss" scoped>
@import url(https://fonts.googleapis.com/css2?family=Tangerine:wght@700&display=swap);

*{
    font-family: 'cwTeXYen', sans-serif;
}


.jumbotron{
    height: 400px;
    margin-top: 22px;
    h1{
        display: inline-block;
    }
}

.start-btn{
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(50%,50%);
}

@mixin flip($speed: 0.5s, $direction: "y") {
  position: relative;
  transform-style: preserve-3d;
  transition: transform $speed;
  &.flip {
    @if $direction == "x" {
      transform: rotateX(180deg);
    } 
    @if $direction == "y" {
      transform: rotateY(180deg);
    } 
    @if $direction == "z" {
      transform: rotateZ(180deg);
    } 
    transition: transform $speed;
  }
  .face {
    // setup the face of the card to match the size of the card;
    position: absolute;
    top: 0px; left: 0px;
    bottom: 0px; right: 0px;
    backface-visibility: hidden;
    transform: translateZ(0.1px); // fix for safari.
  }
  .back {
    // flip the back
    @if $direction == "x" {
      transform: rotateX(180deg);
    } 
    @if $direction == "y" {
      transform: rotateY(180deg);
    } 
    @if $direction == "z" {
      transform: rotateZ(180deg);
    }   
  }
}


.card{
    @include flip();
    cursor: pointer;
    display: inline-block;
    width: auto !important;
    border-radius: 15px;
}

.card-background{
    background: antiquewhite;
}

.front{
    background-position: center;
    background-image:url(https://i.pinimg.com/564x/c1/59/b4/c159b4738dae9c9d8d6417228024de8d.jpg)
}
.slick-slide {
    margin: 0 10px;
  }

@media(min-width: 1024px){
    .card{
            height: 490px;
    }
}


//loading effect
.start-modal{
    background-color: #000000;
    .loading-text{
        font-family: 'cwTeXYen', sans-serif;
        color: white;
    }
}

.lds-circle {
  display: inline-block;
  transform: translateZ(1px);
}
.lds-circle > div {
  display: inline-block;
  width: 64px;
  height: 64px;
  margin: 8px;
  border-radius: 50%;
  background: #fff;
  animation: lds-circle 2.4s cubic-bezier(0, 0.2, 0.8, 1) infinite;
}
@keyframes lds-circle {
  0%, 100% {
    animation-timing-function: cubic-bezier(0.5, 0, 1, 0.5);
  }
  0% {
    transform: rotateY(0deg);
  }
  50% {
    transform: rotateY(1800deg);
    animation-timing-function: cubic-bezier(0, 0.5, 0.5, 1);
  }
  100% {
    transform: rotateY(3600deg);
  }
}


//優惠css

.small-discount-title{
    color: #007bff;
}

.normal-discount-title{
    color: rgb(141, 141, 252);
}

.big-discount-title{
    color: #ff9a00;
}

.code{
    text-align: center;
    border: none;
    background: none;
}

.card-footer{
    
        .btn{
            &:hover{
            background-color: black;
            border: none;
            color: #ffdf76;
            }
        }
    
}

</style>
