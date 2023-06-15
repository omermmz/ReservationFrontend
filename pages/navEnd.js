import NavEndCss from '../styles/navEnd.module.css';
import React from "react";

function NavEnd(props){

    return   <div className={NavEndCss.navpagediv}>
            <div className={NavEndCss.navpfirstpart}>
                <div className={NavEndCss.navpindiv}>
                    <h1 className={NavEndCss.navpbas1}>PALM DESERT SHOWROOM</h1>
                    <a href="https://www.google.com/maps/place/74-839+42nd+Ave,+Palm+Desert,+CA+92260,+Amerika+Birle%C5%9Fik+Devletleri/@33.7432449,-116.3590524,17z/data=!3m1!4b1!4m5!3m4!1s0x80dafc254056a02b:0xcba701b5efeeeb7b!8m2!3d33.7432449!4d-116.3590524" target="_blank" rel="noopener noreferrer" className='navpparag1link'>
                        <p className='navpparag1'>74-824 42nd Avenue <br/>
                            Palm Desert, CA 92260</p></a>
                    <a href='tel://+7607731001' className='navpparag1link' ><p className='navpparag2'>(760) 773-1001</p></a>
                </div>
                <div className={NavEndCss.navpindiv}>
                    <h1 className='navpbas1'>BEND SHOWROOM</h1>
                    <a href="https://www.google.com/maps/place/50+SE+Scott+St+%238,+Bend,+OR+97702,+Amerika+Birle%C5%9Fik+Devletleri/@44.0507274,-121.3041837,17z/data=!3m1!4b1!4m5!3m4!1s0x54b8c63ab495c4d5:0x6a73a0149b47d979!8m2!3d44.0507614!4d-121.304273" target="_blank" rel="noopener noreferrer" className='navpparag1link'>
                        <p className='navpparag1'>50 SE Scott St. #8 <br/>
                            Bend, OR 97702</p></a>
                    <a href='tel://+5417069990' className='navpparag1link' ><p className='navpparag2'>(541) 706-9990</p></a>
                </div>
                <div className={NavEndCss.navpindiv}>
                    <h1 className='navpbas1'>NAPA SHOWROOM</h1>
                    <a href="https://www.google.com/maps/place/807+Soscol+Ave,+Napa,+CA+94559,+Amerika+Birle%C5%9Fik+Devletleri/@38.2992612,-122.2822406,17z/data=!3m1!4b1!4m5!3m4!1s0x80850666081db381:0x34cf746798b56c8c!8m2!3d38.2992612!4d-122.2822406" target="_blank" rel="noopener noreferrer" className='navpparag1link'>
                        <p className='navpparag1'>807 Soscol Avenue <br/>
                            Napa, CA 94559</p></a>
                    <a href='tel://+7074064004' className='navpparag1link' ><p className='navpparag2'>(707) 406-4004</p></a>
                </div>
                <div className={NavEndCss.navpindiv}>
                    <h1 className='navpbas1'>LOS ALAMITOS SHOWROOM</h1>
                    <a href="https://www.google.com/maps/place/10801+Bloomfield+St,+Los+Alamitos,+CA+90720,+Amerika+Birle%C5%9Fik+Devletleri/@33.8069317,-118.0639147,17z/data=!3m1!4b1!4m5!3m4!1s0x80dd2e870c26aaab:0x829aa3b81a7a182!8m2!3d33.8069317!4d-118.0639147" target="_blank" rel="noopener noreferrer" className='navpparag1link'>
                        <p className='navpparag1'>10801 Bloomfield Street <br/>
                            Los Alamitos, CA 90720</p></a>
                    <a href='tel://+5622945000' className='navpparag1link' ><p className='navpparag2'>(562) 294-5000</p></a>
                </div>
                <div onClick={props.onClick} ><h6 className='navpbas2'>TOP    ^</h6></div>
            </div>
            <div className='navpsecondpart'>
                <p>© 2022 Formation, Inc. All rights reserved.</p>
            </div>
        </div>

}

export default NavEnd