import { useModalStore } from "~/store/modal";

export function useModal() {
  const store = useModalStore()

  function openModalForEdit(day: number, month: string) {
    store.openModalForEdit(day, month)
  }

  function openModalForView(id: string) {
    store.openModalByEventId(id)
  }

  function close() {
    store.closeModal()
  }

  return {
    openModalForEdit,
    openModalForView,
    close
  }

}