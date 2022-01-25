import React from "react"
import SelectOp from '../components/selectOp'
import LogOut from '../components/btns/log_out'
import BtnNavBack from '../components/btns/BtnNavBack'
import BtnNavNext from '../components/btns/BtnNavNext'
import TextField from '../components/textField'
import NumField from '../components/numField'
import { ReactComponent as Lady01 } from '../assets/images/hero/female/lady_01.svg'
import { useNavigate } from "react-router-dom"

const Ss1_1 = () => {
    const navigate = useNavigate();
    const handleClickBack = () => {
        navigate("/Init1");
    }

    let op_lngs ={
        lngs: ['English', 'Spanish', 'Portuguese', 'French', 'opt_lngs']
    }

    let Data = {
        title: "Tractor | Cost:",
        cost: "12,000",

        
        btns: ['back', 'next'],
        flds_lbls: ['Name', 'Age', 'Your answer'],
        flds_holder: ['Income', 'Your age', 'Write your answer'],
        q: "Who referred you?"
    }

    return (
        <div className="lyts">
            <div className="grd_top_nav">
                <div className="grd_left_top">
                    <LogOut />
                </div>
                <div className="grd_right_top">
                    <div className="select_lang slide_in_blurred_right" tabindex="1">
                    <SelectOp ops={op_lngs.lngs} />
                    </div>
                </div>
            </div>
            <div className="grd_cont">
                <div class="ss3">
                    <div class="grd_left">
                        <div className="slide_in_blurred_left">
                            <Lady01 />
                        </div>
                    </div>
                    <div class="grd_right">
                        <div className="cont">
                            <h1 className="slide_in_blurred_top">{Data.title + Data.cost}</h1>
                            <div className="flds">
                                <TextField flds_lbls={Data.flds_lbls[0]} flds_holder={Data.flds_holder[0]} />
                            </div>
                            <div className="flds">
                                <NumField flds_lbls={Data.flds_lbls[1]} flds_holder={Data.flds_holder[1]} />
                            </div>
                            <div className="qsts">
                                <h3>{Data.q}</h3>
                                <TextField flds_holder={Data.flds_holder[2]} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="grd_bottom_nav">
                <div className="btm_nab_one">
                    <div className="grd_btm_left">
                        <BtnNavBack text_btn={Data.btns[0]} />
                    </div>
                    <div className="grd_btm_center">
                        <div id="audio" className="audioplayer"></div>
                    </div>
                    <div className="grd_btm_right">
                        <BtnNavNext text_btn={Data.btns[1]} />
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Ss1_1;