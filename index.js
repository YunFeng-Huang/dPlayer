
import DPlayer from '../../node_modules/dplayer'
import '../../node_modules/dplayer/dist/DPlayer.min.css'
import './dp.css'

const VueDPlayer = {
  props: {
    options: {
      type: Object
    },
    url:{},
    pic:{},
   
  },
  data() {
    return {
      dp: null
    }
  },
  mounted() {
    this.$root.Bus.$off('visblechange1').$on('visblechange1',val=>{
      this.$nextTick(()=>{
        console.log('initPlayer')
        this.initPlayer();
      })
    })
    this.$root.Bus.$off('visblechange2').$on('visblechange2',val=>{
      this.$nextTick(()=>{
        console.log('destroy')
        this.dp.destroy()
      })
    })
  },
 
  methods:{
    dpplay(){
      this.dp.play()
    },
     initPlayer(){
      this.options.container = this.$el
      const player = this.dp = new DPlayer(this.options)
      const events = player.events
      Object.keys(events).forEach(item => {
        if (item === 'events') {
          return false
        } else {
          events[item].forEach(event => {
            player.on(event, () => this.$emit(event))
            
          })
         
        }
      })
     
  
    }
  },
  install (Vue, { name = 'd-player' } = {}) {
    Vue.component(name, this)
  },
  render(h) {
    return h('div', {
      class: 'dplayer'
    }, [])
  }
}

if (typeof window !== 'undefined' && window.Vue) {
  window.VueDPlayer = VueDPlayer
}

export default VueDPlayer
