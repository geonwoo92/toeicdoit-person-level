import { createAsyncThunk } from "@reduxjs/toolkit";
import { findRenderQuizAPI } from "./quiz-api";

export const findRenderQuiz: any = createAsyncThunk(
    'quiz/findRenderQuiz',
    async (page: number) => {
        console.log('3')
    
        const data: any = await findRenderQuizAPI(page);
        console.log('6'+JSON.stringify(data))
        const { message, result }: any = data
        return data
    }
)   


