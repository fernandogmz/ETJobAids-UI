import React from "react"
import SelectOp from '../components/selectOp'
import LogOut from '../components/btns/log_out'
import BtnNavBack from '../components/btns/BtnNavBack'
import BtnNavNext from '../components/btns/BtnNavNext'
import { ReactComponent as ByMySelft } from '../assets/images/By_myself.svg'
import { ReactComponent as WithMyHusband } from '../assets/images/with_my_husband.svg'
import { useNavigate } from "react-router-dom"

const Init2 = () => {
    const navigate = useNavigate();
    const handleClickBack = () => {
        navigate("/Init1");
    }

    let op_lngs = {
        name: 'languages',
        clss: 'lang_select',
        lngs: ['English', 'Spanish', 'Portuguese', 'French']
    }

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
                <div className="grd_right_top">
                    <div className="select_lang slide_in_blurred_right" tabindex="1">
                        <SelectOp ops={op_lngs.lngs} name={op_lngs.name} clss={op_lngs.clss} />
                    </div>
                </div>
            </div>
            <div className="grd_cont">
                <div className="int2">
                    <div className="grd_line1 ">
                        <h1 className="slide_in_blurred_top">{Str.title}</h1>
                    </div>
                    <div className="grd_line2">
                        <h2 className="tracking_in_expand">{Str.subtitle}</h2>
                    </div>
                    <div className="grd_line3">
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
                        <BtnNavBack text_btn={btns.lbl[0]} />
                    </div>
                    <div className="grd_btm_center"></div>
                    <div className="grd_btm_right">
                        <BtnNavNext text_btn={btns.lbl[1]} />
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Init2;