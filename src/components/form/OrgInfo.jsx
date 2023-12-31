import React from 'react';
import '../style.css/orginfo.css';

function OrgInfo({ FilteredData }) {
  console.log(FilteredData);

  if (!FilteredData || FilteredData.length === 0) {
    return <div>لا توجد بيانات متاحة</div>;
  }

  return (
    <div className="contact-container">
      <div className="contact-item">
      <h3 className='works'>{FilteredData[0].name}</h3>
        <div className="label" >:رقم الهاتف   </div>
        <div className="value">{FilteredData[0].phone}</div>
        {/* <div className="valuee">{FilteredData[0].image}</div> */}


      </div>
    </div>
  );
}

export default OrgInfo;