<template>
    <div>
        
        <Navbar></Navbar>        
        <main role="main">

            <section class="jumbotron text-center" style="border-radius: 0; padding-bottom: 104px;; margin-bottom:0; backgroundImage:url(https://images.unsplash.com/photo-1481437156560-3205f6a55735?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1371&q=80); background-size: cover; background-position: center;">
                
                <div class="page-title" style="margin-top:30px;">
                    <h1 style="font-family: 'Tangerine', cursive; font-size: 4.5rem; color: brown;">Information</h1>
                    <br>
                    <p class="lead"></p>
                </div>
                
            </section>
            
            <div class="album py-5 bg-light">
                <div class="container"> 
                    <div class="row">
                        <div class="col-md-4 info-list">
                            <div class="rwd-info-scroll">
                                <div v-for="item in data" :key="item.id" class="info" style="background-color: antiquewhite;">
                                <ul class="list-unstyled" style="text-align: center;">
                                    <li style="border-bottom: 1px solid #d7cfcf;"><h4>{{item.name}}</h4></li>
                                    <li><font-awesome-icon icon="mobile-alt" /><a :href="'tel:'+item.tel">{{item.tel}}</a></li>
                                    <li><font-awesome-icon icon="map-marker-alt" />{{item.address}}</li>
                                    <a href="#" class="btn" @click.prevent="Navigation(item.local[0],item.local[1])">尋找位置</a>                                                           
                                </ul>
                                </div>
                            </div>
                            
                            
                        </div>
                        <div class="col-md-8 d-flex flex-column">
                            <div class="map">
                                <l-map
                                ref="myMap"
                                :zoom="zoom"
                                :center="center"
                                :options="options"
                                style="height: 50vh;">
                                <!-- 載入圖資 -->
                                <l-tile-layer :url="url" :attribution="attribution" />
                                
                                <!-- 自己所在位置 -->
                                <l-marker ref="location" :lat-lng="center">
                                    <l-popup>
                                    你的位置
                                    </l-popup>
                                </l-marker>
                                <!-- 創建標記點 -->
                                <l-marker :lat-lng="item.local" v-for="item in data" :key="item.id">
                                    <!-- 標記點樣式判斷 -->
                                    <l-icon
                                    :icon-url="item.name === '夢時代購物中心'?icon.type.gold:icon.type.black"
                                    :shadow-url="icon.shadowUrl"
                                    :icon-size="icon.iconSize"
                                    :icon-anchor="icon.iconAnchor"
                                    :popup-anchor="icon.popupAnchor"
                                    :shadow-size="icon.shadowSize"
                                    />
                                    <!-- 彈出視窗 -->
                                    <l-popup>
                                    {{ item.name }}
                                    </l-popup>
                                </l-marker>
                                </l-map>
                            </div>
                            
                        </div>
                    </div>
                    
                                   
                </div>                                                          
            </div>            
        </main>        
        

        <Footer></Footer>
    </div>
</template>

<script>
import L from 'leaflet';
import { LMap, LTileLayer, LMarker } from 'vue2-leaflet';
import $ from 'jquery'
import Navbar from './HomeNav'
import Gotop from './GoTop'
import Footer from './Footer'
export default {
    name: 'MyAwesomeMap',
    components:{
        Navbar,
        Gotop,
        Footer,
        LMap,
        LTileLayer,
        LMarker,
    },
    data() {
        return {
        // 模擬資料
            data: [
                { id: 1, name: "桃園總店", local: [24.990031, 121.313311] ,tel: "03-999-8888", address:"330桃園市桃園區長壽街2號"},
                { id: 2, name: "101旗艦店", local: [25.034034, 121.564571],tel: "02-9999-8888", address:"111台北市信義區信義路五段7號"},
                { id: 3, name: "漢神巨蛋店", local: [22.669820, 120.302265],tel: "07-111-2345", address:"813高雄市左營區博愛二路777號"},
                { id: 4, name: "中壢SOGO店", local: [24.962541, 121.223647],tel: "03-111-2222", address:"320桃園市中壢區元化路357號" }
            ],
            
            zoom: 13,
            center: [24.990031, 121.313311],
            url: "https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",
            attribution: `© <a href="http://osm.org/copyright">OpenStreetMap</a> contributors`,
            options: {
            zoomControl: false
            },
            icon: {
            type: {
                black:
                "https://cdn.rawgit.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-black.png",
                gold:
                "https://cdn.rawgit.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-gold.png"
            },
            shadowUrl:
                "https://cdnjs.cloudflare.com/ajax/libs/leaflet/0.7.7/images/marker-shadow.png",
            iconSize: [25, 41],
            iconAnchor: [12, 41],
            popupAnchor: [1, -34],
            shadowSize: [41, 41]
            }
            };
        },
        methods:{
            Navigation(lat, lnt){
                const vm=this
                console.log(lat)
                vm.$refs.myMap.mapObject.flyTo([lat, lnt], 18); 
                //一般情況下用flyTo直接用map.flyTo就行，但要在vue元件使用leaflet的功能都要有vm.$refs.ref(自己取的).mapObject.功能，例如這裡的vm.$refs.myMap.mapObject.flyTo()
                
            }
        },
        mounted() {
            // 等地圖創建後執行
            this.$nextTick(() => {
            // 獲得目前位置
            navigator.geolocation.getCurrentPosition(position => {
                const p = position.coords;
                // 將中心點設為目前的位置
                this.center = [p.latitude, p.longitude];
                // 將目前的位置的標記點彈跳視窗打開
                this.$refs.location.mapObject.openPopup();
            });
            });
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

.info-list{
    overflow: scroll;
    height: 50vh;
}

.info{
    border: 1px solid;
    border-radius: 20px;
    padding: 0px 14px;
    margin-bottom: 20px;
}
.btn{
    width: 100%;
    margin-top: 10px;
    &:hover{
        background-color: black;
        border: none;
        color: #ffdf76;
    }
    
}

@media(max-width: 769px){
    .info-list{
        height: 20vh;
    }
    .rwd-info-scroll{        
        flex-direction: row;        
        display: flex;        
        margin-right: -15px;
        margin-left: -15px;
        .info{
            flex: 0 0 100%;
            max-width: 90%;
            margin: 0 10px;
        }
    }
}

</style>