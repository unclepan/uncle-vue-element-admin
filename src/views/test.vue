<template>
  <div class="about">
    <x-dialog ref="dialog">
      <span>我是内容</span>
    </x-dialog>
    <el-button size="small">测试国际化{{$t('m.about')}}</el-button>
    <el-button @click="$refs.dialog.dialogVisible = true" size="small">可拖拽弹框</el-button>

    <div>
      <x-multiple v-model="mult"/>
    </div>
    <div>
      <x-single v-model="sing"/>
    </div>
    <div>
      <x-input v-model="inp"/>
    </div>
    <div>
      <x-date-picker type="daterange" v-model="date"/>
    </div>

    <div>
      {{inptwo}}
      <x-multistage-input v-model="inptwo" :append="['行','列','三']"/>
    </div>
  </div>
</template>


<script>
import dialog from 'components/dialog/index.vue';
import xMultiple from 'components/condition/x-multiple.vue';
import xSingle from 'components/condition/x-single.vue';
import xInput from 'components/condition/x-input.vue';
import xDatePicker from 'components/condition/x-date-picker.vue';
import xMultistageInput from 'components/condition/x-multistage-input.vue';
import EventEmitter from 'wolfy87-eventemitter';


export default {
  data() {
    return {
      lang: 'zh-CN',
      mult: [],
      sing: '',
      inp: '',
      date: [],
      inptwo: [0, 1, 2],
      ee: new EventEmitter(),
    };
  },
  components: {
    'x-dialog': dialog,
    xMultiple,
    xSingle,
    xInput,
    xDatePicker,
    xMultistageInput,
  },
  mounted() {
    this.init();
  },
  methods: {
    init() {
      this.ee.addListener('addStuff', this.adder);
      this.ee.emitEvent('addStuff', [10, 20]);
    },
    adder() {
    },
  },
};
</script>
<style lang="scss" module>
</style>
