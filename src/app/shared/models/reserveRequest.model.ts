export interface IReserve {
    _id?: string,
    booking_date_start: Date,
    booking_date_end: Date,
    experience_id: string,
    comments: string,
    user_id?: string,
    __v?: number
}

/*
request
{
    "booking_date_start": "2020-10-20",
    "booking_date_end": "2020-10-21",
    "experience_id": "5f63f4dddc60966cb9db85a7",
    "comments": "Ningún Comentario"
}

response
{
    "status": 1,
    "response": {
        "_id": "5f9822a8d1a7c70017dcdb3b",
        "booking_date_start": "2020-10-20T00:00:00.000Z",
        "booking_date_end": "2020-10-21T00:00:00.000Z",
        "experience_id": "5f63f4dddc60966cb9db85a7",
        "comments": "Ningún Comentario",
        "user_id": "5f91ecf9a22d2facb666d7be",
        "__v": 0
    }
}*/