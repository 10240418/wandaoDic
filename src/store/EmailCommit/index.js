import { defineStore } from "pinia";
// 创建store,命名规则： useXxxxStore
// 参数1：store的唯一 id
// 参数2：对象，可以提供state actions getters

//isEmailCommitShow 管理该全局组件要不要显示的状态
export const useIsEmailCommitShowStore = defineStore({
  id: "isEmailCommitShow",
  state: () => ({
    isEmailCommitShow: false,
  }),
  getters: {
    getIsEmailCommitShow() {
      return this.isEmailCommitShow;
    },
  },
  actions: {
    setIsEmailCommitShow(isEmailCommitShow) {
      this.isEmailCommitShow = isEmailCommitShow;
    },
      //修改状态
    changeIsEmailCommitShow() {
        this.isEmailCommitShow = !this.isEmailCommitShow;
    }
  },
});

