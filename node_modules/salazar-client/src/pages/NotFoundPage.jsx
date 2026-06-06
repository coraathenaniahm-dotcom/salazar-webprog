import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import potatobananaImg from "../assets/potatobanana.jpg";

function NotFoundPage() {
  const navigate = useNavigate();
  const [isHovered, setIsHovered] = useState(false);
  const [isImageHovered, setIsImageHovered] = useState(false);

  return (
    <>
      <style>{`
        #root {
          max-width: 100% !important;
          margin: 0 !important;
          padding: 0 !important;
        }

        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes slideInScale {
          from {
            opacity: 0;
            transform: scale(0.9) translateY(40px);
          }
          to {
            opacity: 1;
            transform: scale(1) translateY(0);
          }
        }

        @keyframes float {
          0%, 100% {
            transform: translateY(0px) rotate(-8deg);
          }
          50% {
            transform: translateY(-20px) rotate(-8deg);
          }
        }

        @keyframes floatHover {
          0%, 100% {
            transform: translateY(-10px) rotate(-8deg);
          }
          50% {
            transform: translateY(-30px) rotate(-8deg);
          }
        }

        @keyframes pulse {
          0%, 100% {
            opacity: 0.25;
          }
          50% {
            opacity: 0.45;
          }
        }

        @keyframes drift {
          0%, 100% {
            transform: translate(0, 0);
          }
          33% {
            transform: translate(20px, -10px);
          }
          66% {
            transform: translate(-15px, 15px);
          }
        }

        @keyframes shimmer {
          0%, 100% {
            opacity: 0.1;
          }
          50% {
            opacity: 0.3;
          }
        }

        .not-found-container {
          min-height: 100vh;
          height: 100vh;
          background: 
            radial-gradient(circle at 20% 50%, rgba(255, 200, 210, 0.4) 0%, transparent 50%),
            radial-gradient(circle at 80% 80%, rgba(255, 182, 193, 0.3) 0%, transparent 50%),
            linear-gradient(135deg, #fce7e6 0%, #f5d5d0 50%, #fdf0f0 100%);
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 0;
          position: relative;
          overflow: hidden;
          width: 100%;
        }

        .bg-gradient-overlay {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: 
            linear-gradient(180deg, rgba(255, 255, 255, 0.3) 0%, transparent 40%, rgba(255, 200, 210, 0.15) 100%);
          pointer-events: none;
          z-index: 2;
        }

        .decorative-blob-1 {
          position: absolute;
          width: 400px;
          height: 400px;
          background: radial-gradient(circle, rgba(255, 182, 193, 0.25) 0%, transparent 70%);
          border-radius: 50%;
          top: -150px;
          left: -150px;
          animation: pulse 5s ease-in-out infinite;
          filter: blur(40px);
          z-index: 3;
        }

        .decorative-blob-2 {
          position: absolute;
          width: 350px;
          height: 350px;
          background: radial-gradient(circle, rgba(255, 192, 203, 0.2) 0%, transparent 70%);
          border-radius: 50%;
          bottom: -100px;
          right: -100px;
          animation: pulse 6s ease-in-out infinite 0.5s;
          filter: blur(40px);
          z-index: 3;
        }

        .decorative-blob-3 {
          position: absolute;
          width: 280px;
          height: 280px;
          background: radial-gradient(circle, rgba(255, 160, 200, 0.15) 0%, transparent 70%);
          border-radius: 50%;
          top: 50%;
          right: 10%;
          animation: drift 8s ease-in-out infinite;
          filter: blur(50px);
          z-index: 3;
        }

        .decorative-sparkle {
          position: absolute;
          width: 100px;
          height: 100px;
          background: radial-gradient(circle, rgba(255, 182, 193, 0.4) 0%, transparent 70%);
          border-radius: 50%;
          animation: shimmer 3s ease-in-out infinite;
          filter: blur(25px);
          z-index: 3;
        }

        .sparkle-1 {
          top: 15%;
          right: 15%;
          animation-delay: 0s;
        }

        .sparkle-2 {
          bottom: 20%;
          left: 10%;
          animation-delay: 1s;
        }

        .error-text-background {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          width: 100%;
          height: 100%;
          font-size: 1.0rem;
          font-weight: 700;
          color: rgba(255, 107, 157, 0.12);
          line-height: 4.0;
          word-wrap: break-word;
          overflow: hidden;
          pointer-events: none;
          white-space: normal;
          letter-spacing: 0.3rem;
          z-index: 1;
          padding: 0;
          margin: 0;
          display: flex;
          flex-wrap: wrap;
          align-content: flex-start;
        }

        .content-wrapper {
          text-align: center;
          z-index: 20;
          animation: fadeInUp 0.8s ease-out;
          max-width: 520px;
          position: relative;
          padding: 2rem;
        }

        .glass-card {
          background: rgba(255, 255, 255, 0.75);
          backdrop-filter: blur(20px);
          -webkit-backdrop-filter: blur(20px);
          border: 1px solid rgba(255, 255, 255, 0.9);
          border-radius: 30px;
          padding: 3rem 2.5rem;
          box-shadow: 
            0 8px 32px rgba(0, 0, 0, 0.08),
            inset 0 1px 1px rgba(255, 255, 255, 0.9),
            0 0 60px rgba(255, 182, 193, 0.2);
          position: relative;
          animation: slideInScale 0.9s cubic-bezier(0.34, 1.56, 0.64, 1) 0.1s both;
        }

        .image-container {
          margin-bottom: -2.5rem;
          position: relative;
          z-index: 25;
          animation: fadeInUp 0.8s ease-out 0.2s both;
        }

        .image-wrapper {
          display: inline-block;
          position: relative;
        }

        .image-glow {
          position: absolute;
          inset: -12px;
          background: radial-gradient(circle, rgba(255, 107, 157, 0.3) 0%, transparent 70%);
          border-radius: 22px;
          animation: pulse 2s ease-in-out infinite;
          filter: blur(15px);
        }

        .image-container img {
          width: 160px;
          height: 160px;
          object-fit: contain;
          border-radius: 22px;
          box-shadow: 
            0 20px 60px rgba(255, 107, 157, 0.3),
            0 0 40px rgba(255, 182, 193, 0.2);
          animation: float 3.5s ease-in-out infinite;
          background: rgba(255, 255, 255, 0.8);
          padding: 1rem;
          position: relative;
          transition: all 0.4s cubic-bezier(0.34, 1.56, 0.64, 1);
          transform: rotate(-8deg);
        }

        .image-container:hover img {
          animation: floatHover 3s ease-in-out infinite;
          box-shadow: 
            0 25px 80px rgba(255, 107, 157, 0.4),
            0 0 50px rgba(255, 182, 193, 0.3);
        }

        .heading-404 {
          font-size: clamp(1.8rem, 6vw, 2.8rem);
          font-weight: 800;
          background: linear-gradient(135deg, #d64545 0%, #c84d73 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          margin: 1.5rem 0 0.5rem 0;
          padding: 0;
          line-height: 1.1;
          letter-spacing: -0.8px;
          animation: fadeInUp 0.8s ease-out 0.3s both;
        }

        .description-text {
          font-size: clamp(0.95rem, 2vw, 1.15rem);
          color: #6b7280;
          margin: 1.2rem 0 2.5rem 0;
          padding: 0;
          line-height: 1.7;
          font-weight: 500;
          letter-spacing: 0.2px;
          animation: fadeInUp 0.8s ease-out 0.4s both;
        }

        .home-button {
          background: linear-gradient(135deg, #ff6b9d 0%, #ff8fb1 100%);
          color: white;
          border: none;
          padding: 1.1rem 2.8rem;
          font-size: 1rem;
          font-weight: 600;
          border-radius: 50px;
          cursor: pointer;
          transition: all 0.4s cubic-bezier(0.34, 1.56, 0.64, 1);
          box-shadow: 
            0 10px 28px rgba(255, 107, 157, 0.35),
            inset 0 1px 0 rgba(255, 255, 255, 0.4);
          letter-spacing: 0.4px;
          text-transform: uppercase;
          position: relative;
          overflow: hidden;
          animation: fadeInUp 0.8s ease-out 0.5s both;
        }

        .home-button::before {
          content: '';
          position: absolute;
          top: 0;
          left: -100%;
          width: 100%;
          height: 100%;
          background: linear-gradient(135deg, #ff8fb1 0%, #ffb3d9 100%);
          transition: left 0.4s ease;
          z-index: -1;
        }

        .home-button:hover {
          transform: translateY(-5px) scale(1.03);
          box-shadow: 
            0 15px 45px rgba(255, 107, 157, 0.5),
            inset 0 1px 0 rgba(255, 255, 255, 0.5);
          letter-spacing: 0.5px;
        }

        .home-button:hover::before {
          left: 0;
        }

        .home-button:active {
          transform: translateY(-2px) scale(0.97);
        }

        @media (max-width: 768px) {
          .glass-card {
            padding: 2.5rem 1.5rem;
            border-radius: 25px;
          }

          .image-container {
            margin-bottom: -2rem;
          }

          .image-container img {
            width: 140px;
            height: 140px;
            padding: 0.9rem;
          }

          .heading-404 {
            margin-top: 1rem;
          }

          .home-button {
            padding: 0.95rem 2.2rem;
            font-size: 0.95rem;
          }

          .decorative-blob-1 {
            width: 250px;
            height: 250px;
            top: -100px;
            left: -100px;
          }

          .decorative-blob-2 {
            width: 220px;
            height: 220px;
            bottom: -80px;
            right: -80px;
          }
        }
      `}</style>

      <div className="not-found-container">
        {/* Error text background */}
        <div className="error-text-background">
          {Array(200).fill('Error ').join('')}
        </div>

        {/* Background overlay */}
        <div className="bg-gradient-overlay"></div>

        {/* Decorative blobs */}
        <div className="decorative-blob-1"></div>
        <div className="decorative-blob-2"></div>
        <div className="decorative-blob-3"></div>
        <div className="decorative-sparkle sparkle-1"></div>
        <div className="decorative-sparkle sparkle-2"></div>

        {/* Main content */}
        <div className="content-wrapper">
          <div className="glass-card">
            <div className="image-container">
              <div className="image-glow"></div>
              <div 
                className="image-wrapper"
                onMouseEnter={() => setIsImageHovered(true)}
                onMouseLeave={() => setIsImageHovered(false)}
              >
                <img 
                  src={potatobananaImg} 
                  alt="Cute potato and banana mascot"
                />
              </div>
            </div>

            <h2 className="heading-404">
              Page Not Found
            </h2>

            <p className="description-text">
              Oops! Looks like this page took a wrong turn. Don't worry—let's get you back on track!
            </p>

            <button
              className="home-button"
              onClick={() => navigate("/")}
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
            >
              Go Back Home
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default NotFoundPage;