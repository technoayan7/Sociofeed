import React, { useState, useEffect } from 'react'
import ImageUpload from './ImageUpload';
import './Posts.css';
import { db } from './firebase';
import Post from './Post.js';
import { useNavigate } from 'react-router-dom';
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

function Posts({ user }) {
    const history = useNavigate("");
    const [posts, setPosts] = useState([]);

    console.log(user)

    if (user === undefined) {
        history.push("/login")
    }

    useEffect(() => {
        db.collection('posts').orderBy('timestamp', 'desc').onSnapshot(snapshot => {
            setPosts(snapshot.docs.map(doc => ({
                id: doc.id,
                post: doc.data(),
            })));
        })
    }, []);

    return (
        <div className="posts">
            <ImageUpload username={user?.displayName} />
            {
                posts.map(({ id, post }) => (
                    <Post
                        key={id}
                        postId={id}
                        origuser={user?.displayName}
                        username={post.username}
                        userId={user.uid}
                        caption={post.caption}
                        imageUrl={post.imageUrl}
                        noLikes={post.noLikes} />
                ))
            }
        </div>
    )
}

export default Posts

