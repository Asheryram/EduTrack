import React from 'react';
import { ScrollView, Text, View, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import HeaderWithMenu from "@/components/Header";

const SchoolFeesComponent = ({ 
  academicYear = '2024/25',
  feeItems = [
    { item: 'Textbooks & Workbooks', amount: '450.00' },
    { item: 'Science Lab. Practicals', amount: '100.00' },
    { item: 'Tuition', amount: '200.00' },
    { item: 'Lunch', amount: '150.00' },
    { item: 'I.C.T Facility', amount: '100.00' },
    { item: 'Transportation', amount: '400.00' },
    { item: 'Other (anniversary)', amount: '70.00' },
  ],
  transactions = {
    paid: '1,000.00',
    owed: '470.00'
  }
}) => {
  // Calculate total from fee items
  const calculateTotal = () => {
    const sum = feeItems.reduce((acc, item) => {
      return acc + parseFloat(item.amount.replace(',', ''));
    }, 0);
    return sum.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 });
  };

  const total = calculateTotal();
  const paid = transactions.paid;
  const youOwe = transactions.owed;

  type FeeRowProps = {
    item: string;
    amount: string;
    isTotal?: boolean;
  };

  const FeeRow: React.FC<FeeRowProps> = ({ item, amount, isTotal = false }) => (
    <View className={`flex-row justify-between py-4 px-5 ${isTotal ? 'bg-gray-50 font-bold text-lg' : 'border-b border-gray-200'}`}>
      <Text className={`${isTotal ? 'font-bold' : ''} text-gray-800`}>{item}</Text>
      <Text className={`${isTotal ? 'font-bold' : 'font-medium'} text-gray-800`}>{amount}</Text>
    </View>
  );

  type TransactionRowProps = {
    label: string;
    amount: string;
    isPaid?: boolean;
    isOwe?: boolean;
  };

  const TransactionRow: React.FC<TransactionRowProps> = ({ label, amount, isPaid = false, isOwe = false }) => (
    <View className="flex-row justify-between py-5 px-5">
      <Text className={isPaid ? 'font-medium text-green-500' : isOwe ? 'font-medium text-red-500' : 'text-gray-800'}>
        {label}
      </Text>
      <Text className={isPaid ? 'font-semibold text-green-500' : isOwe ? 'font-semibold text-red-500' : 'font-medium text-gray-800'}>
        {amount}
      </Text>
    </View>
  );

  return (
    <SafeAreaView className="flex-1 bg-white p-5">
      <HeaderWithMenu />
      <ScrollView className="flex-1 pt-16">
        {/* Header */}
        <View className="mb-8">
          <Text className="text-4xl font-bold text-black mb-1">School Fees</Text>
          <Text className="text-2xl font-bold text-black mb-2">Bills</Text>
          <Text className="text-gray-600 text-base">Fee Schedule For {academicYear} Academic Year</Text>
        </View>

        {/* Fees Table */}
        <View className="bg-white rounded-xl shadow-lg mb-8 overflow-hidden">
          <View className="flex-row justify-between py-4 px-5 bg-gray-200">
            <Text className="font-semibold text-gray-700">Fees Items</Text>
            <Text className="font-semibold text-gray-700">Amount (GHC)</Text>
          </View>
          
          {feeItems.map((fee, index) => (
            <FeeRow key={index} item={fee.item} amount={fee.amount} />
          ))}
          
          <FeeRow item="Total" amount={total} isTotal={true} />
        </View>

        {/* Transactions */}
        <View className="mb-8">
          <Text className="text-3xl font-bold text-black mb-4">Transactions</Text>
          <View className="bg-white rounded-xl shadow-lg overflow-hidden">
            <TransactionRow label="Paid" amount={paid} isPaid={true} />
            <TransactionRow label="You Owe" amount={youOwe} isOwe={true} />
          </View>
        </View>

        {/* Action Buttons */}
        <View className="flex-row gap-3 mb-6">
          <TouchableOpacity className="flex-1 bg-indigo-500 text-white py-4 px-6 rounded-lg font-semibold text-base">
            <Text className="text-white text-center font-semibold">Download Receipt</Text>
          </TouchableOpacity>
          
          <TouchableOpacity className="flex-1 bg-blue-500 text-white py-4 px-6 rounded-lg font-semibold text-base">
            <Text className="text-white text-center font-semibold">Pay Fees</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default SchoolFeesComponent;