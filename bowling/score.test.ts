import { score } from "./score"


fdescribe('score', () => {
    fit('should pass', () => {
      expect(score([0,0])).toBe(0)
    })
  })