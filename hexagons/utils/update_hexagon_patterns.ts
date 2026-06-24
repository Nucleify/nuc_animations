import type { HexagonPatternsType } from 'nucleify'
import { generateRowPattern } from 'nucleify'

export function updateHexagonPatterns(
  totalRows: number,
  imagesPerRow: number
): HexagonPatternsType {
  const patterns: HexagonPatternsType = []
  for (let i = 0; i < totalRows; i++) {
    patterns[i] = generateRowPattern(i, imagesPerRow, totalRows)
  }
  return patterns
}
