import React from "react";
import "./modal.css";
import Select from "react-select";
import makeAnimated from "react-select/animated";

const options1 = [{value:'安全面', label:'安全面'}, {value:'科學與技術面', label:'科學與技術面'}, {value: '環保面', label:'環保面'}, {value: '社會面', label:'社會面'}, {value: '經濟面', label:'經濟面'}];
const options2 = [{value:'提出論點或主張(CA1)', label:'提出論點或主張(CA1)'}, {value:'提出疑問(CA2)', label:'提出疑問(CA2)'}, {value: '提出挑戰(CA3)', label:'提出挑戰(CA3)'}, {value: '進行推論(CA4)', label:'進行推論(CA4)'}, {value: '表達支持(CA5)', label:'表達支持(CA5)'}, {value: '其他(CA6)', label:'其他(CA6)'}];
const animatedComponents = makeAnimated();

function Modal({ setOpenModal }) {
  
  const data = [
    '使用核能發電，不但成本低，更能快速發電，又不會受到氣候的影響，可以如此快速發電，除了核能發電廠外，又有什麼可以代替它呢？',
    '它會產生高低階的放射性廢料，使用過的燃料雖然體積不大，但因有放射性物質，必須妥善處理，也是一種困擾，而且核能的熱污染較嚴重，也是缺點之一。',
    '有人覺得核能發電可以帶來很足夠的電力，所以贊成核能發電；但是，有些人覺得如果核能外洩，會影響到環境，讓溫度變高，讓大家過得很痛苦。',
];

  return (
    <div className="modalBackground">
      <div className="modalContainer">
        <div className="titleCloseBtn">
          <button
            onClick={() => {
              setOpenModal(false);
            }}
          >
            X
          </button>
        </div>
        <div className="body">
          <p>{data[0]}</p>
        </div>
        <h4>論點面向</h4><Select 
          components={animatedComponents}
          isMulti
          options={options1} />
        <h4>發言目的</h4><Select 
          components={animatedComponents}
          isMulti
          options={options2} />
        <div className="footer">
          <button
            onClick={() => {
              setOpenModal(false);
            }}
            id="cancelBtn"
          >
            Save
          </button>
        </div>
      </div>
    </div>
  );
}

export default Modal;