import React from "react"
import SelectOp from '../components/selectOp'
import LogOut from '../components/btns/logOut'
import RadioBtn from '../components/btns/radioButton'
import BtnNavBack from '../components/btns/btnNavBack'
import BtnNavNext from '../components/btns/btnNavNext'
import { Link } from "react-router-dom"

const Ss1_5 = () => {

    let op_lngs = {
        name: 'languages',
        clss: 'lang_select',
        lngs: ['English', 'Spanish', 'Portuguese', 'French']
    }

    let op_rgns = {
        name: 'op_rgns',
        clss: 'lang_select',
        rgns: ['Region', 'Region', 'Region', 'Region..']
    }


    let op_zns = {
        name: 'op_rgns',
        clss: 'lang_select',
        zone: ['zone', 'zone', 'zone', 'zone..', 'opt_zns']
    }
    let op_dts = {
        name: 'op_rgns',
        clss: 'lang_select',
        dstr: ['District', 'District', 'District', 'District..', 'op_dts']
    }
    let op_kbl = {
        name: 'op_rgns',
        clss: 'lang_select',
        kbl: ['kebele', 'kebele', 'kebele', 'kebele..', 'op_kbl']
    }

    let Str = {
        title: 'We would like to know your region'
    }

    let btns = {
        lbl: ['back', 'next', 'Individual', 'Grop']
    }

    let radio_btn = {
        name: ['Individual', 'Grop']
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
                <div className="ss1_5">
                    <div className="grd_line1">
                        <h1 className="slide_in_blurred_top">{Str.title}</h1>
                    </div>
                    <div className="grd_line2">
                        <div><SelectOp ops={op_rgns.rgns} name={op_lngs.name} clss={op_lngs.clss} /></div>
                        <div><SelectOp ops={op_zns.zone} name={op_lngs.name} clss={op_lngs.clss} /></div>
                        <div><SelectOp ops={op_dts.dstr} name={op_lngs.name} clss={op_lngs.clss} /></div>
                        <div><SelectOp ops={op_kbl.kbl} name={op_lngs.name} clss={op_lngs.clss} /></div>
                    </div>
                    <div className="grd_line3">
                        <h2 className="tracking_in_expand">Select your session type</h2>
                    </div>
                    <div className="grd_line4">
                        <div className="slide_in_blurred_left">
                            <RadioBtn name={radio_btn.name[0]} />
                        </div>
                        <div className="slide_in_blurred_right">
                            <RadioBtn name={radio_btn.name[1]} />
                        </div>
                    </div>
                </div>
            </div>
            <div className="grd_bottom_nav">
                <div className="btm_nab_one">
                    <div className="grd_btm_left">
                        <Link to={"/Ss1_4"}>
                            <BtnNavBack text_btn={btns.lbl[0]} />
                        </Link>
                    </div>
                    <div className="grd_btm_center"></div>
                    <div className="grd_btm_right">
                        <Link to={"/Ss1_6"}>
                            <BtnNavNext text_btn={btns.lbl[1]} />
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Ss1_5;