import React from "react"
import { useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { VotePolling } from "reduxStore/pollingSlice"
import styles from "./PollingItem.module.scss"
import { IPolling } from "interfaces"
import { AppState } from "reduxStore/store"

interface IProps {
  polling: IPolling
}

const PollingItem: React.FC<IProps> = ({ polling }: IProps) => {
  const dispatch = useDispatch()

  const [canVote, setCanVote] = useState<boolean>(
    process.browser ? !Boolean(localStorage.getItem(polling.id)) : false
  )
  const [submiting, setSubmiting] = useState<boolean>(false)

  const [optionIdToVote, setOptionIdToVote] = useState<string>()

  const getTotalVoteCount = () => {
    let total = 0
    polling.options?.forEach((option) => {
      total += option.voteCount
    })

    return total
  }

  const handleVotePolling = async () => {
    setSubmiting(true)
    await dispatch(
      VotePolling({ pollingId: polling.id, optionId: optionIdToVote })
    )
    setSubmiting(false)
    setCanVote(false)
  }

  return polling ? (
    <div className={`${styles.pollingItem} bg-white w-100 p-3 mb-4`}>
      <h5 className={`${styles.pollingTitle}`}>{polling?.title}</h5>
      <div className="text-secondary mt-3">
        تعداد کل رأی ها : {getTotalVoteCount()}
      </div>
      <div className="mt-2">
        {canVote ? (
          <>
            {polling?.options?.map((option: any, index: number) => {
              return (
                <div
                  key={index}
                  onClick={() => setOptionIdToVote(option.id)}
                  className={`${styles.pollingOption} border mb-2 p-2`}
                >
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="exampleRadios"
                      id={option.id}
                      value={option.id}
                      checked={option.id === optionIdToVote}
                    />
                    <label
                      className="form-check-label mr-4"
                      htmlFor={option.id}
                    >
                      {option.title}
                    </label>
                  </div>
                </div>
              )
            })}
            <button
              className="btn btn-sm btn btn-outline-primary w-100 mt-2"
              onClick={() => handleVotePolling()}
              disabled={submiting || !optionIdToVote}
            >
              ثبت رأی
            </button>
          </>
        ) : (
          <div>
            {polling?.options?.map((option) => (
              <div key={option.id} className="border mb-2 p-2">
                <div className="d-flex justify-content-between">
                  <span>{option.title}</span>
                  <span>{option.voteCount} رأی</span>
                </div>
                <div className="progress mt-1">
                  <div
                    className="progress-bar"
                    role="progressbar"
                    style={{
                      width: `${
                        (option.voteCount * 100) / getTotalVoteCount()
                      }%`,
                    }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  ) : null
}

export default PollingItem
