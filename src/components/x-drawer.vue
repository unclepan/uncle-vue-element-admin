<template>
  <div :class="$style['drawer-wrap']">
    <div :class="$style['drawer-mask']" v-if="drawer&&!isHandleMove"></div>
    <transition name="drawer-fade">
      <div :class="$style.drawer" v-show="drawer">
        <div
          v-moves
          :class="$style['drag-line']">
        </div>
        <vue-scroll :ops='ops' v-show="isHandleMove">
          <div :class="$style.header">
            <div>
              <slot name="header"></slot>
            </div>
            <i @click="drawer = false" class="el-icon-circle-close"></i>
          </div>
          <slot>自定义抽屉</slot>
        </vue-scroll>
      </div>
    </transition>
   </div>
</template>

<script>
export default {
  data() {
    return {
      isHandleMove: true,
      drawer: false,
      ops: {
        scrollPanel: {
          scrollingX: false,
        },
        bar: {
          background: '#aaaaaa',
          onlyShowBarOnScroll: false,
        },
      },
    };
  },
  methods: {
    open() {
      this.drawer = true;
    },
  },
  directives: {
    moves: {
      inserted(el, binding, vnode) {
        const self = vnode.context;
        const elm = el;
        elm.onmousedown = (e) => {
          self.isHandleMove = false;
          const oEvent = e;
          const drawerEl = el.parentNode;
          const X = oEvent.clientX;
          const oBoxW = drawerEl.offsetWidth;

          document.onmousemove = (env) => {
            if (drawerEl.offsetWidth > 400) {
              const me = env;
              const XX = me.clientX;
              drawerEl.style.width = `${oBoxW + (X - XX)}px`;
            } else {
              drawerEl.style.width = '401px';
              document.onmousemove = null;
            }
          };
          document.onmouseup = () => {
            self.isHandleMove = true;
            document.onmousemove = null;
            document.onmouseup = null;
          };
        };
      },
    },
  },
};
</script>

<style lang="scss" module>
.drawer-wrap{
  .drawer-mask{
    position: fixed;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    background-color:rgba(255, 255, 255, 0.1);
    z-index: 2001;
  }
  .drawer{
    position: fixed;
    right: 0;
    top: 0;
    bottom: 0;
    background-color:rgb(240, 240, 240);
    width: 60%;
    min-width: 401px;
    z-index: 2002;
    box-shadow: -6px 0 6px rgba($color: #cccccc, $alpha: 0.2);
    padding: 8px;
    .drag-line{
      background-color:rgb(230, 230, 230);
      width: 2px;
      position: absolute;
      left: 0;
      top: 0;
      bottom: 0;
      cursor: ew-resize;
    }
    .header{
      display: flex;
      justify-content: space-between;
      padding: 8px 0;
      align-items: center;
      i{
        font-size: 24px;
      }
    }
  }
}
</style>
<style lang="scss">
  .drawer-fade-enter-active {
    transition: all .3s ease;
  }
  .drawer-fade-leave-active {
    transition: all .2s cubic-bezier(1.0, 0.5, 0.8, 1.0);
  }
  .drawer-fade-enter, .drawer-fade-leave-to{
    transform: translateX(60px);
    opacity: 0;
  }
</style>
