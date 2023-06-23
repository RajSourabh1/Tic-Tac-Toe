import React,{useState} from "react";
import Icon from "./Components/icon";
import {ToastContainer,toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


let tikArr = new Array(9).fill("");
const App = ()=>{

    /* this veriable is chacking the chacking of which person, if isCross is ture that means
     the chance is of cross person otherwise the the chance is of circle person.*/
    let [isCross,setIsCross] = useState(true);

    let [winMessage,setWinMessage] = useState("");

    // logic for playAgain
    const playAgain = ()=>{
        tikArr.fill("");
        setIsCross(true)
        setWinMessage("")
    }

    //logic for findWinner
    const findWinner = ()=>{
        // row1
        if(tikArr[0]==tikArr[1]&&tikArr[0]==tikArr[2]&&tikArr[0]!="")
            setWinMessage(tikArr[0]+" has won");
        //row2
        else if(tikArr[3]==tikArr[4]&&tikArr[3]==tikArr[5]&&tikArr[3]!="")
            setWinMessage(tikArr[3]+" has won");
        //row3
        else if(tikArr[6]==tikArr[7]&&tikArr[6]==tikArr[8]&&tikArr[6]!="")
            setWinMessage(tikArr[6]+" has won");
        //col1
        else if(tikArr[0]==tikArr[3]&&tikArr[0]==tikArr[6]&&tikArr[0]!="")
            setWinMessage(tikArr[0]+" has won");
        //col2
        else if(tikArr[1]==tikArr[4]&&tikArr[1]==tikArr[7]&&tikArr[1]!="")
            setWinMessage(tikArr[1]+" has won");
        //col3
        else if(tikArr[2]==tikArr[5]&&tikArr[2]==tikArr[8]&&tikArr[2]!="")
            setWinMessage(tikArr[2]+" has won");
        //diagonal1
        else if(tikArr[0]==tikArr[4]&&tikArr[0]==tikArr[7]&&tikArr[0]!="")
            setWinMessage(tikArr[0]+" has won");
        //diagonal2
        else if(tikArr[2]==tikArr[4]&&tikArr[2]==tikArr[6]&&tikArr[2]!="")
            setWinMessage(tikArr[2]+" has won");
        //for draw
        //
        else if(tikArr.indexOf("")==-1){
            setWinMessage("Draw");
        }
    }

    //changeItem logic:- means changing the sing(i.e.X or O) of the box if the box is empty
    const changeItem = (index)=>{

        // if someone wins the game then we have to stop the person to click on the box
        if(winMessage){
            return toast("Game over");
        }
        if(tikArr[index]!=""){
            // i.e. index already filled
            return toast("click on the unfilled box");
        }
        else if(tikArr[index]==""){
            //putting the sign at that index
            tikArr[index]=isCross==true?"cross":"circle"
            
            // transfering the chance from one to another
            setIsCross(!isCross);
            findWinner()
        }
    }

    return (
        <div>
            <ToastContainer position="bottom-center"/>  
           {
            winMessage!=""?(
                <div>
                    <h1>{winMessage.toUpperCase()}</h1>
                    <button onClick={playAgain}>Play Again</button>
                </div>
            ) :
            (<h1>Chance is of {isCross==true?"X":"O"}</h1>)
           }

           <div className="grid">
              {
                tikArr.map((value,index)=>(
                    <div key={index} className="box" onClick={()=>changeItem(index)}>
                        <Icon ic={value}/>
                    </div>
                ))
              }
           </div>

        </div>
    )
}

export default App;