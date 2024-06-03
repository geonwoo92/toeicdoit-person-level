import { instance } from "../../common/configs/axios-config"

export const findRenderQuizAPI = async (page: number) =>{
    console.log('4')
    try{
        const response = await instance().get('/quizzes/random', {
            params: {page, limit: 10}
        })
        console.log('5 findRenderQuizAPI page : ' + page)
        console.log(JSON.stringify(response.data))
        
        return response.data
    }catch(error){
        console.log(error)
        return error
    }
}


