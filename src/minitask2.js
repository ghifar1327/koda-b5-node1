export function withoutPackage(input){
    if(input.length === 10){
        let dateArray = input.split('-')
        let parsedDate = `${dateArray[0]}/${dateArray[1]}/${dateArray[2]}`
        console.log(parsedDate)
    }else{
        console.log('input tidak valid')
    }
}