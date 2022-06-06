import React,{useState , useEffect} from 'react'

const useGetHTTP = () => {
  const [posts ,setPosts] = useState([]);

  useEffect(()=>{
       
    async function getPost (){
        try{
            const response = await fetch('https://jsonplaceholder.typicode.com/photos')
            if(!response.ok) {
                throw new Error('Cannot get response')
            }

            const data = await response.json()
            data.splice(5 ,5000)
            setPosts(data)
        }
        catch(e){
            console.log(e.message)
        }
    }

    getPost()
    
    return posts

  },[])
} 




export default useGetHTTP