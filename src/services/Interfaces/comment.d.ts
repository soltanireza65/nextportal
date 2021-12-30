namespace CommentAPIInterface {
  interface IBody {
    contentId?: string;
    moduleType?: number;
    content?: string;
    fullName?: string;
    email?: string;
    showEmail?: boolean;
    captchaText?: string;
    captchaToken?: string;
    captchaUserInputText?: string;
    parentId?: string;
    id?: string;
    isLogged?: boolean;
  }
  interface IFilterBody {
    Count?: number;
    Page?: number;
    TotalPage?: number;
    Id?: string;
    ModuleType?: number;
    ContentId?: string;
    Status?: number;
    UserIp?: string;
    UserId?: string;
    FromCreatedDateTime?: dateTime;
    TillCreatedDateTime?: dateTime;
  }
  interface IComment {
    id: string;
    contentId: string;
    moduleType: number;
    content: string;
    fullName: string;
    email: string;
    showEmail: boolean;
    captchaText: string;
    captchaToken: string;
    captchaUserInputText: string;
    parentId: string;
    createdDateTime: string;
    persianCreatedDateTime: string;
    agreeCount: number;
    disAgreeCount: number;
    childs: IComment[];
    isAdminReply: boolean;
  }
}
