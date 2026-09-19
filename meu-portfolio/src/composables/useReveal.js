import { onMounted } from 'vue'

export function useReveal() {
  onMounted(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('opacity-100', 'translate-y-0', 'scale-100')
          entry.target.classList.remove('opacity-0', 'translate-y-16', 'scale-95')
          observer.unobserve(entry.target) 
        }
      })
    }, { threshold: 0.1 })

    setTimeout(() => {
      document.querySelectorAll('.reveal').forEach((el) => {
        observer.observe(el)
      })
    }, 100)
  })
}
