<template>
    <div>
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
    </div>
</template>