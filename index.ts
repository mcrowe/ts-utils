function randInt(min: number, max: number): number {
  return min + Math.floor(Math.random() * (1 + max - min))
}


function sample(array: any[]): any {
  const id = Math.floor(Math.random() * array.length)
  return array[id]
}


function clamp(x, min, max) {
  return Math.max(Math.min(x, max), min)
}


function flatten(xs): any[] {
  const res: any[] = []

  for (let x of xs) {
    if (Array.isArray(x)) {

      for (let e of flatten(x)) {
        res.push(e)
      }
    } else {
      res.push(x)
    }
  }

  return res
}


function cloneDeep(a) {
  return JSON.parse(JSON.stringify(a))
}


function range(first: number, last: number): number[] {
  const res: number[] = []
  for (let i = first; i <= last; i++) {
    res.push(i)
  }
  return res
}