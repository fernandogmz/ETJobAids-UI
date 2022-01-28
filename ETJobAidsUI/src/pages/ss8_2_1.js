import React from "react"
import SelectOp from '../components/selectOp'
import LogOut from '../components/btns/logOut'
import BtnNavBack from '../components/btns/btnNavBack'
import { ReactComponent as Method_5 } from '../assets/images/family_planning_methods/effective.svg'
import { ReactComponent as Method_1 } from '../assets/images/family_planning_methods/quicker.svg'
import { ReactComponent as Method_4 } from '../assets/images/family_planning_methods/side_effects.svg'
import { Link } from "react-router-dom"


const Ss8_2_1 = () => {

    let op_lngs = {
        name: 'languages',
        clss: 'custom_select',
        lngs: ['English', 'Spanish', 'Portuguese', 'French']
    }

    let Str = {
        title: "Which method are you currently using?"
    }

    let btns = {
        lbl: ['back', 'next']
    }

    return (
        <div className="lyts">
            <div className="grd_top_nav">
                <div className="grd_left_top">
                    <LogOut />
                </div>
                <div className="grd_right_top">
                    <div className="select_lang slide_in_blurred_right" tabindex="1">
                        <SelectOp ops={op_lngs.lngs} name={op_lngs.name} clss={op_lngs.clss} />
                    </div>
                </div>
            </div>
            <div className="grd_cont">
                <div className="ss8_2_1">
                    <div className="grd_line1">
                        <h1>{Str.title}</h1>
                    </div>
                    <div className="grd_line2">
                        <div className="left">
                            <div className="slide_in_blurred_left">
                                <Method_5 />
                            </div>

                            <div className="slide_in_blurred_right">
                                <Method_1 />
                            </div>

                            <div className="slide_in_blurred_right">
                                <Method_4 />
                            </div>

                        </div>
                        <div className="right">

                            <div className="slide_in_blurred_right">
                                <Method_5 />
                            </div>

                            <div className="slide_in_blurred_right">
                                <Method_5 />
                            </div>

                            <div className="slide_in_blurred_right">
                                <Method_5 />
                            </div>

                        </div>
                    </div>
                </div>
            </div>
            <div className="grd_bottom_nav">
                <div className="btm_nab_one">
                    <div className="grd_btm_left">
                        <Link to={"/Ss7"}>
                            <BtnNavBack text_btn={btns.lbl[0]} />
                        </Link>
                    </div>
                    <div className="grd_btm_center">
                        <div id="audio" className="audioplayer"></div>
                    </div>
                    <div className="grd_btm_right"></div>
                </div>
            </div>
        </div>
    )
}
export default Ss8_2_1;