import React from "react"
import SelectOp from '../components/selectOp'
import LogOut from '../components/btns/logOut'
import Btn from '../components/btns/btn'
import { Link } from "react-router-dom"

const Ss8_2_3 = () => {
    let op_lngs = {
        name: 'languages',
        clss: 'custom_select',
        lngs: ['English', 'Spanish', 'Portuguese', 'French']
    }

    let Str = {
        title: "Thank you for learning about Smart Start! Remember you can always reach out to your provider if you have any questions in the future. Before you go, maybe you'd like to take a look at some of our resources:",
        sbttl1: "Remember you can always reach out to your provider if you have any questions in the future. Before you go, please take a look at some of our resources",
        sbttl2: "Your method summary"
    }

    let op_am = {
        name: 'amethod',
        clss: 'custom_select',
        lngs: ['UID', 'Implant', 'Condoms', 'Injectable', 'pills', 'EC']
    }

    let btns = {
        lbl: 'Done'
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
                <div className="ss8_2_3">
                    <div className="grd_line1 ">
                        <h3 className="slide_in_blurred_top">{Str.title}</h3>
                    </div>
                    <div className="grd_line2">
                        <p className="tracking_in_expand">{Str.sbttl1}</p>
                        <div>
                            <div>
                                <p className="slide_in_blurred_left">{Str.sbttl2}</p>
                            </div>
                            <div className="slide_in_blurred_right">
                                <SelectOp ops={op_am.lngs} name={op_am.name} clss={op_am.clss} />
                            </div>
                        </div>
                    </div>
                    <div className="grd_line3">
                        <div className="content_video slide_in_blurred_bottom">
                            <iframe id="c_video"
                                src="https://www.youtube.com/embed/tgbNymZ7vqY?wmode=transparent&amp;autoplay=0&amp;autohide=0"
                                frameborder="0"></iframe>
                        </div>
                    </div>
                </div>
            </div>
            <div className="grd_bottom_nav">
                <div className="btm_nab_one">
                    <div className="grd_btm_left">

                    </div>
                    <div className="grd_btm_center"></div>
                    <div className="grd_btm_right">
                        <Link to={"/"}>
                            <Btn text_btn={btns.lbl} />
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Ss8_2_3;