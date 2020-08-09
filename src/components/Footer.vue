<template>
    <div>
        <footer class="page-footer font-small cyan darken-3">

            <!-- Footer Elements -->
            <div class="container">

                <!-- Grid row-->
                <div class="row">

                <!-- Grid column -->
                <div class="col-md-12 py-5">
                    <div class="mb-5 d-flex justify-content-center">

                    <!-- Facebook -->
                        <a class="fb-ic">
                            <i class="fab fa-facebook-f fa-lg white-text mr-md-5 mr-3 fa-2x"> </i>
                        </a>
                        <!-- Twitter -->
                        <a class="tw-ic">
                            <i class="fab fa-twitter fa-lg white-text mr-md-5 mr-3 fa-2x"> </i>
                        </a>
                        <!-- Google +-->
                        <a class="gplus-ic">
                            <i class="fab fa-google-plus-g fa-lg white-text mr-md-5 mr-3 fa-2x"> </i>
                        </a>
                        <!--Linkedin -->
                        <a class="li-ic">
                            <i class="fab fa-linkedin-in fa-lg white-text mr-md-5 mr-3 fa-2x"> </i>
                        </a>
                        <!--Instagram-->
                        <a class="ins-ic">
                            <i class="fab fa-instagram fa-lg white-text mr-md-5 mr-3 fa-2x"> </i>
                        </a>
                        <!--Pinterest-->
                        <a class="pin-ic">
                            <i class="fab fa-github fa-lg white-text fa-2x"> </i>
                        </a>
                    </div>                    
                </div>
                <!-- Grid column -->
                
                </div>
                <!-- Grid row-->

            </div>
            <!-- Footer Elements -->

            <!-- Copyright -->
            <div class="footer-copyright text-center py-3" style="font-weight: bold;">
                <router-link to="/login" class="nav-link" style="color: #5a5a5a;">後台管理</router-link>
                個人練習用途                
            </div>
            <!-- Copyright -->

        </footer>
    </div>
</template>

<style lang="scss" scope>
    
    .page-footer{
        font-family: 'cwTeXYen', sans-serif;
        background: black;
        color: #5a5a5a;
    }
</style>