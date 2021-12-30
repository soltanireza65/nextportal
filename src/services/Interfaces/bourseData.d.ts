namespace IBourseData {
  interface IBaseParams {
    id?: string;
    categoryID?: string;
    categoryTitle?: string;
    createdDateTime?: string;
    persianCreatedDateTime?: string;
  }
  interface IBazarPredication extends IBaseParams {
    currentPrice?: number;
    predictionPercent?: number;
  }
  interface IBubbleParams extends IBaseParams {
    bubbleEdge: number;
    currentBazaar: number;
  }
  interface IRiskParams extends IBaseParams {
    riskIndexNumber: number;
    isDaily?: boolean;
  }
  interface IFilter extends IBaseParams {
    bazaarPredictionId?: string;
    bubbleIndexId?: string;
    riskIndexId?: string;
    isDaily?: boolean;
    tillCreatedDateTime?: Date;
    fromCreatedDateTime?: Date;
    count?: number;
    page?: number;
    totalPage?: string;
  }
}
