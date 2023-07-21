const ethUtil = require('ethereumjs-util');
const { sign_message } = require('../constants/index');

function GetSignerAddress(signature) {
  try {
    const msgHash = ethUtil.hashPersonalMessage(Buffer.from(sign_message));
    const sigParams = ethUtil.fromRpcSig(signature);

    const publicKey = ethUtil.ecrecover(
      Buffer.from(msgHash),
      sigParams.v,
      sigParams.r,
      sigParams.s,
    );

    const address = ethUtil.pubToAddress(publicKey).toString('hex');
    const addr = '0x' + address;
    return addr;
  } catch (error) {
    console.error('Error:', error);
    return null;
  }
}
module.exports = { GetSignerAddress };
