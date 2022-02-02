import React from "react"
import LogOut from '../components/btns/logOut'
import BtnNavBack from '../components/btns/BtnNavBack'
import BtnNavNext from '../components/btns/BtnNavNext'
import TextField from '../components/textField'
import { ReactComponent as Lady01 } from '../assets/images/hero/male/male_01.svg'
import { Link } from "react-router-dom"

const Ss1_3 = ({terms}) => {

    return (
        <div className="lyts">
            <div className="grd_top_nav">
                <div className="grd_left_top">
                    <LogOut />
                </div>
                <div className="grd_right_top"></div>
            </div>
            <div className="grd_cont">
                <div className="ss1_3">
                    <div className="grd_left">
                        <div className="slide_in_blurred_left">
                            <Lady01 />
                        </div>
                    </div>
                    <div className="grd_right">
                        <div className="cont">
                            <h1 className="slide_in_blurred_top">{terms['SS.HusbandInformation']}</h1>
                            <div className="flds slide_in_blurred_right">
                                <TextField flds_lbls={terms['core.FirstName']} flds_holder={terms['core.FirstName']} />
                            </div>
                            <div className="flds slide_in_blurred_right">
                                <TextField flds_lbls={terms['core.LastName']} flds_holder={terms['core.LastName']} />
                            </div>
                            <div className="flds slide_in_blurred_right">
                                <TextField flds_lbls={terms['core.FatherName']} flds_holder={terms['core.FatherName']} />
                            </div>
                        </div>

                    </div>
                </div>
            </div>
            <div className="grd_bottom_nav">
                <div className="btm_nab_one">
                    <div className="grd_btm_left">
                        <Link to={"/Ss1_2"}>
                            <BtnNavBack text_btn={terms['core.Back']} />
                        </Link>
                    </div>
                    <div className="grd_btm_center">
                        <div id="audio" className="audioplayer"></div>
                    </div>
                    <div className="grd_btm_right">
                        <Link to={"/Ss1_4"}>
                            <BtnNavNext text_btn={terms['core.Next']} />
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Ss1_3;