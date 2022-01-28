import React from "react"
import SelectOp from '../components/selectOp'
import LogOut from '../components/btns/logOut'
import BtnNavBack from '../components/btns/btnNavBack'
import BtnNavNext from '../components/btns/btnNavNext'
import TextField from '../components/textField'
import { ReactComponent as Lady01 } from '../assets/images/hero/male/male_01.svg'
import { Link } from "react-router-dom"

const Ss1_3 = () => {

    let op_lngs = {
        name: 'languages',
        clss: 'custom_select',
        lngs: ['English', 'Spanish', 'Portuguese', 'French']
    }

    let Str = {
        title: "Tell us a little bit more about your husband",
        cta1: 'New user',
        cta2: 'Returning user',
        flds_lbls: ['First name', 'Last name'],
        flds_holder: ['First name', 'Last name'],
        q: "Who referred you?"
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
                <div class="ss1_3">
                    <div class="grd_left">
                        <div className="slide_in_blurred_left">
                            <Lady01 />
                        </div>
                    </div>
                    <div class="grd_right">
                        <div className="cont">
                            <h1 className="slide_in_blurred_top">{Str.title}</h1>
                            <div className="flds slide_in_blurred_right">
                                <TextField flds_lbls={Str.flds_lbls[0]} flds_holder={Str.flds_holder[0]} />
                            </div>
                            <div className="flds slide_in_blurred_right">
                                <TextField flds_lbls={Str.flds_lbls[1]} flds_holder={Str.flds_holder[1]} />
                            </div>
                        </div>

                    </div>
                </div>
            </div>
            <div className="grd_bottom_nav">
                <div className="btm_nab_one">
                    <div className="grd_btm_left">
                        <Link to={"/Ss1_2"}>
                            <BtnNavBack text_btn={btns.lbl[0]} />
                        </Link>
                    </div>
                    <div className="grd_btm_center">
                        <div id="audio" className="audioplayer"></div>
                    </div>
                    <div className="grd_btm_right">
                        <Link to={"/Ss1_4"}>
                            <BtnNavNext text_btn={btns.lbl[1]} />
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Ss1_3;