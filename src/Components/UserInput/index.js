import React, { useState } from 'react';

function UserInput() {
  const [name, setName] = useState('');
  const [dateOfBirth, setDateOfBirth] = useState('');
  const [gender, setGender] = useState('');
  const [residentialStatus, setResidentialStatus] = useState('');

  const [basicSalary, setBasicSalary] = useState('');
  const [hra, setHRA] = useState('');
  const [specialAllowance, setSpecialAllowance] = useState('');
  const [transportAllowance, setTransportAllowance] = useState('');
  const [otherAllowances, setOtherAllowances] = useState('');
  const [lta, setLTA] = useState('');
  const [reimbursements, setReimbursements] = useState('');
  const [employerContribution, setEmployerContribution] = useState('');
  const [tds, setTDS] = useState('');

  const [grossAnnualRent, setGrossAnnualRent] = useState('');
  const [municipalTaxes, setMunicipalTaxes] = useState('');
  const [standardDeduction, setStandardDeduction] = useState('');
  const [interestOnHomeLoan, setInterestOnHomeLoan] = useState('');

  const [shortTermCapitalGains, setShortTermCapitalGains] = useState('');
  const [longTermCapitalGains, setLongTermCapitalGains] = useState('');

  const [interestIncome, setInterestIncome] = useState('');
  const [dividendIncome, setDividendIncome] = useState('');
  const [incomeFromBusiness, setIncomeFromBusiness] = useState('');
  const [agriculturalIncome, setAgriculturalIncome] = useState('');
  const [miscellaneousIncome, setMiscellaneousIncome] = useState('');

  const [lifeInsurancePremium, setLifeInsurancePremium] = useState('');
  const [ppf, setPPF] = useState('');
  const [epf, setEPF] = useState('');
  const [nsc, setNSC] = useState('');
  const [taxSavingFD, setTaxSavingFD] = useState('');
  const [elss, setELSS] = useState('');
  const [principalRepayment, setPrincipalRepayment] = useState('');
  const [childrensTuitionFees, setChildrensTuitionFees] = useState('');
  const [medicalInsurancePremium, setMedicalInsurancePremium] = useState('');
  const [interestOnEducationLoan, setInterestOnEducationLoan] = useState('');
  const [donations, setDonations] = useState('');
  const [interestOnSavingsAccount, setInterestOnSavingsAccount] = useState('');
  const [disabilityDeduction, setDisabilityDeduction] = useState('');
  const [interestOnHomeLoanDeduction, setInterestOnHomeLoanDeduction] = useState('');
  const [otherDeductions, setOtherDeductions] = useState('');

 console.log(dateOfBirth)
 const submitForm=(e)=>{
e.preventDefault()
 }

  return (
    <div>
     <form onSubmit={submitForm}> <fieldset>
  <fieldset>
    <legend>Personal Details</legend>
    <label htmlFor="name">Name:</label>
    <input type="text" value={name} onChange={(e)=>{setName(e.target.value)}}  id="name" name="name"/><br/>

    <label htmlFor="dob">Date of Birth / Age:</label>
    <input type="date" value={dateOfBirth} onChange={(e)=>{setDateOfBirth(e.target.value)}} id="dob" name="dob"/><br/>

    <label htmlFor="gender">Gender:</label>
    <select id="gender"  value={gender} onChange={(value)=>{setGender(value)}} name="gender">
      <option value="male">Male</option>
      <option value="female">Female</option>
      <option value="other">Other</option>
    </select><br/>

    <label htmlFor="residential-status">Residential Status:</label>
    <select id="residential-status" value={residentialStatus} onChange={(e)=>{setResidentialStatus(e.target.value)}}  name="residential-status">
      <option value="resident">Resident</option>
      <option value="non-resident">Non-Resident</option>
      <option value="resident-not-ordinary">Resident but Not Ordinary Resident</option>
    </select><br/>
  </fieldset>

  <fieldset>
    <legend>Income Sources</legend>
    <h4>Salary:</h4>
    <label htmlFor="basic-salary">Basic Salary:</label>
    <input type="number" value={basicSalary} onChange={(e)=>{setBasicSalary(e.target.value)}} id="basic-salary" name="basic-salary"/><br/>

    <label htmlFor="hra">House Rent Allowance (HRA):</label>
    <input type="number" value={hra} onChange={(e)=>{setHRA(e.target.value)}} id="hra" name="hra"/><br/>

    <label htmlFor="special-allowance">Special Allowance:</label>
    <input type="number" value={specialAllowance} onChange={(e)=>{setSpecialAllowance(e.target.value)}}  id="special-allowance" name="special-allowance"/><br/>

    <label htmlFor="transport-allowance">Transport Allowance:</label>
    <input type="number" value={transportAllowance} onChange={(e)=>{setTransportAllowance(e.target.value)}}  id="transport-allowance" name="transport-allowance"/><br/>

    <label htmlFor="other-allowances">Other Allowances:</label>
    <input type="number" id="other-allowances" value={otherAllowances} onChange={(e)=>{setOtherAllowances(e.target.value)}}  name="other-allowances"/><br/>

    <label htmlFor="lta">Leave Travel Allowance (LTA):</label>
    <input type="number" id="lta" value={lta} onChange={(e)=>{setLTA(e.target.value)}}  name="lta"/><br/>

    <label htmlFor="reimbursements">Reimbursements:</label>
    <input type="number" value={reimbursements} onChange={(e)=>{setReimbursements(e.target.value)}}  id="reimbursements" name="reimbursements"/><br/>

    <label htmlFor="employer-pf-contribution">Employer's Contribution to Provident Fund:</label>
    <input type="number" value={employerContribution} onChange={(e)=>{setEmployerContribution(e.target.value)}}  id="employer-pf-contribution" name="employer-pf-contribution"/><br/>

    <label htmlFor="tds">Income Tax Deducted at Source (TDS):</label>
    <input type="number" id="tds" value={tds
    } onChange={(e)=>{setTDS(e.target.value)}}  name="tds"/><br/>

    <h4>Income from House Property:</h4>
    <label htmlFor="gross-annual-rent">Gross Annual Rent Received:</label>
    <input type="number" value={grossAnnualRent} onChange={(e)=>{setGrossAnnualRent(e.target.value)}}  id="gross-annual-rent" name="gross-annual-rent"/><br/>

    <label htmlFor="municipal-taxes">Municipal Taxes Paid:</label>
    <input type="number" value={municipalTaxes} onChange={(e)=>{setMunicipalTaxes(e.target.value)}}  id="municipal-taxes" name="municipal-taxes"/><br/>

    <label htmlFor="standard-deduction">Standard Deduction</label>
    <input type="number" id="standard-deduction" value={standardDeduction} onChange={(e)=>{setStandardDeduction(e.target.value)}}  name="municipal-taxes"/><br/>

    <label htmlFor="homeloan-deduction">INtrest paid on homeloan Deduction</label>
    <input type="number" id="homeloan-deduction" value={interestOnHomeLoanDeduction} onChange={(e)=>{setInterestOnHomeLoanDeduction(e.target.value)}}  name="municipal-taxes"/><br/>

    <h4>Capital grains:</h4>
    <label htmlFor="short-term">Short-term capital grains:</label>
    <input type="number" id="short-term" value={shortTermCapitalGains} onChange={(e)=>{setShortTermCapitalGains(e.target.value)}}  name="gross-annual-rent"/><br/>

    <label htmlFor="long-term">Long-term capital grains:</label>
    <input type="number" id="long-term" value={longTermCapitalGains} onChange={(e)=>{setLongTermCapitalGains(e.target.value)}}  name="municipal-taxes"/><br/>

    <h4>Other Income:</h4>
    <label htmlFor="intrest-income">Intrest Income:</label>
    <input type="number" id="intrest-income" value={interestIncome} onChange={(e)=>{setInterestIncome(e.target.value)}}  name="gross-annual-rent"/><br/>

    <label htmlFor="divident-income">Divident income-rental income:</label>
    <input type="number" value={dividendIncome} id="divident-income" onChange={(e)=>{setDividendIncome(e.target.value)}}  name="municipal-taxes"/><br/>

    <label htmlFor="income-business">Income from business/profession:</label>
    <input type="number" value={incomeFromBusiness} id="income-business" onChange={(e)=>{setIncomeFromBusiness(e.target.value)}}  name="gross-annual-rent"/><br/>

    <label htmlFor="agri-income">Agriculture income:</label>
    <input type="number" value={agriculturalIncome} id="agri-income" onChange={(e)=>{setAgriculturalIncome(e.target.value)}}  name="municipal-taxes"/><br/>

    <label htmlFor="other-misc-income">Other Miscellaneous income:</label>
    <input type="number" value={miscellaneousIncome} onChange={(e)=>{setMiscellaneousIncome(e.target.value)}}  id="other-misc-income" name="municipal-taxes"/><br/>
    
    </fieldset>
    <fieldset>  <legend>deduction and exception</legend><fieldset>
    <legend>section 80c deductions</legend>
    
    <label htmlFor="lip">Life insurance premium:</label>
    <input type="number" id="lip" value={lifeInsurancePremium} onChange={(e)=>{setLifeInsurancePremium(e.target.value)}}  name="basic-salary"/><br/>

    <label htmlFor="ppf">Public provident fund (ppf):</label>
    <input type="number" id="ppf" value={ppf} onChange={(e)=>{setPPF(e.target.value)}}  name="hra"/><br/>

    <label htmlFor="epf">Employee provident fund:</label>
    <input type="number" id="epf" value={epf} onChange={(e)=>{setEPF(e.target.value)}}  name="special-allowance"/><br/>

    <label htmlFor="national-certificate">National savings certificate:</label>
    <input type="number" id="national-certificate" value={nsc} onChange={(e)=>{setNSC(e.target.value)}}  name="transport-allowance"/><br/>

    <label htmlFor="tax-saving">Tax saving fixed deposites:</label>
    <input type="number" id="tax-saving" value={taxSavingFD} onChange={(e)=>{setTaxSavingFD(e.target.value)}}  name="other-allowances"/><br/>

    <label htmlFor="elss">ELSS (LLSS):</label>
    <input type="number" id="elss" value={elss} onChange={(e)=>{setELSS(e.target.value)}}  name="lta"/><br/>

    <label htmlFor="principal-repayment">Principal repayment on home loans:</label>
    <input type="number" value={principalRepayment} id="principal-repayment" onChange={(e)=>{setPrincipalRepayment(e.target.value)}}  name="reimbursements"/><br/>

    <label htmlFor="children-fee"> Children's tution fees:</label>
    <input type="number" id="children-fee" value={childrensTuitionFees} onChange={(e)=>{setChildrensTuitionFees(e.target.value)}}  name="employer-pf-contribution"/><br/>

    </fieldset>

   
    <label htmlFor="80D">Section 80D deductions:</label>
    <input type="number" id="80D" value={medicalInsurancePremium} onChange={(e)=>{setMedicalInsurancePremium(e.target.value)}}  name="gross-annual-rent"/><br/>

     

    
    <label htmlFor="80E">Section 80E deductions:</label>
    <input type="number" id="80E" value={interestOnEducationLoan} onChange={(e)=>{setInterestOnEducationLoan(e.target.value)}}  name="gross-annual-rent"/><br/>

    

    
    <label htmlFor="80G">Section 80G deductions:</label>
    <input type="number" id="80G" value={donations} onChange={(e)=>{setDonations(e.target.value)}}  name="gross-annual-rent"/><br/>
    
    <label htmlFor="80TTA">Section 80TTA deductions:</label>
    <input type="number" id="80TTA" value={interestOnSavingsAccount} onChange={(e)=>{setInterestOnSavingsAccount(e.target.value)}}  name="gross-annual-rent"/><br/>
    
    <label htmlFor="80U">Section 80U deductions:</label>
    <input type="number" id="80U" value={disabilityDeduction} onChange={(e)=>{setDisabilityDeduction(e.target.value)}}  name="gross-annual-rent"/><br/>
    
    <label htmlFor="24">Section 24 deductions:</label>
    <input type="number" id="24" value={interestOnHomeLoan} onChange={(e)=>{setInterestOnHomeLoan(e.target.value)}}  name="gross-annual-rent"/><br/>
    
    <label htmlFor="other-ded">OTHER DEDUCTIONS:</label>
    <input type="number" id="other-ded" value={otherDeductions} onChange={(e)=>{setOtherDeductions(e.target.value)}}  name="gross-annual-rent"/><br/>
    </fieldset>
    <button className='btn btn-primary' type='submit'>save</button>
    </fieldset>
   
    </form>
    </div>
)
  }
export default UserInput

 