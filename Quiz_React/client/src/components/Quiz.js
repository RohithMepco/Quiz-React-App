import React, { useEffect, useState } from 'react'
import Questions from './Questions';
import{Result} from './Result';
import { MoveNextQuestion,MovePrevQuestion } from '../hooks/FetchQuestion';
import {useSelector,useDispatch} from 'react-redux';
import { PushAnswer } from '../hooks/setResult';
import {Navigate} from 'react-router-dom';
import {Link} from 'react-router-dom'

export default function Quiz(){
    const [check,setChecked]=useState(undefined);
    const result=useSelector(state=>state.result.result);
    const {queue,trace}=useSelector(state=>state.questions);

    const dispatch=useDispatch();
    useEffect(()=>{
         console.log(result);
    })
    function onNext(){
        console.log('On next click');
        if(trace<queue.length)
        dispatch(MoveNextQuestion())
        if(result.length<=trace){
            dispatch(PushAnswer(check))
        }
        setChecked(undefined)
    }
    
    function onPrev(){
        console.log('On prev click');
        if(trace>0)
        dispatch(MovePrevQuestion())

    }
    function onSubmit(){
        alert("Thank you for attending the exam");
        dispatch(PushAnswer(check))
        


        

    }
    
    function onChecked(check)
    {
        console.log(check)
        setChecked(check)
    }
    if(result.length && result.length>=queue.length)
    {
        return <Navigate to={'/result'} replace={true}></Navigate>
    }
    return (
        <div className='container'>
            <h1 className='title text-light'>Quiz Application</h1>
            {/* display questions */}
            <Questions onChecked={onChecked}/>
            <div className='grid'>
                {trace >0 ?<button className='btn prev' onClick={onPrev}>Prev</button> :<div></div>}
                <button className='btn next' onClick={onNext}>Next</button>
                <div className='submit '>
                    <Link className='btn' to={'../result'} onClick={onSubmit}>Submit</Link>
                    {/* <button className='btn' onClick={onSubmit}>Submit</button> */}

                </div>

            </div>
        </div>
    )
}