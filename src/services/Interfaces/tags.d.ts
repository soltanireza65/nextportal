import { string } from "prop-types";

namespace ITags {
  interface ITagsDTO {
    id?: string;
    title?: string;
    label?: string;
    createdDateTim?: string;
    summary?: ISummery[];
  }
  interface ISummery {
    moduleType: number;
    totalCount: number;

    lastUsageDateTime: string;
  }
  interface ITagsParams {
    label?: string;
    title?: string;
    moduleType?: number;
    orderByFieldName?: string;
    orderByDescending?: boolean;
    fromDateTime?: dateTime;
    tillDateTime?: dateTime;
    count?: number;
    page?: number;
    totalPage?: number;
  }
}
