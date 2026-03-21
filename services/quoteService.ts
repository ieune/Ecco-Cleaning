import { QuoteRequest, QuoteResponse } from "../types";

export const calculateQuote = async (request: QuoteRequest): Promise<QuoteResponse> => {
  // Constants from AI logic extraction
  const BASE_FEE = 120;
  const PER_BEDROOM = 40;
  const PER_BATHROOM = 50;
  const EXTRA_FEE = 25;

  const MULTIPLIERS = {
    standard: 1.0,
    deep: 1.4,
    move: 1.6
  };

  // Base math
  let subtotal = BASE_FEE + (request.rooms * PER_BEDROOM) + (request.bathrooms * PER_BATHROOM);
  
  // Apply service type multiplier
  subtotal *= MULTIPLIERS[request.type];

  // Add extras
  const extrasTotal = request.extras.length * EXTRA_FEE;
  const finalPrice = subtotal + extrasTotal;

  // Duration Logic (assuming 2 professional cleaners)
  let baseHours = 1.0; // Minimal setup
  baseHours += request.rooms * 0.4;
  baseHours += request.bathrooms * 0.4;
  
  if (request.type === 'deep' || request.type === 'move') {
    baseHours *= 1.3;
  }
  
  baseHours += request.extras.length * 0.25;

  // Format duration as a range
  const minHours = Math.round(baseHours * 10) / 10;
  const maxHours = Math.round((baseHours + 0.5) * 10) / 10;

  // Generate Recommendation
  let recommendation = "";
  if (request.type === 'standard') {
    recommendation = "Perfect for maintaining a tidy home. We'll focus on high-traffic areas and surface cleaning.";
  } else if (request.type === 'deep') {
    recommendation = "Our deep clean reaches under furniture, inside vents, and handles heavy-duty scrubbing.";
  } else {
    recommendation = "Designed to help you get your security deposit back or prep your new home for move-in.";
  }

  if (request.extras.includes('Windows')) {
    recommendation += " Your streak-free windows will really brighten up the space!";
  }

  // Simulate minimal calculation delay for UX feedback
  await new Promise(resolve => setTimeout(resolve, 800));

  return {
    estimatedPrice: `$${Math.round(finalPrice)}`,
    duration: `${minHours} - ${maxHours} hours`,
    recommendation: recommendation
  };
};
