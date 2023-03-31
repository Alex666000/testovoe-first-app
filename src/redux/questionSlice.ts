import {createAction, createSlice, nanoid} from "@reduxjs/toolkit";

export interface CounterState {
    value: number
}


export type QuestionType = {
    id: string
    question: string
    answers: string
    trueAnswers: number[]
}

export type StateType = {
    questions: QuestionType[]
}

export const createQuestion = createAction<string>("createQuestion")

export const questionsSlice = createSlice({
    name: "questions",
    initialState: {
        questions: [] as QuestionType[]
    } as StateType,
    reducers: {
        increment: (state) => {
            // state.value += 1

        },
    },
    extraReducers: (builder) => {
        builder.addCase(createQuestion, (state, action) => {
            const newQuestion = {
                id: nanoid(),
                question: action.payload,
                trueAnswer: [],
                answer: []
            }
            state.questions = [...state, state.questions, newQuestion]
        })
    },
})

// Action creators are generated for each case reducer function
// export const {} = questionsSlice.actions
