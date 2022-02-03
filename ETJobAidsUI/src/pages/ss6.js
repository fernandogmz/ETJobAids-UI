import React from "react"
import LogOut from '../components/btns/logOut'
import BtnNavBack from '../components/btns/BtnNavBack'
import BtnNavNext from '../components/btns/BtnNavNext'
import ReactPlayer from 'react-player'
import { Link } from "react-router-dom"

const Ss6 = ({terms}) => {

    return (
        <div className="lyts">
            <div className="grd_top_nav">
                <div className="grd_left_top">
                    <LogOut />
                </div>
                <div className="grd_right_top"></div>
            </div>
            <div className="grd_cont">
                <div className="ss4">
                    <div className="grd_line1 ">
                        <div className="content_video slide_in_blurred_bottom">
                        <ReactPlayer
                                    url={require('../assets/mp4/example_video.mp4')}
                                    width='auto'
                                    height='60vh'
                                    controls
                                    playing
                                    volume='0.85'
                                    />
                        </div>
                    </div>
                </div>
            </div>
            <div className="grd_bottom_nav">
                <div className="btm_nab_one">
                    <div className="grd_btm_left">
                        <Link to={"/Ss5"}>
                            <BtnNavBack text_btn={terms['core.Back']} />
                        </Link>
                    </div>
                    <div className="grd_btm_center"></div>
                    <div className="grd_btm_right">
                        <Link to={"/Ss7"}>
                            <BtnNavNext text_btn={terms['core.Next']} />
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Ss6;