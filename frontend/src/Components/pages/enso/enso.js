import React, { useState } from 'react';
import {
  AllInclusiveOutlined,
  HomeOutlined,
  PersonOutlineOutlined,
  ShoppingBagOutlined,
  ArrowUpwardOutlined,
  SellOutlined,
  ViewSidebarOutlined,
} from '@mui/icons-material';
import './enso.css';
import '../../productCards/productCard.css';
import { Link } from 'react-router-dom';
import GarmentPreview from '../../productCards/garmentPreview';

export default function Enso() {
  const [prompt, setPrompt] = useState('');
  const [showSparks, setSparks] = useState(true);
  const [loading, setLoading] = useState('');
  const [serverRarity, setServerRarity] = useState('');
  const [serverName, setServerName] = useState('');
  const [isSidebar, setSidebar] = useState(false);
  const [generatedImageURL, setImageURL] = useState();
  const [currentSide, setSide] = useState('back');
  const [generationFailed, setGenerationFailed] = useState(false);

  async function promptSubmit(prompt) {
    if (localStorage.getItem('token')) {
      setSparks(false);
      setLoading('Cooking...');
      setImageURL(null);
      setGenerationFailed(false);
      try {
        const response = await fetch('http://192.168.29.137:3002/generateImage', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${localStorage.getItem('token')}`,
          },
          body: JSON.stringify({ prompt, sessionKey: localStorage.getItem('token') }),
        });

        const data = await response.json();
        console.log(data);
        if (data.status === false) {
          setLoading(<span className='tokenWarning'>zero tokens. Infinite ideas. Fix that gap, get more tokens <Link to="/token">here</Link></span>);
          setGenerationFailed(true);
        } else {
          setLoading('');
          setImageURL('http://192.168.29.137:3002/' + data.pathToImage);
          setServerRarity(data.productRarity);
          setServerName(data.productName);
        }
      } catch (err) {
        console.error(err);
        setLoading('Failed to generate image');
        setGenerationFailed(true);
      }
    } else {
      setSparks(!showSparks);
      setLoading('Please Sign In to use Enso');
    }
  }

  function GetProductTag({ productRarity }) {
    const rarityMap = {
      uncommon: 'rarityTagUncommon',
      rare: 'rarityTagRare',
      vanguard: 'rarityTagVanguard',
      ascendant: 'rarityTagAscendant',
    };

    const className = rarityMap[productRarity] || 'rarityTagAscendant';
    return (
      <div className="rarityTagHolder">
        <div className={className}>
          <SellOutlined /> {productRarity.toUpperCase() || 'ASCENDANT'}   
        </div>
      </div>
    );
  }

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

      {showSparks ? (
        <div className="ensoSuggestionBox">
          <div className="suggestionHero">Find some sparks!</div>
          <div className="ensoSuggestionParent">
            {["cyberpunk samurai under neon rain", "solar eclipse with fractal petals", "angel falling into glitch void", "mountains shaped like piano keys", "burning rose with barcode stem"].map((p) => (
              <div className="try" key={p} onClick={() => setPrompt(p)}>
                {p}
              </div>
            ))}
          </div>
        </div>
      ) : !localStorage.getItem('token') ? ( 
        <div className='placeholderCooking'>{loading}</div>
      ) : loading ? (
        <div className="placeholderCooking">{loading}</div>
      ) : generationFailed ? (
        <div className="placeholderCooking">Failed to generate design, please try again with a different prompt 🥺</div>
      ) : (
        <div className="generatedBox">
          <div className="generatedHead">
            <GetProductTag productRarity={serverRarity} />
            <div className="generatedName">{serverName}</div>
          </div>
          <div className="generatedBody">
            <div className="generatedApparel">
              <GarmentPreview designUrlBack={generatedImageURL} apparelPath="assets/img_for_mockup/white_tshirt.jpg" />
              <ViewSidebarOutlined onClick={() => setSidebar(!isSidebar)} />
            </div>
            <div className={isSidebar ? 'generatedEditorVisible' : 'generatedEditorCompressed'}></div>
          </div>
          <div className="generatedFoot"></div>
        </div>
      )}

      <div className="ensoPromptBox">
        <input
          className="promptArea"
          placeholder="What would you like to wear today?"
          name="prompt"
          onChange={(e) => setPrompt(e.target.value)}
          value={prompt}
        />
        <button className="promptSend" onClick={() => promptSubmit(prompt)}>
          <ArrowUpwardOutlined />
        </button>
      </div>
    </div>
  );
}
