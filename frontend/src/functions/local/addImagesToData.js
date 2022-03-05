import { getImageById } from "..";


export async function addImagesToData(array){
    console.log('array')
    console.log(array)
    for(let i in array){
        if(array[i].type==='image'){
            const response = await getImageById({id: array[i].data});
            console.log(response.data)
            array[i].data = response.data;
        }
    }
    return array;
}