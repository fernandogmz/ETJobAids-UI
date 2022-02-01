import React from "react"
import LogOut from '../components/btns/logOut'
import BtnNavBack from '../components/btns/btnNavBack'
import BtnNavNext from '../components/btns/btnNavNext'
import { ReactComponent as Mp3 } from '../assets/images/mp3.svg'
import { Link } from "react-router-dom"


const Fp34 = () => {

    let Str = {
        title: "Congrats on your decision!",
        sbttle: "Let's review to make sure that you remember everything you need to know about your method.",
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
                <div className="fp34">
                    <div>Image</div>
                    <div>
                        <h2 className="tracking_in_expand">{Str.title}</h2>
                        <h3 className="tracking_in_expand">{Str.sbttle}</h3>
                    </div>
                </div>
            </div>
            <div className="grd_bottom_nav">
                <div className="btm_nab_one">
                    <div className="grd_btm_left">
                        <Link to={"/Fp27"}>
                            <BtnNavBack text_btn={btns.lbl[0]} />
                        </Link>
                    </div>
                    <div className="grd_btm_center">
                        <Mp3/>
                    </div>
                    <div className="grd_btm_right">
                        <Link to={"/Fp29"}>
                            <BtnNavNext text_btn={btns.lbl[1]} />
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Fp34;