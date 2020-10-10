import React from "react";
import Title from "../../components/labels/title/titles";
//ImageSource
import ola from '../../assets/images/ola.jpg'
import SocialMedia from '../../components/social-media/social-media'

import CircleImageDescription from '../../components/cards/images/circle-image-description';

import './follow.css'

function Follow() {
    return (
        <div className="App-header page">
            <Title name="#chat_with_me 📞"/>

            <div class="page-content">
                <img src={ola} class="suggestion-image"/>
                <div class="form-content">
                    <form id="contact-form">
                        <div className="form-group" class="control-form">
                            <input type="text" className="form-control" placeholder="Name"/>
                        </div>
                        <p></p>
                        <div className="form-group" class="control-form">
                            <input type="email" className="form-control" placeholder="Email"/>
                        </div>
                        <p></p>
                        <div className="form-group" class="control-form">
                            <input type="text" className="form-control" placeholder="Subject"/>
                        </div>
                        <p></p>
                        <div className="form-group" class="control-form">
                            <textarea className="form-control" placeholder="Message" />
                        </div>
                        <div class="control-form">
                            <button type="submit" className="btn btn-primary">Submit</button>
                        </div>
                    </form>
                </div>
                <div style={{width: "600px"}}> 
                    <div>
                        <CircleImageDescription source={ola} description="ola"/>
                        <p/>
                        <CircleImageDescription source={ola} description="ola"/>
                    </div>
                    <div>
                        
                    </div>
                </div>
            </div>
            <div class="footer">
                <div style={{position: "absolute", left: "50%"}}>
                    <SocialMedia />
                </div>
            </div>
        </div>
        );
    }

export default Follow;
