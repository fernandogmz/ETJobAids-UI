import React from "react"
import SelectOp from '../components/selectOp'
import LogOut from '../components/btns/logOut'
import Btn from '../components/btns/btn'
import BtnNavBack from '../components/btns/BtnNavBack'
import BtnNavNext from '../components/btns/BtnNavNext'
import { Link } from "react-router-dom"

const Ss1_5 = ({terms}) => {

    let op_rgns = {
        name: 'op_rgns',
        clss: 'custom_select',
        rgns: ['Region', 'Region', 'Region', 'Region..']
    }

    let op_zns = {
        name: 'op_rgns',
        clss: 'custom_select',
        zone: ['zone', 'zone', 'zone', 'zone..', 'opt_zns']
    }
    let op_dts = {
        name: 'op_rgns',
        clss: 'custom_select',
        dstr: ['District', 'District', 'District', 'District..', 'op_dts']
    }
    let op_kbl = {
        name: 'op_rgns',
        clss: 'custom_select',
        kbl: ['kebele', 'kebele', 'kebele', 'kebele..', 'op_kbl']
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
                <div className="ss1_5">
                    <div className="grd_line1">
                        <h1 className="slide_in_blurred_top">{terms['Client.ChooseRegion']}</h1>
                    </div>
                    <div className="grd_line2">
                        <div className="slide_in_blurred_left"><SelectOp ops={op_rgns.rgns} name={op_rgns.name} clss={op_rgns.clss} /></div>
                        <div className="slide_in_blurred_left"><SelectOp ops={op_zns.zone} name={op_zns.name} clss={op_zns.clss} /></div>
                        <div className="slide_in_blurred_right"><SelectOp ops={op_dts.dstr} name={op_dts.name} clss={op_dts.clss} /></div>
                        <div className="slide_in_blurred_right"><SelectOp ops={op_kbl.kbl} name={op_kbl.name} clss={op_kbl.clss} /></div>
                    </div>
                    <div className="grd_line3">
                        <h2 className="tracking_in_expand">{terms['Client.SessionType']}</h2>
                    </div>
                    <div className="grd_line4">
                        <div className="slide_in_blurred_left">
                            <Btn text_btn={terms['Client.IndividualSession']} />
                        </div>
                        <div className="slide_in_blurred_right">
                            <Btn text_btn={terms['Client.GroupSession']} />
                        </div>
                    </div>
                </div>
            </div>
            <div className="grd_bottom_nav">
                <div className="btm_nab_one">
                    <div className="grd_btm_left">
                        <Link to={"/Ss1_4"}>
                            <BtnNavBack text_btn={terms['core.Back']} />
                        </Link>
                    </div>
                    <div className="grd_btm_center"></div>
                    <div className="grd_btm_right">
                        <Link to={"/Ss1_6"}>
                            <BtnNavNext text_btn={terms['core.Next']} />
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Ss1_5;