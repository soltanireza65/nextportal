namespace IPolling {
  interface IVote {
    id?: string;
    persianCreatedDateTime?: string;
    createdDateTime?: string;
    categoryId?: string;
    agreeCount: number;
    disAgreeCount: number;
    totalCount: number;
  }
  interface IBody {
    categoryId: string;
    categoryTitle?: string;
    agree?: boolean;
    isNeedAuth?: boolean;
  }
}
