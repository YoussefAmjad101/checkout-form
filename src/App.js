import React, { useState } from 'react';
import './style.css';

const App = () => {
  const [_bank_name, set_bank_name] = useState('');
  const [_beneficiary_name, set_beneficiary_name] = useState('');
  const [_swift_code, set_swift_code] = useState('');
  const [_card_number, set_card_number] = useState('');
  const [_card_expiry, set_card_expiry] = useState('');
  const [_cw, set_cw] = useState('');
  const bank = () => {
    let on = document.getElementById('bank');
    let off_1 = document.getElementById('card');
    let off_2 = document.getElementById('qr_code');

    on.style = 'display:block';
    off_1.style = 'display:none';
    off_2.style = 'display:none';
  };
  const card = () => {
    let on = document.getElementById('bank');
    let off_1 = document.getElementById('card');
    let off_2 = document.getElementById('qr_code');

    on.style = 'display:none';
    off_1.style = 'display:block';
    off_2.style = 'display:none';
  };
  const qr_code = () => {
    let on = document.getElementById('bank');
    let off_1 = document.getElementById('card');
    let off_2 = document.getElementById('qr_code');

    on.style = 'display:none';
    off_1.style = 'display:none';
    off_2.style = 'display:block';
  };
  const handleSubmit = () => {
    alert(`The payment was sended successfuly !`);
  };
  return (
    <div className="container">
      <div className="card p-4 m-4">
        <div className="row">
          <div className="col-3">
            <h6>
              <b>PAY WITH</b>
            </h6>

            <div className="d-flex flex-column">
              <span type="button" className="my-2" onClick={bank}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  class="bi bi-house-fill"
                  viewBox="0 0 16 16"
                >
                  <path d="M8.707 1.5a1 1 0 0 0-1.414 0L.646 8.146a.5.5 0 0 0 .708.708L8 2.207l6.646 6.647a.5.5 0 0 0 .708-.708L13 5.793V2.5a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5v1.293L8.707 1.5Z" />
                  <path d="m8 3.293 6 6V13.5a1.5 1.5 0 0 1-1.5 1.5h-9A1.5 1.5 0 0 1 2 13.5V9.293l6-6Z" />
                </svg>
                <span className="m-2">Bank</span>
              </span>
              <span type="button" className="my-2" onClick={card}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  class="bi bi-credit-card-fill"
                  viewBox="0 0 16 16"
                >
                  <path d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v1H0V4zm0 3v5a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7H0zm3 2h1a1 1 0 0 1 1 1v1a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1v-1a1 1 0 0 1 1-1z" />
                </svg>
                <span className="m-2">Card</span>
              </span>
              <span type="button" className="my-2" onClick={qr_code}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  class="bi bi-qr-code"
                  viewBox="0 0 16 16"
                >
                  <path d="M2 2h2v2H2V2Z" />
                  <path d="M6 0v6H0V0h6ZM5 1H1v4h4V1ZM4 12H2v2h2v-2Z" />
                  <path d="M6 10v6H0v-6h6Zm-5 1v4h4v-4H1Zm11-9h2v2h-2V2Z" />
                  <path d="M10 0v6h6V0h-6Zm5 1v4h-4V1h4ZM8 1V0h1v2H8v2H7V1h1Zm0 5V4h1v2H8ZM6 8V7h1V6h1v2h1V7h5v1h-4v1H7V8H6Zm0 0v1H2V8H1v1H0V7h3v1h3Zm10 1h-1V7h1v2Zm-1 0h-1v2h2v-1h-1V9Zm-4 0h2v1h-1v1h-1V9Zm2 3v-1h-1v1h-1v1H9v1h3v-2h1Zm0 0h3v1h-2v1h-1v-2Zm-4-1v1h1v-2H7v1h2Z" />
                  <path d="M7 12h1v3h4v1H7v-4Zm9 2v2h-3v-1h2v-1h1Z" />
                </svg>
                <span className="m-2">Visa QR</span>
                <span class="badge badge-sm bg-secondary">NEW</span>
              </span>
            </div>
          </div>
          <div className="col-9">
            <form action="" onSubmit={(e) => handleSubmit(e)}>
              <div id="bank">
                <span class="badge bg-light text-secondary d-flex justify-content-center mb-3 ">
                  Pay
                </span>
                <h5 className=" d-flex justify-content-center pb-5">
                  Enter bank details to pay
                </h5>
                <div className="my-3 mb-4">
                  <label htmlFor="bank_name" className="form-label">
                    BANK NAME
                  </label>
                  <input
                    type="text"
                    name="bank_name"
                    placeholder="BBB Bank"
                    onChange={(e) => set_bank_name(e.target.value)}
                    className="form-control"
                  />
                </div>
                <div className="my-3 mb-4">
                  <label htmlFor="beneficiary_name" className="form-label">
                    BENEFICiARY NAME
                  </label>
                  <input
                    type="text"
                    onChange={(e) => set_beneficiary_name(e.target.value)}
                    name="beneficiary_name"
                    placeholder="Jhon Smith"
                    className="form-control"
                  />
                </div>
                <div className="my-3 mb-4">
                  <label htmlFor="swift_code" className="form-label">
                    SWIFT CODE
                  </label>
                  <input
                    type="text"
                    name="swift_code"
                    placeholder="ABCDAB1D"
                    onChange={(e) => set_swift_code(e.target.value)}
                    className="form-control"
                  />
                </div>
              </div>
              <div id="card" style={{ display: 'none' }}>
                <span class="badge bg-light text-secondary d-flex justify-content-center mb-3 ">
                  Pay
                </span>
                <h5 className=" d-flex justify-content-center pb-5">
                  Enter your card details to pay
                </h5>
                <div className="my-3 mb-4">
                  <label htmlFor="card_number" className="form-label">
                    CARD NUMBER
                  </label>
                  <input
                    type="text"
                    name="card_number"
                    placeholder="0000 0000 0000 0000"
                    onChange={(e) => set_card_number(e.target.value)}
                    className="form-control"
                  />
                </div>
                <div className="input-group mb-4">
                  <div className="my-3 mx-1">
                    <label htmlFor="card_expiry" className="form-label">
                      CARD EXPIRY
                    </label>
                    <input
                      type="text"
                      name="card_expiry"
                      onChange={(e) => set_card_expiry(e.target.value)}
                      placeholder="MM/YY"
                      className="form-control"
                    />
                  </div>
                  <div className="my-3 mx-1">
                    <label htmlFor="cw" className="form-label">
                      CW
                    </label>
                    <input
                      type="text"
                      name="cw"
                      onChange={(e) => set_cw(e.target.value)}
                      placeholder="..."
                      className="form-control"
                    />
                  </div>
                </div>
              </div>
              <div id="qr_code" style={{ display: 'none' }}>
                <span class="badge bg-light text-secondary d-flex justify-content-center mb-3 ">
                  Pay
                </span>
                <h5 className=" d-flex justify-content-center pb-5">
                  Scan the QR code to pay
                </h5>
                <div className="my-3 d-flex justify-content-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="160"
                    height="160"
                    fill="currentColor"
                    class="bi bi-qr-code"
                    viewBox="0 0 16 16"
                  >
                    <path d="M2 2h2v2H2V2Z" />
                    <path d="M6 0v6H0V0h6ZM5 1H1v4h4V1ZM4 12H2v2h2v-2Z" />
                    <path d="M6 10v6H0v-6h6Zm-5 1v4h4v-4H1Zm11-9h2v2h-2V2Z" />
                    <path d="M10 0v6h6V0h-6Zm5 1v4h-4V1h4ZM8 1V0h1v2H8v2H7V1h1Zm0 5V4h1v2H8ZM6 8V7h1V6h1v2h1V7h5v1h-4v1H7V8H6Zm0 0v1H2V8H1v1H0V7h3v1h3Zm10 1h-1V7h1v2Zm-1 0h-1v2h2v-1h-1V9Zm-4 0h2v1h-1v1h-1V9Zm2 3v-1h-1v1h-1v1H9v1h3v-2h1Zm0 0h3v1h-2v1h-1v-2Zm-4-1v1h1v-2H7v1h2Z" />
                    <path d="M7 12h1v3h4v1H7v-4Zm9 2v2h-3v-1h2v-1h1Z" />
                  </svg>
                </div>
              </div>
              <div className="my-3 d-grid">
                <button type="submit" className="btn btn-secondary btn-block">
                  Pay$100
                </button>
                <span className="my-2 d-flex justify-content-center"><h6>Use a test card</h6></span>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};
export default App;
