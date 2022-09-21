import React,{useState,useEffect} from "react";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const SearchBar = () => {

    const InitialEmojis = [
        {
            name:"nhi",
            image: "image/Nhi-Sm.png"
        },
        {
            name:'su',
            image: "image/Su-Sm.png"
        },
        {
            name:'sofia',
            image: "image/Sofia-Sm.png"
        },
        {
            name:'hunter',
            image: "image/Hunter-Sm.png"
        },
        {
            name: "default",
            emoji: "🪄"
        },
        {
            name: "default",
            emoji: "🔮"
        },
        {
            name: "default",
            emoji: "💫"
        },
        {
            name: "default",
            emoji: "🎩"
        },
        {
            name: "default",
            emoji: "🦄"
        },
        {
            name: "default",
            emoji: "💠"
        },
        {
            name: "default",
            emoji: "✨"
        },
    ]

    const InitialData = {
        emojis:InitialEmojis,
        userInput:""
    }

    const [data, setData] = useState(InitialData)

    useEffect(()=> {
        function fetchEmojis(){
            const url = "https://emoji-api.com/emojis?access_key=3099a2d55e1f147a26d893b81d9473c86dcbc41c"
        
            fetch(url).then((result) => {
                return result.json();
            }).then((jsonData) => {
                let emojiResult = jsonData.map((obj)=>{
                    let name = obj.unicodeName + " " + obj.subGroup
                    let newObj = {
                        name: name,
                        emoji:obj.character
                    }
                    return newObj // [{},{}...]
                })
                let emojiDedupe = emojiResult.filter((obj)=>!obj.name.startsWith("E"))

            setData((d)=> {
                return {
                    ...d,
                    emojis: [...d.emojis, ...emojiDedupe]
                }})
                
            }).catch((error) => {
                console.log("Error!", error);
            }).finally(() => {
                console.log("Fetch completed.");
            })
        }
        fetchEmojis()
            
        },[])
       


    function handleOnChange(event){
        let removeWhitespace = event.target.value.trim().replaceAll(" ","").toLowerCase()
        setData({
            ...data,
            userInput: removeWhitespace
        })
    }

    function getFilteredEmojis(){
        // if(!data.userInput){
        //     return data.emojis
        // }else 
        if(data.userInput=== 'su'){
            return data.emojis.filter((obj)=>obj.name === 'su')
        }else if (data.userInput=== 'engineer'){
            return data.emojis.filter((obj)=>obj.image)
        }
        else if (data.userInput=== ''){
            
            return data.emojis.filter((obj)=>obj.name === 'default')
        }
        else {
            let filteredEmojis = data.emojis.filter((obj)=>{
                return obj.name.includes(data.userInput)
            })
            return filteredEmojis
        }
    }

    function handleCopy(event){ 
        let emoji = event.target.innerText
        navigator.clipboard.writeText(emoji)
      // https://www.npmjs.com/package/react-toastify  
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
            {/* <label className="heading">Emoji Search 🔎</label> */}
            <input className="input" type="text" placeholder="ex. magic (start typing to show results)" onChange={handleOnChange}></input>
        </div>

        <div className="emoji-container">
            {getFilteredEmojis().map((obj,index)=>{
                return (
                    <div className="emoji" key={index} onClick={handleCopy} value={obj.name}> {obj.emoji} {obj.image && <img width="250" src={obj.image} alt={obj.name}/>} </div>
                )
            })}
        </div>

    </div>
  );
};

export default SearchBar;
