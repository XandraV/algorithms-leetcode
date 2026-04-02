// 1169. Invalid Transactions
// A transaction is possibly invalid if:

// the amount exceeds $1000, or;
// if it occurs within (and including) 60 minutes of another transaction with the same name in a different city.
// You are given an array of strings transaction where transactions[i] consists of comma-separated values representing the name, time (in minutes), amount, and city of the transaction.

// Return a list of transactions that are possibly invalid. You may return the answer in any order.

interface Transaction {
  name: string;
  time: number;
  amount: number;
  city: string;
}

function serializeTransaction(transaction: Transaction): string {
  return Object.values(transaction).join(",");
}

function isFradulant(
  transactionsForUser: Transaction[],
  currentTransaction: Transaction,
): boolean {
  for (let transaction of transactionsForUser) {
    if (
      transaction.name === currentTransaction.name &&
      transaction.city !== currentTransaction.city &&
      Math.abs(currentTransaction.time - transaction.time) <= 60
    ) {
      return true;
    }
  }
  return false;
}

function invalidTransactions(transactions: string[]): string[] {
  let invalidTransactions: string[] = [];

  const transactionRecords = transactions.map((s) => {
    const data = s.split(",");
    const transaction: Transaction = {
      name: data[0],
      time: parseInt(data[1]),
      amount: parseInt(data[2]),
      city: data[3],
    };
    return transaction;
  });

  for (let transaction of transactionRecords) {
    if (transaction.amount > 1000) {
      invalidTransactions.push(serializeTransaction(transaction));
    } else if (isFradulant(transactionRecords, transaction)) {
      invalidTransactions.push(serializeTransaction(transaction));
    }
  }

  return invalidTransactions;
}
