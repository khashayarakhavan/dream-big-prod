import React from 'react';
import { Link } from 'react-router-dom';
import HeroHeader from '../Static/heroHeader';
import Booking from '../Static/sectionBooking';
import SectionStories from '../Static/sectionStories';
import SectionAbout from '../Static/sectionAbout';
import SectionFeatures from '../Static/sectionFeatures';
import SectionTours from '../Static/sectionTours';
import SectionFooter from '../Static/sectionFooter';
import Navigation from '../Static/navigation';
import PopUp from '../Static/popUp';

import '../../res/css/style.css';

const Landing = () => {
    return (
      <div>
        <Navigation key="8" />
        <HeroHeader key='1'/>
        <main>
          <SectionAbout ID='2' />
          <SectionFeatures ID='3'/>
          <SectionTours ID='4' />
          <SectionStories ID='5'/>
          <Booking ID='6'/>
          <SectionFooter ID='7' />
          <PopUp key='9' />
        </main> 
      </div>       
    );
};

export default Landing;

// <div style={{ textAlign: "right" }}>
//   <Link to="/surveys/new" className="btn-floating btn-large red">
//     <i className="material-icons">add</i>
//   </Link>
// </div>
