<template>
  <div class="dp">
    <d-player :options="options"
              :url="url"
              :pic="pic"
              @play="play"
              @canplay="canplay"
              @canplaythrough="canplaythrough"
              ref="player">
    </d-player>
  </div>
</template>

<script>
  export default {
     props:{
      url:{
        type:String,
        required:true
      },
      pic:{
        type:String,
        required:true
      }
    },
    data() {
      return {
        options: {
          video: {
            url: './domo.m3u8',
            // type: 'auto',
            pic: './demo.jpg'
          },
          autoplay: false,
          contextmenu:[]
        },
        player: null,
        }
    },
    computed:{
   
    },
    created() {
    },
    mounted() {
      this.player = this.$refs.player.dp
    },
    watch:{
      url(nVal){
        this.options.video.url = nVal;
      },
      pic(nVal){
        this.options.video.pic = nVal;
      }
    },
    methods: {
      canplaythrough(){
        // console.log('canplaythrough')
      },
      canplay(){
        console.log('canplay  callback')
        this.$refs.player.dpplay()
      },
      play() {
        // console.log('play  callback')
        
      },
  
    },
    components: {
    },
   
  }
</script>

<style scoped="scoped" lang="less">
  body {
    margin: 0;
    padding: 0;
    text-align: center;
  }

  a {
    color: #42b983;
    text-decoration: none;
  }

  .dplayer {
    width: auto;
    margin: 50px auto;
  }

  h1 {
    font-size: 54px;
    color: #42b983;
    margin: 30px 0 10px;
  }

  h2 {
    font-size: 22px;
    color: #555;
  }
.dplayer{
     width: auto; 
     margin: auto; 
}
.dp{
  position: relative
}
  .demo-spin-icon-load{
        animation: ani-demo-spin 1s linear infinite;
    }
    @keyframes ani-demo-spin {
        from { transform: rotate(0deg);}
        50%  { transform: rotate(180deg);}
        to   { transform: rotate(360deg);}
    }
    .demo-spin-col{
        height: 100px;
        position: relative;
        border: 1px solid #eee;
    }
</style>
