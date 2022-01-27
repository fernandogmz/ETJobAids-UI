import React from "react"
import SelectOp from '../components/selectOp'
import LogOut from '../components/btns/logOut'
import Btn from '../components/btns/btns'
import BtnNavBack from '../components/btns/btnNavBack'
import BtnNavNext from '../components/btns/btnNavNext'
import TextField from '../components/textField'
import NumField from '../components/numField'
import { ReactComponent as Tra } from '../assets/images/goals/tractor.svg'
import { useNavigate } from "react-router-dom"

const Ss1_1 = () => {
    const navigate = useNavigate();
    const handleClickBack = () => {
        navigate("/Init1");
    }

    let op_lngs ={
        name: 'languages',
        clss:'lang_select',
        lngs: ['English', 'Spanish', 'Portuguese', 'French']
    }

    let op_drtn = {
        name: 'languages',
        clss:'custom_select',
        lngs: ['6 months', '1 Year', '2 Years', '3 Years', '4 Years', '5 Years']
    }

    let Str = {
        title: "Tractor | Cost:",
        cost: "12,000",
        flds_lbls: ['Income', 'Expense', 'Savings', 'Select duration'],
        flds_holder: ['Income', 'Expense', 'Savings', 'Select duration'],
        q: "Who referred you?"
    }

    let btns = {
        lbl: ['back', 'next', 'Calculate']
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
                <div class="ss3">
                    <div class="grd_left">
                        <div className="slide_in_blurred_left">
                            <Tra />
                        </div>
                    </div>
                    <div class="grd_right">
                        <div className="cont">
                            <h1 className="slide_in_blurred_top">{Str.title + Str.cost}</h1>
                            <div className="flds">
                                <NumField flds_lbls={Str.flds_lbls[0]} flds_holder={Str.flds_holder[0]} />
                            </div>
                            <div className="flds">
                                <NumField flds_lbls={Str.flds_lbls[1]} flds_holder={Str.flds_holder[1]} />
                            </div>
                            <div className="flds">
                                <NumField flds_lbls={Str.flds_lbls[2]} flds_holder={Str.flds_holder[2]} />
                            </div>
                            <div className="flds">
                                <SelectOp ops={op_drtn.lngs} name={op_lngs.name} clss={op_drtn.clss} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="grd_bottom_nav">
                <div className="btm_nab_one">
                    <div className="grd_btm_left">
                        <BtnNavBack text_btn={btns.lbl[0]} />
                    </div>
                    <div className="grd_btm_center">
                        <div id="audio" className="audioplayer"></div>
                    </div>
                    <div className="grd_btm_right">
                        <BtnNavNext text_btn={btns.lbl[1]} />
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Ss1_1;