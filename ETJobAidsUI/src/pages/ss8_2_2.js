import React from "react"
import LogOut from '../components/btns/logOut'
import BtnNavBack from '../components/btns/BtnNavBack'
import BtnNavNext from '../components/btns/BtnNavNext'
import { ReactComponent as Done } from '../assets/images/icons/done.svg'
import { ReactComponent as Clear } from '../assets/images/icons/clear.svg'
import { ReactComponent as Lady_01 } from '../assets/images/hero/female/lady_01.svg'
import { ReactComponent as Lady_02 } from '../assets/images/hero/female/lady_02.svg'
import { ReactComponent as Lady_03 } from '../assets/images/hero/female/lady_03.svg'
import { ReactComponent as Male_01 } from '../assets/images/hero/male/male_01.svg'
import { ReactComponent as Male_02 } from '../assets/images/hero/male/male_02.svg'
import { ReactComponent as Male_03 } from '../assets/images/hero/male/male_03.svg'
import { ReactComponent as Kid_01 } from '../assets/images/hero/kids/kid_01.svg'
import { ReactComponent as Kid_02 } from '../assets/images/hero/kids/kid_02.svg'
import { ReactComponent as Kid_02my } from '../assets/images/hero/kids/kid_02my.svg'
import { ReactComponent as Kid_04 } from '../assets/images/hero/kids/kid_04.svg'
import { Link } from "react-router-dom"


const Ss8_2_2 = ({terms}) => {

    return (
        <div className="lyts">
            <div className="grd_top_nav">
                <div className="grd_left_top">
                    <LogOut />
                </div>
                <div className="grd_right_top"></div>
            </div>
            <div className="grd_cont">
                <div className="ss8_1_2">
                    <div className="grd_left">
                        <div className="cont">
                        <h1 className="slide_in_blurred_left">{terms['core.MethodSatisfaction']}</h1>
                            <div className="circle">
                                <Link to={"/Ss8_1_3"}>
                                    <Done />
                                </Link>
                            </div>
                            <div className="circle">
                                <Link to={"/Ss8_1_4"}>
                                    <Clear />
                                </Link>
                            </div>
                        </div>
                    </div>
                    <div className="grd_right">
                        <div className="cont">
                            <div className="fathers">
                                <div><Male_01 /></div>
                                <div><Male_01 /></div>
                            </div>
                            <div className="cont_kids">
                                <div className="kids_l2">
                                    <div><Kid_02my /></div>
                                    <div><Kid_02my /></div>
                                    <div><Kid_02my /></div>
                                    <div><Kid_02my /></div>
                                    <div><Kid_02my /></div>
                                    <div><Kid_04 /></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="grd_bottom_nav">
                <div className="btm_nab_one">
                    <div className="grd_btm_left">
                    <Link to={"/Ss8_2_1"}>
                            <BtnNavBack text_btn={terms['core.Back']} />
                        </Link>
                    </div>
                    <div className="grd_btm_center">
                        <div id="audio" className="audioplayer"></div>
                    </div>
                    <div className="grd_btm_right">
                    <Link to={"/Ss8_2_3"}>
                            <BtnNavNext text_btn={terms['core.Next']} />
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Ss8_2_2;