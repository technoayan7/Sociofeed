import React from 'react'
import Story from './Story'
import './StoryReel.css'

function StoryReel() {
    return (
        <div className="storyReel">
            {/* Story */}
            <Story image="https://github.com/technoayan7/GDS/blob/main/WhatsApp%20Image%202022-08-31%20at%2012.20.52%20PM.jpeg?raw=true" profileSrc="https://media-exp1.licdn.com/dms/image/C5603AQFeFwV2tqWKmA/profile-displayphoto-shrink_400_400/0/1630403961270?e=1667433600&v=beta&t=ASFd1NThRq53jdjhAsLZZwYOrnkz6BCf7Srd8msetN8" title="Ayan" />

            <Story image="https://media1.giphy.com/media/fniVO5yA3ddAq6A19V/200.gif" profileSrc="https://github.com/technoayan7/GDS/blob/main/nAMAN.jpeg?raw=true" title="Naman" />

            <Story image="https://c.tenor.com/iMnwiRazlboAAAAM/come-on-irritated.gif" profileSrc="https://github.com/technoayan7/GDS/blob/main/WhatsApp%20Image%202022-08-31%20at%2012.34.27%20PM.jpeg?raw=true" title="Saksham" />

            <Story image="https://images.unsplash.com/photo-1511497584788-876760111969?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8NXx8fGVufDB8fHx8&w=1000&q=80" profileSrc="https://github.com/technoayan7/GDS/blob/main/WhatsApp%20Image%202022-08-31%20at%2012.21.14%20PM.jpeg?raw=true" title="Ujjwal" />

            <Story image="https://c.tenor.com/4RYbGa1GttQAAAAd/lofi-browsing.gif" profileSrc="https://github.com/technoayan7/GDS/blob/main/WhatsApp%20Image%202022-08-31%20at%2012.26.04%20PM.jpeg?raw=true" title="Ayashika" />
        </div>
    )
}

export default StoryReel