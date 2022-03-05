export const imageerror = {
  inserted(el, binding) {
    el.addEventListener('error', () => {
      el.src = binding.value
    })
  }
}
