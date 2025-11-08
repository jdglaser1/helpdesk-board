//src/app/components/MyQueueSummary.jsx
'use client'

export default function MyQueueSummary({queue, remove, clear}){


    const queueId = Object.keys(queue)

    if (queueId.length === 0){
        
        return(
            <h1> Queue Empty</h1>
        )
    }
    return(
        <h1> The current queue: ({queueId.length})</h1>
    )

}
