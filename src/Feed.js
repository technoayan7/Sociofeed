import React from 'react'
import './Feed.css';
import MessageSender from './MessageSender';
import Post from './Post';
import StoryReel from './StoryReel'
//import db from './firebase'

function Feed() {
    // const [posts, setPosts] = useState([])

    // useEffect(() => {
    //     db.collection('posts').orderBy('timestamp', 'desc').onSnapshot((snapshot) =>
    //         setPosts(snapshot.docs.map((doc) => ({ id: doc.id, data: doc.data() })))
    //     )
    // }, [])

    return (
        <div className="feed">
            <StoryReel />
            <MessageSender />
            <Post
                profilePic="https://media-exp1.licdn.com/dms/image/C5603AQFeFwV2tqWKmA/profile-displayphoto-shrink_400_400/0/1630403961270?e=1667433600&v=beta&t=ASFd1NThRq53jdjhAsLZZwYOrnkz6BCf7Srd8msetN8"
                message="When a hot girl enter the classroom"
                username="Technoayan"
                likes="😂😆 Ujjwal and 69 others"
                timestamp="08:15."
                image="https://c.tenor.com/XuQ1ZLYTEQ0AAAAC/welcome-majnu.gif"
            />
            <Post
                profilePic="https://media-exp1.licdn.com/dms/image/C5603AQFeFwV2tqWKmA/profile-displayphoto-shrink_400_400/0/1630403961270?e=1667433600&v=beta&t=ASFd1NThRq53jdjhAsLZZwYOrnkz6BCf7Srd8msetN8"
                message="This Works"
                username="Technoayan"
                likes="😆😂 Ekeshwar and 16 others"
                timestamp="1d."
                image="https://ahseeit.com/hindi/king-include/uploads/2020/10/thumb_121198823_967603907091895_4831003692565079308_n-563803297.jpg"
            />
            <Post
                profilePic="https://media-exp1.licdn.com/dms/image/C5603AQFeFwV2tqWKmA/profile-displayphoto-shrink_400_400/0/1630403961270?e=1667433600&v=beta&t=ASFd1NThRq53jdjhAsLZZwYOrnkz6BCf7Srd8msetN8"
                message="Me and My Bois after C3 exams"
                likes="🤣😂 Saksham and 16 others"
                timestamp= "01 September at 11:30."
                username="Technoayan"
                image="https://c.tenor.com/JTMBGEdd2IMAAAAC/welcome-uday-majnu-dance.gif"
            />
            <Post
                profilePic="https://media-exp1.licdn.com/dms/image/C5603AQFeFwV2tqWKmA/profile-displayphoto-shrink_400_400/0/1630403961270?e=1667433600&v=beta&t=ASFd1NThRq53jdjhAsLZZwYOrnkz6BCf7Srd8msetN8"
                timestamp="28 August at 07:30."
                likes="😍 Ayashika and 32 others"
                username="Technoayan"
                image="https://images.unsplash.com/photo-1585409677983-0f6c41ca9c3b?ixlib=rb-1.2.1&w=1080&fit=max&q=80&fm=jpg&crop=entropy&cs=tinysrgb"
            />
            <Post
                profilePic="https://media-exp1.licdn.com/dms/image/C5603AQFeFwV2tqWKmA/profile-displayphoto-shrink_400_400/0/1630403961270?e=1667433600&v=beta&t=ASFd1NThRq53jdjhAsLZZwYOrnkz6BCf7Srd8msetN8"
                message="Hello world"
                timestamp="Yesterday at 02:30."
                username="Technoayan"
                likes="😂 naman and 12 others"
            />
        </div>
    )
}

export default Feed