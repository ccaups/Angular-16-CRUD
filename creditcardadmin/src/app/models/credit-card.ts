export interface CreditCard {
    id: string | undefined;
    name: string;
    description: string;
    bankName: string;
    maxCredit: number;
    interestRate: number;
    active: boolean;
    recommendedScore: string;
    annualFee: number;
    termsAndConditions: string;
    createdDate: string;
    updatedDate: string

}
