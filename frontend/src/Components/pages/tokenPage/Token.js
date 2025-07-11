import "./Token.css"

export default function TokenPurchase() {
  const plans = [
    { name: 'Starter Pack', tokens: 50, price: '₹120', priceInt: 120, isValueForMoney:false},
    { name: 'Creator Pack', tokens: 100, price: '₹150', priceInt: 150, isValueForMoney:true},
    { name: 'Pro Pack', tokens: 150, price: '₹250', priceInt:250, isValueForMoney:false},
  ];

  return (
    <div className="token-purchase-page">
      <h1>Ideas strike unannounced. Be ready when they do.</h1>
      <p>Choose a pack and keep the ideas flowing.</p>
      <div className="token-plan-list horizontal">
        {plans.map((plan, index) => (
        plan.isValueForMoney?
        <div className="valueForMoney">
          <div key={index} className="token-plan-card">
            <h2>{plan.name}</h2>
            <p className="token-count">{plan.tokens} Tokens</p>
            <p className="price">{plan.price}</p>
            <button className="buy-btn">Conjure</button>
            <p className="perTokenCost">Price per-token ₹{Math.round((plan.priceInt / plan.tokens)*100)/100}</p>
            <p className="perTokenCost">Best value for money</p>
          </div>
        </div>
          :
          <div key={index} className="token-plan-card">
            <h2>{plan.name}</h2>
            <p className="token-count">{plan.tokens} Tokens</p>
            <p className="price">{plan.price}</p>
            <button className="buy-btn">Conjure</button>
            <p className="perTokenCost">Price per-token ₹{Math.round((plan.priceInt / plan.tokens)*100)/100}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
