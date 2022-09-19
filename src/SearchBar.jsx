import React,{useState,useEffect} from "react";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const SearchBar = () => {

    const InitialEmojis = [
        {
            name:"nhi",
            image: "image/Nhi.png"
        },
        {
            name:'su',
            image: "image/Su.png"
        },
        {
            name:'sofia',
            image: "image/Sofia.png"
        },
        {
            name:'hunter',
            image: "image/Hunter.png"
        },
    ]

    const InitialData = {
        emojis:[],
        userInput:""
    }

    const [data, setData] = useState(InitialData)

    useEffect(()=> {
        function fetchEmojis(){
            const url = "https://emoji-api.com/emojis?access_key=3099a2d55e1f147a26d893b81d9473c86dcbc41c"
        
            fetch(url).then((result) => {
                return result.json();
            }).then((data) => {
                let emojiResult = data.map((obj)=>{
                    let name = obj.unicodeName + " " + obj.subGroup
                    let newObj = {
                        name: name,
                        emoji:obj.character
                    }
                    return newObj
                })
                let emojiDedupe = emojiResult.filter((obj)=>!obj.name.startsWith("E"))

            setData({
                    ...data,
                    emojis: [...InitialEmojis, ...emojiDedupe]
                })
                
            }).catch((error) => {
                console.log("Error!", error);
            }).finally(() => {
                console.log("Fetch completed.");
            })
        }
        fetchEmojis()
            
        },[])
       


    function handleOnChange(event){
        setData({
            ...data,
            userInput: event.target.value
        })
    }

    function getFilteredEmojis(){
        if(!data.userInput){
            return data.emojis
        }else {
            let filteredEmojis = data.emojis.filter((obj)=>{
                return obj.name.includes(data.userInput)
            })
            return filteredEmojis
        }
    }

    function handleCopy(event){ 
        let emoji = event.target.innerText
        navigator.clipboard.writeText(emoji)
        
        toast.success(`Copied ${emoji} Good choice!`, {
            position: "top-center",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            });
    }

   
return (
    <div>
        <ToastContainer
            position="top-center"
            autoClose={5000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
        />

        <div className="search-container">
            <label>Emoji Search 🔎</label>
            <input type="text" onChange={handleOnChange}></input>
            <button>HIRE US</button>
        </div>

        <div className="emoji-container">
            {data.userInput && getFilteredEmojis().map((obj,index)=>{
                return (
                    <div className="emoji" key={index} onClick={handleCopy} value={obj.image}> {obj.emoji} {obj.image && <img width="250" src={obj.image} alt={obj.name}/>} </div>
                )
            })}
        </div>

    </div>
  );
};

export default SearchBar;
