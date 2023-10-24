import { createNum } from '../src/play'

describe("createNum", () => {
  test('세 자리 숫자가 잘 만들어져요', () => {
    const result = createNum()
    expect(result.length).toBe(3)
  })

  test('중복된 숫자가 없어야 해요', () => {
    const result = createNum()
    expect(new Set(result).size).toBe(result.length)
  })
})

