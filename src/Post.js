import { Avatar } from '@material-ui/core'
import React, { useState } from 'react'
import './Post.css'
import ThumbUpIcon from '@material-ui/icons/ThumbUp';
import ChatBubbleOutlineOutlinedIcon from '@material-ui/icons/ChatBubbleOutlineOutlined';
import NearMeIcon from '@material-ui/icons/NearMe';
import { useStateValue } from './StateProvider';
import db from './firebase'
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

function Post({ profilePic, image, username, message,likes,timestamp }) {

    const [{ user }] = useStateValue()
    const [input, setInput] = useState('')
    const [imageUrl, setImageUrl] = useState('')
  const [getLike,setLike]=useState("like");
    const handleSubmit = (e) => {
        e.preventDefault()

        db.collection('posts').add({
            message: input,
            timestamp: firebase.firestore.FieldValue.serverTimestamp(),
            profilePic: user.photoURL,
            username: user.displayName,
            image: imageUrl
        })


        setInput('')
        setImageUrl('')
    }

 const handleLike=()=>{
     let checkLike=getLike;
     if(checkLike==="like"){
        setLike("liked");
     }else{
        setLike("like");
     }
 }
    return (
        <div className='post'>
            <div class="post__top">
                <Avatar src={user.photoURL} className='post__avatar' />
                <div class="post__topInfo">
                    <h3>{user.displayName}</h3>
                    <p>{timestamp}</p>
                </div>
            </div>

            <div class="post__bottom">
                <h4>{message}</h4>
            </div>

            <div class="post__image">
                <div class="pic">
                    <img src={image} alt="" />
                </div>
            </div>

            <div class="post__bottom__likes">
                <p>{likes}</p>
            </div>

            <div class="post__options">
                <div class="post__option" onClick={handleLike}>
                    <div class={getLike}><ThumbUpIcon /></div>
                    <p>Like</p>
                </div>
                <div class="post__option">
                    <ChatBubbleOutlineOutlinedIcon />
                    <p>Comment</p>
                </div>
                <div class="post__option">
                    <NearMeIcon />
                    <p>Share</p>
                </div>
            </div>
        </div>
    )
}

export default Post
