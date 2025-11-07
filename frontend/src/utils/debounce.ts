let timer: number

export type debounceProps = (func: () => void, time: number) => void

export const debounce: debounceProps = (func, time) => {
  clearTimeout(timer)
  timer = setTimeout(func, time)
}
