const STARS = '★★★★★☆☆☆☆☆'

export function getRatingStar(score: number) {
  const MAX_SCORE = 5
  return STARS.slice(MAX_SCORE - score, MAX_SCORE + (MAX_SCORE - score))
}
