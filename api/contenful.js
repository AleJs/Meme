
import {createClient} from "contentful";

const useContenfull = ()=>{

    const client = createClient({
        space:"w7r4adcnw5tk",
        accessToken:"4RQqnlMra_j_yubF4mkGwb2M_zgEoqYdazd1i5b380I",
        host:"preview.contentFul.com"

    });
    
    const getPsy = async () =>{
        try {
            const shimuelo = await client.getEntries({
                content_type: "psy",
                select:"fields",
            })
       
            const resumido = shimuelo.items.map((item) =>
            {
                const avatar = item.fields.avatar.fields
                return {
                    ...item.fields,
                    avatar
                }

            }

            )

            return resumido;
        } catch (error) {
            console.log(error)
        }
    }
    return {getPsy}; 

}


export default useContenfull