import React from "react";
const CustomError = () => {
  return (
    <div>
      <meta charSet="utf-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <title>Certificate Not Found!</title>
      <div id="message">
        <h2>Hey! We&apos;re sorry!</h2>
        <h1>We can&apos;t find your certificate.</h1>
        <p>
          Please send an email to your GDSC chapter lead to ask why you&apos;re
          seeing this page.
        </p>
      </div>
      <style media="screen" jsx>{`
        body {
          background: #eceff1;
          color: rgba(0, 0, 0, 0.87);
          font-family: Roboto, Helvetica, Arial, sans-serif;
          margin: 0;
          padding: 0;
        }
        #message {
          background: white;
          max-width: 360px;
          margin: 100px auto 16px;
          padding: 32px 24px;
          border-radius: 3px;
        }
        #message h2 {
          color: #ffa100;
          font-weight: bold;
          font-size: 16px;
          margin: 0 0 8px;
        }
        #message h1 {
          font-size: 22px;
          font-weight: 300;
          color: rgba(0, 0, 0, 0.6);
          margin: 0 0 16px;
        }
        #message p {
          line-height: 140%;
          margin: 16px 0 24px;
          font-size: 14px;
        }
        #message a {
          display: block;
          text-align: center;
          background: #039be5;
          text-transform: uppercase;
          text-decoration: none;
          color: white;
          padding: 16px;
          border-radius: 4px;
        }
        #message,
        #message a {
          box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12),
            0 1px 2px rgba(0, 0, 0, 0.24);
        }
        @media (max-width: 600px) {
          body,
          #message {
            margin-top: 0;
            background: white;
            box-shadow: none;
          }
          body {
            border-top: 16px solid #ffa100;
          }
        }
      `}</style>
    </div>
  );
};

export default CustomError;
