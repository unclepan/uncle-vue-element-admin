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
      this.fieldEmitter.addListener(this.param.event.on.name, this.param.event.on.listener(this));
    }
  },
  methods: {
    getType() {
      return `${this.param.type.toLowerCase()}`;
    },
    checkMode(type, data) {
      if (type === 'handleFieldBlur') {
        this.checkEnv(data);
      }
    },
    checkEnv() {
      if (this.param.event && this.param.event.emit) {
        this.fieldEmitter.emitEvent(this.param.event.emit.name, [this]);
      }
    },
  },
};
