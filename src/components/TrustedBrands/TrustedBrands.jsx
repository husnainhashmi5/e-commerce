import React,{ useContext } from 'react';
import Marquee from "react-fast-marquee";

import './TrustedBrands.css'

// import { ThemeContext } from '../../contexts/ThemeContext';
import { skillsData } from './TrustedBrandsData'
import { skillsImage } from './TBrandsimages'

function TrustedBrands() {

    // const { theme } = useContext(ThemeContext);

    // const skillBoxStyle = {
    //     backgroundColor: theme.secondary,
    //     boxShadow: `0px 0px 30px ${theme.primary30}`
    // }
    const skillBoxStyle = {
        padding: "10px",
        margin: "5px",
        textAlign: "center",
      };

    return (
        <div className="skills" style={{backgroundColor: 'white'}}>
            <div className="skillsHeader">
                <h2 style={{color: 'black'}}>Trusted Brands</h2>
            </div>
            <div className="skillsContainer">
                <div className="skill--scroll">
                    <Marquee 
                        gradient={false} 
                        speed={80} 
                        pauseOnHover={true}
                        pauseOnClick={true} 
                        delay={0}
                        play={true} 
                        direction="left"
                    
                    >
                        {skillsData.map((skill, id) => (
                            <div className="skill--box" key={id} style={skillBoxStyle}>
                                <img src={skillsImage(skill)} alt={skill} />
                                <h3 style={{color: 'teal'}}>
                                    {skill}
                                </h3>
                            </div>
                        ))}
                    </Marquee>
                </div>
            </div>
        </div>
    )
}

export default TrustedBrands