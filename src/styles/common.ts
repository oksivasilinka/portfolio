import { theme } from 'styles/theme'

type Props = {
  weight?: number
  color?: string
  lineHeight?: number
  max?: number
  min?: number
  spacingMax?: number
  spacingMin?: number
}

export const font = ({ weight, color, lineHeight, min, max, spacingMin, spacingMax }: Props) => `
  font-weight: ${weight || 400};
  color: ${color || theme.colors.font};
  line-height: ${lineHeight || 1.2};  
  font-size: calc((100vw - 360px) / (1440 - 360) * (${max} - ${min}) + ${min}px);
  letter-spacing: calc((100vw - 360px) / (1440 - 360) * (${spacingMax} - ${spacingMin}) + ${spacingMin}px);

`
