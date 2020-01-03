import { Message } from 'element-ui';

export default {
  error(text) {
    Message.closeAll();
    Message({
      showClose: true,
      message: text,
      type: 'error',
      duration: 2000,
    });
  },
  success(text = '操作成功') {
    Message.closeAll();
    Message.success(text);
  },
  confirm(component, content, title = '提示', option = {
    confirmButtonText: '确定',
    cancelButtonText: '取消',
    type: 'warning',
    closeOnClickModal: false,
    closeOnPressEscape: false,
  }) {
    return new Promise((resolve) => {
      component.$confirm(content, title, option).then(() => {
        resolve(true);
      }).catch(() => {
        resolve(false);
      });
    });
  },
  alert(component, content, title = '提示', option = {
    confirmButtonText: '确定',
    type: 'warning',
    closeOnClickModal: false,
  }) {
    return component.$alert(content, title, option);
  },
};
