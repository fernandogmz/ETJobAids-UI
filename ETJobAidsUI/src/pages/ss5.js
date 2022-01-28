import React from "react"
import SelectOp from '../components/selectOp'
import LogOut from '../components/btns/logOut'
import BtnNavBack from '../components/btns/btnNavBack'
import BtnNavNext from '../components/btns/btnNavNext'
import { Link } from "react-router-dom"

const Ss5 = () => {

    let op_lngs = {
        name: 'languages',
        clss: 'custom_select',
        lngs: ['English', 'Spanish', 'Portuguese', 'French']
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
                <div className="ss5">
                    <div className="grd_line1 ">
                        <div className="cont slide_in_blurred_bottom"></div>
                    </div>
                </div>
            </div>
            <div className="grd_bottom_nav">
                <div className="btm_nab_one">
                    <div className="grd_btm_left">
                        <Link to={"/Ss4"}>
                            <BtnNavBack text_btn={btns.lbl[0]} />
                        </Link>
                    </div>
                    <div className="grd_btm_center"></div>
                    <div className="grd_btm_right">
                        <Link to={"/Ss6"}>
                            <BtnNavNext text_btn={btns.lbl[1]} />
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Ss5;