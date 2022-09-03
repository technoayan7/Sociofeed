import React, { useEffect, useState } from 'react'
import { Avatar } from '@material-ui/core'
import './MessageSender.css'
import VideocamIcon from '@material-ui/icons/Videocam';
import PhotoLibraryIcon from '@material-ui/icons/PhotoLibrary';
import InsertEmoticonIcon from '@material-ui/icons/InsertEmoticon';
import { useStateValue } from './StateProvider';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import Post from "./Post"
function MessageSender() {
    const [{ user }, dispatch] = useStateValue()
    const [input, setInput] = useState('')
    const [imageUrl, setImageUrl] = useState('')
    const [getArr, setArr] = useState([]);
    const handleSubmit = (e) => {
        e.preventDefault()
        // setInput('')
        // setImageUrl('')
        // return (
        //     <Post profilePic="https://media-exp1.licdn.com/dms/image/C5603AQFeFwV2tqWKmA/profile-displayphoto-shrink_400_400/0/1630403961270?e=1667433600&v=beta&t=ASFd1NThRq53jdjhAsLZZwYOrnkz6BCf7Srd8msetN8" 
        //         message={input}
        //         username="Technoayan"
        //         likes="😂😆 Ujjwal and 69 others"
        //         timestamp="08:15." 
        //         image={imageUrl}/>
        // )
    }
    const newPost=() => {
        return (
            <Post profilePic="https://media-exp1.licdn.com/dms/image/C5603AQFeFwV2tqWKmA/profile-displayphoto-shrink_400_400/0/1630403961270?e=1667433600&v=beta&t=ASFd1NThRq53jdjhAsLZZwYOrnkz6BCf7Srd8msetN8"
                message={input}
                username="Technoayan"
                likes="😂😆 Ujjwal and 69 others"
                timestamp="08:15."
                image={imageUrl} />
        )
    }
    return (
        <>
            <div className="messageSender">
                <div class="messageSender__top">
                    <Avatar src={user.photoURL} />
                    <form>
                        <input value={input} onChange={(e) => setInput(e.target.value)}
                            placeholder={`What's on your mind, ${user.displayName}?`} />

                        <input placeholder="Image Url (optional) " value={imageUrl} onChange={(e) => setImageUrl(e.target.value)} />

                        <button type="submit" onClick={(e) => handleSubmit(e)}>Hidden Submit</button>
                    </form>
                </div>
                <div class="messageSender__bottom">
                    <div class="messageSender__option">
                        <VideocamIcon style={{ color: "red" }} />
                        <h3>Live Video</h3>
                    </div><div class="messageSender__option">
                        <PhotoLibraryIcon style={{ color: "green" }} />
                        <h3>Photo/Video</h3>
                    </div><div class="messageSender__option">
                        <InsertEmoticonIcon style={{ color: "orange" }} />
                        <h3>Feeling/Activity</h3>
                    </div>
                </div>
            </div>
            {newPost()}
        </>
    )
}

export default MessageSender
