import React, { useState } from "react";

const Assignment_6 = () => {
  const [otpSent, setOtpSent] = useState(false);
  const [phoneNumber, setPhoneNumber] = useState("");
  const [otp, setOtp] = useState(Array(4).fill(""));

  const handleSendOtp = () => {
    setTimeout(() => {
      alert("OTP sent");
      setOtpSent(true);
    }, 1000);
  };

  const handleOtpChange = (e, index) => {
    setOtp([...otp.slice(0, index), e.target.value, ...otp.slice(index + 1)]);
  };

  return (
    <div className="h-screen w-screen bg-black flex justify-center items-center text-white font-sans">
      <div className="border border-white w-1/4 h-96 rounded-2xl flex justify-center items-center">
        <div>
          <p className="text-4xl mb-12">Login via OTP</p>
          {!otpSent ? (
            <>
              <input
                className="border w-56 h-12 rounded-xl placeholder:text-black mb-10 text-black"
                placeholder="Enter Your Mobile Number"
                value={phoneNumber}
                onChange={(e) => setPhoneNumber(e.target.value)}
              ></input>
              <br />
              <button
                className="border w-32 h-12 ml-11"
                onClick={handleSendOtp}
              >
                Send OTP
              </button>
            </>
          ) : (
            <>
              <div className="flex justify-center mb-4">
                {otp.map((digit, index) => (
                  <input
                    key={index}
                    type="text"
                    maxLength="1"
                    value={digit}
                    onChange={(e) => handleOtpChange(e, index)}
                    className="border w-8 h-8 ml-2 text-center"
                  />
                ))}
              </div>
              <button className="border w-32 h-12 ml-11 mt-4">Login</button>
            </>
          )}
          {/* <pre className="text-white mt-4"> */}
          {/*   {JSON.stringify({ phoneNumber, otp }, null, 2)} */}
          {/* </pre> */}
        </div>
      </div>
    </div>
  );
};

export default Assignment_6;
