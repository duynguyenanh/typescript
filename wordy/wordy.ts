export class WordProblem {
    /**
     *
     */
    constructor(private question: string) {
    }

    answer(): number {
        throw new Error('Not Implemented')
    }
}

export class ArgumentError extends Error{}