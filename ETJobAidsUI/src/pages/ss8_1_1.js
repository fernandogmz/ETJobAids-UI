import React from "react"
import LogOut from '../components/btns/logOut'
import BtnNavBack from '../components/btns/BtnNavBack'
import { ReactComponent as Method_5 } from '../assets/images/family_planning_methods/method_05.svg'
import { ReactComponent as Method_1 } from '../assets/images/family_planning_methods/method_01.svg'
import { ReactComponent as Method_4 } from '../assets/images/family_planning_methods/method_04.svg'
import { ReactComponent as Method_6 } from '../assets/images/family_planning_methods/method_06.svg'
import { ReactComponent as Method_2 } from '../assets/images/family_planning_methods/method_02.svg'
import { ReactComponent as Method_3 } from '../assets/images/family_planning_methods/method_03.svg'
import { Link } from "react-router-dom"


const Ss8_1_1 = ({terms}) => {

    return (
        <div className="lyts">
            <div className="grd_top_nav">
                <div className="grd_left_top">
                    <LogOut />
                </div>
                <div className="grd_right_top"></div>
            </div>
            <div className="grd_cont">
                <div className="ss8_1_1">
                    <div className="grd_line1">
                        <h1>{terms['core.MethodInterest']}</h1>
                    </div>
                    <div className="grd_line2">
                        <div className="grd_top">
                            <div className="slide_in_blurred_left">
                                <Link to={"/Ss8_1_2"}>
                                    <Method_5 />
                                </Link>
                            </div>
                            <div className="slide_in_blurred_right">
                                <Link to={"/Ss8_1_2"}>
                                    <Method_1 />
                                </Link>
                            </div>
                            <div className="slide_in_blurred_right">
                                <Link to={"/Ss8_1_2"}>
                                    <Method_4 />
                                </Link>
                            </div>
                        </div>
                        <div className="grd_bttm">
                            <div className="slide_in_blurred_left">
                                <Link to={"/Ss8_1_2"}>
                                    <Method_6 />
                                </Link>
                            </div>
                            <div className="slide_in_blurred_right">
                                <Link to={"/Ss8_1_2"}>
                                    <Method_2 />
                                </Link>
                            </div>
                            <div className="slide_in_blurred_right">
                                <Link to={"/Ss8_1_2"}>
                                    <Method_3 />
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="grd_bottom_nav">
                <div className="btm_nab_one">
                    <div className="grd_btm_left">
                        <Link to={"/Ss8_1"}>
                            <BtnNavBack text_btn={terms['core.Back']} />
                        </Link>
                    </div>
                    <div className="grd_btm_center">
                        <div id="audio" className="audioplayer"></div>
                    </div>
                    <div className="grd_btm_right">
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Ss8_1_1;