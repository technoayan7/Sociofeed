import React from 'react'
import './Widgets.css'

function Widgets() {
    return (
        <>
            <div className="widgets">
                <iframe
                    src="https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2Fgeekhaveniiita%2F&tabs=timeline&width=340&height=500&small_header=false&adapt_container_width=true&hide_cover=false&show_facepile=true&appId"
                    width="350"
                    height="800"
                    scrolling="no"
                    frameborder="0"
                    allowfullscreen="true"
                    allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
                    title="Geekhaven"
                ></iframe>

                {/* <iframe 
            src="https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2Faparoksha%2F&tabs=timeline&width=340&height=500&small_header=false&adapt_container_width=true&hide_cover=false&show_facepile=true&appId" 
            width="340" 
            height="800" 
            scrolling="no" 
            frameborder="0" 
            allowfullscreen="true" 
            allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
            title = "Geekhaven"
            ></iframe> */}

            </div>
        </>

    )
}

export default Widgets