import React from "react"
import SelectOp from '../components/selectOp'
import LogOut from '../components/btns/logOut'
import BtnNavBack from '../components/btns/btnNavBack'
import BtnNavNext from '../components/btns/btnNavNext'
import { Link } from "react-router-dom"


const Fp20 = () => {

    let op_lngs = {
        name: 'languages',
        clss: 'custom_select',
        lngs: ['English', 'Spanish', 'Portuguese', 'French']
    }

    let Str = {
        title: "Congratulation you got X out of X answers correct! ",
        sbttl: "Did you learn anything interesting or new?"
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
                <div className="fp20">
                    <div>Image</div>
                    <div>
                        <h2 className="tracking_in_expand">{Str.title}</h2>
                        <h4 className="tracking_in_expand">{Str.sbttl}</h4>
                        <div></div>
                        <div></div>
                    </div>
                </div>
            </div>
            <div className="grd_bottom_nav">
                <div className="btm_nab_one">
                    <div className="grd_btm_left">
                        <Link to={"/Fp11_1"}>
                            <BtnNavBack text_btn={btns.lbl[0]} />
                        </Link>
                    </div>
                    <div className="grd_btm_center"></div>
                    <div className="grd_btm_right">
                        <Link to={"/Fp21"}>
                            <BtnNavNext text_btn={btns.lbl[1]} />
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Fp20;