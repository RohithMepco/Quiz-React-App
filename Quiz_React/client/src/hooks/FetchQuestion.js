import {useEffect,useState} from "react";
import data,{answers} from '../components/database/data';
import * as Action from '../redux/question_reducer';
import  {useDispatch}  from "react-redux";

export const useFetchQuestion=()=>{
    const dispatch=useDispatch();
    const[getData,setGetData]=useState({isLoading:false,apiData:[],serverError:null})
    useEffect(()=>{
        setGetData (prev=>({...prev,loading:true}));
        (async ()=>{
            try{

                let question=await data;
                if(question.length>0){
                    setGetData(prev=>({...prev,isLoading:false}));
                    setGetData(prev=>({...prev,apiData:{question,answers}}));
                    dispatch(Action.startExamAction({question,answers}))
                }
                else{
                    throw new Error("No Question Available");
                }
            }catch(error){
                setGetData(prev=>({...prev,isLoading:false}));
                setGetData(prev=>({...prev,serverError:error}));
            }
        })();
    },[dispatch]);
    return [getData,setGetData];
}
export const MoveNextQuestion=()=>async(dispatch)=>{
    try{
        dispatch(Action.moveNextAction());
    }catch(e)
    {
        console.log(e);
    }
}
export const MovePrevQuestion=()=>async(dispatch)=>{
    try{
        dispatch(Action.movePrevAction());
    }catch(e)
    {
        console.log(e);
    }
}