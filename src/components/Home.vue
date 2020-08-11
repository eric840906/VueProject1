<template>
    <div>
        <Navbar></Navbar>

<main role="main">

  <div id="myCarousel" class="carousel slide carousel-fade" data-ride="carousel">
    
    <div class="carousel-inner embed-responsive-21by9">
      
      <div class="carousel-item embed-responsive-item active" style="backgroundImage:url(https://images.unsplash.com/photo-1560801619-01d71da0f70c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80); background-size: cover; background-position: bottom;">
        <div class="container">
          <div class="carousel-caption">
            <h1>Lächeln</h1>
            <h3>Facts are irrelevant</h3>
            <h3>What matters is what the consumer believes</h3>
          </div>
        </div>
      </div>
      <div class="carousel-item embed-responsive-item" style="backgroundImage:url(https://images.unsplash.com/photo-1560801530-34efebfecba8?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80); background-size: cover; background-position: center;">
        <div class="container">
          <div class="carousel-caption text-left">
            <h1>Delicacies</h1>
            <h3>You can't buy happiness, </h3>
            <h3>but you can buy ice cream and that is pretty much the same thing</h3>
            <router-link class="btn top-notice-btn" to="/shoppage/shoppingmain"><h2 class="mr-0">View Products</h2></router-link>            
          </div>
        </div>
      </div>
      <div class="carousel-item embed-responsive-item" style="backgroundImage:url(https://images.unsplash.com/photo-1515037028865-0a2a82603f7c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1321&q=80); background-size: cover; background-position: bottom;">
        <div class="container">
          <div class="carousel-caption text-right">
            <h1>Event</h1>
            <h2>Life is like an ice cream,</h2>
            <h2>enjoy it before it melts</h2>
            <router-link class="btn top-notice-btn" to="/couponjackpot"><h2 class="mr-0">Grab a coupon</h2></router-link>            
          </div>
        </div>
      </div>
    
    
    </div>
    <a class="carousel-control-prev" href="#myCarousel" role="button" data-slide="prev">
      <span class="carousel-control-prev-icon" aria-hidden="true"></span>
      <span class="sr-only">Previous</span>
    </a>
    <a class="carousel-control-next" href="#myCarousel" role="button" data-slide="next">
      <span class="carousel-control-next-icon" aria-hidden="true"></span>
      <span class="sr-only">Next</span>
    </a>
  </div>


  <!-- Marketing messaging and featurettes
  ================================================== -->
  <!-- Wrap the rest of the page in another container to center all the content. -->

  
  <hr class="featurette-divider">
  <div class="container marketing">
    <h2>Environment</h2>
    
    <div class="row featurette">
    <div class="col-md-4 mb-10"><img class="img-fluid" src="https://images.unsplash.com/photo-1577056922428-a511301a562d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=635&q=80" alt=""></div>
    <div class="col-md-4 row" style="padding: 0; margin: 0;">
      <div class="col-md-12 d-flex" style="margin-bottom: 10px;"><img class="img-fluid" src="https://images.unsplash.com/photo-1544739313-6fad02872377?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80" alt=""></div>
      <div class="col-md-12 d-flex mb-10"><img class="img-fluid" src="https://images.unsplash.com/photo-1570646982637-f6a903ca9e5a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1351&q=80" alt=""></div>
    </div>
    <div class="col-md-4"><img class="img-fluid" src="https://images.unsplash.com/photo-1582926088856-99b2cd02ac13?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80" alt=""></div>
   </div>
  </div>
  <hr class="featurette-divider">
    <!-- START THE FEATURETTES -->
  <section style="backgroundImage:url(https://images.unsplash.com/photo-1589880442905-546b351e81dc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80); background-size: cover; background-attachment: fixed; padding: 160px 0px;background-position: center; background-repeat: no-repeat;">
    <div class="container marketing concept" style="color:white;">
    <h1>Concept</h1>
    <div class="row featurette">
      <div class="col-md-7" >
        <h3 class="featurette-heading">If life is a bowl of dark ice cream, small moments we enjoyed are colorful sprinkles all over it.</h3>        
        <!-- <a class="notice-btn btn" href="#">Learn more</a> -->
      </div>      
    </div>
  </div>
  </section>  

  <hr class="featurette-divider">
  <div class="container marketing" >
    <h2>Customer Comments</h2>
    <VueSlickCarousel v-bind="settings" :arrows="true">
      <div v-for="item in randomCarousel" :key="item.id">
        <div class="col-12 text-center">
        <img src="../assets/image/comment7.png" class="user-image d-inline">
        <h2 class="grading"><font-awesome-icon  v-for="item in Number(item.data.grading)" :key="item.id" icon="star" /></h2>
        <h4 class="user-name">{{item.data.name}}</h4>
        <p class="comments">{{item.data.message}}</p>        
        </div>
      </div>
            
    </VueSlickCarousel>
    
  </div>
  

  <hr class="featurette-divider" style="border:none">

    
    <!-- /END THE FEATURETTES -->

  <!-- /.container -->


  

