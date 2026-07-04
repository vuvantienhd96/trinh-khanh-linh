import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const memoriesData = [
  {
    id: 1,
    text: "Có lẽ bức ảnh đẹp nhất anh từng thấy... là bức có em. 💫",
    img: "/1.jpg"
  },
  {
    id: 2,
    text: "Em không cần cười thật nhiều, chỉ cần là chính em. Vì em lúc nào cũng đẹp nhất rồi. 😊",
    img: "/2.jpg"
  },
  {
    id: 3,
    text: "Có những người chỉ xuất hiện một lần, nhưng ở lại cả đời. Em chính là người đó. 🌟",
    img: "/3.jpg"
  },
  {
    id: 4,
    text: "Em là lý do khiến những ngày bình thường trở nên đáng nhớ. Mỗi khoảnh khắc bên em đều là kỷ niệm đẹp. ☕💕",
    img: "/4.jpg"
  },
  {
    id: 5,
    text: "Nếu bình yên có hình dáng, chắc sẽ giống nụ cười của em. 💖",
    img: "/5.jpg"
  },
  {
    id: 6,
    text: "Anh thích ngắm hoàng hôn, nhưng thích ngắm em hơn. Đẹp nhất không phải phong cảnh, mà là em đứng trong phong cảnh ấy. 🌅",
    img: "/6.jpg"
  },
  {
    id: 7,
    text: "Anh từng nghĩ mình thích chụp ảnh... cho đến khi chỉ muốn lưu giữ mỗi em. 📷",
    img: "/7.jpg"
  },
  {
    id: 8,
    text: "Người ta hỏi điều gì khiến anh mỉm cười. Thật lạ, câu trả lời luôn là em. 😍",
    img: "/8.jpg"
  },
  {
    id: 9,
    text: "Anh không tìm kiếm điều hoàn hảo. Anh chỉ vô tình tìm thấy em. ✨",
    img: "/9.jpg"
  },
  {
    id: 10,
    text: "Có hàng triệu khuôn mặt. Nhưng ánh mắt anh luôn tìm đúng một người — em. 💫",
    img: "/10.jpg"
  },
  {
    id: 11,
    text: "Em không phải phép màu. Nhưng mọi điều đều trở nên kỳ diệu từ khi có em. ✨💕",
    img: "/11.jpg"
  },
  {
    id: 12,
    text: (
      <>
        Nếu em đã đọc được đến những dòng này...
        <br /><br />
        Hãy biết rằng trong hàng tỷ người trên thế giới, anh vẫn luôn thấy em là điều đẹp nhất. 💝
      </>
    ),
    img: "/14.jpg"
  }
];

const Memories = ({ setPage }) => {
  const [index, setIndex] = useState(0);

  const nextSlide = () => {
    if (index < memoriesData.length - 1) {
      setIndex(index + 1);
    } else {
      setPage('ask');
    }
  };

  return (
    <AnimatePresence mode='wait'>
      <motion.div 
        key={index}
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        exit={{ opacity: 0, x: -20 }}
        transition={{ duration: 0.3 }}
        className="memory-layout"
      >
        <img src={memoriesData[index].img} alt="kỷ niệm" className="photo-placeholder" />
        
        <div className="memory-text">
          <p style={{ fontSize: '1.2rem', lineHeight: '1.6' }}>
            {memoriesData[index].text}
          </p>
          <div style={{ marginTop: '20px' }}>
            <button className="btn-primary" onClick={nextSlide}>
              {index === memoriesData.length - 1 ? "Anh có câu hỏi cho em 🌹" : "Tiếp theo 💖"}
            </button>
          </div>
        </div>
      </motion.div>
    </AnimatePresence>
  );
};

export default Memories;
