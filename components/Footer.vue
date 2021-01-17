<template>
  <div class="main-footer">
    
<section class="footer">
  <div class="container">
    <div class="footer__content">
      <div class="footer__heading">
        <h2>Amirpeace1080@gmail.com</h2>
      </div>
      <p class="mb-0">Content & Graphics © 2020 amirpeace1080@gmail.com LLC</p>

      <ul class="social__media">
        <li><a target="_blank" href="https://www.linkedin.com/in/mohammad-sharifi-b8364b194"><i class="fa fa-linkedin" aria-hidden="true"></i></a></li>
        <li><a target="_blank" href="https://instagram.com/peace_1080"><i class="fa fa-instagram" aria-hidden="true"></i></a></li>
        <li><a target="_blank" href="https://telegram.me/peace1080"><i class="fa fa-telegram" aria-hidden="true"></i></a></li>
      </ul>
    </div>
  </div>
</section>

  </div>
</template>

<script>
export default {

}
</script>

<style scoped>
.main-footer{
  margin-top: 30px;
}

section.footer {
    background-color: #0d767a;
  
    position: relative;
    font-family: 'Poppins';
    padding:25px 0px;
}
.footer__content{
   padding: 25px;
   text-align: center;
   color: #fff;
   background-color: #0d767a;

}
.footer__content img{
    width: 5%;
    position: absolute;
    top: -50px;
    border: 1px solid red;
}
.footer__heading{
    position: relative;
}
.footer__heading h2 {
    background-color: #0d767a;
    display: inline-block;
    padding: 0px 10px;
    /* border: 1px solid; */
    position: relative;
    z-index: 9999;
}
.footer__heading::after {
    content: "";
    position: absolute;
    left: 50%;
    top: 45%;
    height: 5px;
    margin: 0;
    border-radius: 50px;
    width: 20%;
    transform: translate(-50% , -50%);
    background-color: rgb(255, 255, 255);
}
.footer__content p {
    font-size: 12px;
    font-weight: 100;
    padding: 10px 0px;
}
ul.social__media{
    margin:0;
    padding: 0;
    display: inline-block;
    margin-top: 15px;
}
ul.social__media li{
   list-style-type:none;
   display:inline-block;
   margin-right: 15px;
}
ul.social__media li a{
    color: #FFF;
    font-size: 20px;
}
ul.social__media li {

    text-align: center;
    height: 45px;
    width: 45px;
    border-radius: 50px;
    background-color: tomato;
    line-height: 40px;
    border: 2px solid #545d5d;
    box-shadow: 0px 1px #FFF;
    box-shadow: 0 2px 10px -1px rgba(0, 0, 0, 0.55), 0 0px 20px 0px rgba(0, 0, 0, 0.55);
}

ul.bus__list{
    padding: 0;
    margin: 0;
}

ul.bus__list li{
    list-style-type:none;
    margin-bottom: 5px;
}
</style>