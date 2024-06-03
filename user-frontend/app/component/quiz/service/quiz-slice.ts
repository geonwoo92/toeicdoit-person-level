import { createSlice } from "@reduxjs/toolkit"
import { IQuiz } from "../model/quiz"
import { findRenderQuiz } from "./quiz-service"


const state = {
    pending: 'pending',
    fulfilled: 'fulfilled',
    rejected: 'rejected'
}

interface QuizState {
    array?: Array<IQuiz>
    json?: IQuiz
    
}


const initialState:QuizState = {
    array: [],
    json: {} as IQuiz

}

export const quizSlice = createSlice({
    name: "quizs",
    initialState,
    reducers: {},
    extraReducers: builder => {
        const { pending, rejected } = state;
        builder
        .addCase(findRenderQuiz.fulfilled, (state: any, { payload }: any) => { state.array = payload })
        

    }

})

export const getCurrentPage = (state: any) => state.quiz.page;
export const getAllQuizs = (state: any) => state.quiz.array

export const { } = quizSlice.actions

export default quizSlice.reducer