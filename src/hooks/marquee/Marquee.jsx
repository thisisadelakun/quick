import React from 'react';
import './Marquee.css';

import calendar from '../../assets/1579797_calendar_calender_date_icon.svg'
import ratio from '../../assets/3583309_award_badge_procent_icon.svg'
import medals from '../../assets/3583308_award_medal_prize_quality_icon.svg'
import can from '../../assets/5079021_beer_beverage_can_coffee_drink_icon.svg'
import globe from '../../assets/1287524_globe_connection_internet_web_website_icon.svg'
import ping from '../../assets/2138353_ping pong_sport_table_table tennis_tennis_icon.svg'
import gear from '../../assets/1287525_gear_cog_control_options_settings_icon.svg'
import mapus from '../../assets/6971155_usa_map_immigration_icon.svg'
import googles from '../../assets/334650_google_search engine_logo_media_social_icon.svg'


const MarqueeItem = ({ imageSrc, title, description }) => {
    return (
      <div className="marquee-item">
        <div className="marqs">
        <img src={imageSrc} alt="Item" width={80} />
        <h3>{title}</h3>
        <p>{description}</p>
        </div>
      </div>
    );
  };

  const Marquee = () => {
    const items = [
      { imageSrc: calendar, title: '14th', description: 'YEARS IN BUSINESS' },
      { imageSrc: ratio, title: '5:1', description: 'RATIO FUSION CLIENTS OUT-PERFORM THE MARKET' },
      { imageSrc: medals, title: '18', description: 'TELLY AWARDS WON' },
      { imageSrc: can, title: '86', description: 'CANS OF SODA CONSUMED WEEKLY' },
      { imageSrc: mapus, title: '3', description: 'EMMY AWARD WON' },
      { imageSrc: ping, title: '19', description: 'PING PONG MATCHES PLAYED DAILY' },
      { imageSrc: globe, title: '1', description: 'WEBBY AWARD WON' },
      { imageSrc: gear, title: '0', description: 'SERVICE NOT OFFERED IN-HOUSE' },
      { imageSrc: googles, title: '3/3', description: 'GOOGLE CERTIFICATION' }
    ];
  
    return (
        <div className="container marquee-container">
        <div className="marquee-items">
          {items.map((item, index) => (
            <MarqueeItem key={index} {...item} />
          ))}
          {/* Duplicate the items for continuous looping */}
          {items.map((item, index) => (
            <MarqueeItem key={index + items.length} {...item} />
          ))}
          {items.map((item, index) => (
            <MarqueeItem key={index + items.length} {...item} />
          ))}
          {items.map((item, index) => (
            <MarqueeItem key={index + items.length} {...item} />
          ))}
          {items.map((item, index) => (
            <MarqueeItem key={index + items.length} {...item} />
          ))}
          {items.map((item, index) => (
            <MarqueeItem key={index + items.length} {...item} />
          ))}
          {items.map((item, index) => (
            <MarqueeItem key={index + items.length} {...item} />
          ))}
          {items.map((item, index) => (
            <MarqueeItem key={index + items.length} {...item} />
          ))}
          {items.map((item, index) => (
            <MarqueeItem key={index + items.length} {...item} />
          ))}
          {items.map((item, index) => (
            <MarqueeItem key={index + items.length} {...item} />
          ))}
          {items.map((item, index) => (
            <MarqueeItem key={index + items.length} {...item} />
          ))}
        </div>
      </div>
    );
  };
  
  export default Marquee;