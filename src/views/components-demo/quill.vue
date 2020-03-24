<template>
  <div :class="$style.quill">
    <x-aside>
      Quill editor component for Vue 基于 Quill、适用于 Vue 的富文本编辑器，支持服务端渲染和单页应用。
      <a href="https://github.com/quilljs/quill" target="_blank">quill</a>
    </x-aside>

    <quill-editor
      ref="myQuillEditor"
      v-model="content"
      :options="editorOption"
      @blur="onEditorBlur($event)"
      @focus="onEditorFocus($event)"
      @ready="onEditorReady($event)"
    />

  </div>
</template>

<script>
import 'quill/dist/quill.core.css';
import 'quill/dist/quill.snow.css';
import 'quill/dist/quill.bubble.css';
import { quillEditor } from 'vue-quill-editor';
import aside from 'components/x-aside.vue';

export default {
  components: {
    quillEditor,
    'x-aside': aside,
  },
  data() {
    return {
      content: '<h2>I am Example</h2>',
      editorOption: {
        // Some Quill options...
      },
    };
  },
  computed: {
    editor() {
      return this.$refs.myQuillEditor.quill;
    },
  },
  mounted() {
    console.log('this is current quill instance object', this.editor);
  },
  methods: {
    onEditorBlur(quill) {
      console.log('editor blur!', quill);
    },
    onEditorFocus(quill) {
      console.log('editor focus!', quill);
    },
    onEditorReady(quill) {
      console.log('editor ready!', quill);
    },
    onEditorChange({ quill, html, text }) {
      console.log('editor change!', quill, html, text);
      this.content = html;
    },
  },
};
</script>

<style lang="scss" module>
.quill{
  background: #ffffff;
  padding: 16px;
}
</style>
