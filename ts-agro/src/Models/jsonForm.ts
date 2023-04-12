export interface myJsonData {
  type: string;
  controlName: string;
  placeholder: string;
  Validations?: {
    required: boolean;
    requiredMessage: string;
    minLength:number;
    maxLength:number;
  };
  dropdown?: [{ name: string; code: string }];
}
