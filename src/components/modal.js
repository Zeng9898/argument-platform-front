import React from "react";
import "./modal.css";
import Select from "react-select";
import makeAnimated from "react-select/animated";

const options1 = [{value: '安全面', label: '安全面'}, {value: '科學與技術面', label: '科學與技術面'}, {value: '環保面', label: '環保面'}, {value: '社會面', label: '社會面'}, {value: '經濟面', label: '經濟面'}];
const options2 = [{value: '提出論點或主張(CA1)', label: '提出論點或主張(CA1)'}, {value:'提出疑問(CA2)', label: '提出疑問(CA2)'}, {value: '提出挑戰(CA3)', label: '提出挑戰(CA3)'}, {value: '進行推論(CA4)', label: '進行推論(CA4)'}, {value: '表達支持(CA5)', label: '表達支持(CA5)'}, {value: '其他(CA6)', label: '其他(CA6)'}];
const animatedComponents = makeAnimated();

export default function Modal({ object: { data, edited }, setOpenModal }) {
  return (
    <div className="modalBackground">
      <div className="modalContainer">
        <div className="titleCloseBtn">
          <button onClick={() => { setOpenModal(false); }}>
            X 
          </button>
        </div>
        <div className="body">
          {data}
        </div>
        <h4>論點面向</h4><Select components={animatedComponents} isMulti options={options1} />
        <h4>發言目的</h4><Select components={animatedComponents} isMulti options={options2} />
        <div className="footer">
          <button onClick={() => { setOpenModal(false); }} id="cancelBtn" >
            Save
          </button>
        </div>
      </div>
    </div>
  );
}