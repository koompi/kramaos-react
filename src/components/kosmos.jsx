import React from 'react';
import Navbar from './layouts/navbar';
import Footer from './layouts/footer';

const Kosmos = () => {
    return (
        <React.Fragment>
            <Navbar />
            <div className="backgroundBannerKosmos">
                <div className="ui container contentCenter">
                    <div className="kosmosCenter"><img src="/img/logo/kosmos-white-f6.svg" alt="kramaos" />
                        <h1>One-click install KOSMOS</h1>
                        <p className="paddingParagraph">Our success is determined by how many lives we help through spreading the love and benefit of Open Source. Don’t let our words fool you, download and test it for yourself.</p><a href="http://repo.kramaos.org/iso/" className="ui huge inverted download button downadBTN" target="_blank" rel="noopener noreferrer">Download Now</a></div>
                </div>
            </div>
            <div className="ui container kosmosConent">
                <h1>Before you leave, please read below note from KOSMOS team</h1>
                <p>As said before, KOSMOS v2.0.0, a multipurpose and user-friendly Linux operating system distribution, driven by a mission to provide tools for the next generation of engineers, problem solvers and discovers.</p>
                <p>KOSMOS was developed for KOOMPI Laptop and many of its other devices to encourage more laptops and computer companies in to the world to use Open Sources and help build to support for Linux based Operating System, like Linux has been helping us in many way so far.</p>
                <p>KOSMOS is freely open, which meant you can customized everything to your demand and satisfaction, not just for KOOMPI hardwares. All from the looks and feel to the very kernel and everything else, can be change. That is why you are opened to download it right here.</p>
                <p>KOSMOS comes with one official desktop edition based on KDE, we called KDE-KOSMOS flavor. We don’t want to reinvent the good wheels. Doing this meant we help support growing the open sources community and its users. We also believe that KDE is one of the most stable DE out in the Open Source world. Hope that we can help streamline open source community choose one main Desktop Environment (DE) and use the energy to build other things that is more useful for the world. </p>
                <p>Although, in the purpose of learning, we will be releasing a community flavor, which are Openbox and Xfce for those love more functional and less beautiful. Yet, KDE-KOSMOS will be the only official DE.</p>
                <p>KOSMOS comes along with different option for managing packages. The original option is “Pacman”, the GUI option is “Octopi”, and KOSMOS command line option is “Pi”. We suggest you to give Pi a try and let’s us know what you think. Pi is like a one tools to command them all kind of command. So try it out.</p>
                <p>For developers and life-long learners, we shipped the KOSMOS with modern and favorite programming languages by developers around the world like Python, Go, Rust, Clojure and of course web stuffs around JS tools and framework. On top of that there also the favorite text editors VS Code. You can install more tools for yourself; just pi -i &lt;app name&gt; on terminal or head to the Software store and install it with a single click.</p>
                <p>For office and administration work, KOSMOS comes with a suite of Libreoffice. However v2.0 also included Microsoft Office Online Desktop Apps to let the users take advantage of their OneDrive and the flavor of MS Office in their most powerful Linux desktop. </p>
                <p>Thank you for stopping by KOSMOS. We hope you are enjoying it, as much as we are making it. Please feel free to share to your love one, give us feedback, and contribute to KOSMOS on Github.</p>
                <p>Join our community forum at <a href="https://forum.kramaos.org" target="_blank" rel="noopener noreferrer">https://forum.kramaos.org</a>
                    <br /> Or join our telegram community<a href="https://t.me/kramaos" target="_blank" rel="noopener noreferrer">https://t.me/kramaos</a></p>
                <p>Happy computing!</p>
                <p>KOSMOS/KramaOS Team</p>
            </div>
            <Footer />
        </React.Fragment>
    );
}

export default Kosmos;