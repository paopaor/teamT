<template>
  <div id="app">
    <header>
      <img src="./assets/logo.png">
      <div class="r_link">
        <router-link to='/Intro' tag='a'>Introduce</router-link>
        <router-link to='/blog' tag='a'>Blog</router-link>
        <router-link to='/about' tag='a'>About</router-link>
        <router-link to='/dream' tag='a'>Dream</router-link>
      </div>
    </header>

    <router-view></router-view>

    <footer>
      <p>CONTRACT US</p>
      <ul>
        <li><a href="https://github.com/paopaor" target="_blank">GitHub</a></li>
        <li><a href="https://github.com/paopaor" target="_blank">ZhiHu</a></li>
        <li><a href="https://github.com/paopaor" target="_blank">JianShu</a></li>
        <li>
          <a href="https://github.com/paopaor" target="_blank">Wechat</a>
          <img src="./assets/wechatpp.jpg" alt="wechat" width="100" height="100">

        </li>
      </ul>
    </footer>
  </div>
</template>

<script>
export default {
  name: 'app'
}
</script>

<style lang="scss">
$dColor: #29A32E;

li{list-style:none;}
html{font-family:sans-serif;}
body{background:#efefef;}
*{margin:0;padding:0;border:0;font-size:100%;-webkit-tap-highlight-color:rgba(0,0,0,0)}
article,section,aside,header,footer,nav,details,embed,figcaption,figure{display:block}
a,a:hover{text-decoration:none;}
a,a img,a:hover,a:active,input,textarea,select,option,button{outline:0}
h1,h2,h3,h4,h5,h6,b,strong{font-weight:normal}ol,ul,li{list-style:none}
/* img{width:auto\9;max-width:100%;height:auto;-ms-interpolation-mode:bicubic;vertical-align:middle} */
.clear:before,.clear:after{content:" ";display:table}.clear:after{clear:both}.clear{*zoom:1}

header{
  width:100%;
  height:60px;
  line-height: 60px;
  background:$dColor;
  color:#fff;
  .r_link{
    width:40%;
    float:right;
    a{
      width:22%;
      display:inline-block;
      color:#fff;
      text-align: center;
      text-decoration: none;
    }
  }
}
footer{
  width:100%;
  height:120px;
  position:fixed;
  bottom:0;
  left:0;
  right:0;
  &:hover{
  }
  p{
    text-align:center;
    font-weight:600;
    font-size:22px;
    width:800px;
    margin:10px auto 20px;
    padding-bottom:10px;
    border-bottom:1px solid #ddd;
    cursor:pointer;
    opacity:0.4;
    transition:opacity .5s;
    &:hover{
      opacity:1;
      transition:opacity .5s;
    }
  }
  ul{
    width:1200px;
    height:40px;
    line-height: 40px;
    margin:0 auto;
    li{
      width:21%;
      height:100%;
      float:left;
      list-style:none;
      text-align:center;
     /*  border:1px solid #ddd; */
      margin:0 1.5%;
      a{
        display:block;
        width:100%;
        height:100%;
        opacity:0.5;
        transition:all .3s;
        color:#fff;
        &:hover{
          transition:all .3s;
          font-size:20px;
          opacity:1;
        }
      }
      &:first-child a{
          background-color:pink;
      }
      &:nth-child(2) a{
          background-color:#D99CF2;
      }
      &:nth-child(3) a{
          background-color:#74F671;
      }
      &:last-child a{
          background-color:lightblue;
      }
      &:last-child{
        position:relative;
        img{
          position:absolute;
          right:-333em;
          width:100px;
          height:100px;
          border:1px solid #ddd;
        }
        &:hover img{
          right:50%;
          margin-right:-50px;
          bottom:50px;
        }
      }
    }

  }
}
</style>
