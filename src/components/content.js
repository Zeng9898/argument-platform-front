import React, { useContext } from "react";
import { DataStateContext } from "../data/context";
import Modal from "../components/modal";

export default (props) => {
    const [OpenModal, setOpenModal] = useState(false);
    const state1 = useContext(DataStateContext);
    console.log("content");
    const state2 = useContext(props.context);const button = state1.data.map((value) => {
        return (
            <div>
                <button type="primary" key={value.id} className="data" onClick={()=>{ setOpenModal(true); }}>
                    {value.data}
                </button>
                {OpenModal && <Modal setOpenModal={setOpenModal}/>}
             </div>
        );
    });

    return (
        <div>
            { button }
        </div>
    )
};