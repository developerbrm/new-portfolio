export function buildThresholdList(numSteps = 20) {
  // Use map to create an array with ratios from 0 to 1 (inclusive)
  const thresholds = Array.from(
    { length: numSteps + 1 },
    (_, i) => i / numSteps
  )

  return thresholds
}
