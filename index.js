


const isLeap = (año)=>{



    if(año % 4 === 0){

        if(año % 100 === 0){

            if(año % 400 === 0 ){
                console.log(true)
                return true
            }else{
                console.log(false)
                return false
            }
        }else{
            console.log(true)
            return true
        }

    }else{
        console.log(false)
        return false
    }


}


isLeap(1990)










// const isLeap = (año) => {

//     if (año % 4 === 0 ) {

//         console.log(true)
//         return true
//     }
//     if(año % 100 === 0){
//         console.log(false)
//         return false
//     }
//     if(año % 400 === 0){

//         console.log(true)
//         return true

//     }

    

// }

// const isLeap2 = (año)=>{

//     if(año % 4 === 0){
//         if(año % 100 === 0 ){
//             if(año % 400 === 0){

//             }else{
//                 console.log(false)
//             }
//         }else{
//             console.log(true)
//         }
//     }else{
//         console.log(false)
//     }
    
// }


