import { score } from "./score"


describe('score', () => {
    fit('should pass', () => {
      expect(score([0,0])).toEqual([0,0])
    })
  })