// Sequelize Model for recharge transactions

module.exports = (sequelize, DataTypes) => {
  const RechargeTransaction = sequelize.define('RechargeTransaction', {
    outlet: DataTypes.STRING,
    mobileNumber: DataTypes.STRING,
    operator: DataTypes.STRING,
    amount: DataTypes.DECIMAL,
    enquiryReferenceId: DataTypes.STRING,
    transactionId: DataTypes.STRING,
    paymentStatus: DataTypes.STRING,
    rechargeStatus: DataTypes.STRING,
  });

  return RechargeTransaction;
};
