interface ArithmeticDuo {
  n1: number
  n2: number
}

const multiply = ({ n1, n2 }: ArithmeticDuo): number => n1 * n2

export { multiply }
