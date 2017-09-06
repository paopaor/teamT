<template>
  <div class="intro">
    <div class="leftNav">
      <ul>
        <li><a href="javascript:void(0);">To 产品</a></li>
        <li><a href="javascript:void(0);">To 技术</a></li>
        <li><a href="javascript:void(0);">To Hr</a></li>
      </ul>
    </div>
    <div class="rightCon">
      
    </div>
    <div class="clear"></div>
  </div>
</template>

<script>
export default {
  name: 'Intro',
  data () {
    return {
      
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
$dColor: #29A32E;

.intro{
  width:1200px;
  margin:20px auto;
  .leftNav{
    float:left;
    width:100px;
    margin-right:20px;
    height:auto;
    ul{
      width:100%;
      li{
        width:100%;
        heigth:30px;
        line-height: 30px;
        border:1px solid $dColor;
        a{
          color:$dColor;
          display:inline-block;
          width:100%;
          height:100%;  
          padding-left:20px;
          box-sizing:border-box;
          transition:all .3s;
          &:hover{
            background-color:$dColor;
            color:#fff;
          }
        }
      }
    }
  }
  .rightCon{
    width:1080px;
    float:right;
    border:1px solid $dColor;
  }
}
</style>
