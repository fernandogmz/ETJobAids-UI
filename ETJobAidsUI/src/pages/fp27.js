import React from "react"
import LogOut from '../components/btns/logOut'
import BtnNavBack from '../components/btns/btnNavBack'
import BtnNavNext from '../components/btns/btnNavNext'
import { Link } from "react-router-dom"


const Fp27 = () => {

    let Str = {
        title: "Compared to your first choices, '{{FACTOR_1}}' AND '{{FACTOR_2}}', how important is '{{FACTOR_3}}'?",
        sbttl: "Rank their less important, as equal important or more important choice preference using a drag or drop option"
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
                <div className="grd_right_top"></div>
            </div>
            <div className="grd_cont">
                <div class="fp27">
                <div class="grd_title">
                    <h2>{Str.title}</h2>
                    <h3>{Str.sbttl}</h3>
                </div>
                    <div class="grd_dd_left">Left</div>
                    <div class="grd_dd_right">Right</div>
                </div>
            </div>
            <div className="grd_bottom_nav">
                <div className="btm_nab_one">
                    <div className="grd_btm_left">
                        <Link to={"/Fp26"}>
                            <BtnNavBack text_btn={btns.lbl[0]} />
                        </Link>
                    </div>
                    <div className="grd_btm_center"></div>
                    <div className="grd_btm_right">
                        <Link to={"/Fp28"}>
                            <BtnNavNext text_btn={btns.lbl[1]} />
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Fp27;