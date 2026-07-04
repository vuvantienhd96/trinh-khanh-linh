import React from 'react';

const Welcome = ({ setPage }) => {
  return (
    <>
      <h1>Gửi công chúa nhỏ ! 💖</h1>
      <p style={{ fontSize: '1.3rem', margin: '20px 0' }}>
        Anh có một món quà nhỏ dành cho em...
      </p>
      <button className="btn-primary" onClick={() => setPage('memories')}>
        Mở ra nào 🤍
      </button>
    </>
  );
};

export default Welcome;
