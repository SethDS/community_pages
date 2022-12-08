import React, {useState} from 'react';
import UserData from './userData.json';
import './styles/userData.css';

export default function UserDataController(): JSX.Element {

    const[name, updateName] = useState('')
    const[age, updateAge] = useState('')
    const[location, updateLocation] = useState('')
    const[picture, updatePicture] = useState('')
    const[comments, updateComments] = useState('')

    const submitReview = (e) => {
        e.preventDefault();
        const reviewData = {"Name": name, "Age": age, "location": location, "picture": picture, "comments": comments}
        
        UserData.push(reviewData);
    }

    return (
        <>
        <h1>Gennev Community Page</h1>
        <div className='review-form'>
            <h2 className='form-input'>Add Your Voice</h2>
            <form className='form-class' onSubmit={e => submitReview(e)}>
                <input className='form-input' placeholder='Name' onChange={e => updateName(e.target.value)} />
                <input className='form-input' placeholder='Age' onChange={e => updateAge(e.target.value)} />
                <input className='form-input' placeholder='Location' onChange={e => updateLocation(e.target.value)} />
                <input className='form-input' placeholder='Picture (URL)' onChange={e => updatePicture(e.target.value)} />
                <input className='form-input' placeholder='Comments' onChange={e => updateComments(e.target.value)} />
                <button className='form-input' >Submit</button>
            </form>
        </div>
        <div className='review-grid'>
            {UserData.map((e)=>{
                return (
                <div className='review'>
                    <img src={e.imageUrl} alt={"Picture of " + e.name} width="100" height="100"></img>
                    <p>{ e.comments }</p>
                </div>
                )
            })}
        </div>
        </>
    )

}