import { getPropObject } from 'lib/vue-prop';
import container from '../container/index.vue';

export default {
  props: {
    checked: {},
    param: getPropObject(),
    fieldEmitter: getPropObject(),
  },
  model: {
    prop: 'checked',
    event: 'change',
  },
  computed: {
    value: {
      get() {
        return this.checked;
      },
      set(value) {
        this.$emit('change', value);
        return value;
      },
    },
  },
  data() {
    return {
      // 后期功能，先不关注
      editingStatus: true,
    };
  },
  components: {
    container,
  },
  created() {
    if (this.param.event && this.param.event.on) {
      if (this.param.event.on instanceof Array) { // 多对多广播
        this.param.event.on.forEach((item) => {
          this.fieldEmitter.addListener(item.name, item.listener(this));
        });
      } else { // 一对一广播
        this.fieldEmitter.addListener(this.param.event.on.name, this.param.event.on.listener(this));
      }
    }
  },
  methods: {
    getType() {
      return `${this.param.type.toLowerCase()}`;
    },
    checkMode(type, data) {
      if (type === 'handleFieldBlur') {
        this.$nextTick(() => {
          this.checkEnv(data);
        });
      }
    },
    checkEnv() {
      // 1. 触发订阅
      if (this.param.event && this.param.event.emit) {
        if (this.param.event.emit instanceof Array) {
          this.param.event.emit.forEach((item) => {
            this.fieldEmitter.emitEvent(item.name, [this]);
          });
        } else {
          this.fieldEmitter.emitEvent(this.param.event.emit.name, [this]);
        }
      }
      // 2. 自定义事件触发
      this.$emit('fielsChange', this);
    },
  },
};
