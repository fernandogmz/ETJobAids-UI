import React from "react"
import SelectOp from '../components/selectOp'
import LogOut from '../components/btns/logOut'
import Btn from '../components/btns/btn'
import ReactPlayer from 'react-player'
import { Link } from "react-router-dom"

const Ss8_2_3 = ({terms}) => {

    let op_am = {
        name: 'amethod',
        clss: 'custom_select',
        mthds: [terms['core.IUD'], terms['core.Implant'], terms['core.Condoms'], terms['core.Injectable'], terms['core.Pills'], terms['core.EC']]
    }

    return (
        <div className="lyts">
            <div className="grd_top_nav">
                <div className="grd_left_top">
                    <LogOut />
                </div>
                <div className="grd_right_top"></div>
            </div>
            <div className="grd_cont">
                <div className="ss8_2_3">
                    <div className="grd_line1 ">
                        <h3 className="slide_in_blurred_top">{terms['SS.MethodNoInterestThankYou.1']}</h3>
                    </div>
                    <div className="grd_line2">
                        <p className="tracking_in_expand">{terms['SS.MethodNoInterest.ThankYou.2']}</p>
                        <div>
                            <div>
                                <p className="slide_in_blurred_left">{terms['SS.MethodNoInterest.Summary']}</p>
                            </div>
                            <div className="slide_in_blurred_right">
                                <SelectOp ops={op_am.mthds} name={op_am.name} clss={op_am.clss} />
                            </div>
                        </div>
                    </div>
                    <div className="grd_line3">
                        <div className="content_video slide_in_blurred_bottom">
                        <ReactPlayer
                                    url={require('../assets/mp4/example_video.mp4')}
                                    width='auto'
                                    height='30vh'
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

                    </div>
                    <div className="grd_btm_center"></div>
                    <div className="grd_btm_right">
                        <Link to={"/"}>
                            <Btn text_btn={terms['core.Done']} />
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Ss8_2_3;