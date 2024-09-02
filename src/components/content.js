import React, { useEffect, useState } from 'react';
import {Comment, Share, } from '@material-ui/icons';
import pic1 from '../assets/img1.jpg';
import pic2 from '../assets/img2.jpg';
import pic3 from '../assets/img3.jpg';

function Content() {


    return(
        <div className='row image mt-3'>
            <div className='col-3'>
              <img src={pic1} style={{width: "200px", height: "200px"}}/>
              <div className='social'>
                <Comment  style={{width:"40px"}} />
                <Share   style={{width:"40px"}}/>
              </div>
              <p>Olympics 2024 100 meters running</p>
              <p>1 day ago</p>   
            </div>
            <div className='col-3'>
              <img src={pic2} style={{width: "200px", height: "200px"}}/>
              <div className='social'>
                <Comment  style={{width:"40px"}} />
                <Share   style={{width:"40px"}}/>
              </div>
              <p>world longest Car drifting in the aeroplane track</p>
              <p>10 months ago</p>
            </div>
            <div className='col-3'>
              <img src={pic3} style={{width: "200px", height: "200px"}}/>
              <div className='social'>
                <Comment  style={{width:"40px"}} />
                <Share   style={{width:"40px"}}/>
              </div>
              <p>Olympics 2024  Road cycling held at Paris</p>
              <p>1 day ago</p>
            </div>
            <div className='col-3'>
              <img src={pic1} style={{width: "200px", height: "200px"}}/>
              <div className='social'>
                <Comment  style={{width:"40px"}} />
                <Share   style={{width:"40px"}}/>
              </div>
              <p>Bike Racing is the very hard or not explained by rossi ?</p>
              <p>1 day ago</p>
            </div>
            <div className='col-3'>
              <img src={pic2} style={{width: "200px", height: "200px"}}/>
              <div className='social'>
                <Comment  style={{width:"40px"}} />
                <Share   style={{width:"40px"}}/>
              </div>
              <p>World longest parachute driving in the year of 2024</p>
              <p>2 Years Ago</p>
            </div>
            <div className='col-3'>
              <img src={pic3} style={{width: "200px", height: "200px"}}/>
              <div className='social'>
                <Comment  style={{width:"40px"}} />
                <Share   style={{width:"40px"}}/>
              </div>
              <p>World fastest game ice hockey or hockey ?</p>
              <p>1 years ago</p>
            </div>
            <div className='col-3'>
              <img src={pic1} style={{width: "200px", height: "200px"}}/>
              <div className='social'>
                <Comment  style={{width:"40px"}} />
                <Share   style={{width:"40px"}}/>
              </div>
              <p>India vs australia test series , india won by 333 runs.</p>
              <p>55 minutes ago</p>
            </div>
            <div className='col-3'>
              <img src={pic2} style={{width: "200px", height: "200px"}}/>
              <div className='social'>
                <Comment  style={{width:"40px"}} />
                <Share   style={{width:"40px"}}/>
              </div>
              <p>The heaviest sports in the world base ball or wrestling ?</p>
              <p>2 days ago</p>
            </div>
            
          </div>
    )
}

export default Content;