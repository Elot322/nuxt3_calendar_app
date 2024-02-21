import { defineStore } from "pinia";

export const useModalStore = defineStore({
  id: 'modal-store',
  state: () => {
    return {
      modalOpened: false,
      editable: false,
      day: 0,
      month: '',
      id: ''
    }
  },
  actions: {
    openModalForEdit(day: number, month: string) {
      this.day = day
      this.month = month
      this.editable = true
      this.modalOpened = true
    },
    closeModal() {
      this.modalOpened = false
      this.day = 0
      this.month = ''
      this.id = ''
    },
    openModalByEventId(id: string) {
      this.id = id
      this.editable = false
      this.modalOpened = true
    }
  },
  getters: {
    isOpen: state => state.modalOpened,
    isEdit: state => state.editable,
    getDay: state => state.day,
    getMonth: state => state.month,
    getId: state => state.id
  }
})