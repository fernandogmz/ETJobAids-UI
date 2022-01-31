import React from "react"
import LogOut from '../components/btns/logOut'
import BtnNavBack from '../components/btns/btnNavBack'
import BtnNavNext from '../components/btns/btnNavNext'
import { Link } from "react-router-dom"


const Fp24 = () => {

    let Str = {
        title: "I'll ask these questions a few more times to really understand what you want.",
        sbttl: "Which of these things is the most important to you?"
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
                <div className="fp24">
                    <div>Image</div>
                    <div>
                        <h2 className="tracking_in_expand">{Str.title}</h2>
                        <h3 className="tracking_in_expand">{Str.sbttl}</h3>
                        <div>
                            <div><h4>Easy to stop using</h4></div>
                            <div><h4>Get it and I forget it!</h4></div>
                            <div><h4>More effective</h4></div>
                        </div>
                        <div>
                            <div><h4>Discreet/Private</h4></div>
                            <div><h4>Few Side effects</h4></div>
                            <div><h4>Self-administered</h4></div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="grd_bottom_nav">
                <div className="btm_nab_one">
                    <div className="grd_btm_left">
                        <Link to={"/Fp23"}>
                            <BtnNavBack text_btn={btns.lbl[0]} />
                        </Link>
                    </div>
                    <div className="grd_btm_center"></div>
                    <div className="grd_btm_right">
                        <Link to={"/Fp25"}>
                            <BtnNavNext text_btn={btns.lbl[1]} />
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Fp24;