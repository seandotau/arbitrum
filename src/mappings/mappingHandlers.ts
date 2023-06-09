import { Transfer } from "../types";
import {ClaimDividendBatchLog,} from "../types/abi-interfaces/Erc20Abi";

export async function handleLog(log: ClaimDividendBatchLog): Promise<void> {
  logger.info(`New transfer transaction log at block ${log.blockNumber}`);
  const transferRecord = Transfer.create({
    //id: log.transactionHash,
    //blockHeight: log.blockNumber.toString(),
    //timestamp: log.block.timestamp.toString(),
    //value: log.args.value.toBigInt(),
    //from: log.args.from,
    //to: log.args.to,
    //contractAddress: log.address,
  });

  await transferRecord.save();
}

