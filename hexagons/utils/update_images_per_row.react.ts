import type { HexagonConfigInterface, HexagonPatternsType } from 'nucleify'
import { calculateDimensions, updateHexagonPatterns } from 'nucleify'

export const updateImagesPerRow = (
  containerRef: HTMLElement | null,
  setImagesPerRow: (value: number) => void,
  setTotalRows: (value: number) => void,
  setHexagonRows: (value: HexagonPatternsType) => void
): void => {
  if (!containerRef) return

  const {
    imagesPerRow: calculatedImages,
    totalRows: calculatedRows,
  }: HexagonConfigInterface = calculateDimensions(
    containerRef.clientWidth,
    containerRef.clientHeight
  )

  setImagesPerRow(calculatedImages)
  setTotalRows(calculatedRows)
  setHexagonRows(updateHexagonPatterns(calculatedRows, calculatedImages))
}
