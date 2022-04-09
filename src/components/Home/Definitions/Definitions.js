import React from "react";
import "./Definitions.css";
import ReactAudioPlayer from 'react-audio-player';

const Definitions = ({ word, meanings, category }) => {
    return (
    <>
        <div className="meanings">

            {/* audio.................. */}
            
      {meanings[0] && word && category === "en" && (
        <div className="fixedAudioPlayer">
        <ReactAudioPlayer className="audioPlayer"
         src={meanings[0].phonetics[0] && meanings[0].phonetics[0].audio}
         title="play"
         autoPlay
         controls="controls"
         preload='auto'
       />
      
      </div> 
      )}
     


    {word ==="" ? <h6 className="subTitle">Type a word in the search bar .. </h6> : (
        meanings.map((meaning) => meaning.meanings[0]["definitions"].map((def) => (
         
            <div className="singleMeaning">
               Meaning: {def.definition}
                <hr className="solidHR"/>
                { def.example && (<span>Example: {def.example}</span> )}
                
               { console.log(meanings)}
                {def.synonyms && (
                  <span>
                    <b>Synonyms :</b> {def.synonyms.map((synonym) => `${synonym}, `)}
                  </span>
                )}

            </div>
           
        )) )
    )}
    </div>
    
    </>
    
)}

export default Definitions;