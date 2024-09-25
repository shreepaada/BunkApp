import React from "react";
import {
  FaCodeBranch,
  FaBell,
  FaCircle,
  FaPlayCircle,
  FaUser,
} from "react-icons/fa"; // Example icons for status bar
import { AiOutlineWarning } from "react-icons/ai";
import { IoMdGitBranch } from "react-icons/io";
import "./footer.css"; // Updated CSS with IDE-style design

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-left">
        <span className="footer-item">
          <FaCodeBranch className="footer-icon" /> master
        </span>
        <span className="footer-divider">|</span>
        <span className="footer-item">
          <FaBell className="footer-icon" /> Notifications
        </span>
        <span className="footer-divider">|</span>
        <span className="footer-item">
          <IoMdGitBranch className="footer-icon" /> Launchpad
        </span>
      </div>
      <div className="footer-center">
        <span className="footer-item">
          <FaCircle className="footer-icon connected" /> Connected
        </span>
        <span className="footer-divider">|</span>
        <span className="footer-item">
          <FaPlayCircle className="footer-icon" /> Go Live
        </span>
      </div>
      <div className="footer-right">
        <span className="footer-item">
          <FaUser className="footer-icon" /> Ln 3, Col 1
        </span>
        <span className="footer-divider">|</span>
        <span className="footer-item">Spaces: 2</span>
        <span className="footer-divider">|</span>
        <span className="footer-item">UTF-8</span>
        <span className="footer-divider">|</span>
        <span className="footer-item">CRLF</span>
        <span className="footer-divider">|</span>
        <span className="footer-item"></span>
      </div>
    </footer>
  );
};

export default Footer;
