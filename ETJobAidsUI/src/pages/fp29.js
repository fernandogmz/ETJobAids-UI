import React from "react"
import LogOut from '../components/btns/logOut'
import BtnNavBack from '../components/btns/btnNavBack'
import { Link } from "react-router-dom"

const Fp29 = () => {

    let Str = {
        title: 'Great, thanks for telling me more about you!',
        sbttl: "Now I'm ready to recommend some methods that might fit your needs. According to the preferences you have selected, we suggest these methods. You can click on them to learn more."
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
                <div class="fp29">
                    <div class="grd_title">
                        <h2>{Str.title}</h2>
                        <h4>{Str.sbttl}</h4>
                    </div>
                    <div class="grd_results">
                        <div class="grd_left">Left</div>
                        <div class="grd_right">Right</div>
                        <div class="grd_cta">CTA</div>
                    </div>
                </div>
            </div>
            <div className="grd_bottom_nav">
                <div className="btm_nab_one">
                    <div className="grd_btm_left">
                        <Link to={"/Fp28"}>
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
export default Fp29;