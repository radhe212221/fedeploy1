import React, { useState } from "react";
import OtpInput from "react-otp-input";
import Timer from "otp-timer";

export default function OTP({ otp = "", onChange, onRetry, mounted }) {
  const [time, settime] = useState(300);
  const handleChange = (e) => {
    onChange(e);
  };
  const resendEvent = (e) => {
    onRetry();
  };
  if (!mounted) return null;
  return (
    <>
      <div className="d-flex mt-4">
        <OtpInput
          value={otp}
          onChange={handleChange}
          numInputs={4}
          separator={<span className="m-1"> </span>}
          inputStyle={{
            width: 30,
            width: "100%",
          }}
        />
      </div>
      <div
        className="mt-5 alert alert-danger bg-danger text-light border-0 alert-dismissible fade show"
        style={{ color: "white" }}
        role="alert"
      >
        <Timer seconds={time} minutes={0} resend={resendEvent} />
      </div>
    </>
  );
}
