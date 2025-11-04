export interface TextCount {
  limit: number;
  nums: number[];
  texts: string[];
}

export interface TextCountResponse {
  dataSets: TextCount[];
}
