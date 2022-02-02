import React from "react"
import LogOut from '../components/btns/logOut'
import BtnNavBack from '../components/btns/BtnNavBack'
import BtnNavNext from '../components/btns/BtnNavNext'
import { ReactComponent as Method_5 } from '../assets/images/family_planning_methods/method_05.svg'
import { ReactComponent as Method_1 } from '../assets/images/family_planning_methods/method_01.svg'
import { ReactComponent as Method_4 } from '../assets/images/family_planning_methods/method_04.svg'
import { ReactComponent as Method_6 } from '../assets/images/family_planning_methods/method_06.svg'
import { ReactComponent as Method_2 } from '../assets/images/family_planning_methods/method_02.svg'
import { ReactComponent as Method_3 } from '../assets/images/family_planning_methods/method_03.svg'
import RadioButtons from '../components/btns/radioButton'
import { Link } from "react-router-dom"

const Fp32 = () => {

    let Str = {
        title: 'Which method are you interested in?',
        subtitle: '',
        mthds: ['UID', 'Implant', 'Condoms', 'Injectable', 'Pills', 'EC']
    }

    let btns = {
        lbl: ['back', 'next']
    }

    let Rbttns = {
        name: "radio",
        lbls: ['UID', 'Implant', 'Condoms', 'Injectable', 'Pills', 'EC']
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
                <div className="fp32">
                    <div className="grd_line1 ">
                        <h1 className="slide_in_blurred_top">{Str.title}</h1>
                    </div>
                    <div className="grd_line2">
                        <div>
                            <div className="opts_img">
                                <div className="grd_img"><Method_4 /></div>
                                <div className="grd_cta ">
                                    <div className="r_bttons tracking_in_expand">
                                        <RadioButtons name={Rbttns.name} lbl={Rbttns.lbls[4]} />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div>
                        <div className="opts_img">
                                <div className="grd_img"><Method_6 /></div>
                                <div className="grd_cta ">
                                    <div className="r_bttons tracking_in_expand">
                                        <RadioButtons name={Rbttns.name} lbl={Rbttns.lbls[3]} />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="grd_bottom_nav">
                <div className="btm_nab_one">
                    <div className="grd_btm_left">
                        <Link to={"/Fp29"}>
                            <BtnNavBack text_btn={btns.lbl[0]} />
                        </Link>
                    </div>
                    <div className="grd_btm_center"></div>
                    <div className="grd_btm_right">
                        <Link to={"/Fp33"}>
                            <BtnNavNext text_btn={btns.lbl[1]} />
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Fp32;