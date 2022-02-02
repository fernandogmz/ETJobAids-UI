import React from "react"
import SelectOp from '../components/selectOp'
import LogOut from '../components/btns/logOut'
import Btn from '../components/btns/btn'
import BtnNavBack from '../components/btns/BtnNavBack'
import BtnNavNext from '../components/btns/BtnNavNext'
import NumField from '../components/numField'
import { ReactComponent as Tra } from '../assets/images/goals/tractor.svg'
import { Link } from "react-router-dom"

const Ss3 = () => {

    let op_lngs = {
        name: 'languages',
        clss: 'custom_select',
        lngs: ['English', 'Spanish', 'Portuguese', 'French']
    }

    let op_drtn = {
        name: 'languages',
        clss: 'custom_select1',
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
                <div className="grd_right_top"></div>
            </div>
            <div className="grd_cont">
                <div className="ss3">
                    <div className="grd_left">
                        <div className="slide_in_blurred_left">
                            <Tra />
                        </div>
                    </div>
                    <div className="grd_right">
                        <div className="cont">
                            <h1 className="slide_in_blurred_top">{Str.title + Str.cost}</h1>
                            <div className="flds slide_in_blurred_right">
                                <NumField flds_lbls={Str.flds_lbls[0]} flds_holder={Str.flds_holder[0]} />
                            </div>
                            <div className="flds slide_in_blurred_right">
                                <NumField flds_lbls={Str.flds_lbls[1]} flds_holder={Str.flds_holder[1]} />
                            </div>
                            <div className="flds slide_in_blurred_right">
                                <NumField flds_lbls={Str.flds_lbls[2]} flds_holder={Str.flds_holder[2]} />
                            </div>
                            <div className="flds slide_in_blurred_right">
                                <SelectOp ops={op_drtn.lngs} name={op_lngs.name} clss={op_drtn.clss} />
                            </div>
                            <div className="btns">
                                <Btn text_btn={btns.lbl[2]}/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="grd_bottom_nav">
                <div className="btm_nab_one">
                    <div className="grd_btm_left">
                        <Link to={"/Ss2"}>
                            <BtnNavBack text_btn={btns.lbl[0]} />
                        </Link>
                    </div>
                    <div className="grd_btm_center">
                        <div id="audio" className="audioplayer"></div>
                    </div>
                    <div className="grd_btm_right">
                        <Link to={"/Ss4"}>
                            <BtnNavNext text_btn={btns.lbl[1]} />
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Ss3;