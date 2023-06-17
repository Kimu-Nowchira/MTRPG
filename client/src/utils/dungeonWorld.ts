export const getModifier = (stat: number) => {
  if (stat >= 1 && stat <= 3) return -3
  if (stat >= 4 && stat <= 5) return -2
  if (stat >= 6 && stat <= 8) return -1
  if (stat >= 9 && stat <= 12) return 0
  if (stat >= 13 && stat <= 15) return 1
  if (stat >= 16 && stat <= 17) return 2
  if (stat >= 18) return 3
  else return -4
}
