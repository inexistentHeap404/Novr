import {
  AllInclusiveOutlined,
  HomeOutlined,
  PersonOutlineOutlined,
  ShoppingBagOutlined,
} from "@mui/icons-material";
import ArrowUpwardOutlinedIcon from "@mui/icons-material/ArrowUpwardOutlined";
import "./enso.css";
import { useState } from "react";
import { Link } from "react-router-dom";

export default function Enso() {
  const [prompt, setPrompt] = useState("");
  const [imageUrl, setImageUrl] = useState("");
  const [mockupType, setMockupType] = useState("tshirt");

  const handleGenerate = async () => {
    const response = await fetch(
      `https://image.pollinations.ai/prompt/${encodeURIComponent(prompt)}`
    );
    setImageUrl(response.url);
  };

  const getMockupImage = () => {
    switch (mockupType) {
      case "hoodie":
        return "/assets/img_for_mockup/white_hoodie.png";
      case "tanktop":
        return "/assets/img_for_mockup/tanktop.jpg";
      case "sweatshirt":
        return "/assets/img_for_mockup/sweatshirt.jpg";
      case "tshirt":
      default:
        return "/assets/img_for_mockup/white_tshirt.jpg";
    }
  };

  return (
    <div className="ensoParent">
      <div className="ensoNav">
        <div className="heroName">
          <div className="hero">enso</div>
          <div className="subHero">by novr</div>
        </div>
        <ul>
          <li>
            <Link to="/">
              <HomeOutlined />
            </Link>
          </li>
          <li>
            <Link to="/cart">
              <ShoppingBagOutlined />
            </Link>
          </li>
          <li>
            <Link to="/infinityStore">
              <AllInclusiveOutlined />
            </Link>
          </li>
          <li>
            <Link to="/auth">
              <PersonOutlineOutlined />
            </Link>
          </li>
        </ul>
      </div>

      <div className="ensoBody">
        <div className="leftBox">
          <div className="ensoSuggestionBox">
            <div className="suggestionHero">Find some sparks!</div>
            <div className="ensoSuggestionParent">
              <div className="try">cyberpunk samurai under neon rain</div>
              <div className="try">solar eclipse with fractal petals</div>
              <div className="try">angel falling into glitch void</div>
              <div className="try">mountains shaped like piano keys</div>
              <div className="try">burning rose with barcode stem</div>
            </div>
          </div>
          <div className="ensoPromptBox">
            <input
              className="promptArea"
              placeholder="What's on your mind?"
              name="prompt"
              value={prompt}
              onChange={(e) => setPrompt(e.target.value)}
            />
            <button className="promptSend" onClick={handleGenerate}>
              <ArrowUpwardOutlinedIcon />
            </button>
          </div>

          {/* Clothing Type Selector */}
          <div className="mockupSelector">
            <label htmlFor="mockupType">Choose apparel:</label>
            <select
              id="mockupType"
              value={mockupType}
              onChange={(e) => setMockupType(e.target.value)}
            >
              <option value="tshirt">T-shirt</option>
              <option value="hoodie">Hoodie</option>
              <option value="tanktop">Tank Top</option>
              <option value="sweatshirt">Sweatshirt</option>
            </select>
          </div>
        </div>

        <div className="rightBox">
          <div className="shirtMockup">
            <img
              src={getMockupImage()}
              className="tshirtBase"
              alt="Apparel mockup"
            />
            {imageUrl && (
              <img src={imageUrl} className="designOverlay" alt="Generated" />
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
