

async function processData(data){
    
    const jsonData = await JSON.parse(data);
    console.log('jsonData')
    console.log(jsonData)
}


module.exports = {processData};