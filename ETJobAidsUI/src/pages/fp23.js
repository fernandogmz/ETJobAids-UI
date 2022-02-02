import React from "react"
import LogOut from '../components/btns/logOut'
import BtnNavBack from '../components/btns/BtnNavBack'
import BtnNavNext from '../components/btns/BtnNavNext'
import RadioButtons from '../components/btns/radioButton'
import { Link } from "react-router-dom"


const Fp23 = () => {

    let Str = {
        title: "Which one of these is most important to you when choosing a method?"
    }

    let btns = {
        lbl: ['back', 'next']
    }

    let Rbttns = {
        name: "radio1",
        lbls: ["More Effective", "Discreet/Private", "Few Sides effects", "Easy to stop"]
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
                <div className="fp23">
                    <div>Image</div>
                    <div>
                        <h2 className="tracking_in_expand">{Str.title}</h2>
                        <div className="r_bttons">
                            <RadioButtons name={Rbttns.name} lbl={Rbttns.lbls[0]} />
                        </div>
                        <div className="r_bttons">
                            <RadioButtons name={Rbttns.name} lbl={Rbttns.lbls[1]} />
                        </div>
                        <div className="r_bttons">
                            <RadioButtons name={Rbttns.name} lbl={Rbttns.lbls[2]} />
                        </div>
                    </div>
                </div>
            </div>
            <div className="grd_bottom_nav">
                <div className="btm_nab_one">
                    <div className="grd_btm_left">
                        <Link to={"/Fp22"}>
                            <BtnNavBack text_btn={btns.lbl[0]} />
                        </Link>
                    </div>
                    <div className="grd_btm_center"></div>
                    <div className="grd_btm_right">
                        <Link to={"/Fp24"}>
                            <BtnNavNext text_btn={btns.lbl[1]} />
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Fp23;