<!-- Footer -->
<Footer></Footer>
</main>
    </div>
</template>


<script>

import $ from 'jquery'
import VueSlickCarousel from 'vue-slick-carousel'
import 'vue-slick-carousel/dist/vue-slick-carousel.css'
import 'vue-slick-carousel/dist/vue-slick-carousel-theme.css'
import Navbar from './HomeNav'
import GoTop from './GoTop'
import Footer from './Footer'
export default {
    components:{
        Navbar,
        GoTop,
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
          "autoplay": true,
          "speed": 2000,
          "autoplaySpeed": 2000,
          "cssEase": "linear",
          "responsive":[
            {
              "breakpoint": 500,
              "settings": {
                    
                    "autoplay": true,
                    "slidesToShow": 1, //一次顯示1個
                    "slidesToScroll": 1,//切換下一頁時移動1個
              }
            },
            
          ]
            
          
        },
        UserComments:[
          {
            data:{
              
            }
          }
        ],        
        comparisonA:'',
        comparisonB:'',
        randomCarousel:[
          
        ]
        
      }
    },
    methods:{
      commentGet(){
            const vm = this;
            let api = 'https://json-server-test999.herokuapp.com/posts'
            this.$http.get(api).then((response) => {
                vm.comparisonA=Math.random()
                vm.comparisonB=Math.random()
                console.log(response)                
                vm.UserComments=response.data;
                this.shuffleCarousel();
                this.getNewCarousel();
                
                
                      
                
                
            }) 
      },      
      shuffleCarousel(){
            const vm=this;                    
            vm.UserComments.sort(function(){
                
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
      getNewCarousel(){
            const vm=this;
                if(vm.randomCarousel.length>=6){
                  for(let i=0; i<6; i++){
                  let a=parseInt(Math.random()*vm.UserComments.length);
                  vm.randomCarousel.push(vm.UserComments[a])
                  vm.UserComments.splice(a,1)
                  }
                }else if(vm.randomCarousel.length<6){
                  for(let i=0; i<randomCarousel.length; i++){
                  let a=parseInt(Math.random()*vm.UserComments.length);
                  vm.randomCarousel.push(vm.UserComments[a])
                  vm.UserComments.splice(a,1)
                  }
                }
                
      }
    },     
    mounted(){
      $(window).scroll( function(){
        $('.concept').each( function(i){
            
            var bottom_of_object = $(this).offset().top + $(this).outerHeight();
            var bottom_of_window = $(window).scrollTop() + $(window).height();
            
            /* If the object is completely visible in the window, fade it it */
            if( bottom_of_window > bottom_of_object ){
                
                $(this).animate({'opacity':'1'},1500);
                    
            }
            
        }); 
      })
    },    
    
    beforeCreate(){
      $('#loadingModal').modal('hide')    
    },
    created(){
      this.commentGet();      
      
      
    }
    
}
</script>



<style lang="scss" scoped>
/* GLOBAL STYLES

-------------------------------------------------- */
/* Padding below the footer and lighter body text */
@import url(https://fonts.googleapis.com/css2?family=Tangerine:wght@700&display=swap);
*{
  font-family: 'Tangerine', cursive;
  
}
h1{
  font-size: 4.5rem;
}
.mr-0{
  margin: 0;
}
.comments, .section-title{
  font-family: 'cwTeXYen', sans-serif;
}
.user-name{
  font-family: 'cwTeXYen', sans-serif ;
}

body {
  
  padding-top: 3rem;
  padding-bottom: 0;
  color: #5a5a5a;
}
.user-image{
  width: 140px; 
  border-radius: 150px;
}
.concept{
  opacity: 0;
}

/* CUSTOMIZE THE CAROUSEL
-------------------------------------------------- */

/* Carousel base class */
.carousel {
  margin-bottom: 4rem;
}
/* Since positioning the image, we need to help out the caption */
.carousel-caption {
  bottom: 3rem;
  z-index: 10;
}

/* Declare heights because of positioning of img element */
.carousel-item {
  height: 32rem;
}
.carousel-item > img {
  position: absolute;
  top: 0;
  left: 0;
  min-width: 100%;
  height: 32rem;
}

.carousel-fade {
    .carousel-inner {
        .item {
            transition:0.5s opacity;
        }
        
        .item,
        .active.left,
        .active.right {
            opacity: 0;
        }

        .active,
        .next.left,
        .prev.right {
            opacity: 1;
        }

        .next,
        .prev,
        .active.left,
        .active.right {
            left: 0;
            transform: translate3d(0, 0, 0);
        }
    }

    .carousel-control {
        z-index: 2;
    }
}

/* MARKETING CONTENT
-------------------------------------------------- */

/* Center align the text within the three columns below the carousel */
.marketing .col-lg-4 {
  margin-bottom: 1.5rem;
  text-align: center;
}
.marketing h2 {
  font-weight: 400;
}
.marketing .col-lg-4 p {
  margin-right: .75rem;
  margin-left: .75rem;
}
.grading{
  margin: 8px 0;
  color: #ffc900;
  font-size: 25px;
}

/* Featurettes
------------------------- */

.featurette-divider {
  margin: 5rem 0; /* Space out the Bootstrap <hr> more */
}

/* Thin out the marketing headings */
.featurette-heading {
  font-weight: 300;
  line-height: 1;
  letter-spacing: -.05rem;
}

.homeImage{
    position: relative;
    width: 74%;
    padding: 60% 43%;
    background-position: center 60%;
    background-size: cover;
}

.notice-btn{
    font-size: 20px;
    background-color: transparent;
    border: 1px solid black;
    color: black;
    &:hover{
        border-color: white;
        color: #ffdf76;
        background-color: #494848;
    }
}

.top-notice-btn{
    font-size: 20px;
    background-color: transparent;
    border: none;
    
    animation: color-change 5s infinite;
    &:hover{
        animation: none;
        color: #ffdf76;
        background-color: #00000075;
    }
}
@keyframes color-change {
  0% { color: transparent;}
  50%{ color: rgb(139, 34, 1);}
  75% { color: white; }
  100%{ color: transparent;}  
  
}


/* RESPONSIVE CSS
-------------------------------------------------- */

@media (min-width: 40em) {
  /* Bump up size of carousel content */
  .carousel-caption p {
    margin-bottom: 1.25rem;
    font-size: 1.25rem;
    line-height: 1.4;
  }

  .featurette-heading {
    font-size: 50px;
  }
}

@media (min-width: 62em) {
  .featurette-heading {
    margin-top: 7rem;
  }
}

 @media (min-width:768px){
    .carousel-inner{
    position: relative;
    display: block;
    width: 100%;
    padding: 0;
    overflow: hidden;

        &::before {
            display: block;
            content: "";
        }

        .embed-responsive-item,
        iframe,
        embed,
        object,
        video {
            position: absolute;
            top: 0;
            bottom: 0;
            left: 0;
            width: 100%;
            height: 100%;
            border: 0;
        }
    }
}

@media(max-width: 425px){
  .mb-10{
    margin-bottom: 10px;
  }
}


    
</style>