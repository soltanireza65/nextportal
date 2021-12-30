import styled from "styled-components";
import { _defaultVaraibles } from "./variables";
export const CommentListComponentsContainer = styled.div`
  margin-bottom: 50px;
  position: relative;
  .title {
    position: relative;
    top: 71px;
    z-index: 10;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    .logo-inner {
      border-bottom: 1px solid ${_defaultVaraibles.borderColor};
      border-left: 1px solid ${_defaultVaraibles.borderColor};
      transform: rotate(-45deg);
    }
    img {
      width: 40px;
      border: 6px solid ${_defaultVaraibles.whiteColor};
    }
    .title-text {
      font-size: 18px;
      font-weight: 700;
      margin: 20px 0 10px 0;
      color: ${_defaultVaraibles.primaryColor};
    }
  }
  .comments-inner {
    border: 1px solid ${_defaultVaraibles.borderColor};
    border-radius: 15px;
    position: relative;
    padding: 80px 0 20px 0;
  }
`;

export const SendLabelButton = styled.div`
  position: absolute;
  left: 40px;
  top: 134px;
  z-index: 50;
  a {
    font-size: 16px;
    font-weight: 500;
    color: ${_defaultVaraibles.secoundaryColor};
    text-decoration: underline solid ${_defaultVaraibles.secoundaryColor} !important;
  }
`;

export const NewCommentBox = styled.div`
  padding: 20px;
  position: relative;
  margin: 20px 0 30px;

  .write-title {
    position: absolute;
    background-color: ${_defaultVaraibles.whiteColor};
    font-size: 16px;
    font-weight: 500;
    padding: 0 10px;
    color: ${_defaultVaraibles.primaryColor};
  }

  .inner {
    border-radius: 0px;
    position: relative;
    width: 100%;
    .sm-form-control {
      margin: 0;
    }
    .textarea {
      width: 100%;
      border: none;
      border-radius: 15px;
      resize: vertical;
      padding: 15px;
      font-size: 14px;
      background-color: #f2f2f2;
    }
    .write-footer {
      display: flex;
      align-items: center;
      justify-content: space-between;
      background-color: transparent;
      border-radius: 0 0 15px 15px;
      padding: 0 10px;
      .captcha {
        display: flex;
        margin: 15px 0;
        .captcha-image {
          img {
            width: 120px;
            border-radius: 5px;
          }
        }
        .captcha-reload {
          margin: 0 5px;
          .btn-reload {
            height: 45px;
            font-size: 22px;
            background-color: transparent;
            border: none;
            cursor: pointer;
            color: #777;
            &:hover {
              color: ${_defaultVaraibles.primaryColor};
            }
          }
        }
        .captcha-input {
          position: relative;
          .captcha-input {
            width: 170px;
            height: 45px;
            text-align: center;
            font-size: 16px;
            padding-right: 40px;
            border-radius: 5px;
            border: 2px solid ${_defaultVaraibles.borderColor};
            color: ${_defaultVaraibles.primaryColor};
          }
          .icon {
            position: absolute;
            right: 0;
            top: 0;
            height: 45px;
            width: 40px;
            display: flex;
            align-items: center;
            justify-content: center;
            .mdi {
              font-size: 30px;
              color: ${_defaultVaraibles.borderColor};
              position: relative;
              top: 2px;
            }
          }
        }
      }
      .send-btn {
        text-align: left;
        .btn-default {
          .mdi {
            margin-left: 5px;
            font-size: 18px;
            line-height: 0;
            position: relative;
            top: 2px;
          }
        }
      }
    }
  }
  .text-input {
    position: relative !important;

    .sm-form-control {
      margin: 10px 0 !important;

      .myinput {
        border: 1px solid ${_defaultVaraibles.borderColor} !important;
        border-radius: 15px !important;
        padding-right: 50px !important;
        font-size: 14px;
        color: #444;
        width: 100%;
        height: 45px;
        font-size-adjust: 14px;
        font-weight: 500;
        padding: 2px 15px;
        border: 1px solid #e5e5e5;
        border-left: none;
        border-radius: 0 15px 15px 0;
      }

      .icon {
        position: absolute !important;
        right: 0 !important;
        top: 0px !important;
        // border: 1px solid red;
        border-left: none !important;
        border-radius: 0 15px 15px 0 !important;
        width: 45px !important;
        height: 45px !important;
        display: flex !important;
        align-items: center !important;
        justify-content: center !important;

        .mdi {
          font-size: 24px !important;
          color: #a8a8a8 !important;
        }
      }
    }

    .textarea {
      width: 100%;
      border: 1px solid ${_defaultVaraibles.borderColor};
      border-radius: 15px;
      resize: vertical;
      padding: 10px;
      font-size: 14px;
    }
  }

  @media (max-width: 768px) {
    .inner {
      .write-footer {
        flex-direction: column;
        .captcha {
          align-items: center;
          justify-content: center;
          width: 100%;
        }
        .send-btn {
          text-align: center;
          padding: 10px 0;
          width: 100%;
          .btn {
            width: 100%;
          }
        }
      }
    }
  }
  @media (max-width: 395px) {
    .inner {
      .captcha {
        flex-direction: column;
      }
    }
  }
`;

