export const throttle = (fn, wait) => {
  let time = Date.now()
  return () => {
    if ((time + wait - Date.now()) < 0) {
      fn()
      time = Date.now()
    }
  }
}

export const getDarkMode = () => {
  const localValue = JSON.parse(localStorage.getItem('darkMode'))
  return (localValue === true) ||
    ((localValue === null) && (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches))
}

export default { throttle, getDarkMode }
