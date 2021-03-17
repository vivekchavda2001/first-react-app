import React,{useEffect,useState} from 'react'

function Post() {
    const [todo,settodos] = useState([])
    useEffect(()=>{
        async function fetchData(){
            const res = await fetch("http://jsonplaceholder.typicode.com/todos");
            res.json()
                .then((res)=>{settodos(res)})
                .catch((err)=>{})
            
        }
        fetchData()
    })
    return (
        <div>
            <h1>Post</h1>
            {todo.map((item,index)=>{
                return(
                    <div className=" container w-25 bg-info text-light">
                        <h4>{item.userId}.{item.title}<br/>Completed:{item.completed?"true":"false"}</h4>
                        
                    </div>
                )
            })}
        </div>
    )
}

export default Post
