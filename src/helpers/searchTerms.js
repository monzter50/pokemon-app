export const searchingFor =(text)=>{
    return function(x,i){
        console.log("X",x.name)
        return x.name.toLowerCase().includes(text.toLowerCase()) || !text;
    }
}
