import React from 'react';
import Card from './Card';
import Button from './Button';

const PricingTable = () => {
  const plans = [
    { name: 'Free', price: '$0', features: ['10 reminders/month', 'Basic lists'] },
    { name: 'Pro', price: '$5', features: ['Unlimited reminders', 'Voice notes', 'WhatsApp integration'], recommended: true },
    { name: 'Enterprise', price: '$20', features: ['All Pro features', 'Team sharing', 'API access'] },
  ];

  return (
    <div className="grid">
      {plans.map((plan, index) => (
        <Card key={index} style={{ textAlign: 'center', border: plan.recommended ? '2px solid var(--primary)' : '1px solid #ddd' }}>
          <h3>{plan.name}</h3>
          <p style={{ fontSize: '2rem' }}>{plan.price}/month</p>
          <ul>
            {plan.features.map((feature, i) => <li key={i}>{feature}</li>)}
          </ul>
          <Button variant="primary">Choose Plan</Button>
        </Card>
      ))}
    </div>
  );
};

export default PricingTable;