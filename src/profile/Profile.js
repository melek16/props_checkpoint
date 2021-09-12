import React from 'react'
import PropTypes from "prop-types";

const Profile = ({fullName, bio, profession,image,handleName}) => {
    function changePhoto(im){
        let newPhoto=prompt("What is the link of the new photo?")
        if(newPhoto){im.src=newPhoto}
    }
    function changetext(text,what){
        let newText=prompt(`${what}`)
        if(newText){text.innerText=newText}
    }
    return (
        <div id="profile">
            
            <div>
                <div id="img_div">
            <img id="iimg" src={image} alt="" style={{height:250,width:250}} onClick={e=>changePhoto(e.target)}/>
            <div className="comment">Click</div>
            </div>
           <div id="info">
            <p><div className="tag">Fullname:</div> <span onClick={e=>changetext(e.target,'Full Name:')}>{fullName}</span><div className="comment">Click</div></p>
            <p  id="bio"><div className="tag">Bio:</div><span onClick={e=>changetext(e.target,'Bio:')}> {bio}</span><div className="comment">Click</div></p>
            <p><div className="tag">Profession:</div><span onClick={e=>changetext(e.target,'Profession:')}>{profession}</span><div className="comment">Click</div> </p>
            </div>
            </div>
            <button>Next</button>
    </div>
    )
}
Profile.defaultProps={
    fullName:"No Name Yet",
    bio:"No Bio Yet",
    profession:"No Profession Yet",
    image:"No image yet"
}
// eslint-disable-next-line react/no-typos
Profile.PropTypes={
    fullName:PropTypes.string,
    bio:PropTypes.string,
    profession:PropTypes.string,
    image:PropTypes.string,
    handleName:PropTypes.func
};
export default Profile
