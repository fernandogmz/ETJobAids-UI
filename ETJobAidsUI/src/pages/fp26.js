import React from "react"
import LogOut from '../components/btns/logOut'
import BtnNavBack from '../components/btns/BtnNavBack'
import BtnNavNext from '../components/btns/BtnNavNext'
import RadioButtons from '../components/btns/radioButton'
import { Link } from "react-router-dom"


const Fp26 = () => {

    let Str = {
        title: "Finally, which of the following things is most important to you?",
        sbttl: ""
    }

    let btns = {
        lbl: ['back', 'next']
    }

    let Rbttns = {
        name: "radio1",
        lbls: ["Easy to stop using", "Get it and I forget it!", "More effective", "Discreet/Private", "Few Side effects", "Self-administered"]
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
                <div className="fp26">
                    <div>Image</div>
                    <div>
                        <h2 className="tracking_in_expand">{Str.title}</h2>
                        <div className="r_bttons">
                            <RadioButtons name={Rbttns.name} lbl={Rbttns.lbls[2]} />
                        </div>
                        <div className="r_bttons">
                            <RadioButtons name={Rbttns.name} lbl={Rbttns.lbls[3]} />
                        </div>
                        <div className="r_bttons">
                            <RadioButtons name={Rbttns.name} lbl={Rbttns.lbls[5]} />
                        </div>
                    </div>
                </div>
            </div>
            <div className="grd_bottom_nav">
                <div className="btm_nab_one">
                    <div className="grd_btm_left">
                        <Link to={"/Fp25"}>
                            <BtnNavBack text_btn={btns.lbl[0]} />
                        </Link>
                    </div>
                    <div className="grd_btm_center"></div>
                    <div className="grd_btm_right">
                        <Link to={"/Fp27"}>
                            <BtnNavNext text_btn={btns.lbl[1]} />
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Fp26;