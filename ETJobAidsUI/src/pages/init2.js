import React from "react"
import LogOut from '../components/btns/logOut'
import BtnNavBack from '../components/btns/btnNavBack'
import BtnNavNext from '../components/btns/btnNavNext'
import { ReactComponent as ByMySelft } from '../assets/images/By_myself.svg'
import { ReactComponent as WithMyHusband } from '../assets/images/with_my_husband.svg'
import { Link } from "react-router-dom"

const Init2 = () => {

    let Str = {
        title: 'Are you here by yourself?',
        subtitle: '',
        cta1: 'By myself',
        cta2: 'With my husband'
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
                <div className="int2">
                    <div className="grd_line1 ">
                        <h1 className="slide_in_blurred_top">{Str.title}</h1>
                    </div>
                    <div className="grd_line2">
                        <div>
                            <div>
                                <div className="slide_in_blurred_left">
                                    <ByMySelft />
                                </div>
                                <div className="tracking_in_expand">
                                    <h2>{Str.cta1}</h2>
                                </div>
                            </div>
                            <div>
                                <div className="slide_in_blurred_right">
                                    <WithMyHusband />
                                </div>
                                <div className="tracking_in_expand">
                                    <h2>{Str.cta2}</h2>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="grd_bottom_nav">
                <div className="btm_nab_one">
                    <div className="grd_btm_left">
                        <Link to={"/"}>
                            <BtnNavBack text_btn={btns.lbl[0]} />
                        </Link>
                    </div>
                    <div className="grd_btm_center"></div>
                    <div className="grd_btm_right">
                        <Link to={"/Init_3"}>
                            <BtnNavNext text_btn={btns.lbl[1]} />
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Init2;