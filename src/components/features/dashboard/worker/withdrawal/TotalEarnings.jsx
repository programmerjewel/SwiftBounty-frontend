import React from 'react';
import PropTypes from 'prop-types';
import { Card, CardContent } from "@/components/ui/card";
import { Coins, DollarSign } from "lucide-react";

const TotalEarnings = ({ totalCoins, totalValueUSD }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
      <Card className="bg-amber-50 border-amber-200">
        <CardContent className="pt-6">
          <div className="flex items-center gap-4">
            <div className="p-3 bg-amber-500 rounded-full text-white">
              <Coins size={24} />
            </div>
            <div>
              <p className="text-sm text-amber-700 font-medium">Total Coins</p>
              <p className="text-2xl font-bold text-amber-900">{totalCoins}</p>
            </div>
          </div>
        </CardContent>
      </Card>

      <Card className="bg-emerald-50 border-emerald-200">
        <CardContent className="pt-6">
          <div className="flex items-center gap-4">
            <div className="p-3 bg-emerald-500 rounded-full text-white">
              <DollarSign size={24} />
            </div>
            <div>
              <p className="text-sm text-emerald-700 font-medium">Withdrawal Value</p>
              <p className="text-2xl font-bold text-emerald-900">${totalValueUSD}</p>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

TotalEarnings.propTypes = {
  totalCoins: PropTypes.number.isRequired,
  totalValueUSD: PropTypes.string.isRequired, // String because of .toFixed(2)
};

export default TotalEarnings;