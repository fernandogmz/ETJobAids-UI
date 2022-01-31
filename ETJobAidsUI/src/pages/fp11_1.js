import React from "react"
import SelectOp from '../components/selectOp'
import LogOut from '../components/btns/logOut'
import Btn from '../components/btns/btn'
import BtnNavBack from '../components/btns/btnNavBack'
import { Link } from "react-router-dom"

const Fp11_1 = () => {

    let op_lngs = {
        name: 'languages',
        clss: 'custom_select',
        lngs: ['English', 'Spanish', 'Portuguese', 'French']
    }

    let Str = {
        title: 'Do you want to continue with more quiz questions?'
    }

    let btns = {
        lbl: ['back', 'next', 'Yes', 'No']
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
                <div className="fp11_1">
                    <div className="grd_line1">
                        <h1 className="slide_in_blurred_top">{Str.title}</h1>
                    </div>
                    <div className="grd_line2">
                        <div className="slide_in_blurred_left">
                            <Link to={"/Fp19??"}>
                                <Btn text_btn={btns.lbl[2]} />
                            </Link>
                        </div>
                        <div className="slide_in_blurred_right">
                            <Link to={"/Fp20"}>
                                <Btn text_btn={btns.lbl[3]} />
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
            <div className="grd_bottom_nav">
                <div className="btm_nab_one">
                    <div className="grd_btm_left">
                        <Link to={"/Fp3"}>
                            <BtnNavBack text_btn={btns.lbl[0]} />
                        </Link>
                    </div>
                    <div className="grd_btm_center"></div>
                    <div className="grd_btm_right"></div>
                </div>
            </div>
        </div>
    )
}
export default Fp11_1;