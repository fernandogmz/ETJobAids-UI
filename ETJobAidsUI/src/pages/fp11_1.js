import React from "react"
import LogOut from '../components/btns/logOut'
import Btn from '../components/btns/btn'
import BtnNavBack from '../components/btns/BtnNavBack'
import { Link } from "react-router-dom"

const Fp11_1 = ({terms}) => {

    return (
        <div className="lyts">
            <div className="grd_top_nav">
                <div className="grd_left_top">
                    <LogOut />
                </div>
                <div className="grd_right_top"></div>
            </div>
            <div className="grd_cont">
                <div className="fp11_1">
                    <div className="grd_line1">
                        <h1 className="slide_in_blurred_top">{terms['MMBQ.Continue']}</h1>
                    </div>
                    <div className="grd_line2">
                        <div className="slide_in_blurred_left">
                            <Link to={"/Fp19"}>
                                <Btn text_btn={terms['core.Yes']} />
                            </Link>
                        </div>
                        <div className="slide_in_blurred_right">
                            <Link to={"/Fp20"}>
                                <Btn text_btn={terms['core.No']} />
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
            <div className="grd_bottom_nav">
                <div className="btm_nab_one">
                    <div className="grd_btm_left">
                        <Link to={"/Fp3"}>
                            <BtnNavBack text_btn={terms['core.Back']} />
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