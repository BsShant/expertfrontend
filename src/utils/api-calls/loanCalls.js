import { server } from "../fetch";

export const fetchLoanWhatIs = async () => {
  const res2 = await fetch(`${server}/loanWhatIs`, {
    method: "GET",
    headers: { "Content-Type": "application/json" },
  });
  const loanWhatIs = await res2.json();

  return loanWhatIs;
};

export const fetchLoanFactors = async () => {
  const res2 = await fetch(`${server}/loanFactors`, {
    method: "GET",
    headers: { "Content-Type": "application/json" },
  });
  const loanFactors = await res2.json();

  return loanFactors;
};

export const fetchLoanEligibility = async () => {
  const res2 = await fetch(`${server}/loanEligibility`, {
    method: "GET",
    headers: { "Content-Type": "application/json" },
  });
  const loanEligibility = await res2.json();

  return loanEligibility;
};


export const fetchLoanType = async () => {
    const res2 = await fetch(`${server}/loanType`, {
      method: "GET",
      headers: { "Content-Type": "application/json" },
    });
    const loanType = await res2.json();
  
    return loanType;
  };
  
