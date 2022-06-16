import React from 'react'

const Display = () => {
    function addColor(element){
        element.target.style.background = ' rgb(242, 101, 101)';
        element.target.style.padding = '25px 10px';
    }
    
    function removeColor(element){
        element.target.style.background = ' rgb(37, 37, 37)';
    }

    function picP(){
        let pictureImg = document.querySelector("#picture-img");
        pictureImg.src = "puppy.png";
    }

    function picS(){
        let pictureImg = document.querySelector("#picture-img");
        pictureImg.src = "selfie.jpg";
    }
  return (
    <div className="container">
        <header id="home">
            <div className="navtop">
                <div className="navname">
                    <h1>KEN OH</h1>
                </div>
                <div className="navbtn">
                    <a href="#home" onMouseOver={addColor} onMouseLeave={removeColor}>Home</a>
                    <a href="#about" onMouseOver={addColor} onMouseLeave={removeColor}>About</a>
                    <a href="#project" onMouseOver={addColor} onMouseLeave={removeColor}>Projects</a>
                    <a href="#skill" onMouseOver={addColor} onMouseLeave={removeColor}>Skills</a>
                    <a href="#education" onMouseOver={addColor} onMouseLeave={removeColor}>Education</a>
                    <a href="#contact" onMouseOver={addColor} onMouseLeave={removeColor}>Contact</a>
                </div>
            </div>
        </header>
        <main>
            <div className="display">
                <h2>Ken Oh</h2>
                <h3 className="head1">Software Engineer</h3>
            </div>
            <div id="about" className="about">
                <div>
                    <h3 className="head6">About Me</h3>
                    <p className="adescript">Hi my name is Ken and I am a Software Engineer! My journey in software started for my love being around tech, therefore one day I thought to myself "Why dont I join tech!". I immediately enrolled in a bootcamp and instantly fell in love with it. I have been constantly learning and training into programming ever since!</p>
                    <p className="adescript">Away from the keyboard, I enjoy playing tennis and taking my puppy Momo out for walks at the park.</p>
                </div>
                <div className="images">
                    <img onMouseOver={picP} onMouseLeave={picS} className="aimage" src="selfie.jpg" id="picture-img" alt="selfie"/>
                </div>
            </div>
            <div id="project" className="parallax">
                <h3 className="head2">Projects</h3>
                <p className="head3">Here are some projects I have built</p>
            </div>
            <div className="project">
                <div className="section">
                    <div>
                        <p className="thead1">DomoSushi <span className="normal">&nbsp;| Java, Spring Boot</span> </p>
                        <p className="font4">A prototype website created for a family restaurant, used to help users learn about the restaurant and the selection of 
                            foods they serve.</p>
                        <a href="https://github.com/Kenoh7/Project_Java_DomoSushi"><img className="resize2" src="github2.png" alt="github"/></a>
                    </div>
                    <div class="space2">
                    <a href="https://github.com/Kenoh7/Project_Java_DomoSushi"><img className="resize1" src="jhome.png" alt="DomoSushi"/></a>
                    </div>
                </div>
                <div className="section">
                    <div>
                        <p className="thead1">CouchPotato <span className="normal">&nbsp; | React, Node, Express, Mongoose, MongoDB</span></p>
                        <p className="font4">A extension of the FoodieSpot project, created for users to upload their recipes as well as search and favorite recipes.</p>
                        <a href="https://github.com/Kenoh7/Project_React_CouchPotato"><img class="resize2" src="github2.png" alt="github"/></a>
                    </div>
                    <div className="space2">
                    <a href="https://github.com/Kenoh7/Project_React_CouchPotato"><img className="resize1" src="mhome.png" alt="CouchPotato"/></a>
                    </div>
                </div>
                <div className="section1">
                    <div>
                        <p className="thead1">FoodieSpot <span className="normal">&nbsp; | Python, Flask, MySQL</span></p>
                        <p className="font4">A user-friendly foodie forum community created to help users discuss about food related topics. Used to post troubleshooting
                            issues on how to make a recipe or share great recipes.</p>
                        <a href="https://github.com/Kenoh7/Project_Python_FoodieSpot"><img className="resize2" src="github2.png" alt="github"/></a>
                    </div>
                    <div className="space2">
                    <a href="https://github.com/Kenoh7/Project_Python_FoodieSpot"><img className="resize1" src="phome.png" alt="FoodieSpot"/></a>
                    </div>
                </div>
            </div>    
                <div id="skill" className="parallax1">
                <h3 className="head2">Skills</h3>
                <p className="head3">Here are skills I acquired thus far</p>
            </div>
            <div className="skill">
                <div className="section2">
                    <div className="font1">
                        <p className="space1">Languages:</p>
                        <p className="space1">Libraries & Framework:</p>
                        <p className="space1">Database:</p>
                        <p className="space1">Technologies:</p>
                        <p className="space1">Office Tools:</p>
                        <p>Spoken Languages:</p>
                    </div>
                    <div className="font2">
                        <p className="space1">Javascript, Java, Python, HTML, CSS</p>
                        <p className="space1">Node/Express, Flask, React, Spring Boot, Mongoose, Axios, Bootstrap</p>
                        <p className="space1">MySQL, MongoDB</p>
                        <p className="space1">Github, Postman, Spring Tool Suite, AWS EC2</p>
                        <p className="space1">Excel, Word, Powerpoint, Outlook, Cello, SAP</p>
                        <p>English, Korean</p>
                    </div>
                </div>
                <div className="centering">
                    <img src="programs.png" alt="programs"/>
                </div>
            </div>
            <div id="education" className="parallax2">
                <h3 className="head2">Education</h3>
                <p className="head3">Here are schools I completed thus far</p>
            </div>
            <div className="education">
                <div className="section4">
                    <div className="spacing">
                        <img className="resize3"src="cdojo.png" alt="codingdojo"/>
                    </div>
                    <div>
                        <h3 className="font3">Coding Dojo Bootcamp <span className="white">----------------------------</span></h3>
                        <p className="font4">Computer Software Engineering</p>
                        <p className="font4">Los Angeles, CA | 2022</p>
                        <p className="space3">- Web Fundamentals</p>
                        <p className="space3">- Python Stack</p>
                        <p className="space3">- MERN Stack</p>
                        <p className="space3">- Java Stack</p>
                    </div>
                </div>
                <div className="section3">
                    <div className="spacing">
                        <img className="resize3" src="calstatedh.png" alt="calstatedh"/>
                    </div>
                    <div>
                        <h3 className="font3">California State University Dominguez Hills</h3>
                        <p className="font4">Bachelors of Science (B.S.), Marketing</p>
                        <p className="font4">Carson, CA | 2013</p>
                    </div>
                </div>
            </div>
            <div id="contact" className="contact">
                <h5 className="head5">Contact Me</h5>
                <div className="row">
                    <a href="mailto: kenneth.oh7@gmail.com" className="hover"><img className="resize" src="envelope.png" alt="email"/><span className="hovertext">Email</span></a>
                    <a href="https://github.com/Kenoh7" className="hover"><img className="resize" src="github.png" alt="github"/><span class="hovertext">Github</span></a>
                    <a href="https://www.linkedin.com/in/kennethhyunoh/" className="hover"><img className="resize" src="linkedin.png" alt="linkedin"/><span className="hovertext">Linkedin</span></a>
                    <a href="Kenneth_Resume_2022.pdf" className="hover"><img className="resize" src="edit.png" alt="resume"/><span className="hovertext">Resume</span></a>
                </div>
            </div>
        </main>
    </div>
  )
}
export default Display