import { useState } from 'react';
import PropTypes from 'prop-types';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import { Wallet, AlertCircle } from "lucide-react";

const WithdrawalForm = ({ userData, minCoins, conversionRate }) => {
  const [coinsToWithdraw, setCoinsToWithdraw] = useState(0);
  const [paymentSystem, setPaymentSystem] = useState("");
  const [accountNumber, setAccountNumber] = useState("");

  const withdrawAmountUSD = (coinsToWithdraw / conversionRate).toFixed(2);
  const hasEnoughCoins = userData.totalCoins >= minCoins;

  const handleSubmit = (e) => {
    e.preventDefault();
    const withdrawalRequest = {
      worker_email: userData.email,
      worker_name: userData.name,
      withdrawal_coin: Number(coinsToWithdraw),
      withdrawal_amount: Number(withdrawAmountUSD),
      payment_system: paymentSystem,
      account_number: accountNumber,
      withdraw_date: new Date().toISOString(),
      status: "pending"
    };
    console.log("Saving to database...", withdrawalRequest);
    alert("Withdrawal request submitted for review!");
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle>Request Withdrawal</CardTitle>
        <CardDescription>
          Minimum withdrawal: {minCoins} coins (${(minCoins / conversionRate).toFixed(2)})
        </CardDescription>
      </CardHeader>
      <CardContent>
        {!hasEnoughCoins ? (
          <div className="flex flex-col items-center justify-center p-8 border-2 border-dashed rounded-lg bg-slate-50">
            <AlertCircle className="w-12 h-12 text-destructive mb-3" />
            <p className="text-lg font-semibold text-destructive">Insufficient Coins</p>
            <p className="text-sm text-muted-foreground">
              You need at least {minCoins} coins to make a withdrawal.
            </p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <Label htmlFor="coins">Coins to Withdraw</Label>
                <Input
                  id="coins"
                  type="number"
                  min={1}
                  max={userData.totalCoins}
                  value={coinsToWithdraw}
                  onChange={(e) => setCoinsToWithdraw(Math.min(e.target.value, userData.totalCoins))}
                  required
                />
                <p className="text-[10px] text-muted-foreground">Max balance: {userData.totalCoins} coins</p>
              </div>
              <div className="space-y-2">
                <Label htmlFor="amount">Withdraw Amount ($)</Label>
                <Input
                  id="amount"
                  value={`$${withdrawAmountUSD}`}
                  readOnly
                  className="bg-muted font-bold text-emerald-700"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <Label>Payment System</Label>
                <Select onValueChange={setPaymentSystem} required>
                  <SelectTrigger><SelectValue placeholder="Choose Method" /></SelectTrigger>
                  <SelectContent>
                    <SelectItem value="Bkash">Bkash</SelectItem>
                    <SelectItem value="Rocket">Rocket</SelectItem>
                    <SelectItem value="Nagad">Nagad</SelectItem>
                    <SelectItem value="Upay">Upay</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="space-y-2">
                <Label htmlFor="account">Account Number</Label>
                <Input
                  id="account"
                  placeholder="e.g. 01XXXXXXXXX"
                  value={accountNumber}
                  onChange={(e) => setAccountNumber(e.target.value)}
                  required
                />
              </div>
            </div>

            <Button type="submit" className="w-full h-11 text-base">
              <Wallet className="w-4 h-4 mr-2" />
              Submit Withdrawal Request
            </Button>
          </form>
        )}
      </CardContent>
    </Card>
  );
};

WithdrawalForm.propTypes = {
  userData: PropTypes.shape({
    name: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired,
    totalCoins: PropTypes.number.isRequired,
  }).isRequired,
  minCoins: PropTypes.number.isRequired,
  conversionRate: PropTypes.number.isRequired,
};

export default WithdrawalForm;