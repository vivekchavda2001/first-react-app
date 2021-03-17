import React,{useState} from 'react'

function Home() {
    const [count,setCount] = useState(0);
    let updateCounter=()=>{
        setCount(count+1);
    } 
    return (
        <div>
            <h1>Home</h1>
            <button className="btn btn-info" onClick={updateCounter}>Counter is : {count}</button>
        </div>
    )
}

export default Home;