export const ErrorMessage = styled.div`
  position: unset;
  left: 40px;
  top: 134px;
  z-index: 50;
  a {
    font-size: 16px;
    font-weight: 500;
    color: ${_defaultVaraibles.secoundaryColor};
  }
`;

export const CaptchaCompnent = styled.div`
  display: flex;
  margin: 15px 0;
  .captcha-image {
    img {
      width: 120px;
      border-radius: 5px;
    }
  }
  .captcha-reload {
    margin: 0 5px;
    .btn-reload {
      height: 45px;
      font-size: 22px;
      background-color: transparent;
      border: none;
      cursor: pointer;
      color: #444;
      &:hover {
        color: ${_defaultVaraibles.primaryColor};
      }
    }
  }
  .captcha-input {
    position: relative;
    .captcha-input {
      width: 170px;
      height: 45px;
      text-align: center;
      font-size: 16px;
      padding-right: 40px;
      border-radius: 5px;
      border: 2px solid ${_defaultVaraibles.primaryColor};
      color: ${_defaultVaraibles.primaryColor};
    }
    .icon {
      position: absolute;
      right: 0;
      top: 0;
      height: 45px;
      width: 40px;
      display: flex;
      align-items: center;
      justify-content: center;
      .mdi {
        font-size: 30px;
        color: ${_defaultVaraibles.primaryColor};
      }
    }
  }
`;

// New Comment item design

export const CommentItem = styled.div`
  padding: 20px;
  position: relative;
  border-right: 2px solid ${_defaultVaraibles.borderColor};
  margin: 20px 20px 0 0;
  &::before {
    content: "";
    position: absolute;
    top: 32px;
    right: -16px;
    width: 30px;
    height: 30px;
    border-radius: 50%;
    background-color: ${_defaultVaraibles.backgrounColor};
  }
  &::after {
    content: "";
    position: absolute;
    top: 37px;
    right: -11px;
    width: 20px;
    height: 20px;
    border-radius: 50%;
    background-color: ${_defaultVaraibles.backgrounColor};
    border: 3px solid ${_defaultVaraibles.borderColor};
  }
  .comment-inner {
    display: flex;
    align-items: flex-start;
  }
  .user-comment-user {
    flex: 0 0 50px;
    max-width: 50px;
    img {
      width: 50px;
      border-radius: 50%;
    }
  }
  .user-comment-body {
    flex-grow: 1;
    padding-right: 10px;
    .comment-name {
      display: flex;
      align-items: center;
      justify-content: space-between;
      h5 {
        margin-bottom: 0;
        font-size: 17px;
        color: #333;
      }
      .vote-preview {
        margin-bottom: 0;
        font-size: 14px;
        font-weight: 400;
        color: ${_defaultVaraibles.primaryColor};
        span {
          font-size: 14px;
          font-weight: 500;
          &:first-child {
            margin-left: 5px;
          }
          &.green {
            color: ${_defaultVaraibles.green};
          }
          &.red {
            color: ${_defaultVaraibles.red};
          }
        }
      }
    }
    .comment-date {
      font-size: 13px;
      font-weight: 500;
      color: #777;
      margin-top: 8px;
    }
    .comment-text {
      font-size: 14px;
      font-weight: 400;
      color: #444;
      margin-top: 10px;
      line-height: 25px;
    }
    .comment-button {
      margin-top: 20px;

      .btn-vote {
        background-color: transparent;
        border: 2px solid transparent;
        border-radius: 30px;
        padding: 0 15px 4px 15px;
        font-size: 14px;
        font-weight: 400;
        .mdi {
          position: relative;
          top: 2px;
          margin-left: 5px;
          font-size: 18px;
        }
        &.vote-up {
          border-color: ${_defaultVaraibles.green};
          color: ${_defaultVaraibles.green};
        }
        &.vote-down {
          border-color: ${_defaultVaraibles.red};
          color: ${_defaultVaraibles.red};
        }
        &.reply {
          margin-right: 15px;
          border-color: #555;
          color: #555;
        }

        &:disabled,
        button[disabled] {
          cursor: text !important;
          border: 1px solid #999999 !important;
          background-color: #cccccc !important;
          color: #666666 !important;
        }

        &:hover {
          &.vote-up {
            background-color: ${_defaultVaraibles.green};
            color: ${_defaultVaraibles.thirdColor};
          }
          &.vote-down {
            background-color: ${_defaultVaraibles.red};
            color: ${_defaultVaraibles.thirdColor};
          }
          &.reply {
            background-color: #555;
            color: ${_defaultVaraibles.thirdColor};
          }
        }
      }
    }
  }
  .reply-comment {
    margin: 0;
    margin-top: 20px;
    margin-right: -22px;
    width: 100%;
    .user-comment-content {
      padding-left: 0;
    }
  }
  @media (max-width: 488px) {
    .user-comment-body .comment-button {
      .btn-vote {
        margin-bottom: 10px;
        &.vote-up,
        &.vote-down,
        &.reply {
          padding: 0;
          width: 36px;
          height: 36px;
          span {
            display: none;
          }
          .mdi {
            margin: 0;
          }
        }
      }
    }
  }
`;
