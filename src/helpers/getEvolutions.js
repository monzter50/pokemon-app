export const getEvolutions = (pokemon)=>{
    console.log("FUNCTION",pokemon)
    let evoChain = []
    let evoData = pokemon || null;
    if(evoData){
        do {
    
            let evoDetails = evoData['evolution_details'][0];
            const id = evoData.species.url.split("/")   
            evoChain.push({
                "species_name": evoData.species.name,
                "min_level": !evoDetails ? 1 : evoDetails.min_level,
                "trigger_name": !evoDetails ? null : evoDetails.trigger.name,
                "item": !evoDetails ? null : evoDetails.item,
                "id":`${id[6]}`
            });
        
            evoData = evoData['evolves_to'][0];
            } while (!!evoData && evoData.hasOwnProperty('evolves_to'));
    }
   
    console.log(evoChain)
    return evoChain
}