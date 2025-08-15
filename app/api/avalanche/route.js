import { NextResponse } from "next/server";

// Base URL for Avalanche P-Chain
const AVALANCHE_RPC_URL = 'https://api.avax.network/ext/P';

export async function GET() {
  try {
    console.log('Fetching Avalanche validator data...');

    // Get current validators from P-Chain
    const response = await fetch(AVALANCHE_RPC_URL, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        jsonrpc: '2.0',
        id: 1,
        method: 'platform.getCurrentValidators',
        params: {
          subnetID: null // Primary Network
        }
      })
    });

    const data = await response.json();

    if (data.error) {
      throw new Error(`API Error: ${data.error.message}`);
    }

    const validators = data.result.validators;

    // Calculate network averages for health scoring
    const networkAverages = {
      averageStake: validators.reduce((sum, v) => sum + parseInt(v.stakeAmount), 0) / validators.length,
      averageUptime: validators.reduce((sum, v) => sum + parseFloat(v.uptime), 0) / validators.length
    };

    // Create trimmed validators data with statistics
    const trimmedValidators = validators.map(validator => {
      const stake = parseInt(validator.stakeAmount) / 1_000_000_000; // Convert from nAVAX to AVAX
      const uptime = parseFloat(validator.uptime);

      // Calculate health score
      const stakeHealth = Math.min(100, (stake / (networkAverages.averageStake / 1_000_000_000)) * 100);
      const uptimeHealth = (uptime / 100) * 100; // uptime is already percentage
      const connectionHealth = validator.connected ? 100 : 0;
      const delegationHealth = validator.delegators && validator.delegators.length > 0 ? 100 : 50;

      const health = (stakeHealth * 0.3) + (uptimeHealth * 0.4) + (connectionHealth * 0.2) + (delegationHealth * 0.1);

      // Determine status
      let status = 'HEALTHY';
      if (uptime < 80 || !validator.connected) status = 'UNHEALTHY';
      else if (uptime > 98 && health > 90) status = 'EXCELLENT';
      else if (uptime < 95 || health < 70) status = 'AT_RISK';

      return {
        nodeID: validator.nodeID,
        stake: Math.round(stake * 100) / 100,
        uptime: Math.round(uptime * 100) / 100,
        connected: validator.connected,
        startTime: validator.startTime,
        endTime: validator.endTime,
        delegators: validator.delegators ? validator.delegators.length : 0,
        health: Math.round(health * 100) / 100,
        status: status
      };
    });

    console.log(`Total Active Validators: ${validators.length}`);

    return NextResponse.json({
      success: true,
      validatorsNo: validators.length,
      validators: validators,
      trimmedValidators: trimmedValidators
    });

  } catch (error) {
    console.error('Error fetching Avalanche validator data:', error);

    return NextResponse.json({
      success: false,
      error: error.message
    }, { status: 500 });
  }
}