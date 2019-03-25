import React, { Component } from 'react';

class Events extends Component {
    state = {
        data: [
            {
                id: 1,
                title: "Krita Perfect for Digital Painting Per Installed on KOOMPI",
                image: "img/krita.jpg",
                desc: "Mainly whether you are a digital artist, illustrator, graphic designer, VFX person you need good practical tools",
                author: "Koompi",
                href: "https://medium.com/@koompi/krita-perfect-for-digital-painting-per-installed-on-koompi-3605ef0f6b81"
            },
            {
                id: 2,
                title: "Introducing GIMP. A Free and Open Source Graphics Editor Program ready to use on KOOMPI",
                image: "https://cdn-images-1.medium.com/max/800/0*095LuMPSMfNuK4hE",
                desc: "With today digital modern technology, the method to handling the post processing can be done on your own personal computer, laptop or any software application",
                author: "Koompi",
                link: "https://medium.com/@koompi/introducing-gimp-a-free-and-open-source-graphics-editor-program-ready-to-use-on-koompi-2fabfde3e4ed"
            },
            {
                id: 3,
                title: "Official launch of KOOMPI",
                image: "img/koompi-launching.jpg",
                desc: "KOOMPI launching event received an unexpected turnout, thanks to BarCamp and the volunteers. We have reached more than 10,000 eyeballs directly at our booth in the two day event from 20–21 October 2018.",
                author: "Koompi",
                link: "https://medium.com/@koompi/official-launch-of-koompi-6cf9127a274a"
            }
        ]
    }
    render() {
        return (
            <React.Fragment>
                <div className="ui container">
                    <center>
                        <h1 className="kosmosConent">Recently Event Blog</h1>
                    </center>
                    <div className="ui stackable three column grid">
                        {this.state.data.map(d => (
                            <div className="column blur" key={d.id}>
                                <a target="_blank" rel="noopener noreferrer" href={d.link}>
                                    <center className="shadowEvent"><img src={d.image} className="ui fluid image" alt="kramaos" />
                                        <h4>{d.title.length > 60 ? d.title.substring(0,60)+ "..." : d.title.substring(0,60)}</h4>
                                        <p>{d.desc.length > 110 ? d.desc.substring(0,110)+ "..." : d.desc.substring(0,110)}</p>
                                        <p className="bySomeOne">By: {d.author}</p>
                                    </center>
                                </a>
                            </div>
                        ))}
                    </div>
                </div>
            </React.Fragment>
            
        );
    }
}

export default Events;