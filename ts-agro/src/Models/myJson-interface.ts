export interface myJson {
  forInfo: {
    RD: { govt: number; private: number; rest: number };
    climate: {};
    crops: {
      vari: number;
      maize: number;
      pulses: number;
      cotton: number;
      rest: number;
    };
    irrigation: { canals: number; groundwater: number; well: number };
    soil: SoilObj;
  };
}

export interface SoilObj {
  redSoil: number;
  redSandy: number;
  clay: number;
  blackCotton: number;
}

export interface CropProduction {

  district:string, farmPer:number, majorCrops:string,rank:number,reason:string

}


